import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import {
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  Container,
  Box,
} from "@material-ui/core";
import { Tab, Tabs, Grid } from "@mui/material";
import { CardContent, Link } from "@mui/material";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Header from "../Layout/Header";
// import Footer from "../Layout/Footer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: theme.typography.body2.fontSize, // Set button text font size to small
    padding: theme.spacing(1, 2), // Adjust button padding as needed for medium size
  },
  typography: {
    fontSize: theme.typography.body2.fontSize, // Set typography font size to small
  },
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
    padding: "30px",
    color: "#5537ed",
    "@media (min-width: 0px) and (max-width: 993px)": {
      // Your responsive styles here
    },
  },
  title: {
    textAlign: "center",
    padding: "30px",
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
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    paddingBottom: "30px",
  },
  tab: {
    color: "secondary",
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textTransform: "none",
    fontWeight: "bold",
    border: "1px solid black",
    outline: "none", // Remove focus outline
  },
  basicApiButton: {
    backgroundColor: "white",
  },
  clicked: {
    backgroundColor: "blue",
    borderColor: "blue",
    color: "white", // Set text color to white when background is blue
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
  listItemIcon: {
    background: "url(https://db-ip.com/img/i_ok.svg) no-repeat",
    position: "absolute",
    top: "50%",
    marginTop: "-25px",
    left: 0,
    width: "50px",
    height: "50px",
    content: '""',
  },
  listItemIcon1: {
    background: "url(https://db-ip.com/img/i_nok.svg) no-repeat",
    position: "absolute",
    top: "50%",
    marginTop: "-25px",
    left: 0,
    width: "50px",
    height: "50px",
    content: '""',
  },
  spaceXl: {
    padding: "100px 30px",
    background: "#f8f9fa",
    fontSize: "1.1rem",
    fontWeight: 300,
    fontFamily: "montserrat",
    lineHeight: 2.3,
    color: "#27254d",
  },
  textJustify: {
    textAlign: "justify",
  },
  body: {
    textAlign: "justify",
    fontSize: "80%",
    fontWeight: 400,
    marginBottom: "1rem",
    fontFamily: "montserrat",
    lineHeight: 2.3,
    color: "#27254d",
    fontSize: "1.0rem",
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: {
    marginTop:"-200px",
    marginLeft:"-40px"
      },
  },

  body1: {
    
    fontSize: "80%",
    fontWeight: 400,
    marginBottom: "1rem",
    fontFamily: "montserrat",
    lineHeight: 2.3,
    color: "#27254d",
    fontSize: "1.0rem",
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: {
        marginTop:"-20px",
        marginLeft:"-40px",
          },
  },
  body3: {
    
    [theme.breakpoints.down("sm")]: {
        marginTop:"-80px",
        marginLeft:"-105px",
        width:"280px"
          },
  },
  list: {
    flexBasis: "50%",
    fontSize: "1.2rem",
    fontWeight: 300,
    fontFamily: "montserrat",
    lineHeight: 2.3,
    color: "#27254d",
    position: "relative",
    padding: "15px 10px 15px 70px",
    flex: "0 0 50%",
    maxWidth: "100%",
  },
  productDescription: {
    marginBottom: "35px",
    paddingTop: "20px",
    color: "#cdd0e8",
    fontSize: "1.1rem",
    fontWeight: 300,
    fontFamily: "montserrat",
    lineHeight: "2.3",
  },
}));

function BasicApi() {
  const classes = useStyles();

  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (buttonName) => {
    setClickedButton(buttonName);
  
  };

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1rem + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    root: {
      background: "#342fa9",
      marginLeft: "-2px",
      marginRight: "-2px",
      display: "flex",
      flexDirection: "row",
    },
  }));

  const codeData = {
    ipAddress: "123.45.67.89",
    continentCode: "NA",
    continentName: "North America",
    countryCode: "US",
    countryName: "United States",
    isEuMember: false,
    currencyCode: "USD",
    currencyName: "Dollar",
    phonePrefix: "1",
    languages: ["en-US", "es-US", "haw", "fr"],
    stateProvCode: "CA",
    stateProv: "California",
    district: "Santa Clara County",
    city: "Mountain View",
    geonameId: 5375480,
    zipCode: "94043",
    latitude: 37.3861,
    longitude: -122.084,
    gmtOffset: -7,
    timeZone: "America/Los_Angeles",
  };

  return (
    <Box>
      {/* <Header/> */}

      <Box>
        <Typography className={classes.title}>
          <Typography className={classes.sub}>API</Typography>
          <div variant="h5" className={classes.subtitle}>
            IP Geolocation API
          </div>
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          className={classes.root}
        >
          <Button
            className={`${classes.tab} ${classes.basicApiButton} ${
              clickedButton === "basic" && classes.clicked
            }`}
            size="large"
            onClick={() => handleClick("basic")}
          >
            BASIC API
          </Button>
          <Button
            className={`${classes.tab} ${classes.basicApiButton} ${
              clickedButton === "core" && classes.clicked
            }`}
            size="large"
            onClick={() => handleClick("core")}
          >
            CORE API
          </Button>
          <Button
            className={`${classes.tab} ${classes.basicApiButton} ${
              clickedButton === "extended" && classes.clicked
            }`}
            size="large"
            onClick={() => handleClick("extended")}
          >
            EXTENDED API
          </Button>
        </Tabs>
      </Box>

      <Grid container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: "30px 100px",
            background: "#55d4da",
            [theme.breakpoints.down('993')]: {
              padding: '50px 100px',
            },
          }}
        >
          <Grid item xs={12} lg={5} textAlign="left">
            <Box>
              <Grid container spacing={3}>
                <Grid>
                  <Box>
                    <Grid container spacing={2}>
                      {/* First Grid item */}
                      <Grid item xs={12} md={6}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            color: "#fff",
                            
                          }}
                        >
                          <img
                            src="https://db-ip.com/img/basic-api.svg"
                            alt="Basic API"
                            style={{
                              margin: "0 auto",
                              width: "160px",
                              height: "320px",
                             
                            }} // Adjust the width as needed
                          />
                        </Box>
                      </Grid>

                      {/* Second Grid item */}
                      <Grid item xs={12} md={6}  style={{ color: "#fff" }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "25px 0 0  25px",
                            textAlign: "center",
                            position: "relative",
                            top: "0px",
                          }}
                          className={classes.body}
                        >
                          <Typography
                            variant="h5"
                            component="div"
                            style={{ color: "white", paddingTop: "120px" }}
                          >
                            <span
                              style={{
                                fontWeight: "normal",
                                fontSize: "50px",
                                fontFamily: "Montserrat",
                              }}
                            >
                              Basic{" "}
                            </span>
                            <strong
                              style={{
                                fontWeight: "normal",
                                fontSize: "50px",
                                fontFamily: "Montserrat",
                              }}
                            >
                              API
                            </strong>
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              whiteSpace: "nowrap",
                            }}
                            size="medium"
                          >
                            <Typography
                              variant="body3"
                              component="div"
                              style={{
                                background: "#fff",
                                color: "#27254d",
                                padding: "2px 5px",
                                fontSize: ".9rem",
                                width: "fit-content",
                                borderRadius: "5px",
                                fontWeight: 300,
                                fontFamily: "montserrat",
                                lineHeight: 2.3,
                              }}
                            >
                              Starting at <strong>8.29 € / month</strong>
                            </Typography>
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>

                    <CardContent>
                      <Typography
                        variant="body1"
                        className={classes.body1}
                        style={{ color: "#fff"}}
                      >
                        The Basic IP geolocation API provides all the
                        information of the Free API and adds detailed location
                        data. The Basic API includes advanced location data such
                        as GPS coordinates, district, zip code, timezone, and
                        the unique place identifier in the Geonames open
                        database.
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ mt: 3, marginTop: "100px" }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid
                item
                xs={12}
                lg={6}
                sx={{ width: "100%", maxWidth: "360px" }}
              >
                <div
                  style={{
                    textAlign: "left",
                    width: isMobileView ? "200%" : "190%",
                    maxWidth: isMobileView ? "95%" : "180%",
                    padding: isMobileView ? "20px" : "50px",
                  }}
                >
                  <form>
                    <div></div>
                  </form>
                  <Paper elevation={3}  textAlign="left"  className={classes.body3}>
                    <img src="https://db-ip.com/img/browser.svg" width="100%" />

                    <pre
                      style={{
                        maxHeight: "25rem",
                        overflowY: "auto",
                        marginTop: "0px",
                      }}
                    >
                      <code style={{ textAlign: "left"}}>
                        {JSON.stringify(codeData, null, 2)}
                      </code>
                    </pre>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box className={classes.spaceXl}>
        <Container
          sx={{
            padding: "100px 0",
            margin: "0",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  padding: 0,
                }}
              >
                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon} />
                  <Typography variant="inherit">Free trial</Typography>
                </ListItem>
                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon} />
                  <Typography variant="inherit">
                    Currency and international phone prefix
                  </Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon} />
                  <Typography variant="inherit">City</Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon} />
                  <Typography variant="inherit">Timezone</Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon1} />
                  <Typography variant="inherit">
                    AS number and access to AS API
                  </Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon1} />
                  <Typography variant="inherit">
                    Internet Service Provider
                  </Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon1} />
                  <Typography variant="inherit">Connection type</Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon1} />
                  <Typography variant="inherit">
                    Crawler and proxy detection
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  padding: 0,
                }}
              >
                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon} />
                  <Typography variant="inherit">
                    Continent/Country codes and names
                  </Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon} />
                  <Typography variant="inherit">State or Province</Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon} />
                  <Typography variant="inherit">
                    Latitude and Longitude
                  </Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon1} />
                  <Typography variant="inherit">
                    Weather station code
                  </Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon1} />
                  <Typography variant="inherit">
                    Live currency conversions with dbip.js
                  </Typography>
                </ListItem>

                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon1} />
                  <Typography variant="inherit">Organization name</Typography>
                </ListItem>
                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon1} />
                  <Typography variant="inherit">Connection type</Typography>
                </ListItem>
                <ListItem className={classes.list}>
                  {" "}
                  <ListItemIcon className={classes.listItemIcon1} />
                  <Typography variant="inherit">
                    Threat level assessment and details
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Grid>
        <Grid
          container
          justifyContent="center"
          style={{ padding: "2px" }}
        ></Grid>
        <Grid style={{ padding: "2px" }}>
          <Typography className={classes.title}>
            <Typography className={classes.sub}>OUR OFFERS</Typography>
            <div variant="h5" className={classes.subtitle}>
              Basic API pricing
            </div>
          </Typography>
          <Box display="flex" justifyContent="center">
            <div className="tab-content d-block mb-4" id="pills-tabContent">
              <Grid container spacing={2} style={{ padding: 40 }}>
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
            </div>
          </Box>
          <Box className={classes.spaceXl}>
            <Container>
              <Container textAlign="center">
                <Typography
                  variant="h5"
                  component="h2"
                  mb={5}
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    textAlign: "center",
                    marginBottom: "3rem",
                    marginTop: 0,
                  }}
                >
                  Contact Us to Learn More About IP Address Location API Pricing
                  and Subscription Plans
                </Typography>
                <Typography className={classes.body}>
                  If you would like to learn more about our IP location API
                  subscription plans and pricing,
                  <Link href="/contact/">contact us</Link> today. We’ll discuss
                  the cost of IP geolocation APIs we offer based on the plan,
                  and can help you determine which plan is right for you based
                  on your needs. We work to keep our IP geolocation API pricing
                  affordable to give you the best tool you’ll find anywhere. You
                  can learn more about our various API products and get what you
                  need with one of our three plans, including our Starter,
                  Premium, and Enterprise plans
                </Typography>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Box mt={5}>
                    <Button
                      variant="contained"
                      href="/api/doc.php"
                      style={{
                        background: "#f92672",
                        color: "#fff",
                        display: "inline-block",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        fontSize: ".9rem",
                        padding: "15px 30px",
                        marginTop: "100px",
                        textAlign: "center",
                      }}
                      startIcon={<CodeIcon />}
                    >
                      Documentation
                    </Button>
                    <br /> <br />
                    <Button
                      variant="contained"
                      color="#55d4da"
                      href="https://github.com/dbip/api-client"
                      style={{
                        color: "#fff",
                        background: "#55d4da",
                        display: "inline-block",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        fontSize: ".9rem",
                        padding: "15px 30px",
                        marginBottom: "50px",
                        marginLeft: "40px",
                        textAlign: "center",
                      }}
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                  </Box>
                </div>
              </Container>
            </Container>
          </Box>
        </Grid>
      </Grid>
      <Footer/>
    </Box>
  );
}
export default BasicApi;