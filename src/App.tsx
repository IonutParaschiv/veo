import Grid from "@mui/material/Grid";
import Header from "./components/Header";
import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { useData } from "./hooks/useData";

function App() {
  const { clubData, getClubData } = useData();

  useEffect(() => {
    getClubData();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header data={clubData} />
        <Hero data={clubData} />
      </Grid>
    </Grid>
  );
}

export default App;
