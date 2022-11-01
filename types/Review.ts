import { User } from "./User";

export interface Review {
  title: string;
  text: string;
  rating: number;
  datePublished: String;
  user: User;
}
