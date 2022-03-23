import { Grid, Typography } from "@mui/material";
import { ClubType, TeamType } from "../types";
import { useData } from "../hooks/useData";
import { TeamCard } from "./TeamCard";

type PropTypes = {
  data: ClubType | null;
};

const Content = ({ data }: PropTypes) => {
  const { teamsData } = useData();
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 3 }} p={3}>
      <Grid item xs={6}>
        <Typography variant="h3" component="div">
          Club Info
        </Typography>
        <Typography variant="h6" component="div">
          {data?.common_name} ({data?.short_name})
        </Typography>
        <Typography variant="subtitle1" component="div">
          {data?.country.name}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3" component="div">
          Teams
        </Typography>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={2}>
          {teamsData &&
            teamsData.length &&
            teamsData.map((team: TeamType) => {
              return (
                <Grid item xs={12} key={team.slug}>
                  <TeamCard data={team} />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
