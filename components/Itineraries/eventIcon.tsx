import {
  GiCommercialAirplane,
  GiKnifeFork,
  GiModernCity,
} from "react-icons/gi";

export const eventIcon = (content: string) => {
  return content == "Arrival at" ? (
    <GiCommercialAirplane className="h-5 w-5 text-white" aria-hidden="true" />
  ) : content == "Eat at" ? (
    <GiKnifeFork className="h-5 w-5 text-white" aria-hidden="true" />
  ) : (
    <GiModernCity className="h-5 w-5 text-white" aria-hidden="true" />
  );
};
