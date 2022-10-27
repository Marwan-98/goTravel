import React from "react";
import { styles } from "./styles";
import {
  setDestination,
  setOrigin,
} from "../../../redux/features/flightsSlice";
import { flightsListbox, locationsListbox, lodgesListbox } from "./listboxes";
//@ts-ignore
import Turnstone from "turnstone";
import { useDispatch } from "react-redux";
import { setCity, setCityCode } from "../../../redux/features/citySlice";

const SearchBar = ({ searching }: { searching: string }) => {
  const dispatch = useDispatch();
  switch (searching) {
    case "originFlights":
      return (
        <Turnstone
          listbox={flightsListbox}
          styles={styles}
          onSelect={(selected: string) =>
            selected ? dispatch(setOrigin(selected[1])) : ""
          }
          debounceWait={2000}
        />
      );
    case "destinationFlights":
      return (
        <Turnstone
          listbox={flightsListbox}
          styles={styles}
          onSelect={(selected: string) =>
            selected ? dispatch(setDestination(selected[1])) : ""
          }
          debounceWait={2000}
        />
      );
    case "lodges":
      return (
        <Turnstone
          id="autocomplete"
          listbox={lodgesListbox}
          styles={styles}
          typeahead={false}
          onSelect={(selected: string) =>
            selected ? dispatch(setCityCode(+selected[1])) : ""
          }
          debounceWait={2000}
        />
      );
    case "locations":
      return (
        <Turnstone
          listbox={locationsListbox}
          styles={styles}
          debounceWait={2000}
          onSelect={(selected: [string, number]) => {
            if (selected) {
              dispatch(setCityCode(selected[1]));
              dispatch(setCity(selected[0]));
            }
          }}
        />
      );
    case "restaurants":
      return (
        <Turnstone
          listbox={locationsListbox}
          styles={styles}
          debounceWait={2000}
          onSelect={(selected: [string, number]) => {
            if (selected) {
              dispatch(setCityCode(selected[1]));
              dispatch(setCity(selected[0]));
            }
          }}
        />
      );
    default:
      return null;
  }
};

export default SearchBar;
