import React from 'react'
import styles from "./page.module.css"
import { Grid } from '@mui/material'
const Join = () => {
  return (
    <Grid className='join' sx={{width:"100%"}}>
      <Grid container className={styles.container}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
            <Grid container>
                <Grid item xs={1}>
                    <img src="bitco.png" alt="bitcoin" className={styles.bitcoin} />
                </Grid>
                <Grid item xs={10}>
                    <h1 className={styles.title}>JOIN US VIA</h1> <h1 className={styles.title2}>DISCORD </h1> 
                    <p className={styles.text}>Invest and manage all your crypto at one place.</p>
                </Grid>
                <Grid item xs={1}>
                    <img src="eth.png" alt="bitcoin" className={styles.bitcoin} />
                </Grid>
            </Grid>
            <Grid container sx={{justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
                <button className={styles.button}>Join via Discord</button>
            </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
    </Grid>  
    </Grid>
    
  )
}

export default Join