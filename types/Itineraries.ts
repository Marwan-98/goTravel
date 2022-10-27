export interface Trip {
  id: number;
  name: string;
  userId: number;
  days: TripDay[];
  hotel: TripHotel[];
  restaurant: TripRestaurant[];
  attraction: TripAttraction[];
}

type TripHotel = {
  id: number;
  name: string;
  location: string;
  url: string;
  imageUrl: string | null;
  tripId: number;
};

type TripRestaurant = {
  id: number;
  name: string;
  location: string;
  url: string;
  imageUrl: string | null;
  tripId: number;
};

type TripAttraction = {
  id: number;
  name: string;
  location: string;
  url: string;
  imageUrl: string | null;
  tripId: number;
};

type TripDay = {
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
