import { format, getTime, parseISO } from "date-fns";
import React from "react";
import { MdOutlineFlightTakeoff, MdOutlineFlightLand } from "react-icons/md";
import { Segment } from "../../types/Flights";

const Flight = ({ itinerary, destination, origin }) => {
  return (
    <div className="w-full flex justify-around p-2">
      {itinerary.segments.map((seg: Segment, idx: number) => {
        return (
          <div key={idx}>
            <div className="flex items-center mx-5">
              <div className="flex flex-col items-center">
                <MdOutlineFlightTakeoff className="text-4xl" />
                <span>{seg.departure.iataCode}</span>
                <span>{format(parseISO(seg.departure.at), "p")}</span>
              </div>
              <div className="h-1 w-24 bg-black mx-5"> </div>
              <div className="flex flex-col items-center">
                <MdOutlineFlightLand className="text-4xl" />
                <span>{seg.arrival.iataCode}</span>
                <span>{format(parseISO(seg.arrival.at), "p")}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Flight;
