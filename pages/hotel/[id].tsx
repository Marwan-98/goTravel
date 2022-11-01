import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import queryString from "query-string";
import Layout from "../../components/Layout";
import RoomModal from "../../components/Hotels/RoomModal";
import axios from "axios";
import { useRouter } from "next/router";
import { Hotel, Image, Room } from "../../types/types";
import { useAppSelector } from "../../redux/hooks";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import AddToTripModal from "../../components/constants/Modals/AddToTripModal";
import { setHotel } from "../../redux/features/hotelsSlice";
import { useDispatch } from "react-redux";
import AddReviewModal from "../../components/constants/Modals/AddReviewModal";
import { Review } from "../../types/Review";

const HotelModal = () => {
  const dispatch = useDispatch();

  const user = useAppSelector((state) => state.user.user);
  const hotel = useAppSelector((state) => state.hotels.hotel);
  const trips = useAppSelector((state) => state.itinerary.trips);

  const [websiteReviews, setWebsiteReviews] = useState<Review[]>([]);
  const router = useRouter();
  const { id, startDate, endDate, adults } = router.query;

  const [selectedImage, setSelectedImage] = useState(0);

  const [addToTripModal, setAddToTripModal] = useState(false);
  const [showWriteReviewModal, setShowWriteReviewModal] = useState(false);
  const [liked, setLiked] = useState(false);

  console.log(hotel);

  useEffect(() => {
    if (router.isReady) {
      axios
        .post(
          "https://travel-advisor.p.rapidapi.com/hotels/v2/get-details",
          {
            contentId: id,
            checkIn: startDate,
            checkOut: endDate,
            rooms: [
              {
                adults: 2,
                childrenAges: [],
              },
            ],
          },
          {
            headers: {
              "X-RapidAPI-Key":
                "fedfe1bd6dmsh287dd9e2a9dc3c1p1cc4c5jsn98cb3bea3e96",
              "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
          }
        )
        .then((res) =>
          dispatch(setHotel(res.data.data.AppPresentation_queryAppDetailV2[0]))
        );
      axios
        .get("/api/getReviews", {
          headers: {
            locationid: id,
          },
        })
        .then((res) => setWebsiteReviews(res.data));
    }
    return () => {
      dispatch(setHotel(null));
    };
  }, [router]);

  useEffect(() => {
    if (router.isReady && user) {
      axios
        .get("/api/checkLiked", {
          headers: {
            id,
            type: "HOTEL",
            user: user.id,
          },
        })
        .then(() => {
          setLiked(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [trips, router]);

  return (
    <Layout>
      <>
        {hotel ? (
          <div className="bg-gray-100 min-h-full">
            <div className="flex bg-white shadow w-full">
              <div className="w-1/2">
                {hotel.sections.map((section) => {
                  if (section.__typename === "AppPresentation_PoiOverview") {
                    return (
                      <div
                        className="p-5 flex flex-col justify-around"
                        key={section.trackingKey}
                      >
                        <div className="flex items-center">
                          <h2 className="text-3xl font-bold">{section.name}</h2>
                          <span
                            className="text-3xl cursor-pointer px-5"
                            onClick={() => setAddToTripModal(true)}
                          >
                            {liked ? (
                              <AiFillHeart className="text-red-600" />
                            ) : (
                              <AiOutlineHeart />
                            )}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Contact</h3>
                          <div className="flex flex-col py-5">
                            {section.contactLinks?.map((link, idx) =>
                              link.link.externalUrl ? (
                                <Link href={link.link.externalUrl} key={idx}>
                                  <span className="my-2 truncate cursour-pointer border-b border-dashed">
                                    {decodeURI(link.link.externalUrl)}
                                  </span>
                                </Link>
                              ) : null
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
                <div className="p-5">
                  <h2 className="text-xl font-bold">Offers</h2>
                  {hotel.sections.map((section) => {
                    if (
                      section.__typename === "AppPresentation_PoiCommerceHotel"
                    ) {
                      return (
                        section.primaryOfferV2 && (
                          <div
                            className="flex items-center"
                            key={section.trackingKey}
                          >
                            <img
                              className="mr-2"
                              src={`https://tripadvisor.com/${section.primaryOfferV2.providerLogoUrl}`}
                              width={100}
                            />
                            <Link
                              href={`https://tripadvisor.com/${section.primaryOfferV2.cta.externalUrl}`}
                              className="text-grey-100 underline cursor-pointer"
                            >
                              {section.primaryOfferV2.displayPrice.string}
                            </Link>
                          </div>
                        )
                      );
                    }
                  })}
                </div>
              </div>
              {hotel.sections.map((section) => {
                if (section.__typename === "AppPresentation_PoiHeroStandard") {
                  return (
                    <div
                      className="flex flex-col p-5 items-center grow"
                      key={section.trackingKey}
                    >
                      {section.albumPhotos ? (
                        <>
                          <div
                            className="bg-blue-300 h-72 w-full m-2 rounded-2xl relative"
                            style={{
                              backgroundImage: `url('${section.albumPhotos[
                                selectedImage
                              ].data.photoSizeDynamic.urlTemplate
                                .replace(new RegExp("{width}"), "1000")
                                .replace(new RegExp("{height}"), "1000")}')`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div
                              className="bg-black h-16 w-16 absolute top-[41%] rounded-2xl left-0"
                              onClick={() =>
                                selectedImage > 0
                                  ? setSelectedImage(selectedImage - 1)
                                  : null
                              }
                            ></div>
                            <div
                              className="bg-black h-16 w-16 absolute top-[41%] rounded-2xl right-0"
                              onClick={() =>
                                selectedImage <
                                hotel.sections[0].albumPhotos!.length - 1
                                  ? setSelectedImage(selectedImage + 1)
                                  : null
                              }
                            ></div>
                          </div>
                          <div className="h-20 w-96 flex overflow-x-scroll m-2">
                            {section.albumPhotos.map((image, idx) => {
                              return (
                                <div
                                  className="h-full w-24 mx-2 shrink-0 rounded-2xl"
                                  key={idx}
                                  style={{
                                    backgroundImage: `url('${image.data.photoSizeDynamic.urlTemplate
                                      .replace(new RegExp("{width}"), "1000")
                                      .replace(
                                        new RegExp("{height}"),
                                        "1000"
                                      )}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  }}
                                  onClick={() => setSelectedImage(idx)}
                                ></div>
                              );
                            })}
                          </div>
                        </>
                      ) : null}
                    </div>
                  );
                }
              })}
            </div>
            <div className="mt-5 p-5 shadow grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="p-5 bg-white mb-5 rounded-2xl shadow">
                  <h2 className="text-3xl font-bold mb-5">About</h2>
                  {hotel.sections.map((section) => {
                    if (section.__typename === "AppPresentation_PoiAbout") {
                      return <p key={section.trackingKey}>{section.about}</p>;
                    }
                  })}
                </div>
                <div className="p-5 bg-white mb-5 rounded-2xl shadow">
                  <h2 className="text-3xl font-bold mb-5">Location</h2>
                  <span>Location Address</span>
                  {hotel.sections.map((section) => {
                    if (
                      section.__typename === "AppPresentation_StaticMapSection"
                    ) {
                      return (
                        <div className="mt-5" key={section.trackingKey}>
                          <iframe
                            className="w-full"
                            height="450"
                            style={{ border: "0" }}
                            loading="lazy"
                            allowFullScreen
                            src={`https://www.google.com/maps/embed/v1/place?q=${section.anchor?.geoPoint.latitude},+${section.anchor?.geoPoint.longitude}&key=AIzaSyCl3SJGil6I1PFVm-tdautynTV4TYExj6Y`}
                          ></iframe>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="p-5 bg-white mb-5 rounded-2xl shadow">
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold mb-5">Reviews</h2>
                    <button
                      className="bg-[#1ec28b] p-3 rounded-2xl text-white uppercase"
                      onClick={() => setShowWriteReviewModal(true)}
                    >
                      Write a review
                    </button>
                  </div>
                  {hotel.sections.map((section) => {
                    if (
                      section.__typename === "AppPresentation_PoiReviewsAndQA"
                    ) {
                      return (
                        <div
                          className="flex flex-col"
                          key={section.trackingKey}
                        >
                          {section.tabs &&
                            section.tabs[0]?.content.map((review, idx) => {
                              if (idx > 0) {
                                return (
                                  <div
                                    className={`my-2 flex flex-col py-2 ${
                                      idx > 1 ? "border-t" : ""
                                    }`}
                                    key={idx}
                                  >
                                    <div className="flex items-center">
                                      <div
                                        className="h-10 w-10 rounded-xl bg-black"
                                        style={{
                                          backgroundImage: `url('${review.userProfile?.avatar.data.photoSizeDynamic.urlTemplate
                                            .replace(
                                              new RegExp("{width}"),
                                              "1000"
                                            )
                                            .replace(
                                              new RegExp("{height}"),
                                              "1000"
                                            )}')`,
                                          backgroundSize: "cover",
                                          backgroundPosition: "center",
                                        }}
                                      ></div>
                                      <div className="mx-5">
                                        <span className="mx-1">
                                          {review.userProfile?.displayName}
                                        </span>
                                        <span>
                                          {review.publishedDate?.string}
                                        </span>
                                        <div className="block">
                                          <div className="stars-outer">
                                            <div
                                              className="stars-inner"
                                              style={{
                                                width: `${
                                                  review.reviewRating
                                                    ? (review.reviewRating /
                                                        5) *
                                                      100
                                                    : 0
                                                }%`,
                                              }}
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className={`mt-5`}>
                                      <span className="text-lg font-bold block">
                                        {review.htmlTitle?.htmlString}
                                      </span>
                                      <span className="block">
                                        {review.htmlText?.htmlString}
                                      </span>
                                    </div>
                                  </div>
                                );
                              }
                            })}
                        </div>
                      );
                    }
                  })}
                  {websiteReviews.map((review, idx) => (
                    <div
                      className={`my-2 flex flex-col py-2 ${
                        idx > 1 ? "border-t" : ""
                      }`}
                      key={idx}
                    >
                      <div className="flex items-center">
                        {/* <div
                                                          className="h-10 w-10 rounded-xl bg-black"
                                                          style={{
                                                            backgroundImage: `url('${review.userProfile?.avatar.data.photoSizeDynamic.urlTemplate
                                                              .replace(
                                                                new RegExp("{width}"),
                                                                "1000"
                                                              )
                                                              .replace(
                                                                new RegExp("{height}"),
                                                                "1000"
                                                              )}')`,
                                                            backgroundSize: "cover",
                                                            backgroundPosition: "center",
                                                          }}
                                                        ></div> */}
                        <div className="mx-5">
                          <span className="mx-1">
                            {review.user.firstName} {review.user.lastName}
                          </span>
                          <span>{review.datePublished}</span>
                          <div className="block">
                            <div className="stars-outer">
                              <div
                                className="stars-inner"
                                style={{
                                  width: `${
                                    review.rating
                                      ? (review.rating / 5) * 100
                                      : 0
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`mt-5`}>
                        <span className="text-lg font-bold block">
                          {review.title}
                        </span>
                        <span className="block">{review.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black  rounded-2xl shadow"></div>
            </div>
            {addToTripModal && (
              <AddToTripModal
                setAddToTripModal={setAddToTripModal}
                id={Number(id)}
                type="HOTEL"
                name={
                  hotel.sections.filter(
                    (section) =>
                      section.__typename === "AppPresentation_PoiOverview"
                  )[0].name || " "
                }
                address={
                  hotel.sections.filter(
                    (section) =>
                      section.__typename === "AppPresentation_PoiLocation"
                  )[0]?.address?.address || " "
                }
              />
            )}
          </div>
        ) : (
          <div></div>
        )}
        {showWriteReviewModal && (
          <AddReviewModal
            setShowWriteReviewModal={setShowWriteReviewModal}
            websiteReviews={websiteReviews}
            setWebsiteReviews={setWebsiteReviews}
          />
        )}
      </>
    </Layout>
  );
};

export default HotelModal;
