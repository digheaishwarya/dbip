import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@mui/material";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
} from "@mui/material";

import { TablePagination, MenuItem, Select } from "@mui/material";
import Charts from "./Charts";

const useStyles = makeStyles((theme) => ({
  sub: {
    textTransform: "uppercase",
    fontSize: "1.4rem",
    fontWeight: 600,
    marginBottom: "10px",
    padding: "30px",
    color: "#5537ed",
  },
  title: {
    textAlign: "center",
    padding: "30px",
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.8,
      padding: "30px",
    },
  },
  subtitle: {
    fontSize: "2.7rem",
    fontWeight: 600,
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
    },
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 300,
    fontFamily: "Montserrat",
    lineHeight: 2.3,
    color: "#6a6a6a",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem", // Increase font size for medium screens and above
    },
  },

  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    background: "#f8f9fa",
    padding: "100px 30px",
  },
  body: {
    fontSize: "1rem",
    fontWeight: 300,
    fontFamily: "Montserrat",
    lineHeight: 2.3,
    color: "#6a6a6a",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem", // Increase font size for medium screens and above
    },
  },
  h3: {
    marginBottom: "0.5rem",
    fontWeight: 500,
    paddingTop: "25px",
    fontSize: "1.75rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },
  TableCell: {
    fontSize: "9rem",
  },
  table: {
    Margin: " 50px 0 100px",
  },
}));

function Statistics({
  totalRows,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      {/* <Header /> */}
      <Container>
        <Typography className={classes.title}>
          <Typography className={classes.sub}>STATISTICS</Typography>
          <Typography variant="h5" className={classes.subtitle}>
            The DB-IP Database
          </Typography>
          <Typography className={classes.body1} variant="body1">
            More than 33 million IPv4 and IPv6 blocks and growing.
          </Typography>
        </Typography>
      </Container>

      <section className={classes.root}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} lg={8}>
              <div>
                <Typography variant="body1" className={classes.body}>
                  Since 2010 we provide one of the most comprehensive and
                  accurate IP address databases available on the market that has
                  grown today to more than 33 million IPv4 and IPv6 blocks.{" "}
                </Typography>
                <br />
                <br />
                <br />

                <Typography variant="h3" className={classes.h3}>
                  Details about the DB-IP Database
                </Typography>

                <Typography variant="body1" className={classes.body}>
                  Every month, hundreds of thousands of records are added or
                  updated in the DB-IP Database, and we're always working hard
                  to improve the coverage of our database and its accuracy.
                  Learn more about the DB-IP database here, including detailed
                  analytics and update information.{" "}
                </Typography>
              </div>
              <TableContainer
                component={Paper}
                sx={{ marginTop: "50px", marginBottom: "100px" }}
              >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontSize: "1.0rem",
                          color: "#212529",
                          fontFamily: "montserrat",
                          fontWeight: "300",
                        }}
                      >
                        Database edition
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "1.0rem",
                          color: "#212529",
                          fontFamily: "montserrat",
                          fontWeight: "300",
                        }}
                      >
                        {" "}
                        IP address to location + ISP, February 2024
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontSize: "1.0rem",
                          color: "#212529",
                          fontFamily: "montserrat",
                          fontWeight: "300",
                        }}
                      >
                        Total records
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "1.0rem",
                          color: "#212529",
                          fontFamily: "montserrat",
                          fontWeight: "300",
                        }}
                      >
                        33,913,470
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </section>
      <TableContainer
        component={Paper}
        sx={{padding: '100px 30px' }}
      >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">Records</TableCell>
              <TableCell align="right">Cities</TableCell>
              <TableCell align="right">Locations</TableCell>
              <TableCell align="right">Organizations</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Your table rows here */}
            {/* Sample row */}
            <TableRow>
              <TableCell>
                <img
                  src="/img/flags/US.png"
                  alt="United States"
                  title="United States"
                />
                &nbsp;&nbsp;United States
              </TableCell>
              <TableCell align="right">12,535,225</TableCell>
              <TableCell align="right">37,030</TableCell>
              <TableCell align="right">864,455</TableCell>
              <TableCell align="right">1,770,039</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell align="right">
                <b>33,913,470</b>
              </TableCell>
              <TableCell align="right">
                <b>227,105</b>
              </TableCell>
              <TableCell align="right">
                <b>1,925,032</b>
              </TableCell>
              <TableCell align="right">
                <b>4,263,682</b>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="pagination-detail">
          <span className="pagination-info">
            Showing {page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, totalRows)} of {totalRows} rows
          </span>
          <span className="page-list">
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              inputProps={{ "aria-label": "rows per page" }}
            >
              {[10, 25, 50, 100].map((rows) => (
                <MenuItem key={rows} value={rows}>
                  {rows}
                </MenuItem>
              ))}
            </Select>
            rows per page
          </span>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={totalRows}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </TableContainer>
      <Charts/>
      <Footer />
    </div>
  );
}

export default Statistics;
