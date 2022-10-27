import axios, { AxiosResponse } from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { setTrips } from "../../redux/features/ItinerarySlice";
import { useAppSelector } from "../../redux/hooks";
import { addToTrip } from "../constants/API/addToTrip";
import CloseButton from "../constants/CloseButton";

const AddToTripModal = ({ setAddToTripModal, id, type, name, address }) => {
  const dispatch = useDispatch();

  console.log(id, type);
  const user = useAppSelector((state) => state.user.user);
  const hotel = useAppSelector((state) => state.hotels.hotel);
  const trips = useAppSelector((state) => state.itinerary.trips);

  const addHotelToTrip = (tripId) => {
    addToTrip(tripId, id, type, name, address, user!)
      .then((res) => {
        dispatch(setTrips(res.data));
        setAddToTripModal(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {
        <div className="fixed inset-0 h-full w-full bg-black bg-opacity-75 flex justify-center items-center">
          <div className="h-5/6 w-1/2 bg-white p-5 relative overflow-scroll">
            <h3 className="text-2xl uppercase font-bold">Add To Trip</h3>
            <ul className="my-5">
              {trips.map((trip) => (
                <li
                  className="flex justify-between items-center border border-gray-300 p-5 text-xl"
                  key={trip.id}
                >
                  {trip.name}
                  <button
                    className="bg-blue-900 text-white p-2"
                    onClick={() => addHotelToTrip(trip.id)}
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
            <CloseButton onClick={() => setAddToTripModal(false)} />
          </div>
        </div>
      }
    </>
  );
};

export default AddToTripModal;
