import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./crypto.module.css";
import LoaderSpinner from "../loader/loader";
const Crypto = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&locale=en";

        const response = await fetch(url);

        const data = await response.json();

        setCurrencies(data);
        setLoading(false);
        
      } catch (error) {
        console.log("failed to fetch data:" + error);
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  const filteredCoins = currencies.filter((coin) => {
    return (
      coin.id === "bitcoin" ||
      coin.id === "ethereum" ||
      coin.id === "tether" ||
      coin.id === "binancecoin"
    );
  });
  return (
      <Grid container sx={{ marginTop: "70px"}}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Grid container sx={{justifyContent:"center",alignItems:"center"}}>
            {loading ? (
              <LoaderSpinner />
            ) : (
              filteredCoins.map((coin) => (
                <Grid item xs={3} key={coin.id}>
                  <Grid container direction="row" className={styles.container}>
                    <img src={coin.image} width={100} height={100} />
                  </Grid>
                  <Grid container direction="row" className={styles.container}>
                    <h2 style={{ marginRight: "2px" }}>{coin.name}</h2>
                    <h2
                      style={
                        coin.price_change_percentage_24h < 0
                          ? { color: "red" }
                          : { color: "green" }
                      }
                    >
                      {coin.price_change_percentage_24h}%
                    </h2>
                  </Grid>
                  <Grid container direction="row" className={styles.container}>
                    <h2>${coin.current_price}</h2>
                  </Grid>
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
  );
};

export default Crypto;
