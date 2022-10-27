import React from "react";

const WeatherDay = ({ date, maxTemp, minTemp, icon }) => {
  const day = new Date(date).toLocaleString("en-uk", { weekday: "short" });
  return (
    <div className="h-20 w-20 mx-2 flex flex-col text-3xl justify-around items-center">
      <img src={icon} width={50} />
      <span className="uppercase md:text-sm text-xs">{day}</span>
      <span className="text-xs">
        {Math.round(maxTemp)} C {Math.round(minTemp)} C
      </span>
    </div>
  );
};

export default WeatherDay;
