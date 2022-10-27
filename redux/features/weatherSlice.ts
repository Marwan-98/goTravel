import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WeatherIcon = {
  text: string;
  icon: string;
};

type WeatherDay = {
  maxtemp_c: number;
  mintemp_c: number;
  condition: WeatherIcon;
};

type ForecastDay = {
  date: Date;
  day: WeatherDay;
};

type Forecast = {
  forecastday: ForecastDay[];
};

type WeatherForecast = {
  forecast: Forecast;
};

interface Weather {
  weather: WeatherForecast | null;
}

const initialState: Weather = {
  weather: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather: (state, action: PayloadAction<any>) => {
      state.weather = action.payload;
    },
  },
});

export const { getWeather } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
