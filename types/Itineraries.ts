import { User } from "./User";

export interface Trip {
  id: number;
  name: string;
  user: User[];
  days: TripDay[];
  hotel: TripHotel[];
  restaurant: TripRestaurant[];
  attraction: TripAttraction[];
}

export type TripHotel = {
  id: number;
  name: string;
  location: string;
  url: string;
  imageUrl: string | null;
  tripId: number;
};

export type TripRestaurant = {
  id: number;
  name: string;
  location: string;
  url: string;
  imageUrl: string | null;
  tripId: number;
};

export type TripAttraction = {
  id: number;
  name: string;
  location: string;
  url: string;
  imageUrl: string | null;
  tripId: number;
};

export type TripDay = {
  id: number;
  dayNumber: string;
  events: TripEvent[];
};

export type TripEvent = {
  id: number;
  dayId: number;
  content: string;
  target: string;
  time: string;
};
