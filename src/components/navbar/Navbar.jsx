import React from "react";
import styles from "./navbar.module.css";
import { Grid } from "@mui/material";
import { BsTwitter, BsDiscord } from "react-icons/bs";
const Navbar = () => {
  return (
    <Grid container direction="row" className={styles.container}>
      <Grid item xs={3}>
        <h1>CRYPTOPIA</h1>
      </Grid>
      <Grid item xs={7} sx={{ alignItems: "center" }}>
        <Grid container sx={{ justifyContent:"center"}}>
          <Grid item xs={3}>
            <a>Home</a>
          </Grid>
          <Grid item xs={3}>
            <a>Market</a>
          </Grid>
          <Grid item xs={3}>
            <a>Choose Us</a>
          </Grid>
          <Grid item xs={3}>
            <a>Join</a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Grid container className={styles.icon} spacing={3}>
          <Grid item>
            <BsTwitter size={25}/>
          </Grid>
          <Grid item>
            <BsDiscord size={25}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
