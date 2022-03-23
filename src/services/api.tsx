import { ClubType, MatchType, TeamType } from "../types";
import axios from "./axiosConfig";


export const getClubDetails = async (): Promise<ClubType> => {
  const response = await axios.get("/api/app/clubs/veo-job-interview");
  return response.data;
};

export const getTeams = async (): Promise<TeamType[]> => {
  const response = await axios.get("/api/app/clubs/veo-job-interview/teams");
  return response.data;
};


export const getMatches = async ( teamSlug: string, clubSlug: string): Promise<MatchType[]> => {
  const response = await axios.get(
    `/api/app/matches/?club=${clubSlug}&team=${teamSlug}`
  );
  return response.data;
};

export const getVideoSources = async (slug: string): Promise<any> => {
  const response = await axios.get(
    `/api/app/matches/${slug}/videos`
  );
  return response.data;
}
