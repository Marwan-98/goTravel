import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RestaurantResult } from "../../types/RestaurantResult";
import { Restaurant } from "../../types/Restaurants";

type searchResults = {
  restaurants: Restaurant[] | null;
  restaurant: RestaurantResult | null;
};

const initialState: searchResults = {
  restaurants: null,
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.restaurants = action.payload;
    },
    setRestaurant: (state, action: PayloadAction<RestaurantResult | null>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurants, setRestaurant } = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;
