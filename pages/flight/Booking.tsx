import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FlightComponent from "../../components/Flights/Flight";
import Layout from "../../components/Layout";
import { Flight } from "../../types/Flights";
import { amadeus } from "../../utils/amadeusClient";
import DatePicker from "react-datepicker";
import { countries } from "../../components/constants/countries/countries";
import { format, formatISO } from "date-fns";
import { nationalities } from "../../components/constants/countries/nationalities";
import cities from "cities.json";

const Booking = () => {
  const router = useRouter();
  const { flight, destination } = router.query;
  const [flightObject, setFlightObject] = useState<Flight | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [issuanceDate, setIssuanceDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "MALE",
      emailAddress: "",
      countryCallingCode: "",
      number: "",
      birthPlace: "",
      issuanceDate,
      passportNumber: "",
      expiryDate,
      issuanceCountry: "",
      nationality: "",
      holder: true,
    },
    onSubmit: ({
      firstName,
      lastName,
      gender,
      emailAddress,
      countryCallingCode,
      number,
      birthPlace,
      passportNumber,
      issuanceCountry,
      nationality,
      holder,
    }) => {
      amadeus.booking.flightOrders
        .post(
          JSON.stringify({
            data: {
              type: "flight-order",
              flightOffers: [flightObject],
              travelers: [
                {
                  id: "1",
                  dateOfBirth: formatISO(dateOfBirth, {
                    representation: "date",
                  }),
                  name: {
                    firstName,
                    lastName,
                  },
                  gender,
                  contact: {
                    emailAddress,
                    phones: [
                      {
                        deviceType: "MOBILE",
                        countryCallingCode,
                        number,
                      },
                    ],
                  },
                  documents: [
                    {
                      documentType: "PASSPORT",
                      birthPlace,
                      issuanceDate: formatISO(issuanceDate, {
                        representation: "date",
                      }),
                      number: passportNumber,
                      expiryDate: formatISO(expiryDate, {
                        representation: "date",
                      }),
                      issuanceCountry: "ES",
                      nationality: "ES",
                      holder,
                    },
                  ],
                },
              ],
            },
          })
        )
        .catch((err) => alert(err.description[0].detail));
    },
  });

  useEffect(() => {
    router.isReady && setFlightObject(JSON.parse(String(flight)));
    // flightObject &&
    //   amadeus.booking.flightOrders.post(
    //     JSON.stringify({
    //       data: {
    //         type: "flight-order",
    //         flightOffers: [flightObject],
    //         travelers: [
    //           {
    //             id: "1",
    //             dateOfBirth: "1982-01-16",
    //             name: {
    //               firstName: "JORGE",
    //               lastName: "GONZALES",
    //             },
    //             gender: "MALE",
    //             contact: {
    //               emailAddress: "jorge.gonzales833@telefonica.es",
    //               phones: [
    //                 {
    //                   deviceType: "MOBILE",
    //                   countryCallingCode: "34",
    //                   number: "480080076",
    //                 },
    //               ],
    //             },
    //             documents: [
    //               {
    //                 documentType: "PASSPORT",
    //                 birthPlace: "Madrid",
    //                 issuanceLocation: "Madrid",
    //                 issuanceDate: "2015-04-14",
    //                 number: "00000000",
    //                 expiryDate: "2025-04-14",
    //                 issuanceCountry: "ES",
    //                 validityCountry: "ES",
    //                 nationality: "ES",
    //                 holder: true,
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     })
    //   );
  }, [router]);

  return (
    <Layout>
      <>
        {flightObject && (
          <div>
            {flightObject.itineraries.map((itinerary, idx) => {
              return (
                <div
                  className="flex flex-col w-1/2 p-2 m-1 justify-start"
                  key={idx}
                >
                  <span className="uppercase font-bold">
                    {idx === 0 ? "outbound" : "return"} flight
                  </span>
                  <FlightComponent
                    key={idx}
                    itinerary={itinerary}
                    destination={destination}
                    origin={origin}
                  />
                </div>
              );
            })}
          </div>
        )}
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-8 divide-y divide-gray-200"
        >
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    required
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    required
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    required
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="mobile-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <div className="mt-1 flex">
                  <input
                    required
                    value={formik.values.countryCallingCode}
                    onChange={formik.handleChange}
                    id="countryCallingCode"
                    name="countryCallingCode"
                    type="text"
                    autoComplete="countryCallingCode"
                    className="block w-12 mr-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                  <input
                    required
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    id="number"
                    name="number"
                    type="text"
                    autoComplete="number"
                    className="block grow rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="date-of-birth"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date Of Birth
                </label>
                <div className="mt-1">
                  <DatePicker
                    required
                    id="dateOfBirth"
                    name="dateOfBirth"
                    selected={dateOfBirth}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    onChange={(date) => {
                      setDateOfBirth(date);
                      formik.handleChange;
                    }}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <div className="mt-1">
                  <fieldset className="block h-10 w-full flex items-center rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                    <div className="space-y-4 sm:flex sm:items-end sm:space-y-0 sm:space-x-10">
                      <div className="flex items-center">
                        <input
                          required
                          id="gender"
                          name="gender"
                          onChange={formik.handleChange}
                          value="MALE"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label className="ml-3 block text-sm font-medium text-gray-700">
                          Male
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          required
                          id="gender"
                          name="gender"
                          onChange={formik.handleChange}
                          value="FEMALE"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label className="ml-3 block text-sm font-medium text-gray-700">
                          Female
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Passport Details
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="birth-place"
                  className="block text-sm font-medium text-gray-700"
                >
                  Birth Place
                </label>
                <div className="mt-1">
                  <select
                    required
                    id="birthPlace"
                    name="birthPlace"
                    autoComplete="birth-place"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">-- Please Select --</option>
                    {countries.map((country) => (
                      <option
                        key={country.countryName}
                        value={country.countryName}
                      >
                        {country.countryName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="nationality"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nationality
                </label>
                <div className="mt-1">
                  <select
                    required
                    id="nationality"
                    name="nationality"
                    autoComplete="issuance-location"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">-- Please Select --</option>

                    {countries.map((country) => (
                      <option
                        key={country.countryCode}
                        value={country.countryCode}
                      >
                        {country.countryName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="passport-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Passport Number
                </label>
                <div className="mt-1">
                  <input
                    required
                    value={formik.values.passportNumber}
                    onChange={formik.handleChange}
                    id="passportNumber"
                    name="passportNumber"
                    type="text"
                    autoComplete="passport number"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="issuance-date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Issuance Date
                </label>
                <div className="mt-1">
                  <DatePicker
                    required
                    id="issuanceDate"
                    name="issuanceDate"
                    selected={issuanceDate}
                    onChange={(date) => setIssuanceDate(date)}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="expiry-date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <div className="mt-1">
                  <DatePicker
                    required
                    id="expiryDate"
                    name="expiryDate"
                    selected={expiryDate}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    onChange={(date) => setExpiryDate(date)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="issuance-location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Issuance Country
                </label>
                <div className="mt-1">
                  <select
                    required
                    id="issuanceCountry"
                    name="issuanceCountry"
                    autoComplete="issuance-location"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">-- Please Select --</option>
                    {countries.map((country) => (
                      <option
                        key={country.countryName}
                        value={country.countryCode}
                      >
                        {country.countryName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </>
    </Layout>
  );
};

export default Booking;
