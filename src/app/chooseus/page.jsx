import { Grid } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
import Card from "@/components/card/Card";
const ChooseUs = () => {
  const columnFirst = [
    {
      icon: "wallet.svg",
      title: "CONNECT YOUR WALLET",
      desc: "Use Trust Wallet, Metamask or to connect to the app.",
    },
    {
      icon: "select.svg",
      title: "SELECT YOUR QUANTITY",
      desc: "Upload your crypto and set a title, description and price.",
    },
    {
      icon: "confirm.svg",
      title: "CONFIRM TRANSACTION",
      desc: "Earn by selling your crypto on our marketplace.",
    },
  ];
  const columnSecond = [
    {
      icon: "phone.svg",
      title: "RECEIVE YOUR OWN NFTS",
      desc: "Invest all your crypto at one place on one platform.",
    },
    {
      icon: "sell.svg",
      title: "TAKE A MARKET TO SELL",
      desc: "Discover, collect the right crypto collections to buy or sell.",
    },
    {
      icon: "collection.svg",
      title: "DRIVE YOUR COLLECTION",
      desc: "We make it easy to Discover, Invest and manage.",
    },
  ];
  return (
    <Grid container>
      <Grid container sx={{ justifyContent: "center" }}>
        <h1 style={{ marginRight: "10px" }} className={styles.title}>
          WHY
        </h1>
        <h1 className={styles.title2}>CHOOSE US</h1>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Grid container direction="column">
            {columnFirst.map((card) => (
              <Grid item xs={4}>
                <Card
                  icon={card.icon}
                  title={card.title}
                  desc={card.desc}
                />
              </Grid>
            ))}

          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display:"grid"
          }}
        >
          <Grid>
            <img src="logo.png" width={360} className={styles.img}/>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container direction="column">
          {columnSecond.map((card) => (
              <Grid item xs={4}>
                <Card
                  icon={card.icon}
                  title={card.title}
                  desc={card.desc}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChooseUs;
