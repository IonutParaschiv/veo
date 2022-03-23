import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(
      "useData was called without being inside an DataContext"
    );
  }

  return { ...context };
};
