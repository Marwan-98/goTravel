import axios from "axios";
import { differenceInSeconds } from "date-fns";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFlight } from "../../redux/features/flightsSlice";
import { useAppSelector } from "../../redux/hooks";
import { amadeus } from "../../utils/amadeusClient";
import Flight from "./Flight";

const FlightModal = ({ setShowFlightModal }) => {
  const origin = useAppSelector((state) => state.flights.origin);
  const destination = useAppSelector((state) => state.flights.destination);
  const flight = useAppSelector((state) => state.flights.flight);
  const [checked, setChecked] = useState(false);
  const [response, setResponse] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      !localStorage.getItem("amaduesToken") ||
      differenceInSeconds(
        new Date(),
        Number(localStorage.getItem("expiresIn"))
      ) > 1799
    ) {
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", "RNcJ90P9PgpjjSH3kNo2VEYAcfLr0LKY");
      params.append("client_secret", "LGcSWYas31Tf6RAX");
      axios
        .post("https://test.api.amadeus.com/v1/security/oauth2/token", params, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          localStorage.setItem("amaduesToken", res.data.access_token);
          localStorage.setItem("expiresIn", res.data.expires_in);
          axios
            .post(
              "https://test.api.amadeus.com/v1/shopping/flight-offers/pricing",
              {
                data: {
                  type: "flight-offers-pricing",
                  flightOffers: [flight],
                },
              },
              {
                headers: {
                  Authorization: `Bearer ${res.data.access_token}`,
                },
              }
            )
            .then((res) => {
              res.data.data.flightOffers[0] !== flight
                ? dispatch(setFlight(res.data.data.flightOffers[0]))
                : console.log("same");
              setResponse(res.data.data);
            })
            .then(() => setChecked(true))
            .catch((err) => console.log(err));
        });
    } else {
      console.log(
        differenceInSeconds(
          Number(localStorage.getItem("expiresIn")),
          new Date()
        )
      );
      axios
        .post(
          "https://test.api.amadeus.com/v1/shopping/flight-offers/pricing",
          {
            data: {
              type: "flight-offers-pricing",
              flightOffers: [flight],
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("amaduesToken")}`,
            },
          }
        )
        .then((res) => {
          res.data.data.flightOffers[0] !== flight
            ? dispatch(setFlight(res.data.data.flightOffers[0]))
            : console.log("same");
          setResponse(res.data.data);
        })
        .then(() => setChecked(true));
    }

    // amadeus.shopping.flightOffers.pricing
    //   .post(
    //     JSON.stringify({
    //       data: {
    //         type: "flight-offers-pricing",
    //         flightOffers: [flight],
    //       },
    //     })
    //   )
    //   .then((res) => console.log(res.data));
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center h-full w-full bg-black bg-opacity-25">
      <div className="w-1/2 h-96 overflow-y-scroll bg-white p-5 relative">
        <div>
          {
            !checked ? (
              <span className="font-bold px-5 py-1">
                Checking for any changes
              </span>
            ) : checked && response.warnings ? (
              <span className="font-bold px-5 py-1">
                response.warnings[0].detail
              </span>
            ) : (
              <span className="font-bold px-5 py-1">No Changes</span>
            )
            // <span className="font-bold px-5 py-1">
            //   {response?.warnings[0].detail}
            // </span>
          }
        </div>
        {flight && (
          <div>
            {flight.itineraries.map((itinerary, idx) => {
              return (
                <div
                  className="flex flex-col w-1/2 p-2 m-1 justify-start"
                  key={idx}
                >
                  <span className="uppercase font-bold">
                    {idx === 0 ? "outbound" : "return"} flight
                  </span>
                  <Flight
                    key={idx}
                    itinerary={itinerary}
                    destination={destination}
                    origin={origin}
                  />
                </div>
              );
            })}
            <div>
              <h2 className="uppercase font-bold">Price Details</h2>
              <div>
                <span className="block">subTotal: {flight.price.base}</span>
                <span className="block">Total: {flight.price.total}</span>
                <ul>
                  {flight.price.fees.map((fee, idx) => {
                    if (fee.amount !== "0.00") {
                      return (
                        <li key={idx}>
                          {fee.type}: {fee.amount}
                        </li>
                      );
                    }
                  })}
                </ul>
                Grand Total: {flight.price.grandTotal}
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                href={`/flight/Booking?flight=${JSON.stringify(
                  flight
                )}&destination=${destination}`}
              >
                <button className="bg-blue-900 text-white p-2">
                  Book Flight
                </button>
              </Link>
            </div>
            <div className="absolute p-1 rounded-full bg-black top-5 right-5 h-10 w-10 text-white text-center text-xl">
              <button
                className="rounded-full h-full w-full border border-2 border-white"
                onClick={() => setShowFlightModal(false)}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightModal;
