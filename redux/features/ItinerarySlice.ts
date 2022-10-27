import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trip } from "../../types/Itineraries";

type initialState = {
  trips: Trip[];
  trip: Trip | null;
};

const initialState: initialState = {
  trips: [],
  trip: null,
};

const ItinerarySlice = createSlice({
  name: "itinerary",
  initialState,
  reducers: {
    setTrips: (state, action: PayloadAction<Trip[]>) => {
      state.trips = action.payload;
    },
    setTrip: (state, action: PayloadAction<Trip>) => {
      state.trip = action.payload;
    },
  },
});

export const { setTrips, setTrip } = ItinerarySlice.actions;
export const itineraryReducer = ItinerarySlice.reducer;
