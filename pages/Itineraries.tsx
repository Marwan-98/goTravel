import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TripModal from "../components/Itineraries/TripModal";
import Layout from "../components/Layout";
import { useAppSelector } from "../redux/hooks";

const Itineraries = () => {
  const [openTripModal, setOpenTripModal] = useState(false);
  const trips = useAppSelector((state) => state.itinerary.trips);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div>
        <button
          className="bg-blue-900 text-white p-2 w-full"
          onClick={() => setOpenTripModal(true)}
        >
          Add New Trip
        </button>
        <h2 className="text-3xl uppercase font-bold my-2">Your Trips</h2>
        <div className="p-2">
          {trips.map((trip) => (
            <div
              className="flex flex-col justify-around mt-2 h-32 w-full p-2 bg-white border border-gray-300"
              key={trip.id}
            >
              <h3 className="text-xl uppercase">{trip.name}</h3>
              <div>
                <Link href={`itinerary/${trip.id}`}>
                  <button className="bg-blue-900 text-white p-2">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {openTripModal && <TripModal setOpenTripModal={setOpenTripModal} />}
      </div>
    </Layout>
  );
};

export default Itineraries;
