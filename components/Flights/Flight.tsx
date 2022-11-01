import { format, getTime, parseISO } from "date-fns";
import React from "react";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { MdOutlineFlightTakeoff, MdOutlineFlightLand } from "react-icons/md";
import { Itinerary, Segment } from "../../types/Flights";

const Flight = ({ itinerary }: { itinerary: Itinerary }) => {
  return (
    <div className="w-full flex flex-col justify-around p-2">
      {itinerary.segments.map((seg: Segment, idx: number) => {
        return (
          <div key={idx} className={`${idx > 0 ? `border-t` : ``} py-5`}>
            <div className="flex items-center mx-5">
              <div className="flex flex-col items-start">
                <span>{format(parseISO(seg.departure.at), "EEEE")}</span>
                <span className="text-xl font-bold">
                  {format(parseISO(seg.departure.at), "p")}
                </span>
                <span>{seg.departure.iataCode}</span>
              </div>
              <div className="w-24 relative border border-xl border-black border-dashed mx-5">
                <BsCircle className="absolute h-3 w-3 -left-1 -top-[7px] bg-white" />
                <BsCircleFill className="absolute h-3 w-3 -right-1 -top-[7px] text-blue-900" />
              </div>
              <div className="flex flex-col items-start">
                <span>{format(parseISO(seg.arrival.at), "EEEE")}</span>
                <span className="text-xl font-bold">
                  {format(parseISO(seg.arrival.at), "p")}
                </span>
                <span>{seg.arrival.iataCode}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Flight;
