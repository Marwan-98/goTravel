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

const Flights = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
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

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start!);
    setEndDate(end!);
  };

  const getFlights = () => {
    if (originLocationCode && destinationLocationCode && endDate) {
      amadeus.shopping.flightOffersSearch
        .get({
          originLocationCode,
          destinationLocationCode,
          departureDate: format(startDate!, "yyyy-MM-dd"),
          returnDate: format(endDate!, "yyyy-MM-dd"),
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

  return (
    <Layout>
      <div className="h-auto min-h-screen">
        <div className=" flex flex-col justify-between">
          <div className="flex items-center justify-between my-1">
            <div className="flex flex-col w-1/2 mr-5">
              <SearchBar searching="originFlights" />
              <SearchBar searching="destinationFlights" />
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
          <div className="flex items-center justify-between my-1">
            <div className="w-1/2">
              <select
                className="block px-5 h-11 w-full text-slate-600 border border-gray-300 shadow-sm sm:text-sm appearance-none leading-tight"
                id="grid-state"
                onChange={(e) => setTravelClass(e.target.value)}
              >
                <option value={"ECONOMY"}>Economy</option>
                <option value={"PREMIUM_ECONOMY"}>Premium Economy</option>
                <option value={"BUSINESS"}>Business</option>
                <option value={"FIRST"}>First Class</option>
              </select>
            </div>
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
                {adults} Travellers
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
                onClick={getFlights}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <h2 className="text-3xl uppercase font-bold">Nearest Flights</h2>
        </div>
        <div className="pt-10">
          {flights.map((result) => (
            <div className="border flex justify-between my-3" key={result.id}>
              <div className="flex justify-center items-center grow">
                {result.itineraries.map((itinerary, idx) => {
                  return (
                    <div className="flex flex-col w-full p-2 m-1" key={idx}>
                      <span className="uppercase font-bold">
                        {idx === 0 ? "outbound" : "return"} flight
                      </span>
                      <Flight
                        itinerary={itinerary}
                        destination={destinationLocationCode}
                        origin={originLocationCode}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center p-5 border">
                <button
                  className="bg-blue-900 text-white p-3 uppercase"
                  onClick={() => {
                    dispatch(setFlight(result));
                    setShowFlightModal(true);
                  }}
                >
                  {result.price.grandTotal} {result.price.currency}
                </button>
              </div>
            </div>
          ))}
        </div>
        {showFlightModal && flight && (
          <FlightModal setShowFlightModal={setShowFlightModal} />
        )}
      </div>
    </Layout>
  );
};

export default Flights;
