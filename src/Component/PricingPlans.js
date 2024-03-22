import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
} from "@material-ui/core";
import { Tab, Tabs, Grid } from "@mui/material";
import { Card, CardContent, Divider, Link } from "@mui/material";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  planContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginBottom: theme.spacing(2),
  },
  plan: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  planDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#4fc3f7",
    color: "#ffffff",
    marginTop: theme.spacing(1),
  },
  sub: {
    textTransform: "uppercase",
    fontSize: "1.4rem",
    fontWeight: 600,
    marginBottom: "10px",
    color: "#5537ed",
    "@media (min-width: 0px) and (max-width: 993px)": {
      // Your responsive styles here
    },
  },
  title: {
    textAlign: "center",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      lineHeight: 1.8,
    },
  },
  subtitle: {
    fontSize: "2.7rem",
    fontWeight: 600,
    marginBottom: "20px",
    "@media (min-width: 0px) and (max-width: 993px)": {
      // Your responsive styles here
    },
  },
  customTab: {
    padding: "10px 30px",
    margin: "7px",
    border: "1px solid #27254d",
    color: "#27254d",
    fontWeight: 600,
    fontSize: "0.9rem",
    borderRadius: "0.25rem",
  },

  root: {
    marginBottom: "1rem",
    fontSize: "1.1rem",
    fontWeight: 300,
    fontFamily: "montserrat",
    lineHeight: 2.3,
    color: "#27254d",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.8,
    },
  },
  tab: {
    padding: "10px 30px",
    margin: "7px",
    border: "1px solid #27254d",
    color: "#27254d",
    fontWeight: 600,
    fontSize: "0.9rem",
    borderRadius: "0.25rem",
    "&.active": {
      background: "#5537ed",
      color: "#fff",
      border: "1px solid #5537ed",
    },
    "&:hover": {
      background: "#aaa",
      color: "#fff",
      border: "1px solid #aaa",
    },
  },
  planName: {
    textTransform: "uppercase",
    fontSize: "1.4em",
    textAlign: "center",
    fontWeight: 600,
    lineHeight: 1.5,
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      fontWeight: 300,
      fontFamily: "montserrat",
      lineHeight: 2.3,
      color: "#27254d",
    },
  },
  planPrice: {
    textTransform: "uppercase",
    fontSize: "3.5rem",
    textAlign: "center",
    fontWeight: 600,
    lineHeight: 1.2,

    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem", // Adjust as needed for smaller screens
      lineHeight: 1.8, // Adjust line height for smaller screens
    },
  },
  planPeriod: {
    textTransform: "uppercase",
    fontSize: "1rem",
    textAlign: "center",
    fontWeight: 600,
    lineHeight: 1.2,
    paddingBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
      fontWeight: 300,
      fontFamily: "montserrat",
      lineHeight: 2.3,
      color: "#27254d",
    },
  },
  planRequest: {
    fontSize: "1.8rem",
    fontWeight: 600,
  },
  planRequestPeriod: {
    textTransform: "uppercase",
    fontSize: ".9rem",
    fontWeight: 600,
    textAlign: "center",
    lineHeight: 1.6,
  },
  planDetails: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    padding: 0,
    margin: "40px 0",
    lineHeight: 1.6,
    fontSize: "1.1rem",
    fontWeight: 300,
    fontFamily: "montserrat",
    color: "#27254d",
  },
  btn: {
    background: "#fff",
    color: "#5537ed",
    display: "inline-block",
    width: "100%",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: ".9rem",
    padding: "15px 0",
    marginTop: "auto",
    cursor: "pointer",
  },
}));

function PricingPlans() {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Grid
        container
        justifyContent="center"
        style={{ backgroundColor: "#f0f0f0", padding: "2px" }}
      >
        <Card
          sx={{
            backgroundColor: "#27254d",
            color: "#fff",
            borderRadius: "10px",
            width: "150%",
            height: "150px", // Height auto for responsiveness
            marginBottom: "3rem",
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column", // Center content in column direction by default
            padding: "10px", // Default padding
            "@media (min-width:576px)": {
              flexDirection: "row", // Change to row direction on larger screens
              padding: "4rem 2rem",
              width: "90%", // Adjust width for larger screens
            },
            "@media (min-width:993px)": {
              padding: "40px ",
              width: "85%", // Further adjust width for even larger screens
            },
          }}
        >
          <CardContent sx={{ width: "100%" }}>
            <Grid container spacing={2}>
              {/* Content Section */}
              <Grid item xs={12} lg={6}>
                <Typography variant="h4" component="h4">
                  Ready to get started?
                </Typography>
                <Typography variant="body1">
                  Get in touch or create an account
                </Typography>
              </Grid>
              {/* Buttons Section */}
              <Grid
                item
                xs={12}
                lg={6}
                container
                justifyContent="flex-end"
                alignItems="center"
              >
                <div
                  style={{ display: "flex", gap: "20px", marginBottom: "10px" }}
                >
                  <Button
                    variant="contained"
                    color="white"
                    href="/api/"
                    sx={{
                      width: "100%",
                      height: "50px",
                      color: "#27254D",
                      backgroundColor: "white",
                      "&:hover": {
                        backgroundColor: "blue", // Change background color on hover to blue
                      },
                      "&:active": {
                        backgroundColor: "#fff",
                      },
                      "&:focus": {
                        backgroundColor: "blue",
                      },
                      "@media (min-width:600px)": {
                        width: "40%",
                        marginRight: "20px",
                      },
                    }}
                  >
                    Start a free trial
                  </Button>

                  <Button
                    variant="outlined"
                    color="primary"
                    href="/api/doc.php"
                    sx={{
                      width: "100%",
                      height: "50px",
                      marginTop: "10px",
                      color: "white",
                      borderColor: "white",
                      backgroundColor: "#27254d",
                      "&:hover": {
                        backgroundColor: "#27254d",
                      },
                      "&:active": {
                        backgroundColor: "#FFFFFF",
                      },
                      "@media (min-width:600px)": {
                        width: "30%",
                        marginTop: "0",
                      },
                    }}
                  >
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid style={{ backgroundColor: "#f0f0f0", padding: "2px" }}>
        <Typography className={classes.title}>
          <Typography className={classes.sub}>Pricing plans</Typography>
          <div variant="h5" className={classes.subtitle}>
            Discover our offer
          </div>
        </Typography>
        <Box display="flex" justifyContent="center">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="Pricing plans"
            centered
            className={classes.root}
            style={{ backgroundColor: "#f0f0f0", padding: "2px" }}
          >
            <Tab className={classes.tab} label="BASIC API" />
            <Tab className={classes.tab} label="CORE API" />
            <Tab className={classes.tab} label="EXTENDED API" />
            {/* <Tab className={classes.tab} label="DOWNLOADS" /> */}
          </Tabs>
          <div
            className="tab-content d-block mb-4"
            id="pills-tabContent"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            {value === 0 && (
              <Grid container spacing={2} style={{ padding: 15 }}>
                {/* Starter Plan */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.planContainer}>
                    <div className={classes.plan}>
                      <Typography variant="h6" className={classes.planName}>
                        Starter
                      </Typography>
                      <Typography variant="body1" className={classes.planPrice}>
                        8.29 €
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planPeriod}
                      >
                        Per month
                      </Typography>
                    </div>
                    <div className={classes.planDetails}>
                      <Typography
                        variant="subtitle1"
                        className={classes.planRequest}
                      >
                        2,000 - 50,000
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planRequestPeriod}
                      >
                        Requests per day
                      </Typography>
                      <List>
                        <ListItem>API over HTTPS</ListItem>
                        <ListItem>50+ languages</ListItem>
                        <ListItem>256 IPs batch queries</ListItem>
                        <ListItem>Single CORS domain</ListItem>
                        <ListItem>Email support</ListItem>
                      </List>
                      <Button variant="contained" className={classes.btn}>
                        <FontAwesomeIcon icon={faCheck} />
                        &nbsp;&nbsp;Free trial
                      </Button>
                    </div>
                  </Paper>
                </Grid>

                {/* Premium Plan */}

                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.planContainer}
                    style={{ backgroundColor: "#5537ed", color: "white" }}
                  >
                    <div className={classes.plan}>
                      <Typography variant="h6" className={classes.planName}>
                        PREMIUM
                      </Typography>
                      <Typography variant="body1" className={classes.planPrice}>
                        99.90 €
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planPeriod}
                      >
                        Per month
                      </Typography>
                    </div>
                    <div
                      className={classes.planDetails}
                      style={{ color: "white" }}
                    >
                      <Typography
                        variant="subtitle1"
                        className={classes.planRequest}
                      >
                        200,000 - 1,000,000
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planRequestPeriod}
                      >
                        Requests per day
                      </Typography>
                      <List>
                        <ListItem>API over HTTPS</ListItem>
                        <ListItem>50+ languages</ListItem>
                        <ListItem>256 IPs batch queries</ListItem>
                        <ListItem>Single CORS domain</ListItem>
                        <ListItem>99.95% uptime guarantee</ListItem>
                        <ListItem>Priority support</ListItem>
                      </List>
                      <Button variant="contained" className={classes.btn}>
                        <FontAwesomeIcon icon={faCheck} />
                        &nbsp;&nbsp;Free trial
                      </Button>
                    </div>
                  </Paper>
                </Grid>
                {/* Enterprise Plan */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.planContainer}>
                    <div className={classes.plan}>
                      <Typography variant="h6" className={classes.planName}>
                        ENTERPRISE
                      </Typography>
                      <Typography variant="body1" className={classes.planPrice}>
                        499.90 €
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planPeriod}
                      >
                        Per month
                      </Typography>
                    </div>
                    <div className={classes.planDetails}>
                      <Typography
                        variant="subtitle1"
                        className={classes.planRequest}
                      >
                        Unlimited
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planRequestPeriod}
                      >
                        Requests per day
                      </Typography>
                      <List>
                        <ListItem>API over HTTPS</ListItem>
                        <ListItem>50+ languages</ListItem>
                        <ListItem>256 IPs batch queries</ListItem>
                        <ListItem>Single CORS domain</ListItem>
                        <ListItem>99.99% uptime guarantee</ListItem>
                        <ListItem>Dedicated infrastructure</ListItem>
                        <ListItem> Priority support</ListItem>
                      </List>
                      <Button variant="contained" className={classes.btn}>
                        <i className="fa fa-check" />
                        &nbsp;&nbsp; CONTACT US
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            )}
            {value === 1 && (
              <Grid container spacing={2}>
                {/* Starter Plan */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.planContainer}>
                    <div className={classes.plan}>
                      <Typography variant="h6" className={classes.planName}>
                        Starter
                      </Typography>
                      <Typography variant="body1" className={classes.planPrice}>
                        11.49 €
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planPeriod}
                      >
                        Per month
                      </Typography>
                    </div>
                    <div className={classes.planDetails}>
                      <Typography
                        variant="subtitle1"
                        className={classes.planRequest}
                      >
                        2,000 - 50,000
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planRequestPeriod}
                      >
                        Requests per day
                      </Typography>
                      <List>
                        <ListItem>API over HTTPS</ListItem>
                        <ListItem>50+ languages</ListItem>
                        <ListItem>256 IPs batch queries</ListItem>
                        <ListItem>Single CORS domain</ListItem>
                        <ListItem>Email support</ListItem>
                      </List>
                      <Button variant="contained" className={classes.btn}>
                        <i className="fa fa-check" />
                        &nbsp;&nbsp;Free trial
                      </Button>
                    </div>
                  </Paper>
                </Grid>

                {/* Premium Plan */}

                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.planContainer}
                    style={{ backgroundColor: "#5537ed", color: "white" }}
                  >
                    <div className={classes.plan}>
                      <Typography variant="h6" className={classes.planName}>
                        PREMIUM
                      </Typography>
                      <Typography variant="body1" className={classes.planPrice}>
                        139.90 €
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planPeriod}
                      >
                        Per month
                      </Typography>
                    </div>
                    <div
                      className={classes.planDetails}
                      style={{ backgroundColor: "#5537ed", color: "white" }}
                    >
                      <Typography
                        variant="subtitle1"
                        className={classes.planRequest}
                      >
                        200,000 - 1,000,000
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planRequestPeriod}
                      >
                        Requests per day
                      </Typography>
                      <List>
                        <ListItem>API over HTTPS</ListItem>
                        <ListItem>50+ languages</ListItem>
                        <ListItem>256 IPs batch queries</ListItem>
                        <ListItem>Single CORS domain</ListItem>
                        <ListItem>99.95% uptime guarantee</ListItem>
                        <ListItem>Priority support</ListItem>
                      </List>
                      <Button variant="contained" className={classes.btn}>
                        <i className="fa fa-check" />
                        &nbsp;&nbsp;Free trial
                      </Button>
                    </div>
                  </Paper>
                </Grid>
                {/* Enterprise Plan */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.planContainer}>
                    <div className={classes.plan}>
                      <Typography variant="h6" className={classes.planName}>
                        ENTERPRISE
                      </Typography>
                      <Typography variant="body1" className={classes.planPrice}>
                        699.90 €
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planPeriod}
                      >
                        Per month
                      </Typography>
                    </div>
                    <div className={classes.planDetails}>
                      <Typography
                        variant="subtitle1"
                        className={classes.planRequest}
                      >
                        Unlimited
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planRequestPeriod}
                      >
                        Requests per day
                      </Typography>
                      <List>
                        <ListItem>API over HTTPS</ListItem>
                        <ListItem>50+ languages</ListItem>
                        <ListItem>256 IPs batch queries</ListItem>
                        <ListItem>Single CORS domain</ListItem>
                        <ListItem>99.99% uptime guarantee</ListItem>
                        <ListItem>Dedicated infrastructure</ListItem>
                        <ListItem> Priority support</ListItem>
                      </List>
                      <Button variant="contained" className={classes.btn}>
                        <i className="fa fa-check" />
                        &nbsp;&nbsp;CONTACT US
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            )}
            {value === 2 && (
              <Grid container spacing={2} style={{ padding: 40 }}>
                {/* Starter Plan */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.planContainer}>
                    <div className={classes.plan}>
                      <Typography variant="h6" className={classes.planName}>
                        Starter
                      </Typography>
                      <Typography variant="body1" className={classes.planPrice}>
                        16.49 €
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planPeriod}
                      >
                        Per month
                      </Typography>
                    </div>
                    <div className={classes.planDetails}>
                      <Typography
                        variant="subtitle1"
                        className={classes.planRequest}
                      >
                        2,000 - 50,000
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planRequestPeriod}
                      >
                        Requests per day
                      </Typography>
                      <List>
                        <ListItem>API over HTTPS</ListItem>
                        <ListItem>50+ languages</ListItem>
                        <ListItem>256 IPs batch queries</ListItem>
                        <ListItem>Single CORS domain</ListItem>
                        <ListItem>Email support</ListItem>
                      </List>
                      <Button variant="contained" className={classes.btn}>
                        <FontAwesomeIcon icon={faCheck} />
                        &nbsp;&nbsp;Free trial
                      </Button>
                    </div>
                  </Paper>
                </Grid>

                {/* Premium Plan */}

                <Grid item xs={12} sm={6} md={4}>
                  <Paper
                    className={classes.planContainer}
                    style={{ backgroundColor: "#5537ed", color: "white" }}
                  >
                    <div className={classes.plan}>
                      <Typography variant="h6" className={classes.planName}>
                        PREMIUM
                      </Typography>
                      <Typography variant="body1" className={classes.planPrice}>
                        199.90 €
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planPeriod}
                      >
                        Per month
                      </Typography>
                    </div>
                    <div
                      className={classes.planDetails}
                      style={{ backgroundColor: "#5537ed", color: "white" }}
                    >
                      <Typography
                        variant="subtitle1"
                        className={classes.planRequest}
                      >
                        200,000 - 1,000,000
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planRequestPeriod}
                      >
                        Requests per day
                      </Typography>
                      <List>
                        <ListItem>API over HTTPS</ListItem>
                        <ListItem>50+ languages</ListItem>
                        <ListItem>256 IPs batch queries</ListItem>
                        <ListItem>Single CORS domain</ListItem>
                        <ListItem>99.95% uptime guarantee</ListItem>
                        <ListItem>Priority support</ListItem>
                      </List>
                      <Button variant="contained" className={classes.btn}>
                        <FontAwesomeIcon icon={faCheck} />
                        &nbsp;&nbsp;Free trial
                      </Button>
                    </div>
                  </Paper>
                </Grid>
                {/* Enterprise Plan */}
                <Grid item xs={12} sm={6} md={4}>
                  <Paper className={classes.planContainer}>
                    <div className={classes.plan}>
                      <Typography variant="h6" className={classes.planName}>
                        ENTERPRISE
                      </Typography>
                      <Typography variant="body1" className={classes.planPrice}>
                        899.90 €
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planPeriod}
                      >
                        Per month
                      </Typography>
                    </div>
                    <div className={classes.planDetails}>
                      <Typography
                        variant="subtitle1"
                        className={classes.planRequest}
                      >
                        Unlimited
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.planRequestPeriod}
                      >
                        Requests per day
                      </Typography>
                      <List>
                        <ListItem>API over HTTPS</ListItem>
                        <ListItem>50+ languages</ListItem>
                        <ListItem>256 IPs batch queries</ListItem>
                        <ListItem>Single CORS domain</ListItem>
                        <ListItem>99.99% uptime guarantee</ListItem>
                        <ListItem>Dedicated infrastructure</ListItem>
                        <ListItem> Priority support</ListItem>
                      </List>
                      <Button variant="contained" className={classes.btn}>
                        <i className="fa fa-check" />
                        &nbsp;&nbsp;CONTACT US
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            )}
            {/* {value === 3 && (
              <Container maxWidth="lg" style={{ backgroundColor: "#f0f0f0" }}>
                <Grid container spacing={2}>
                  {[0, 1, 2, 3].map((index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Card>
                        <CardContent>
                          <Typography variant="h5" className={classes.planName}>
                            {index === 0
                              ? "IP to Country"
                              : index === 1
                              ? "IP to Location"
                              : index === 2
                              ? "IP to ISP"
                              : "IP to Location + ISP"}
                          </Typography>
                          <Typography
                            variant="h6"
                            className={classes.planPrice}
                          >
                            {index === 0
                              ? "49.90 €"
                              : index === 1
                              ? "299.90 €"
                              : index === 2
                              ? "199.90 €"
                              : "399.90 €"}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            className={classes.planPeriod}
                          >
                            Per year
                          </Typography>
                          <Typography className={classes.planRequest}>
                            {index === 0
                              ? "CSV + MMDB formats"
                              : "CSV + MMDB formats"}
                          </Typography>
                          <ul className={classes.planDetails}>
                            <li>Continent</li>
                            <li>Country</li>
                            {index > 0 && <li>State / Region</li>}
                            {index > 0 && <li>City / Zipcode</li>}
                            {index > 0 && <li>Approx. lat/lon</li>}
                            {index > 1 && <li>ISP / ASN</li>}
                            {index > 1 && <li>Connection type</li>}
                            {index > 1 && <li>Organization</li>}
                          </ul>
                          <Button
                            variant="contained"
                            href={`/db/ip-to-${
                              index === 0
                                ? "country"
                                : index === 1
                                ? "location"
                                : index === 2
                                ? "isp"
                                : "location-isp"
                            }`}
                          >
                            Downloads
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            )} */}
          </div>
        </Box>
        <Box></Box>
      </Grid>
    </Grid>
  );
}
export default PricingPlans;
