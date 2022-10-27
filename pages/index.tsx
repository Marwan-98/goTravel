import type { NextPage } from "next";
import Layout from "../components/Layout";

import SearchBar from "../components/constants/SearchBar/SearchBar";
import { useAppSelector } from "../redux/hooks";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAttractions } from "../redux/features/citySlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Home: NextPage = () => {
  const city = useAppSelector((state) => state.city.city);
  const cityCode = useAppSelector((state) => state.city.cityCode);
  const attractions = useAppSelector((state) => state.city.attractions);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start!);
    setEndDate(end!);
  };

  const [traveler, setTraveler] = useState(1);
  const dispatch = useDispatch();
  const getAttractions = () => {
    if (cityCode && endDate) {
      axios
        .post(
          "https://travel-advisor.p.rapidapi.com/attractions/v2/list",
          {
            geoId: cityCode,
          },
          {
            headers: {
              "X-RapidAPI-Key":
                "56b9557de5msh43c2654c5ab3bf0p137f1bjsn275bc3e4b597",
              "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
          }
        )
        .then(function (res) {
          const attractions =
            res.data.data.AppPresentation_queryAppListV2[0].sections
              .filter(
                (item) => item.__typename === "AppPresentation_SingleCard"
              )
              .map((item) => item.singleCardContent);
          dispatch(setAttractions(attractions));
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert("please fill all inputs");
    }
  };
  useEffect(() => {
    return () => {
      dispatch(setAttractions([]));
    };
  }, []);
  return (
    <Layout>
      <>
        <div>
          <div className=" flex flex-col justify-between">
            <div className="flex items-center justify-around my-1">
              <div className="flex flex-col w-1/2 mr-5">
                <SearchBar searching="locations" />
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
                  onClick={getAttractions}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        {attractions.length > 0 && (
          <div>
            <h2 className="uppercase font-bold text-2xl">{city}</h2>
            <div className="flex flex-wrap">
              {attractions.map((attraction) => (
                <div
                  className="mx-5 h-72 w-72 border border-gray-100 my-5 relative flex flex-col"
                  key={attraction.trackingKey}
                >
                  <div
                    className="h-2/3 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${attraction.cardPhoto?.sizes.urlTemplate
                        .replace(new RegExp("{width}"), "400")
                        .replace(new RegExp("{height}"), "400")}')`,
                    }}
                  ></div>
                  <div className="flex flex-col justify-around items-start flex-1">
                    <h2 className="truncate font-bold w-full">
                      {attraction.cardTitle.string}
                    </h2>
                    <h4>
                      <span>{attraction.primaryInfo.text}</span>
                    </h4>
                    <Link
                      href={`/attraction/${attraction.cardLink.route.typedParams.contentId}?startDate=${startDate}&endDate=${endDate}`}
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
        )}
      </>
    </Layout>
  );
};

export default Home;
