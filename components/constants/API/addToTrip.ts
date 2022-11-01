import axios, { AxiosResponse } from "axios";
import { useAppSelector } from "../../../redux/hooks";
import { Trip } from "../../../types/Itineraries";
import { User } from "../../../types/User";

export const addToTrip = (
  tripId: number,
  id: number,
  type: string,
  name: string,
  address: string,
  user: User
): Promise<AxiosResponse<any, any>> => {
  switch (type) {
    case "HOTEL":
      return axios.post("/api/like", {
        user: user.id,
        type,
        name,
        id,
        location: address,
        url: `/hotel/${id}`,
        tripId,
      });
    case "RESTAURANT":
      return axios.post("/api/like", {
        user: user.id,
        type,
        name: name,
        id,
        location: address,
        url: `/restaurant/${id}`,
        tripId,
      });
    case "ATTRACTION":
      return axios.post("/api/like", {
        user: user.id,
        type,
        name,
        id,
        location: address,
        url: `/attraction/${id}`,
        tripId,
      });
    default:
      return new Promise((resolve, reject) => reject("please add place"));
  }
};
