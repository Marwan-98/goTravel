import React from "react";
import { useAppSelector } from "../../redux/hooks";

const LocationWrapper = ({ children }) => {
  const city = useAppSelector((state) => state.city.city);
  return (
    <div className="flex flex-col items-center justify-center h-auto min-h-screen">
      {(city && children) || (
        <div className="flex flex-col items-center">
          <img src="./no-location.png" width={100} />
          <span>Please Search For a Location</span>
        </div>
      )}
    </div>
  );
};

export default LocationWrapper;
