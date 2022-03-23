import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TeamType } from "../types";
import ShieldTwoToneIcon from "@mui/icons-material/ShieldTwoTone";

type PropTypes = {
  data: TeamType;
};
export const TeamCard = ({ data }: PropTypes) => {
  const setMatchesLabel = (matchCount: number) => {
    if (!matchCount) return "No match available";

    if (matchCount > 1) {
      return "matches available";
    } else {
      return "match avaiable";
    }
  };
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea
        onClick={() => {
          navigate(`/team/${data.slug}`);
        }}
      >
        <CardHeader
          avatar={
            <Avatar>
              <ShieldTwoToneIcon />
            </Avatar>
          }
          title={data.name}
          subheader={`${
            data.match_count ? data.match_count : ""
          } ${setMatchesLabel(data.match_count)}`}
        />
      </CardActionArea>
    </Card>
  );
};
