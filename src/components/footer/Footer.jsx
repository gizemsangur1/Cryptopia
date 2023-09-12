import React from "react";
import styles from "./Footer.module.css";
import { Grid } from "@mui/material";
import { BsTwitter, BsDiscord, BsFacebook, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <Grid container className={styles.container}>
      <Grid item lg={4} sx={{display:{lg:"grid",sm:"none",xs:"none"}}} ></Grid>
      <Grid item lg={4} sm={12} xs={12}>
        <Grid container sx={{marginBottom:"15px"}}>
            <Grid item xs={3}>
                <BsTwitter color="white" size={50}/>
            </Grid>
            <Grid item xs={3}>
                <BsDiscord color="white" size={50}/>
            </Grid>
            <Grid item xs={3}>
                <BsFacebook color="white" size={50}/>
            </Grid>
            <Grid item xs={3}>
                <BsYoutube color="white" size={50}/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={6}>
                <p className={styles.foot}>Privacy</p>
            </Grid>
            <Grid item xs={6}>
                <p className={styles.foot}>Terms of Use</p>
            </Grid>
        </Grid>
      </Grid>
      <Grid item lg={4} sx={{display:{lg:"grid",sm:"none",xs:"none"}}}></Grid>
    </Grid>
  );
};

export default Footer;
