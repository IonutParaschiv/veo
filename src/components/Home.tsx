import { useEffect } from "react";
import { useData } from "../hooks/useData";
import Content from "./Content";

export const Home = () => {
  const { clubData, getTeamsData } = useData();
  useEffect(() => {
    getTeamsData();
  }, []);
  return <Content data={clubData} />;
};
