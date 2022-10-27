import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AttractionResult } from "../../types/AttractionResult";
import { Attraction } from "../../types/Attractions";

type city = {
  image: string;
  summary: string[];
  title: string;
};

interface initialState {
  city: string;
  cityCode: number;
  attractions: Attraction[];
  attraction: AttractionResult | null;
}

const initialState: initialState = {
  city: "",
  cityCode: 0,
  attractions: [],
  attraction: null,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setCityCode: (state, action: PayloadAction<number>) => {
      state.cityCode = action.payload;
    },
    setAttractions: (state, action: PayloadAction<Attraction[]>) => {
      state.attractions = action.payload;
    },
    setAttraction: (state, action: PayloadAction<AttractionResult | null>) => {
      state.attraction = action.payload;
    },
  },
});

export const { setCity, setCityCode, setAttractions, setAttraction } =
  citySlice.actions;

export const cityReducer = citySlice.reducer;
