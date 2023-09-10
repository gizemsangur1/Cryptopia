'use client'
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Grid } from "@mui/material";
import { BsTwitter, BsDiscord } from "react-icons/bs";
const Navbar = () => {

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollFraction = currentScroll / totalHeight;
      setScrollPercentage(scrollFraction * 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Grid container direction="row" sx={scrollPercentage >= 50 ?{backgroundColor:"#0F0620"}:{backgroundColor:"#091153"}} className={styles.container}>
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
