'use client'
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Grid } from "@mui/material";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

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
    <Grid container direction="row" sx={scrollPercentage >= 15 ?{backgroundColor:"#0f051d"}:{backgroundColor:"#09104D"}} className={styles.container}>
      <Grid item lg={3} md={3} sm={10} xs={10} sx={{textAlign:"start"}}>
        <h1>CRYPTOPIA</h1>
      </Grid>
      <Grid item lg={7} md={7} sx={{ alignItems: "center",display:{lg:"grid",md:"grid",sm:"none",xs:"none"} }}>
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
      <Grid item lg={2} md={2} sx={{ alignItems: "center",display:{lg:"grid",md:"grid",sm:"none",xs:"none"} }}>
        <Grid container className={styles.icon} spacing={3}>
          <Grid item>
            <BsTwitter size={25}/>
          </Grid>
          <Grid item>
            <BsDiscord size={25}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} xs={2} sx={{ alignItems: "center",display:{lg:"none",md:"none",sm:"grid",xs:"grid"},justifyContent:"end" }}>
        <GiHamburgerMenu size={40} color="white" onClick={handleClick}/>
      </Grid>
      <Grid container direction="column" sx={{ justifyContent:"center",display: {
            md: "none",
            sm: menuOpen ? "inline" : "none",
            xs: menuOpen ? "inline" : "none",
            
          },zIndex:999}}>
        {navlinks.map((item) => (
            <Grid item xs={3}  key={item.id}>
             <ScrollLink
                to={item.url} 
                smooth={true}
                offset={-70} 
                className={styles.link}
                onClick={handleClick}
              >
                {item.title}
              </ScrollLink>
            </Grid>
          ))}
        </Grid>
    </Grid>
  );
};

export default Navbar;
