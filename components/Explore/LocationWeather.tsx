import React from "react";
import { useAppSelector } from "../../redux/hooks";
import WeatherDay from "./WeatherDay";

const LocationWeather = () => {
  const weather = useAppSelector((state) => state.weather.weather);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold uppercase my-5">weather forecast</h1>
      <div className="flex justify-around w-full">
        {weather?.forecast.forecastday.map((day, idx) => (
          <WeatherDay
            key={idx}
            date={day.date}
            maxTemp={day.day.maxtemp_c}
            minTemp={day.day.mintemp_c}
            icon={day.day.condition.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationWeather;
