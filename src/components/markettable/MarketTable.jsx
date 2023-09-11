"use client";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import styles from "./MarketTable.module.css";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import { Grid } from "@mui/material";

const MarketTable = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en";

        const response = await fetch(url);

        const data = await response.json();

        setCurrencies(data);
      } catch (error) {
        console.log("failed to fetch data:" + error);
      }
    };
    fetchData();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - currencies.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Grid
      container
      sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={10}>
        <table className={styles.table}>
          <thead
            className={styles.head}
            style={{ borderTopRightRadius: "35px" }}
          >
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody className={styles.body}>
            {(rowsPerPage > 0
              ? currencies.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : currencies
            ).map((row) => (
              <tr key={row.name}>
               
                <td style={{justifyContent:"center"}}>
                  <Grid container sx={{alignItems:"center"}} spacing={2}>
                    <Grid item xs={6} sx={{textAlign:"end"}}><img src={row.image} width={50} /></Grid>
                    <Grid item xs={6} sx={{textAlign:"start"}}><p>{row.name} </p></Grid>
                  </Grid>
                  
                </td>
                <td align="right">{row.current_price}</td>
                <td align="right"  style={
                        row.price_change_percentage_24h < 0
                          ? { color: "red" }
                          : { color: "green" }
                      }>{row.price_change_percentage_24h} %</td>
              </tr>
            ))}
            {emptyRows > 0 && (
              <tr style={{ height: 41 * emptyRows }}>
                <td colSpan={3} aria-hidden />
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                rowsPerPageOptions={[10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={currencies.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    'aria-label': 'rows per page',
                  },
                  actions: {
                    showFirstButton: true,
                    showLastButton: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        </table>
      </Grid>
    </Grid>
  );
};

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    height: 70px;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select} {
    margin: 0;
    border-radius: 35px;
    height: 50px;
    width: 80px;
    text-align: center;
  }

  & .${classes.displayedRows} {
    margin: 0;
    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    justify-content: center;
    display: flex;
    gap: 0.7rem;
    border: 1px solid grey;
    border-radius: 35px;
    width: 200px;
    height: 50px;
  }
  & .${classes.actions} > button {
    font-size: 25px;
    background-color: transparent;
    color: white;
    border: none;
    border-radius:2px;
    margin:5px;
    &:hover {
      background-color:#D5D5D5 ;
      opacity:0.7;
    }

    &:focus {
      outline: 1px solid ;
    }
    &:disabled {
      opacity: 0.3;
    }
  }
`;
export default MarketTable;
