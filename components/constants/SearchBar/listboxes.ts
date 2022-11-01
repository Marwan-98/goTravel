import axios from "axios";
import { FlightLocation } from "../../../types/FlightLocation";
import { LocationResult } from "../../../types/LocationResult";
import { User } from "../../../types/User";
import { amadeus } from "../../../utils/amadeusClient";

export const flightsListbox = {
  data: async (query: string) => {
    const locations: string[][] = [];
    return (
      query.length < 10 &&
      amadeus.referenceData.locations
        .get({
          keyword: query,
          subType: "CITY",
        })
        .then((res: FlightLocation) => {
          res.data.map((loc) =>
            locations.push([
              `${loc.address.cityName}, ${
                loc.address.stateCode ? `${loc.address.stateCode}, ` : ""
              }${loc.address.countryName}, ${loc.iataCode}`,
              loc.address.cityCode,
            ])
          );
          return locations;
        })
    );
  },
};

export const locationsListbox = {
  data: async (query: string) => {
    return axios
      .request({
        method: "GET",
        url: "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete",
        params: { query: query, lang: "en_US", units: "km" },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDKEY,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      })
      .then((response) => {
        const attractions = response.data.data.Typeahead_autocomplete.results
          .filter((item: LocationResult) => {
            if (
              item.__typename === "Typeahead_LocationItem" &&
              item.detailsV2?.placeType.match(/^(CITY|REGION|PROVINCE)$/)
            ) {
              return true;
            }
          })
          .map((item: LocationResult) => [
            `${item.detailsV2?.names.name}, ${item.detailsV2?.names.longOnlyHierarchyTypeaheadV2}`,
            item.detailsV2?.locationId,
          ]);
        return attractions;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export const usersListbox = {
  data: async (query: string) => {
    return axios
      .get("/api/getUsers", {
        headers: {
          email: query,
        },
      })
      .then((res) => {
        const users = res.data.map((user: User) => [user.email, user.id]);
        return users;
      });
  },
};
