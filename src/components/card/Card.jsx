import React from 'react'
import styles from "./card.module.css"
import { Grid } from '@mui/material'
const Card = (props) => {
  return (
    <Grid container className={styles.container}>
        <Grid item lg={3} sx={{display:{lg:"grid",sm:"none",xs:"none"}}}>
            <Grid className={styles.icon}>
                <img src={props.icon} width={50} className={styles.img}/>
            </Grid>
        </Grid>
        <Grid item lg={9} sm={12} xs={12}>
            <h1 className={styles.title}>{props.title}</h1>
            <h2 className={styles.desc}>{props.desc}</h2>
        </Grid>
    </Grid>
  )
}

export default Card