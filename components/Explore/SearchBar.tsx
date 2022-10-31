import React from "react";
import { useDispatch } from "react-redux";
// @ts-ignore
import Turnstone from "turnstone";
import { getCity } from "../../redux/features/citySlice";
import { getWeather } from "../../redux/features/weatherSlice";
import { styles } from "../constants/SearchBar/styles";

const SearchBar = () => {
  const dispatch = useDispatch();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8be7cf2951msheff3a283564814ap167a8fjsnd415b34b76b5",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8be7cf2951msheff3a283564814ap167a8fjsnd415b34b76b5",
      "X-RapidAPI-Host": "wiki-briefs.p.rapidapi.com",
    },
  };

  const options3 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8be7cf2951msheff3a283564814ap167a8fjsnd415b34b76b5",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const searchCity = (city) => {
    if (city) {
      fetch(
        `https://wiki-briefs.p.rapidapi.com/search?q=${
          city?.city?.split(",")[0]
        }&topk=3`,
        options2
      )
        .then((response) => response.json())
        .then((response) => dispatch(getCity(response)))
        .catch((err) => console.error(err));

      fetch(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${
          city?.city?.split(",")[0]
        }&days=3`,
        options3
      )
        .then((response) => response.json())
        .then((response) => dispatch(getWeather(response)))
        .catch((err) => console.error(err));

      fetch("https://travel-advisor.p.rapidapi.com/attractions/v2/list", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "8be7cf2951msheff3a283564814ap167a8fjsnd415b34b76b5",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
        body: `{"geoId":${city?.code}}`,
      })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    }
  };

  const listbox = {
    data: async (query: string) => {
      // const res = await fetch(
      //   `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${query}`,
      //   options
      // );
      // const data = await res.json();
      // const cities = data.data.Typeahead_autocomplete.results.filter((item) => {
      //   if (
      //     item.__typename === "Typeahead_LocationItem" &&
      //     /CITY|PROVINCE/.test(item.detailsV2.placeType)
      //   ) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // });
      // const citiesNames = cities.map((city) => {
      //   return {
      //     city: `${city.detailsV2.names.name}, ${city.detailsV2.names.longOnlyHierarchyTypeaheadV2}`,
      //     code: city.detailsV2.locationId,
      //   };
      // });
      return [123];
    },
  };

  return (
    <div className="flex h-20 w-full place-items-center place-content-center">
      <div className="h-11 w-96 mr-5">
        <Turnstone
          id="search"
          name="search"
          autoFocus={true}
          typeahead={true}
          clearButton={true}
          debounceWait={250}
          listboxIsImmutable={true}
          maxItems={6}
          styles={styles}
          listbox={listbox}
          noItemsMessage="We couldn't find any city that matches your search"
          placeholder="Search for any city"
          onSelect={(selectedItem) => searchCity(selectedItem)}
        />
      </div>
      <div className="ml-5">
        <button
          type="button"
          className="inline-flex items-center justify-center w-32 border border-transparent bg-indigo-100 px-4 py-2 text-base font-medium text-indigo-700 uppercase hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
