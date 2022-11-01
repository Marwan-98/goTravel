import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InnerLayout from "../components/InnerLayout";
import TripModal from "../components/constants/Modals/TripModal";
import Layout from "../components/Layout";
import EVENTS from "../config/events";
import { useSockets } from "../context/socket.context";
import { useAppSelector } from "../redux/hooks";

const Itineraries = () => {
  const [openTripModal, setOpenTripModal] = useState(false);
  const trips = useAppSelector((state) => state.itinerary.trips);
  const dispatch = useDispatch();
  const { socket, roomId, rooms } = useSockets();

  return (
    <Layout>
      <InnerLayout>
        <div className="bg-[#F5FAF8] h-full p-10 rounded-2xl col-span-4">
          <div className="flex">
            <h2 className="text-3xl uppercase font-bold my-2 grow">
              Your Trips
            </h2>
            <button
              className="bg-[#1EC28B] text-white p-2 rounded-2xl"
              onClick={() => setOpenTripModal(true)}
            >
              Add New Trip
            </button>
          </div>
          <div className="mt-2 p-2">
            {trips.map((trip) => (
              <div
                className="flex items-center justify-between mt-2 h-16 w-full p-2 bg-white rounded-2xl shadow"
                key={trip.id}
              >
                <h3 className="text-xl uppercase">{trip.name}</h3>
                <div>
                  <Link href={`itinerary/${trip.id}`}>
                    <button className="bg-[#1EC28B] text-white p-2 rounded-2xl">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {openTripModal && <TripModal setOpenTripModal={setOpenTripModal} />}
        </div>
      </InnerLayout>
    </Layout>
  );
};

export default Itineraries;
