import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Hotels } from "../../types/Hotels";
import { Hotel } from "../../types/types";

type searchResults = {
  hotels: Hotels | null;
  hotel: Hotel | null;
};

const initialState: searchResults = {
  hotels: null,
  hotel: null,
};

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<Hotels | null>) => {
      state.hotels = action.payload;
    },
    setHotel: (state, action: PayloadAction<Hotel | null>) => {
      state.hotel = action.payload;
    },
  },
});

export const { setHotels, setHotel } = hotelsSlice.actions;
export const hotelsReducer = hotelsSlice.reducer;
