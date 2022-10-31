import Link from "next/link";
import React, { useState } from "react";
import { Props } from "../../types/types";

const RoomModal = ({ setOpenRoomModal, room }: Props) => {
  return (
    <>
      <div className="fixed inset-0 h-full w-full bg-black bg-opacity-75 flex justify-center items-center">
        <div className="h-5/6 w-1/2 bg-white p-5 relative">
          <h3 className="text-2xl uppercase font-bold">Book Room</h3>
          <table className="w-full">
            <thead className="text-left">
              <tr>
                <th className="p-5">Price</th>
                <th className="p-5">Details</th>
                <th className="p-5">Book</th>
              </tr>
            </thead>
            <tbody>
              {room?.ratePlans?.map((rate, idx) => (
                <tr className="border border-gray w-full" key={idx}>
                  <td className="px-5 py-2">{rate.price.current}</td>
                  <td className="px-5 py-2 border border-l-gray">
                    <div>{rate.cancellation.title}</div>
                    {rate.features.map((feature, idx) => (
                      <div key={idx}>{feature.title}</div>
                    ))}
                  </td>
                  <td className="px-5 py-2 border border-l-gray">
                    {/* <Link href={room.bookingUrl} target={"_blank"}>
                      <button className="bg-blue-600 p-1 m-1 text-white uppercase">
                        Book
                      </button>
                    </Link> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="absolute p-1 rounded-full bg-black top-5 right-5 h-10 w-10 text-white text-center text-xl">
            <button
              className="rounded-full h-full w-full border border-2 border-white"
              onClick={() => setOpenRoomModal(false)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomModal;
