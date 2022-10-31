import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HotelResult } from "../../types/HotelResult";
import { Hotel } from "../../types/Hotels";

type searchResults = {
  hotels: Hotel[] | null;
  hotel: HotelResult | null;
};

const initialState: searchResults = {
  hotels: null,
  hotel: null,
};

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<Hotel[] | null>) => {
      state.hotels = action.payload;
    },
    setHotel: (state, action: PayloadAction<HotelResult | null>) => {
      state.hotel = action.payload;
    },
  },
});

export const { setHotels, setHotel } = hotelsSlice.actions;
export const hotelsReducer = hotelsSlice.reducer;
