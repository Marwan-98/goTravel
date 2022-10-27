import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DatePicker from "react-datepicker";
//@ts-ignore
import Turnstone from "turnstone";
import Link from "next/link";
import { Hotels, Result } from "../types/Hotels";
import { useAppSelector } from "../redux/hooks";
import { setHotel, setHotels } from "../redux/features/hotelsSlice";
import { useDispatch } from "react-redux";
import { styles } from "../components/constants/SearchBar/styles";
import SearchBar from "../components/constants/SearchBar/SearchBar";
import axios from "axios";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { format } from "date-fns";

const Lodges = () => {
  const cityCode = useAppSelector((state) => state.city.cityCode);
  const hotels = useAppSelector((state) => state.hotels.hotels);
  const [open, setOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<Result | null>(null);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [traveler, setTraveler] = useState(1);

  const dispatch = useDispatch();

  const getHotels = () => {
    if (endDate) {
      axios
        .get("https://hotels-com-provider.p.rapidapi.com/v1/hotels/search", {
          params: {
            checkin_date: format(startDate!, "yyyy-MM-dd"),
            checkout_date: format(endDate!, "yyyy-MM-dd"),
            sort_order: "STAR_RATING_HIGHEST_FIRST",
            destination_id: cityCode,
            adults_number: String(traveler),
            locale: "en_US",
            currency: "USD",
          },
          headers: {
            "X-RapidAPI-Key":
              "56b9557de5msh43c2654c5ab3bf0p137f1bjsn275bc3e4b597",
            "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
          },
        })
        .then((res) => dispatch(setHotels(res.data)));
    }
  };

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start!);
    setEndDate(end!);
  };

  useEffect(() => {
    return () => {
      dispatch(setHotels(null));
    };
  }, []);

  return (
    <Layout>
      <div className="h-auto min-h-screen">
        <div className="flex items-center justify-center">
          <div className=" flex flex-col w-full justify-between">
            <div className="flex items-center justify-around my-1">
              <div className="flex flex-col w-1/2 mr-5">
                <SearchBar searching="lodges" />
              </div>
              <div className="h-full w-96">
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  className="h-[44px] w-full text-center border"
                />
              </div>
            </div>
            <div className="flex items-center justify-around my-1">
              <div className="flex items-center w-52 justify-between px-2">
                <button
                  className="flex bg-white border h-6 w-6 justify-center items-center rounded-xl p-0"
                  onClick={() =>
                    traveler === 0
                      ? setTraveler(traveler)
                      : setTraveler(traveler - 1)
                  }
                >
                  <AiOutlineMinus />
                </button>
                <div className="inline-flex items-center justify-center w-32 border border-transparent bg-indigo-100 px-4 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  {traveler} Adults
                </div>
                <button
                  className="flex bg-white border h-6 w-6 justify-center items-center rounded-xl p-0"
                  onClick={() => setTraveler(traveler + 1)}
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-32 border border-transparent bg-indigo-100 px-4 py-2 text-base font-medium text-indigo-700 uppercase hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={getHotels}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {hotels?.searchResults.results.map((hotel) => (
            <div
              className="mx-5 h-72 w-72 border border-gray-100 my-5 relative flex flex-col"
              key={hotel.id}
            >
              <div
                className="h-2/3 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${hotel.optimizedThumbUrls.srpDesktop}')`,
                }}
              ></div>
              <div className="flex flex-col justify-around items-start flex-1">
                <h2 className="truncate font-bold w-full">{hotel.name}</h2>
                <h4>
                  <span
                    className={`${
                      hotel.guestReviews.unformattedRating > 4
                        ? "bg-green-900"
                        : hotel.guestReviews.unformattedRating > 3
                        ? "bg-yellow-400"
                        : "bg-red-600"
                    } text-white px-[4px] rounded text-center`}
                  >
                    {hotel.guestReviews.unformattedRating}
                  </span>{" "}
                  /5
                </h4>
                <Link
                  href={`/hotel/${hotel.id}?startDate=${format(
                    startDate!,
                    "yyyy-MM-dd"
                  )}&endDate=${format(
                    endDate!,
                    "yyyy-MM-dd"
                  )}&adults=${traveler}`}
                >
                  <button
                    className="bg-blue-900 text-white p-1 rounded"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    Starts from {hotel.ratePlan.price.current}
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

export default Lodges;
