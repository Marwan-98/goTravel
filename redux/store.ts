import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./features/citySlice";
import { flightsReducer } from "./features/flightsSlice";
import { hotelsReducer } from "./features/hotelsSlice";
import { itineraryReducer } from "./features/ItinerarySlice";
import { restaurantReducer } from "./features/restaurantSlice";
import { userReducer } from "./features/userSlice";
import { weatherReducer } from "./features/weatherSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    city: cityReducer,
    weather: weatherReducer,
    flights: flightsReducer,
    hotels: hotelsReducer,
    restaurants: restaurantReducer,
    itinerary: itineraryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
