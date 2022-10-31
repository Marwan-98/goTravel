import axios from "axios";
import { format, formatISO, parseISO } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { attractionTest } from "../../components/EatOut/test";
import AddToTripModal from "../../components/Hotels/AddToTripModal";
import Layout from "../../components/Layout";
import { setAttraction } from "../../redux/features/citySlice";
import { useAppSelector } from "../../redux/hooks";
import { Section } from "../../types/AttractionResult";

const Attraction = () => {
  const user = useAppSelector((state) => state.user.user);
  const trips = useAppSelector((state) => state.itinerary.trips);
  const attraction = useAppSelector((state) => state.city.attraction);
  const startDate = useAppSelector((state) => state.user.startDate);
  const endDate = useAppSelector((state) => state.user.endDate);

  const [selectedImage, setSelectedImage] = useState(0);

  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const [addToTripModal, setAddToTripModal] = useState(false);
  const [liked, setLiked] = useState(false);

  console.log(attractionTest);
  useEffect(() => {
    if (router.isReady) {
      axios
        .post(
          "https://travel-advisor.p.rapidapi.com/attractions/v2/get-details",
          {
            contentId: id,
            startDate: format(parseISO(startDate), "yyyy-MM-dd"),
            endDate: format(parseISO(endDate), "yyyy-MM-dd"),
            pax: [
              {
                ageBand: "ADULT",
                count: 2,
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
        .then(function (res) {
          const attraction = res.data.data.AppPresentation_queryAppDetailV2[0];
          dispatch(setAttraction(attraction));
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    return () => {
      dispatch(setAttraction(null));
    };
  }, [router]);

  useEffect(() => {
    if (router.isReady && user) {
      axios
        .get("/api/checkLiked", {
          headers: {
            id,
            type: "ATTRACTION",
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

  const images = [
    {
      url: "https://ychef.files.bbci.co.uk/976x549/p07zy3y6.jpg",
    },
    {
      url: "https://www.traveltoegypt.net/front/images/blog/Cairo-City.jpg",
    },
  ];

  return (
    <Layout>
      {attraction ? (
        <div className="bg-gray-100 min-h-full">
          <div className="flex bg-white shadow w-full">
            <div className="p-5 flex flex-col w-1/2 justify-around">
              <div className="flex items-center">
                <h2 className="text-3xl font-bold">
                  {attraction.sections[2]?.name}
                </h2>
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
                  {attraction.sections[2]?.contactLinks?.map((link) =>
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
            </div>
            <div className="flex flex-col p-5 items-center grow">
              {attraction.sections[0].albumPhotos ? (
                <>
                  <div
                    className="bg-blue-300 h-72 w-full m-2 rounded-2xl relative"
                    style={{
                      backgroundImage: `url('${attraction.sections[0].albumPhotos[
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
                        attraction.sections[0].albumPhotos!.length - 1
                          ? setSelectedImage(selectedImage + 1)
                          : null
                      }
                    ></div>
                  </div>
                  <div className="h-20 w-96 flex overflow-x-scroll m-2">
                    {attraction.sections[0].albumPhotos.map((image, idx) => {
                      return (
                        <div
                          className="h-full w-24 mx-2 shrink-0 rounded-2xl"
                          style={{
                            backgroundImage: `url('${image.data.photoSizeDynamic.urlTemplate
                              .replace(new RegExp("{width}"), "1000")
                              .replace(new RegExp("{height}"), "1000")}')`,
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
          </div>
          <div className="mt-5 p-5 shadow grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="p-5 bg-white mb-5 rounded-2xl shadow">
                <h2 className="text-3xl font-bold mb-5">About</h2>
                <p>{attraction.sections[8]?.about}</p>
              </div>
              <div className="p-5 bg-white mb-5 rounded-2xl shadow">
                <h2 className="text-3xl font-bold mb-5">Location</h2>
                <span>Location Address</span>
                <div className="mt-5">
                  <iframe
                    className="w-full"
                    height="450"
                    style={{ border: "0" }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/place?q=${attraction.sections[14]?.anchor?.geoPoint.latitude},+${attraction.sections[14]?.anchor?.geoPoint.longitude}&key=AIzaSyCl3SJGil6I1PFVm-tdautynTV4TYExj6Y`}
                  ></iframe>
                </div>
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
              type="ATTRACTION"
              name={
                attraction?.sections.filter(
                  (section) =>
                    section.__typename === "AppPresentation_PoiOverview"
                )[0].name
              }
              address={
                attraction?.sections.filter(
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

export default Attraction;
