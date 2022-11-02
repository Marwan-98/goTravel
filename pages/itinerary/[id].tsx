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
import EventModal from "../../components/constants/Modals/EventModal";
import { BsPlusLg } from "react-icons/bs";
import AddTraveler from "../../components/Itineraries/AddTraveler";
import ChatModal from "../../components/constants/Modals/ChatModal";
import { useSockets } from "../../context/socket.context";
import EVENTS from "../../config/events";

const Itinerary = () => {
  const trip = useAppSelector((state) => state.itinerary.trip);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showAddTravelerModal, setShowAddTravelerModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [showChatModal, setShowChatModal] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { socket, roomId } = useSockets();

  const dispatch = useDispatch();

  useEffect(() => {
    if (router.isReady) {
      if (id !== roomId) {
        socket.emit(EVENTS.CLIENT.JOIN_ROOM, id);
      }
      axios
        .get("/api/getTrip", {
          headers: {
            id,
          },
        })
        .then((res) => dispatch(setTrip(res.data)))
        .catch((err) => console.log(err));
    }
  }, [router]);

  return (
    <Layout>
      <>
        <div className="mx-10">
          <h2 className="text-3xl uppercase font-bold my-2">{trip?.name}</h2>
          <div>
            <h3 className="text-2xl font-bold my-6">Members</h3>
            <div className="flex items-center px-5">
              {trip?.user.map((user, idx) => (
                <div className="mx-5" key={idx}>
                  <img
                    className="h-14 w-14 mx-auto rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </div>
              ))}
              <button
                className="mx-5 flex flex-col justify-center items-center cursor-pointer"
                onClick={() => setShowAddTravelerModal(true)}
              >
                <div className="h-16 w-16 rounded-full border border-dashed border-4 flex items-center justify-center">
                  <BsPlusLg />
                </div>
                <span>Add Traveler</span>
              </button>
              {trip?.user.length! > 1 && (
                <div className="grow text-end">
                  <button
                    className="bg-red-500 font-bold text-white p-2 rounded-2xl"
                    onClick={() => setShowChatModal(true)}
                  >
                    Group Chat
                  </button>
                </div>
              )}
            </div>
          </div>
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
            hotels={trip!.hotel}
            restaurants={trip!.restaurant}
            attractions={trip!.attraction}
            selectedDay={selectedDay}
          />
        )}
        {showAddTravelerModal && (
          <AddTraveler
            setShowAddTravelerModal={setShowAddTravelerModal}
            tripId={String(id)}
          />
        )}
        {showChatModal && <ChatModal setShowChatModal={setShowChatModal} />}
      </>
    </Layout>
  );
};

export default Itinerary;
