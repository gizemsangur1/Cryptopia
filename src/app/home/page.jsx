"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Grid } from "@mui/material";
import Crypto from "@/components/crypto/Crypto";
import CButton from "@/components/CButton/CButton";
import { Link as ScrollLink } from "react-scroll";
const First = () => {
  return (
    <Grid container className={styles.main} id="first">
      <Grid container direction="row" className={styles.container}>
        <Grid item lg={2} sm={0} xs={0} sx={{display:{lg:"grid",sm:"none",xs:"none"}}}>
          <img src="bitco.png" alt="bitcoin" className={styles.bitcoin} />
        </Grid>
        <Grid item lg={8} sm={12} xs={12}>
          <h1 className={styles.title} >TRADE AND TRACK</h1>
        </Grid>
        <Grid item lg={2} xs={0} sm={0} sx={{display:{lg:"grid",sm:"none",xs:"none"}}}>
          <img src="eth.png" alt="eth" className={styles.bitcoin} />
        </Grid>
      </Grid>
      <Grid container direction="row" className={styles.container}>
        <Grid item lg={2} sm={0} xs={0} ></Grid>
        <Grid item lg={8} sm={12} xs={12}>
          <h1 className={styles.title2} >CRYPTO CURRENCIES</h1>
        </Grid>
        <Grid item lg={2} sm={0} xs={0}></Grid>
      </Grid>
      <Grid container direction="row" className={styles.container}>
        <Grid item lg={12} sx={{display:{lg:"grid",sm:"none",xs:"none"}}}>
          <Crypto/>
        </Grid>
        <Grid item lg={12} sx={{display:{lg:"none",sm:"grid",xs:"grid"},marginTop:"10px"}}>
        <button link className={styles.button}> 
          <ScrollLink
          to="market"
          smooth={true}
          offset={-70} 
          className={styles.link}
          >
            See Coins
          </ScrollLink>
         </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default First;
