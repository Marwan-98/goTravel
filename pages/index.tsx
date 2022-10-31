import type { NextPage } from "next";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

import SearchBar from "../components/constants/SearchBar/SearchBar";
import { useAppSelector } from "../redux/hooks";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAttractions, setCity } from "../redux/features/citySlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Calendar from "../components/constants/Calendar/Calendar";
import InnerLayout from "../components/InnerLayout";

const Home: NextPage = () => {
  const city = useAppSelector((state) => state.city.city);
  const cityCode = useAppSelector((state) => state.city.cityCode);
  const attractions = useAppSelector((state) => state.city.attractions);
  const startDate = useAppSelector((state) => state.user.startDate);
  const endDate = useAppSelector((state) => state.user.endDate);

  const [traveler, setTraveler] = useState(1);
  const dispatch = useDispatch();

  const getAttractions = () => {
    axios
      .post(
        "https://travel-advisor.p.rapidapi.com/attractions/v2/list",
        {
          geoId: cityCode,
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
        const attractions =
          res.data.data.AppPresentation_queryAppListV2[0].sections
            .filter((item) => item.__typename === "AppPresentation_SingleCard")
            .map((item) => item.singleCardContent);
        dispatch(setAttractions(attractions));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    return () => {
      dispatch(setAttractions([]));
      dispatch(setCity(""));
    };
  }, []);

  useEffect(() => {
    city && getAttractions();
  }, [city]);

  return (
    <Layout>
      <InnerLayout>
        {attractions.length < 1 ? (
          <>
            <motion.div
              className="bg-[#F5FAF8] h-full p-10 rounded-2xl col-span-4"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
            >
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-4xl">Hello, John!</h2>
                    <span>Welcome Back and explore the world</span>
                  </div>
                  <div className="basis-80">
                    <SearchBar searching="locations" />
                  </div>
                </div>
                {/* Feeling Section */}
                <div className="flex flex-col w-full items-center xl:flex-row xl:justify-between mt-16">
                  <motion.div
                    className="bg-black relative h-60 w-full cursor-pointer mr-0
                        overflow-hidden 
                        xl:w-60 xl:h-96 xl:mt-2 xl:mr-2 px-2 rounded-3xl drop-shadow-
                        after:absolute after:h-full after:w-full after:bg-black after:-ml-2
                        after:bg-opacity-50"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      backgroundImage: "url('./adventure.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute text-white bottom-5 z-10">
                      <h3 className="text-xl font-bold">Feeling Adventurous</h3>
                      <span>Explore Cairo's Top Adventure Spots</span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-black relative h-60 w-full cursor-pointer mx-0 
                        overflow-hidden
                        xl:w-60 xl:h-96 mt-2 xl:mt-0 xl:mx-2 px-2 rounded-3xl drop-shadow-xl
                        after:absolute after:h-full after:w-full after:bg-black after:-ml-2
                        after:bg-opacity-50"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      backgroundImage: "url('./love.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute text-white bottom-5 z-10">
                      <h3 className="text-xl font-bold">Feeling Romantic</h3>
                      <span>Explore Cairo's Top Romantic Spots</span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-black relative h-60 w-full cursor-pointer ml-0 
                        overflow-hidden
                        xl:w-60 xl:h-96 mt-2 xl:mt-0 xl:ml-2 px-2 rounded-3xl drop-shadow-
                        after:absolute after:h-full after:w-full after:bg-black after:-ml-2
                        after:bg-opacity-50"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      backgroundImage: "url('./fun.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute text-white bottom-5 z-10">
                      <h3 className="text-xl font-bold">Just Having Fun</h3>
                      <span>Explore Cairo's Top Lesiure Spots</span>
                    </div>
                  </motion.div>
                </div>
                {/* Traveler's Choice */}
                <div className="w-full bg-white mt-8 rounded-2xl p-5">
                  <h2 className="text-3xl font-bold">Travelers' Choice</h2>
                  <div className="flex flex-row xl:flex-col overflow-x-scroll xl:overflow-hidden">
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="flex flex-col rounded-2xl xl:flex-row mt-8 justify-center xl:justify-between items-start xl:items-center mx-5 flex-none w-48 xl:w-auto cursor-pointer"
                    >
                      <div className="xl:grow flex flex-col xl:flex-row items-start xl:items-center w-full pb-5 xl:pb-0">
                        <div className="h-40 w-full relative xl:h-24 xl:w-24 bg-black mr-0 xl:mr-10 mb-5 xl:mb-0 rounded-2xl">
                          <span className="absolute xl:hidden top-2 right-2 py-2 px-3 bg-white rounded-2xl font-bold text-[#FF8345]">
                            $150
                          </span>
                        </div>
                        <div className="xl:py-5">
                          <h3 className="text-xl font-bold">Redwood Forest</h3>
                          <div className="mt-2 flex justify-around items-center text-[#73848C]">
                            <span>
                              <GoLocation />
                            </span>
                            <span>California</span>
                            <span className="flex items-center">
                              <AiOutlineStar className="mx-1" />
                              4.9
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#73848C] hidden xl:block">
                        <span className="font-bold text-2xl text-[#2B2945]">
                          $150
                        </span>
                        /day
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="flex flex-col rounded-2xl xl:flex-row mt-8 justify-center xl:justify-between items-start xl:items-center mx-5 flex-none w-48 xl:w-auto cursor-pointer"
                    >
                      <div className="xl:grow flex flex-col xl:flex-row items-start xl:items-center w-full pb-5 xl:pb-0">
                        <div className="h-40 w-full relative xl:h-24 xl:w-24 bg-black mr-0 xl:mr-10 mb-5 xl:mb-0 rounded-2xl">
                          <span className="absolute xl:hidden top-2 right-2 py-2 px-3 bg-white rounded-2xl font-bold text-[#FF8345]">
                            $150
                          </span>
                        </div>
                        <div className="xl:py-5">
                          <h3 className="text-xl font-bold">Redwood Forest</h3>
                          <div className="mt-2 flex justify-around items-center text-[#73848C]">
                            <span>
                              <GoLocation />
                            </span>
                            <span>California</span>
                            <span className="flex items-center">
                              <AiOutlineStar className="mx-1" />
                              4.9
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#73848C] hidden xl:block">
                        <span className="font-bold text-2xl text-[#2B2945]">
                          $150
                        </span>
                        /day
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="flex flex-col rounded-2xl xl:flex-row mt-8 justify-center xl:justify-between items-start xl:items-center mx-5 flex-none w-48 xl:w-auto cursor-pointer"
                    >
                      <div className="xl:grow flex flex-col xl:flex-row items-start xl:items-center w-full pb-5 xl:pb-0">
                        <div className="h-40 w-full relative xl:h-24 xl:w-24 bg-black mr-0 xl:mr-10 mb-5 xl:mb-0 rounded-2xl">
                          <span className="absolute xl:hidden top-2 right-2 py-2 px-3 bg-white rounded-2xl font-bold text-[#FF8345]">
                            $150
                          </span>
                        </div>
                        <div className="xl:py-5">
                          <h3 className="text-xl font-bold">Redwood Forest</h3>
                          <div className="mt-2 flex justify-around items-center text-[#73848C]">
                            <span>
                              <GoLocation />
                            </span>
                            <span>California</span>
                            <span className="flex items-center">
                              <AiOutlineStar className="mx-1" />
                              4.9
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#73848C] hidden xl:block">
                        <span className="font-bold text-2xl text-[#2B2945]">
                          $150
                        </span>
                        /day
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              key={attractions}
              className="bg-[#F5FAF8] h-full p-10 rounded-2xl col-span-4"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
            >
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-4xl">
                      <span className="font-bold text-[#FF8345]">Cairo</span>{" "}
                      Attractions
                    </h2>{" "}
                  </div>
                  <div className="basis-80">
                    <SearchBar searching="locations" />
                  </div>
                </div>
                <div className="mt-10">
                  {attractions.map((attraction) => (
                    <div className="bg-white w-full h-52 my-10 rounded-2xl flex">
                      <div
                        className="bg-black h-full w-1/4 rounded-2xl"
                        style={{
                          backgroundImage: `url('${attraction.cardPhoto?.sizes.urlTemplate
                            .replace(new RegExp("{width}"), "400")
                            .replace(new RegExp("{height}"), "400")}')`,
                        }}
                      ></div>
                      <div className="py-2 px-10 flex flex-col justify-around grow">
                        <h3 className="text-2xl font-bold mb-2">
                          {attraction.cardTitle?.string}
                        </h3>
                        <span>{attraction.primaryInfo?.text}</span>
                        <span>
                          {attraction.bubbleRating?.rating} (
                          {attraction.bubbleRating?.numberReviews?.string}{" "}
                          Reviews)
                        </span>
                        <Link
                          href={`/attraction/${attraction.cardLink.route.typedParams.contentId}?startDate=${startDate}&endDate=${endDate}`}
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

export default Home;
