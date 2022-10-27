export const backgroundColor = (content: string) => {
  return content == "Arrival at"
    ? "bg-blue-900"
    : content == "Eat at"
    ? "bg-orange-500"
    : "bg-green-500";
};
