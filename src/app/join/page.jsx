import React from 'react'
import styles from "./page.module.css"
import { Button, Grid } from '@mui/material'
import CButton from '@/components/CButton/CButton'
const Join = () => {
  return (
    <Grid className='join' sx={{width:"100%",marginBottom:"150px"}}>
      <Grid container className={styles.container}>
        <Grid item lg={2}></Grid>
        <Grid item lg={8} sm={12} xs={12}>
            <Grid container>
                <Grid item lg={1} sx={{display:{lg:"grid",sm:"none",xs:"none"}}}>
                    <img src="bitco.png" alt="bitcoin" className={styles.bitcoin} />
                </Grid>
                <Grid item lg={10} sm={12} xs={12}>
                    <h1 className={styles.title}>JOIN US VIA</h1> <h1 className={styles.title2}>DISCORD </h1> 
                    <p className={styles.text}>Invest and manage all your crypto at one place.</p>
                </Grid>
                <Grid item lg={1} sx={{display:{lg:"grid",sm:"none",xs:"none"}}}>
                    <img src="eth.png" alt="bitcoin" className={styles.bitcoin} />
                </Grid>
            </Grid>
            <Grid container sx={{justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
               <CButton href="http://discord.com/" name="Join via Discord" />
            </Grid>
        </Grid>
        <Grid item lg={2}></Grid>
    </Grid>  
    </Grid>
    
  )
}

export default Join