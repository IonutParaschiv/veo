import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../hooks/useData";
import { TeamType } from "../types";
import { RecordingsTable } from "./RecordingsTable";

export const TeamDetails = () => {
  const { slug } = useParams();
  const { teamsData, getTeamsData, getTeamMatches, teamsMatches } = useData();

  useEffect(() => {
    if (!teamsData) {
      getTeamsData();
    }
  }, [teamsData]);

  useEffect(() => {
    if(teamsData){
      getTeamMatches(slug, teamsData[0].club.slug);
    }
  }, [teamsData]);

  const currentTeam =
    teamsData && teamsData.length
      ? teamsData.filter((team: TeamType) => team.slug === slug)
      : [];
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 3 }} p={3}>
      {currentTeam.length && (
        <Grid item xs={12}>
          <Typography variant="h6" component="div">
            {currentTeam[0].name}
          </Typography>
          {teamsMatches && teamsMatches.length ? (
            <RecordingsTable recordings={teamsMatches} />
          ) : (
            <Typography variant="h5" component="div">
              There are no recordings available for this team
            </Typography>
          )}
        </Grid>
      )}
    </Grid>
  );
};
