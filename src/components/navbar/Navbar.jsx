'use client'
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Grid } from "@mui/material";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {

  const navlinks = [
    {
      id: 1,
      title: "Home",
      url: "first",
    },
    {
      id: 2,
      title: "Market",
      url: "market",
    },
    {
      id: 3,
      title: "Choose Us",
      url: "chooseus",
    },
    {
      id:4,
      title:"Join",
      url:"join"
    }
  ];

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
        {navlinks.map((item) => (
            <Grid item xs={3}  key={item.id}>
             <ScrollLink
                to={item.url} 
                smooth={true}
                offset={-70} 
                className={styles.link}
              >
                {item.title}
              </ScrollLink>
            </Grid>
          ))}
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
