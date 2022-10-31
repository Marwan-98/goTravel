import axios from "axios";
import { amadeus } from "../../../utils/amadeusClient";
import { hotelQuery } from "../../Flights/test";

export const flightsListbox = {
  data: async (query: string) => {
    const locations = [];
    return (
      query.length < 10 &&
      amadeus.referenceData.locations
        .get({
          keyword: query,
          subType: "CITY",
        })
        .then((res) => {
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

export const lodgesListbox = {
  data: async (query: string) => {
    return axios
      .get(
        "https://hotels-com-provider.p.rapidapi.com/v1/destinations/search",
        {
          params: { query: query, currency: "USD", locale: "en_US" },
          headers: {
            "X-RapidAPI-Key":
              "fedfe1bd6dmsh287dd9e2a9dc3c1p1cc4c5jsn98cb3bea3e96",
            "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
          },
        }
      )
      .then((res) => {
        const locations = res.data.suggestions
          .filter((group) => group.group === "CITY_GROUP")[0]
          .entities.map((entity) => [
            entity.caption.replaceAll(new RegExp(/<(.|\n)*?>/g), ""),
            entity.destinationId,
          ]);
        return locations;
      });
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
          "X-RapidAPI-Key":
            "fedfe1bd6dmsh287dd9e2a9dc3c1p1cc4c5jsn98cb3bea3e96",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      })
      .then((response) => {
        const attractions = response.data.data.Typeahead_autocomplete.results
          .filter((item) => {
            if (
              item.__typename === "Typeahead_LocationItem" &&
              item.detailsV2.placeType.match(/^(CITY|REGION|PROVINCE)$/)
            ) {
              return true;
            }
          })
          .map((item) => [
            `${item.detailsV2.names.name}, ${item.detailsV2.names.longOnlyHierarchyTypeaheadV2}`,
            item.detailsV2.locationId,
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
        const users = res.data.map((user) => [user.email, user.id]);
        return users;
      });
  },
};
