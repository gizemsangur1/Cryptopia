import React from 'react'
import styles from "./card.module.css"
import { Grid } from '@mui/material'
const Card = (props) => {
  return (
    <Grid container className={styles.container}>
        <Grid item xs={3}>
            <Grid className={styles.icon}>
                <img src={props.icon} width={50} className={styles.img}/>
            </Grid>
        </Grid>
        <Grid item xs={9} >
            <h1>{props.title}</h1>
            <h2 style={{marginTop:"15px"}}>{props.desc}</h2>
        </Grid>
    </Grid>
  )
}

export default Card