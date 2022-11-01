import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import DatePicker from "react-datepicker";
import { setStartDate, setEndDate } from "../../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { differenceInDays } from "date-fns";
import CloseButton from "../CloseButton";
import { setTrips } from "../../../redux/features/ItinerarySlice";

const TripModal = ({
  setOpenTripModal,
}: {
  setOpenTripModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const user = useAppSelector((state) => state.user.user);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const dispatch = useDispatch();

  const onChange = (dates: (Date | null)[]) => {
    const [start, end] = dates;

    start && setStartDate(start);
    setEndDate(end);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      user: user!.id,
      airport: "",
    },
    onSubmit: (values) => {
      axios
        .put("/api/addTrip", {
          values,
          duration: differenceInDays(endDate!, startDate),
        })
        .then((res) => dispatch(setTrips(res.data)))
        .then(() => setOpenTripModal(false));
    },
  });
  return (
    <div className="fixed inset-0 flex items-center justify-center h-full w-full bg-black bg-opacity-25">
      <div className="h-96 w-1/2 bg-white text-center p-5 relative">
        <h3 className="uppercase font-bold">Add New Trip</h3>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col h-full justify-around text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Trip Title
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                onChange={formik.handleChange}
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Trip Duration
            </label>
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              className="h-[44px] w-full text-center border"
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Airport
            </label>
            <div className="flex justify-between mt-1">
              <input
                id="airport"
                name="airport"
                type="airport"
                placeholder="Airport"
                onChange={formik.handleChange}
                required
                className="w-40 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <input
                id="time"
                name="time"
                type="time"
                placeholder="At"
                onChange={formik.handleChange}
                required
                className="w-40 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create Trip
            </button>
          </div>
        </form>
        <CloseButton onClick={() => setOpenTripModal(false)} />
      </div>
    </div>
  );
};

export default TripModal;
