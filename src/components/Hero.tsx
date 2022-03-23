import { Avatar, CardHeader, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ShieldTwoToneIcon from "@mui/icons-material/ShieldTwoTone";
import { ClubType } from "../types";

const HeroContainer = styled("div")({
  backgroundImage: `url('https://cdn.create.vista.com/api/media/small/53743487/stock-photo-football-stadium')`,
  height: 400,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
});

const HeroText = styled("div")({
  textAlign: "center",
  position: "absolute",
  top: "70%",
  left: "10%",
  transform: "translate(-20%, -50%)",
  color:" white"
})

type PropTypes = {
  data: ClubType
}
const TeamCrest = (data:any) => {
    return (
      <>
        {data.crest ? (
          <Avatar alt={data.common_name} src={data.crest} />
        ) : (
          <Avatar>
            <ShieldTwoToneIcon fontSize="large" />
          </Avatar>
        )}
      </>
    );
}

export const Hero = ({ data }: PropTypes) => {
  return (
    <HeroContainer>
      {data && (
        <HeroText>
          <CardHeader
            avatar={<TeamCrest data={data} />}
            title={
              <Typography variant="h3" component="div">
                {data.common_name}
              </Typography>
            }
          />
        </HeroText>
      )}
    </HeroContainer>
  );
};
