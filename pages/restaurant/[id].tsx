import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
// import { restaurant } from "../../components/EatOut/test";
import axios from "axios";
import { useRouter } from "next/router";
import { setHotel } from "../../redux/features/hotelsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { setRestaurant } from "../../redux/features/restaurantSlice";
import { Section } from "../../types/RestaurantResult";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import AddToTripModal from "../../components/Hotels/AddToTripModal";

const Restaurant = () => {
  const dispatch = useDispatch();

  const user = useAppSelector((state) => state.user.user);
  const trips = useAppSelector((state) => state.itinerary.trips);
  const restaurant = useAppSelector((state) => state.restaurants.restaurant);

  const router = useRouter();
  const { id, reservationTime, partySize } = router.query;

  const [addToTripModal, setAddToTripModal] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      axios
        .post(
          "https://travel-advisor.p.rapidapi.com/restaurants/v2/get-details",
          {
            contentId: id,
            reservationTime,
            partySize: +partySize!,
          },
          {
            headers: {
              "X-RapidAPI-Key":
                "56b9557de5msh43c2654c5ab3bf0p137f1bjsn275bc3e4b597",
              "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
          }
        )
        .then((res) => dispatch(setRestaurant(res.data)));
    }
  }, [router]);

  useEffect(() => {
    if (router.isReady && user) {
      axios
        .get("/api/checkLiked", {
          headers: {
            id,
            type: "RESTAURANT",
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

  console.log(restaurant);
  return (
    <Layout>
      <div>
        {restaurant &&
          restaurant.data.AppPresentation_queryAppDetailV2[0].sections.map(
            (section: Section, idx: number) => {
              switch (section.__typename) {
                case "AppPresentation_PoiHeroStandard":
                  return (
                    <div className="h-96 w-full bg-black flex" key={idx}>
                      <div
                        className="h-full border border-white sm:w-1/3 md:w-1/3 w-full bg-red-500 bg-cover bg-center"
                        style={{
                          backgroundImage: section.albumPhotos
                            ? `url('${section.albumPhotos[0].data.photoSizeDynamic.urlTemplate
                                .replace(new RegExp("{width}"), "1000")
                                .replace(new RegExp("{height}"), "1000")}')`
                            : `url('../no-photo.png')`,
                        }}
                      ></div>
                      <div className="h-full grow md:w-1/5 w-1/2 border border-white bg-blue-500 flex flex-col hidden sm:block">
                        <div
                          className="h-1/2 w-full border border-white bg-red-500 bg-cover bg-center"
                          style={{
                            backgroundImage: section.albumPhotos
                              ? `url('${section.albumPhotos[1].data.photoSizeDynamic.urlTemplate
                                  .replace(new RegExp("{width}"), "1000")
                                  .replace(new RegExp("{height}"), "1000")}')`
                              : `url('../no-photo.png')`,
                          }}
                        ></div>
                        <div
                          className="h-1/2 w-full border border-white bg-red-500 bg-cover bg-center"
                          style={{
                            backgroundImage: section.albumPhotos
                              ? `url('${section.albumPhotos[2].data.photoSizeDynamic.urlTemplate
                                  .replace(new RegExp("{width}"), "1000")
                                  .replace(new RegExp("{height}"), "1000")}')`
                              : `url('../no-photo.png')`,
                          }}
                        ></div>
                      </div>
                      <div
                        className="h-full border border-white w-1/3 bg-red-500 hidden md:block bg-cover bg-center"
                        style={{
                          backgroundImage: section.albumPhotos
                            ? `url('${section.albumPhotos[3].data.photoSizeDynamic.urlTemplate
                                .replace(new RegExp("{width}"), "1000")
                                .replace(new RegExp("{height}"), "1000")}')`
                            : `url('../no-photo.png')`,
                        }}
                      ></div>
                      <div className="h-full w-1/5 border border-white bg-blue-500 flex flex-col hidden md:block">
                        <div
                          className="h-1/2 w-full border border-white bg-red-500 bg-cover bg-center"
                          style={{
                            backgroundImage: section.albumPhotos
                              ? `url('${section.albumPhotos[4].data.photoSizeDynamic.urlTemplate
                                  .replace(new RegExp("{width}"), "1000")
                                  .replace(new RegExp("{height}"), "1000")}')`
                              : `url('../no-photo.png')`,
                          }}
                        ></div>
                        <div
                          className="h-1/2 w-full border border-white bg-red-500 bg-cover bg-center"
                          style={{
                            backgroundImage: section.albumPhotos
                              ? `url('${section.albumPhotos[5].data.photoSizeDynamic.urlTemplate
                                  .replace(new RegExp("{width}"), "1000")
                                  .replace(new RegExp("{height}"), "1000")}')`
                              : `url('../no-photo.png')`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                case "AppPresentation_PoiOverview":
                  return (
                    <div key={idx}>
                      <div className="flex items-center mt-5">
                        <h2 className="text-2xl uppercase font-bold">
                          {section.name}
                        </h2>
                        <button
                          onClick={() =>
                            liked ? null : setAddToTripModal(true)
                          }
                          className="px-5"
                        >
                          {liked ? (
                            <AiFillHeart className="text-2xl text-red-500" />
                          ) : (
                            <AiOutlineHeart className="text-2xl" />
                          )}
                        </button>
                      </div>
                      <span className="mt-2 text-gray-500">
                        {section.tags?.text}
                      </span>
                    </div>
                  );
                case "AppPresentation_PoiAbout":
                  return (
                    <div className="mt-2" key={idx}>
                      <p className="text-lg">{section.about}</p>
                    </div>
                  );
                case "AppPresentation_PoiLocation":
                  return (
                    <div className="mt-2" key={idx}>
                      <h3 className="text-1xl uppercase font-bold">Location</h3>
                      <p className="mt-2 text-lg">{section.address?.address}</p>
                    </div>
                  );
                case "AppPresentation_StaticMapSection":
                  return (
                    <iframe
                      key={idx}
                      className="w-full lg:w-[600px]"
                      height="450"
                      style={{ border: "0" }}
                      loading="lazy"
                      allowFullScreen
                      src={`https://www.google.com/maps/embed/v1/place?q=${
                        section.anchor!.geoPoint.latitude
                      },+${
                        section.anchor!.geoPoint.longitude
                      }&key=AIzaSyCl3SJGil6I1PFVm-tdautynTV4TYExj6Y`}
                    ></iframe>
                  );
                default:
                  break;
              }
            }
          )}
        {addToTripModal && (
          <AddToTripModal
            setAddToTripModal={setAddToTripModal}
            id={id}
            type="RESTAURANT"
            name={
              restaurant?.data.AppPresentation_queryAppDetailV2[0].sections.filter(
                (section) =>
                  section.__typename === "AppPresentation_PoiOverview"
              )[0].name
            }
            address={
              restaurant?.data.AppPresentation_queryAppDetailV2[0].sections.filter(
                (section) =>
                  section.__typename === "AppPresentation_PoiLocation"
              )[0]?.address?.address || " "
            }
          />
        )}
      </div>
    </Layout>
  );
};

export default Restaurant;
