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
import AddToTripModal from "../../components/Hotels/AddToTripModal";
import { setHotel } from "../../redux/features/hotelsSlice";
import { useDispatch } from "react-redux";

const HotelModal = () => {
  const dispatch = useDispatch();

  const user = useAppSelector((state) => state.user.user);
  const hotel = useAppSelector((state) => state.hotels.hotel);
  const trips = useAppSelector((state) => state.itinerary.trips);
  const router = useRouter();
  const { id, startDate, endDate, adults } = router.query;

  const [selectedImage, setSelectedImage] = useState(0);

  const [openRoomModal, setOpenRoomModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room>();
  const [openImageModal, setOpenImageModal] = useState(false);
  const [modalImages, setModalImages] = useState<Image[]>([]);
  const [imageURL, setImageURL] = useState(0);

  const [addToTripModal, setAddToTripModal] = useState(false);
  const [liked, setLiked] = useState(false);

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
      {hotel ? (
        <div className="bg-gray-100 min-h-full">
          <div className="flex bg-white shadow w-full">
            {hotel.sections.map((section) => {
              if (section.__typename === "AppPresentation_PoiOverview") {
                return (
                  <div className="p-5 flex flex-col w-1/2 justify-around">
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
                        {section.contactLinks?.map((link) =>
                          link.link.externalUrl ? (
                            <Link href={link.link.externalUrl}>
                              <span className="my-2">
                                {decodeURI(link.link.externalUrl)}
                              </span>
                            </Link>
                          ) : null
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Offers</h3>
                    </div>
                  </div>
                );
              }
            })}
            {hotel.sections.map((section) => {
              if (section.__typename === "AppPresentation_PoiHeroStandard") {
                return (
                  <div className="flex flex-col p-5 items-center grow">
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
                    return <p>{section.about}</p>;
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
                      <div className="mt-5">
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
                <h2 className="text-3xl font-bold mb-5">Reviews</h2>
              </div>
            </div>
            <div className="bg-black  rounded-2xl shadow"></div>
          </div>
          {addToTripModal && (
            <AddToTripModal
              setAddToTripModal={setAddToTripModal}
              id={id}
              type="HOTEL"
              name={
                hotel.sections.filter(
                  (section) =>
                    section.__typename === "AppPresentation_PoiOverview"
                )[0].name
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
    </Layout>
  );
};

export default HotelModal;
