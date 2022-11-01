import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import SearchBar from "../components/constants/SearchBar/SearchBar";
import DatePicker from "react-datepicker";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setRestaurants } from "../redux/features/restaurantSlice";
import { useAppSelector } from "../redux/hooks";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Calendar from "../components/constants/Calendar/Calendar";
import InnerLayout from "../components/InnerLayout";
import { setCity } from "../redux/features/citySlice";
import { Section } from "../types/RestaurantResult";
import { Restaurant } from "../types/Restaurants";

const EatOut = () => {
  const city = useAppSelector((state) => state.city.city);
  const restaurants = useAppSelector((state) => state.restaurants.restaurants);
  const geoId = useAppSelector((state) => state.city.cityCode);

  const startDate = useAppSelector((state) => state.user.startDate);
  const endDate = useAppSelector((state) => state.user.endDate);
  const [adults, setAdults] = useState(1);

  const dispatch = useDispatch();

  const getRestaurants = () => {
    if (geoId) {
      axios
        .post(
          "https://travel-advisor.p.rapidapi.com/restaurants/v2/list",
          {
            geoId,
            partySize: adults,
            reservationTime: startDate,
            sort: "POPULARITY",
            sortOrder: "desc",
          },
          {
            headers: {
              "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDKEY,
              "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
          }
        )
        .then((res) => {
          const restauratnsResult =
            res.data.data.AppPresentation_queryAppListV2[0].sections
              .filter(
                (restaurant: Restaurant) =>
                  restaurant.__typename === "AppPresentation_SingleCard"
              )
              .map((restaurant) => restaurant.singleCardContent);
          dispatch(setRestaurants(restauratnsResult));
        });
    } else {
      alert("Please fill all inputs");
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setCity(""));
    };
  }, []);

  useEffect(() => {
    city && getRestaurants();
  }, [city]);

  return (
    <Layout>
      <InnerLayout>
        {!restaurants ? (
          <>
            <motion.div
              className="bg-[#F5FAF8] h-full p-10 rounded-2xl col-span-4"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
            >
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-4xl">Hungry?</h2>
                    <span>Just Search For Restaurants In Your Area</span>
                  </div>
                  <div className="basis-80">
                    <SearchBar searching="restaurants" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              className="bg-[#F5FAF8] h-full p-10 rounded-2xl col-span-4"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
            >
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-4xl">
                      <span className="font-bold text-[#FF8345]">{city}</span>{" "}
                      Restaurants
                    </h2>{" "}
                  </div>
                  <div className="basis-80">
                    <SearchBar searching="locations" />
                  </div>
                </div>
                <div className="mt-10">
                  {restaurants.map((restaurant) => (
                    <div
                      className="bg-white w-full h-52 my-10 rounded-2xl flex"
                      key={restaurant.trackingKey}
                    >
                      <div
                        className="bg-black h-full w-1/4 rounded-2xl"
                        style={{
                          backgroundImage: `url('${restaurant.cardPhoto?.sizes.urlTemplate
                            .replace(new RegExp("{width}"), "400")
                            .replace(new RegExp("{height}"), "400")}')`,
                        }}
                      ></div>
                      <div className="py-2 px-10 flex flex-col justify-around grow">
                        <h3 className="text-2xl font-bold mb-2">
                          {restaurant.cardTitle?.string}
                        </h3>
                        <span>{restaurant.primaryInfo?.text}</span>
                        <span>
                          {restaurant.bubbleRating?.rating} (
                          {restaurant.bubbleRating?.numberReviews?.string}{" "}
                          Reviews)
                        </span>
                        <Link
                          href={`/restaurant/${
                            restaurant.cardLink.route.typedParams.contentId
                          }?reservationTime=${startDate}&partySize=${1}`}
                        >
                          <button className="bg-[#1EC28B] p-3 text-white rounded-2xl w-24 self-end">
                            Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </InnerLayout>
    </Layout>
  );
};

export default EatOut;
