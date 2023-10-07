import React from "react";
import Grid from "@mui/material/Grid";

 
 

 
import Stories from "./Stories";
import HomePage from "./HomePage";
import Followers from "./Followers ";

function Home() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={9}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
          <Stories/>
          
          <HomePage/>
          </div>
        </Grid>
        <Grid item xs={2}>
           <Followers/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
