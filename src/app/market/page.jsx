import React from 'react'
import styles from "./page.module.css"
import { Grid } from '@mui/material'
import MarketTable from '@/components/markettable/MarketTable'
const Market = () => {
  return (
    <Grid className="market" sx={{width:"100%",marginBottom:"150px"}}>
        <Grid container>
          
            <Grid item xs={12} sx={{textAlign:"center",color:"white"}}>
              <h1 style={{margin:"25px",fontSize:"48px"}}>Market</h1>
                <MarketTable/>
            </Grid>
            
        </Grid>
    </Grid>
  )
}

export default Market