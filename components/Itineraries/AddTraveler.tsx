import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTrip } from "../../redux/features/ItinerarySlice";
import SearchBar from "../constants/SearchBar/SearchBar";

const AddTraveler = ({
  setShowAddTravelerModal,
  tripId,
}: {
  setShowAddTravelerModal: React.Dispatch<React.SetStateAction<boolean>>;
  tripId: string;
}) => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<null | number>(null);
  const addTraveler = () => {
    axios
      .post("/api/addTraveler", {
        id: selectedUser,
        tripId,
      })
      .then((res) => dispatch(setTrip(res.data)))
      .then(() => setShowAddTravelerModal(false));
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center h-full w-full bg-black bg-opacity-25">
        <div className=" w-96 relative bg-white text-center p-5">
          <h3 className="uppercase font-bold">Add Traveler</h3>
          <div className="text-start">
            <SearchBar searching="users" setSelectedUser={setSelectedUser} />
            <button
              className="bg-[#1EC28B] p-2 text-white rounded-full"
              onClick={addTraveler}
            >
              Add Traveler
            </button>
          </div>
          <div className="absolute p-1 rounded-full bg-black top-5 right-5 h-10 w-10 text-white text-center text-xl">
            <button
              className="rounded-full h-full w-full border border-2 border-white"
              onClick={() => setShowAddTravelerModal(false)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTraveler;
