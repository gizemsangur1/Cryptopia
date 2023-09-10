"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Grid } from "@mui/material";
import Crypto from "@/components/crypto/Crypto";
const First = () => {
  return (
    <Grid container className={styles.main}>
      <Grid container direction="row" className={styles.container}>
        <Grid item xs={2}>
          <img src="bitco.png" alt="bitcoin" className={styles.bitcoin} />
        </Grid>
        <Grid item xs={8}>
          <h1 className={styles.title}>TRADE AND TRACK</h1>
        </Grid>
        <Grid item xs={2}>
          <img src="eth.png" alt="eth" className={styles.bitcoin} />
        </Grid>
      </Grid>
      <Grid container direction="row" className={styles.container}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <h1 className={styles.title2}>CRYPTO CURRENCIES</h1>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container direction="row" className={styles.container}>
        
        <Crypto/>
      </Grid>
    </Grid>
  );
};

export default First;
