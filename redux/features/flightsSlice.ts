import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flight } from "../../types/Flights";

type initialState = {
  origin: string;
  destination: string;
  flights: Flight[];
  flight: Flight | null;
};

const initialState: initialState = {
  origin: "",
  destination: "",
  flights: [],
  flight: null,
};

export const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setFlights: (state, action: PayloadAction<Flight[]>) => {
      state.flights = action.payload;
    },
    setFlight: (state, action: PayloadAction<Flight>) => {
      state.flight = action.payload;
    },
    setOrigin: (state, action: PayloadAction<string>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
  },
});

export const { setFlights, setFlight, setOrigin, setDestination } =
  flightsSlice.actions;

export const flightsReducer = flightsSlice.reducer;
