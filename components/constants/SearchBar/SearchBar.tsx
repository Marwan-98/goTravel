import React from "react";
import { styles } from "./styles";
import {
  setDestination,
  setOrigin,
} from "../../../redux/features/flightsSlice";
import { flightsListbox, locationsListbox, usersListbox } from "./listboxes";
//@ts-ignore
import Turnstone from "turnstone";
import { useDispatch } from "react-redux";
import { setCity, setCityCode } from "../../../redux/features/citySlice";

const SearchBar = ({
  searching,
  setSelectedUser,
}: {
  searching: string;
  setSelectedUser?: React.Dispatch<React.SetStateAction<null | number>>;
}) => {
  const dispatch = useDispatch();
  switch (searching) {
    case "originFlights":
      return (
        <Turnstone
          placeholder={"Origin City..."}
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
          placeholder={"Destination City..."}
          listbox={flightsListbox}
          styles={styles}
          onSelect={(selected: string) =>
            selected ? dispatch(setDestination(selected[1])) : ""
          }
          debounceWait={2000}
        />
      );
    case "locations":
      return (
        <Turnstone
          placeholder={"Search Destinations..."}
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
    case "users":
      return (
        <Turnstone
          placeholder={"Search Travelers..."}
          listbox={usersListbox}
          styles={styles}
          debounceWait={2000}
          onSelect={(selected: [string, number]) => {
            if (selected && setSelectedUser) {
              setSelectedUser(selected[1]);
            }
          }}
        />
      );
    default:
      return null;
  }
};

export default SearchBar;
