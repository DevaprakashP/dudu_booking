import { useSelector } from "react-redux";

export const FilteredHotels = (type) => {
  const hotes = useSelector((state) => state.counter.hotels);

  const filtering = hotes?.filter((i) => i.place === type);
  return filtering;
};
