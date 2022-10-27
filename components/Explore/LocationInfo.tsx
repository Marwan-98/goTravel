import React from "react";
import { useAppSelector } from "../../redux/hooks";

const LocationInfo = () => {
  const city = useAppSelector((state) => state.city.city);
  return (
    <div className="flex flex-col-reverse md:flex-row h-auto min-h-96 justify-between items-center pt-5">
      <div className="w-3/5">
        <div>
          <h1 className="text-3xl font-bold uppercase">{city?.title}</h1>
          <p className="my-5">{city?.summary}</p>
        </div>
      </div>
      <div>
        <img
          src={`${city?.image}`}
          className="h-80 object-cover object-center"
        />
      </div>
    </div>
  );
};

export default LocationInfo;
