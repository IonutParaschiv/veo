import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";

type PropsType = {
  isOpen: boolean;
  match: string;
  handleClose: () => void;
};

export const PlayerModal = ({ isOpen, handleClose, match }: PropsType) => {
  const { matchVideos, getMatchVideos } = useData();
  const [videoObject, setVideoObject] = useState<any>([]);
  const style = {
    display: "block",
    margin: "0 auto",
    width: "100%",
  };

  useEffect(() => {
    if (match) {
      getMatchVideos(match);
    }
    
  }, [match]);

  useEffect(() => {
    let matchSources = [];
    if (match && matchVideos && matchVideos.length) {
      matchSources = matchVideos.filter(
        (match: any) => match.width > 1000 && match.width < 2000
      );
    }
    setVideoObject(matchSources);
  }, [matchVideos]);

  const handleCloseInternal = () => {
    setVideoObject([]);
    handleClose();
  };

  return (
    <Dialog fullWidth={true} maxWidth="xl" open={isOpen} onClose={handleClose}>
      <DialogContent>
        <DialogContentText>
          {videoObject.length && (
            <video controls autoPlay style={style}>
              <source src={videoObject[0].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseInternal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
