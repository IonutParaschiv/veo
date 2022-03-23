import { createContext, useState } from "react";
import { getClubDetails, getMatches, getTeams, getVideoSources } from "../services/api";
import { ClubType, MatchType, TeamType } from "../types";

export const DataContext = createContext<any | undefined>(undefined);
export type DataProviderProps = {
  children?: React.ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [clubData, setClubData] = useState<ClubType | null>(null);
  const [teamsData, setTeamsData] = useState<TeamType[] | null>(null);
  const [teamsMatches, setTeamMatches] = useState<MatchType[] | null>(null);
  const [matchVideos, setMatchVideos] = useState<MatchType[] | null>(null);

  const getClubData = async () => {
    const response = await getClubDetails();
    setClubData(response);
  };

  const getTeamsData = async () => {
    const response = await getTeams();
    setTeamsData(response);
  };

  const getTeamMatches = async (teamSlug: string, clubSlug: string) => {
      const response = await getMatches(teamSlug, clubSlug);
      setTeamMatches(response)
  }

  const getMatchVideos = async (slug: string) => {
    const response = await getVideoSources(slug);
    setMatchVideos(response);
  }
  return (
    <DataContext.Provider
      value={{
        clubData,
        teamsData,
        teamsMatches,
        matchVideos,
        getClubData,
        getTeamsData,
        getTeamMatches,
        getMatchVideos
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
