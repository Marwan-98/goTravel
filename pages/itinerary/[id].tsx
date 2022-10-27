import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { setTrip, setTrips } from "../../redux/features/ItinerarySlice";
import { useAppSelector } from "../../redux/hooks";

import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import DayEvents from "../../components/Itineraries/DayEvents";
import { AiOutlinePlus } from "react-icons/ai";
import EventModal from "../../components/Itineraries/EventModal";

const Itinerary = () => {
  const trip = useAppSelector((state) => state.itinerary.trip);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);

  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    if (router.isReady)
      axios
        .get("/api/getTrip", {
          headers: {
            id,
          },
        })
        .then((res) => dispatch(setTrip(res.data)))
        .catch((err) => console.log(err));
  }, [router.isReady]);
  return (
    <Layout>
      <>
        <div>
          <h2 className="text-3xl uppercase font-bold my-2">{trip?.name}</h2>
          <div>
            <h3 className="text-2xl font-bold my-6">Days</h3>
            <ul>
              {trip?.days.map((day) => (
                <li
                  className={`${
                    day.id === selectedDay ? "h-auto" : "h-20"
                  } overflow-hidden p-6`}
                  key={day.id}
                >
                  <div className="flex items-center justify-between text-xl">
                    <span
                      className="flex items-center bg-grow cursor-pointer"
                      onClick={() => setSelectedDay(day.id)}
                    >
                      {day.id === selectedDay ? (
                        <RiArrowDropDownLine className="text-3xl" />
                      ) : (
                        <RiArrowDropRightLine className="text-3xl" />
                      )}
                      {day.dayNumber}
                    </span>
                    <button
                      className="flex items-center w-32 justify-around border border-dashed border-gray-300 p-1 text-base"
                      onClick={() => {
                        setShowEventModal(true);
                        setSelectedDay(day.id);
                      }}
                    >
                      <AiOutlinePlus />
                      Add Event
                    </button>
                  </div>
                  <div className="mt-7 pl-12">
                    <DayEvents events={day.events} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold my-6">Saved Hotels</h3>
            <ul>
              {trip?.hotel.map((hotel) => (
                <li
                  key={hotel.id}
                  className="h-52 w-96 p-5 flex flex-col border border-gray-300 justify-around items-start"
                >
                  <h4 className="font-bold">{hotel.name}</h4>
                  <span>{hotel.location}</span>
                  <Link href={hotel.url}>
                    <button className="bg-blue-900 text-white p-2 self-end">
                      See Details
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold my-6">Saved Restaurants</h3>
            <ul>
              {trip?.restaurant.map((restaurant) => (
                <li key={restaurant.id}>{restaurant.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold my-6">Saved Attractions</h3>
            <ul>
              {trip?.attraction.map((attraction) => (
                <li key={attraction.id}>{attraction.name}</li>
              ))}
            </ul>
          </div>
        </div>
        {showEventModal && (
          <EventModal
            setShowEventModal={setShowEventModal}
            hotels={trip?.hotel}
            restaurants={trip?.restaurant}
            attractions={trip?.attraction}
            selectedDay={selectedDay}
          />
        )}
      </>
    </Layout>
  );
};

export default Itinerary;
