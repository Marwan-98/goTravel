import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { restaurants } from "../components/EatOut/test";
import Link from "next/link";
import SearchBar from "../components/constants/SearchBar/SearchBar";
import DatePicker from "react-datepicker";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setRestaurants } from "../redux/features/restaurantSlice";
import { useAppSelector } from "../redux/hooks";
import { format } from "date-fns";

const EatOut = () => {
  const restaurants = useAppSelector((state) => state.restaurants.restaurants);
  const geoId = useAppSelector((state) => state.city.cityCode);

  const [startDate, setStartDate] = useState<Date | null>(new Date());
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
              "X-RapidAPI-Key":
                "56b9557de5msh43c2654c5ab3bf0p137f1bjsn275bc3e4b597",
              "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
          }
        )
        .then((res) => {
          const restauratnsResult =
            res.data.data.AppPresentation_queryAppListV2[0].sections
              .filter(
                (restaurant) =>
                  restaurant.__typename === "AppPresentation_SingleCard"
              )
              .map((restaurant) => restaurant.singleCardContent);
          dispatch(setRestaurants(restauratnsResult));
        });
    } else {
      alert("Please fill all inputs");
    }
  };

  return (
    <Layout>
      <div>
        <div className="flex items-center justify-center">
          <div className=" flex flex-col w-full justify-between">
            <div className="flex items-center justify-around my-1">
              <div className="flex flex-col w-1/2 mr-5">
                <SearchBar searching="restaurants" />
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeInput
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                className="h-[44px] w-full text-center border"
              />
            </div>
            <div className="flex items-center justify-around my-1">
              <div className="flex items-center w-52 justify-between px-2">
                <button
                  className="flex bg-white border h-6 w-6 justify-center items-center rounded-xl p-0"
                  onClick={() =>
                    adults === 0 ? setAdults(adults) : setAdults(adults - 1)
                  }
                >
                  <AiOutlineMinus />
                </button>
                <div className="inline-flex items-center justify-center w-32 border border-transparent bg-indigo-100 px-4 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  {adults} Adults
                </div>
                <button
                  className="flex bg-white border h-6 w-6 justify-center items-center rounded-xl p-0"
                  onClick={() => setAdults(adults + 1)}
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-32 border border-transparent bg-indigo-100 px-4 py-2 text-base font-medium text-indigo-700 uppercase hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={getRestaurants}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {restaurants &&
            restaurants.map((restaurant) => (
              <div
                className="mx-5 h-72 w-72 border border-gray-100 my-5 relative flex flex-col"
                key={restaurant.trackingKey}
              >
                <div
                  className="h-2/3 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${restaurant.cardPhoto?.sizes.urlTemplate
                      .replace(new RegExp("{width}"), "400")
                      .replace(new RegExp("{height}"), "400")}')`,
                  }}
                ></div>
                <div className="flex flex-col justify-around items-start flex-1">
                  <h2 className="truncate font-bold w-full">
                    {restaurant.cardTitle.string}
                  </h2>
                  <h4>
                    <span>{restaurant.primaryInfo?.text}</span>
                  </h4>
                  <Link
                    href={`/restaurant/${
                      restaurant.cardLink.route.typedParams.contentId
                    }?reservationTime=${format(
                      startDate!,
                      "yyyy-MM-dd'T'HH:mm"
                    )}&partySize=${adults}`}
                  >
                    <button className="bg-blue-900 text-white p-1 rounded">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default EatOut;
