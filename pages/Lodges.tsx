import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DatePicker from "react-datepicker";
//@ts-ignore
import Turnstone from "turnstone";
import Link from "next/link";
import { Hotel } from "../types/Hotels";
import { HotelResult } from "../types/HotelResult";
import { useAppSelector } from "../redux/hooks";
import { setHotel, setHotels } from "../redux/features/hotelsSlice";
import { useDispatch } from "react-redux";
import { styles } from "../components/constants/SearchBar/styles";
import SearchBar from "../components/constants/SearchBar/SearchBar";
import axios from "axios";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { setStartDate, setEndDate } from "../redux/features/userSlice";
import InnerLayout from "../components/InnerLayout";
import { setCity } from "../redux/features/citySlice";
import { Section } from "../types/APIResult";

const Lodges = () => {
  const city = useAppSelector((state) => state.city.city);
  const cityCode = useAppSelector((state) => state.city.cityCode);
  const hotels = useAppSelector((state) => state.hotels.hotels);
  const [open, setOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<HotelResult | null>(null);
  const startDate = useAppSelector((state) => state.user.startDate);
  const endDate = useAppSelector((state) => state.user.endDate);
  const [traveler, setTraveler] = useState(1);

  const dispatch = useDispatch();

  const getHotels = () => {
    if (endDate) {
      axios
        .post(
          "https://travel-advisor.p.rapidapi.com/hotels/v2/list",
          {
            geoId: cityCode,
            checkIn: startDate,
            checkOut: endDate,
            sort: "RATING_HIGH_TO_LOW",
            sortOrder: "desc",
            updateToken: "",
          },
          {
            headers: {
              "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDKEY,
              "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
          }
        )
        .then((res) => {
          const hotelResults =
            res.data.data.AppPresentation_queryAppListV2[0].sections
              .filter(
                (hotel: Section) =>
                  hotel.__typename === "AppPresentation_SingleCard"
              )
              .map((hotel: Section) => hotel.singleCardContent);
          dispatch(setHotels(hotelResults));
        });
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setCity(""));
    };
  }, []);

  useEffect(() => {
    city && getHotels();
  }, [city]);

  return (
    <Layout>
      <InnerLayout>
        {!hotels ? (
          <>
            <motion.div
              className="bg-[#F5FAF8] h-full p-10 rounded-2xl col-span-4"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
            >
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-3xl">Staying somewhere?</h2>
                    <span>Just Search For hotels In Your Area</span>
                  </div>
                  <div className="basis-80">
                    <SearchBar searching="locations" />
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
                      <span className="font-bold text-[#FF8345]">Cairo</span>{" "}
                      hotels
                    </h2>{" "}
                  </div>
                  <div className="basis-80">
                    <SearchBar searching="locations" />
                  </div>
                </div>
                <div className="mt-10">
                  {hotels.map((hotel) => (
                    <div
                      className="bg-white w-full h-52 my-10 rounded-2xl flex"
                      key={hotel.trackingKey}
                    >
                      <div
                        className="bg-black h-full w-1/4 rounded-2xl"
                        style={{
                          backgroundImage: `url('${hotel.cardPhotos[0].sizes.urlTemplate
                            .replace(new RegExp("{width}"), "400")
                            .replace(new RegExp("{height}"), "400")}')`,
                        }}
                      ></div>
                      <div className="py-2 px-10 flex flex-col justify-around grow">
                        <h3 className="text-2xl font-bold mb-2">
                          {hotel.cardTitle?.string}
                        </h3>
                        <span>{hotel.primaryInfo?.text}</span>
                        <span>
                          {hotel.bubbleRating?.rating} (
                          {hotel.bubbleRating?.numberReviews?.string} Reviews)
                        </span>
                        <Link
                          href={`/hotel/${hotel.cardLink.route.typedParams.contentId}?startDate=${startDate}&endDate=${endDate}`}
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

export default Lodges;
