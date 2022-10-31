import React, { SyntheticEvent, useEffect, useState } from "react";
import Layout from "../components/Layout";
import DatePicker from "react-datepicker";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";
import { amaduesFlights } from "../components/Flights/test";

import Flight from "../components/Flights/Flight";
import { format, isSameDay, parseISO, startOfToday } from "date-fns";
import { useAppSelector } from "../redux/hooks";
import { setFlight, setFlights } from "../redux/features/flightsSlice";
import { useDispatch } from "react-redux";

import SearchBar from "../components/constants/SearchBar/SearchBar";
import { setStartDate, setEndDate } from "../redux/features/userSlice";
import Link from "next/link";
import FlightModal from "../components/Flights/FlightModal";
import axios, { AxiosError, AxiosResponse } from "axios";
import { amadeus } from "../utils/amadeusClient";
import { motion } from "framer-motion";
import InnerLayout from "../components/InnerLayout";

const Flights = () => {
  const startDate = useAppSelector((state) => state.user.startDate);
  const endDate = useAppSelector((state) => state.user.endDate);
  const [travelClass, setTravelClass] = useState("ECONOMY");

  const [adults, setAdults] = useState(1);
  const originLocationCode = useAppSelector((state) => state.flights.origin);
  const destinationLocationCode = useAppSelector(
    (state) => state.flights.destination
  );
  const flight = useAppSelector((state) => state.flights.flight);

  const [showFlightModal, setShowFlightModal] = useState(false);

  const flights = useAppSelector((state) => state.flights.flights);

  const dispatch = useDispatch();

  const getFlights = () => {
    if (originLocationCode && destinationLocationCode && endDate) {
      amadeus.shopping.flightOffersSearch
        .get({
          originLocationCode,
          destinationLocationCode,
          departureDate: startDate,
          returnDate: endDate,
          adults,
          travelClass,
        })
        .then((res: AxiosResponse) => {
          dispatch(setFlights(res.data));
        })
        .catch((err: AxiosError) => {
          console.log(err);
        });
    } else {
      alert("Please fill all inputs");
    }
  };

  useEffect(() => {
    originLocationCode && destinationLocationCode && getFlights;
  }, [originLocationCode, destinationLocationCode]);

  return (
    <Layout>
      <InnerLayout>
        {flights.length < 1 ? (
          <>
            <motion.div
              className="bg-[#F5FAF8] h-full p-10 rounded-2xl col-span-4"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
            >
              <div>
                <div>
                  <h2 className="text-4xl">Wanna Travel?</h2>
                  <span>Just Search For The Nearest Flights</span>
                </div>
                <div className="flex justify-around">
                  <SearchBar searching="originFlights" />
                  <SearchBar searching="destinationFlights" />
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              key={flights}
              className="bg-[#F5FAF8] h-full p-10 rounded-2xl col-span-4"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
            >
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-4xl">
                      <span className="font-bold text-[#FF8345]">Cairo</span>{" "}
                      flights
                    </h2>{" "}
                  </div>
                  <div className="basis-80">
                    <SearchBar searching="locations" />
                  </div>
                </div>
                <div className="mt-10">
                  {flights.map((result) => (
                    <div
                      className="bg-white flex justify-between my-3"
                      key={result.id}
                    >
                      <div className="flex flex-col justify-center items-center grow">
                        {result.itineraries.map((itinerary, idx) => {
                          return (
                            <div
                              className="flex flex-col w-full p-2 m-1"
                              key={idx}
                            >
                              <span className="uppercase font-bold">
                                {idx === 0 ? "outbound" : "return"} flight
                              </span>
                              <Flight itinerary={itinerary} />
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex flex-col items-center justify-around p-5 border">
                        <span className="text-xl font-bold">
                          {result.price.grandTotal} {result.price.currency}
                        </span>
                        <button
                          className="bg-[#1ec28b] text-white p-3 uppercase rounded-2xl"
                          onClick={() => {
                            dispatch(setFlight(result));
                            setShowFlightModal(true);
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
        {showFlightModal && (
          <FlightModal setShowFlightModal={setShowFlightModal} />
        )}
      </InnerLayout>
    </Layout>
  );
};

export default Flights;
