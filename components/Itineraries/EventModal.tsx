import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTrip } from "../../redux/features/ItinerarySlice";
import * as Yup from "yup";

const EventModal = ({
  setShowEventModal,
  hotels,
  restaurants,
  attractions,
  selectedDay,
}) => {
  const dispatch = useDispatch();

  const [eventType, setEventType] = useState("Eat at");

  const router = useRouter();

  const { id } = router.query;

  const formik = useFormik({
    initialValues: {
      content: "",
      target: "",
      time: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("/api/addEvent", {
          values,
          id,
          selectedDay,
        })
        .then((res) => dispatch(setTrip(res.data)))
        .then(() => setShowEventModal(false));
    },
    validationSchema: Yup.object().shape({
      content: Yup.string().required(),
      target: Yup.string().required(),
      time: Yup.string().required(),
    }),
  });
  return (
    <>
      {
        <div className="fixed inset-0 flex items-center justify-center h-full w-full bg-black bg-opacity-25">
          <div className="h-96 w-96 relative bg-white text-center p-5">
            <h3 className="uppercase font-bold">Create New Event</h3>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col h-full justify-around text-left"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event
                </label>
                <div className="mt-1">
                  <select
                    id="content"
                    name="content"
                    onChange={formik.handleChange}
                    onClick={(e) => setEventType(e.currentTarget.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">--Please Select--</option>
                    <option value={"Eat at"}>Eat Somewhere</option>
                    <option value={"Go to"}>Go Somewhere</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <div className="flex justify-between mt-1">
                  <select
                    id="target"
                    name="target"
                    placeholder="Location"
                    onChange={formik.handleChange}
                    required
                    className="w-40 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">--Please Select--</option>
                    {eventType === "Go to"
                      ? attractions.map((attraction) => (
                          <option value={attraction.name} key={attraction.id}>
                            {attraction.name}
                          </option>
                        ))
                      : restaurants.map((restaurant) => (
                          <option value={restaurant.name} key={restaurant.id}>
                            {restaurant.name}
                          </option>
                        ))}
                  </select>
                  <input
                    id="time"
                    name="time"
                    type="time"
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
                  Create Event
                </button>
              </div>
            </form>
            <div className="absolute p-1 rounded-full bg-black top-5 right-5 h-10 w-10 text-white text-center text-xl">
              <button
                className="rounded-full h-full w-full border border-2 border-white"
                onClick={() => setShowEventModal(false)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default EventModal;
