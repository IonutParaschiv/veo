import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import { ClubType } from "../types";

import '../styles/Header.css';
import { useNavigate } from "react-router-dom";

type PropTypes = {
  data: ClubType | null;
};

const Header = ({ data }: PropTypes) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" onClick={()=> navigate('/')} style={{cursor: 'pointer'}}>
            Veo Technologies
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
