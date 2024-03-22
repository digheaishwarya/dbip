import { Typography, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon,
  Grid,
  Box,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faMapMarker,
  faSitemap,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import Developer from "./Devloper";
import Footer from "../Layout/Footer";
const useStyles = makeStyles((theme) => ({
  sub: {
    textTransform: "uppercase",
    fontSize: "1.4rem",
    fontWeight: 600,
    marginBottom: "10px",
    padding: "30px",
    color: "#5537ed",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem", // Adjust font size for extra small screens
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
  },

  root: {
    flexGrow: 1,
    background: "#f8f9fa",
    padding: "50px 30px",
  },
  card: {
    marginBottom: theme.spacing(2),
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

  h4: {
    marginBottom: "0.5rem",
    fontWeight: 500,
    paddingTop: "25px",
    fontSize: "21px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },

  pinkButton: {
    backgroundColor: "#FFFFFE",
    color: "blue",
    cursor: "pointer",
    display: "inline-block",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: ".9rem",
    padding: "15px 30px",
    marginTop: "auto",
  },
  greyBgLink: {
    color: "blue",
  },
  data: {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    color: "#90a4ae",
    background: "#fff",
    fontSize: ".95em",
    lineHeight: "1.5em",
    padding: "30px",
  },

  h3: {
    marginBottom: "0.5rem",
    fontWeight: "600",
    lineHeight: "1.2",
    fontSize: "1.5rem",
    color: "#27254d",
    margin: "24px 0 8px",
  },

  Paper: {
    background: "#fff",
    borderRadius: "10px",
    marginBottom: "30px",
    padding: "1rem",
    boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)",
    marginTop: 0,
    overflowX: "auto",
  },
  list: {
    marginTop: 0,
    marginBottom: "1rem",
  },
  lightBlueBtn: {
    background: "#55d4da",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: ".9rem",
    padding: "15px 30px",
    marginTop: "auto",
    lineHeight: 1.5,
    borderRadius: "0.3rem",
    border: "1px solid transparent",
    textDecoration: "none",
  },
  navLink: {
    marginBottom: 0,
    border: "1px solid #dee2e6",
    borderBottom: "none",
    padding: "10px 30px",
    margin: 7,
    color: "#27254d",
    fontWeight: 600,
    fontSize: "0.9rem",
  },
}));

const Devloper1 = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("free");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const jsCode = `
  $(".my-button").click(function() {
    $.getJSON("http://api.db-ip.com/v2/free/self").then(addrInfo =>
      alert(addrInfo.ipAddress + " is in " + addrInfo.city + ", " + addrInfo.stateProv)
    );
  });
`;

  const curlResponse = `{
  "111.111.111.111": {
      "continentCode": "AS",
      "continentName": "Asia",
      "countryCode": "JP",
      "countryName": "Japan",
      "stateProv": "Tokyo",
      "city": "Chiyoda"
  },
  "222.222.222.222": {
      "continentCode": "AS",
      "continentName": "Asia",
      "countryCode": "CN",
      "countryName": "China",
      "stateProv": "Hebei",
      "city": "Shijiazhuang"
  },
  "333.333.333.333": {
      "errorCode": "INVALID_ADDRESS",
      "error": "invalid address '333.333.333.333'"
  }
}`;
  return (
    <>
      <Typography
        variant="h6"
        className={classes.h3}
        style={{ paddingTop: "100px" }}
      >
        Using Javascript in the browsers
      </Typography>
      <Typography variant="body1" className={classes.body}>
        In order to use the API in a web browser you have to use your public
        key. Paid API service users have the option to{" "}
        <Link>enable their public key</Link> in the API dashboard.
      </Typography>
      <Typography variant="h6" className={classes.h3}>
        dbip.js
      </Typography>
      <Typography variant="body1" className={classes.body}>
        dbip.js is the easiest way to write location-aware client side
        applications, it provides easy access to the following features :
      </Typography>

      <List className={classes.list}>
        <ListItem>
          <Link
            href="/api/jsdoc.php#visitorinfo"
            style={{
              fontSize: "1.3rem",
              fontWeight: "300",
              fontFamily: " montserrat",
              color: "#5537ed",
              textDecoration: "none",
            }}
          >
            Visitor IP address lookup
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/api/jsdoc.php#form_autofill"
            style={{
              fontSize: "1.3rem",
              fontWeight: "300",
              fontFamily: " montserrat",
              color: "#5537ed",
              textDecoration: "none",
            }}
          >
            Form elements autofill
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/api/jsdoc.php#currencies"
            style={{
              fontSize: "1.3rem",
              fontWeight: "300",
              fontFamily: " montserrat",
              color: "#5537ed",
              textDecoration: "none",
            }}
          >
            Live conversions into visitor currency
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/api/jsdoc.php#browsergeo"
            style={{
              fontSize: "1.3rem",
              fontWeight: "300",
              fontFamily: " montserrat",
              color: "#5537ed",
              textDecoration: "none",
            }}
          >
            Augmented browser geolocation
          </Link>
        </ListItem>
      </List>
      <br />
      <br />
      <br />

      <Button className={`${classes.lightBlueBtn} ${classes.greyBgLink}`}>
        <i className="fa fa-bookmark" aria-hidden="true"></i>`{"</>"}`Javascript
        API Documentation
      </Button>
      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "100px" }}
      >
        Direct calls with jQuery
      </Typography>
      <Typography variant="body1" className={classes.body}>
        You may also call the API directly using the standard Javascript
        XMLHttpRequest or its jQuery helper :
      </Typography>
      <Typography variant="body1" className={classes.h3}>
        Sample jQuery code
      </Typography>

      <Paper variant="outlined" className={classes.Paper}>
        <pre>{jsCode}</pre>
      </Paper>
      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "100px" }}
      >
        Localization
      </Typography>
      <Typography variant="body1" className={classes.body}>
        The place names are localized using the language information present in
        the standard Accept-Language HTTP request header. This header is
        automatically passed from the client browser to the API if you are using
        the official PHP client or making calls directly from Javascript in the
        browser
      </Typography>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingTop: "20px" }}
      >
        Localized names are available with paid API keys only, and are provided
        for most medium and big cities in the world, and several small ones.
      </Typography>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingTop: "20px" }}
      >
        We have plans to add more localization options in the future, at the
        moment this is available for the following data fields :
      </Typography>

      <List className="feat-list">
        <ListItem>
          <ListItemIcon style={{ color: " #28a745" }}>
            <CheckIcon className="text-success" />
          </ListItemIcon>
          <ListItemText className={classes.body} primary="countryName" />
        </ListItem>
        <ListItem>
          <ListItemIcon style={{ color: " #28a745" }}>
            <CheckIcon className="text-success" />
          </ListItemIcon>
          <ListItemText className={classes.body} primary="stateProv" />
        </ListItem>
        <ListItem>
          <ListItemIcon style={{ color: " #28a745" }}>
            <CheckIcon className="text-success" />
          </ListItemIcon>
          <ListItemText className={classes.body} primary="district" />
        </ListItem>
        <ListItem>
          <ListItemIcon style={{ color: " #28a745" }}>
            <CheckIcon className="text-success" />
          </ListItemIcon>
          <ListItemText className={classes.body} primary="city" />
        </ListItem>
      </List>
      <Typography variant="body1" className={classes.body}>
        You will find below a few samples of localized responses for the above
        example query, along with their respective Accept-Language request
        header :
      </Typography>
      <Grid container spacing={4} style={{ paddingTop: "20px" }}>
        <Grid item xs={12} lg={6}>
          <Paper variant="outlined" className={classes.Paper}>
            <Typography variant="body1" className={classes.data}>
              <b>Accept-Language</b>: en-US
              <br />
              <br />
              <span className="token property">"countryName"</span>:{" "}
              <span className="token string">"United States"</span>,
              <br />
              <span className="token property">"stateProv"</span>:{" "}
              <span className="token string">"California"</span>,
              <br />
              <span className="token property">"district"</span>:{" "}
              <span className="token string">"Santa Clara County"</span>,
              <br />
              <span className="token property">"city"</span>:{" "}
              <span className="token string">"Mountain View"</span>,
              <br />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper variant="outlined" className={classes.Paper}>
            <Typography variant="body1" className={classes.data}>
              <b>Accept-Language</b>: fr-FR
              <br />
              <br />
              <span className="token property">"countryName"</span>:{" "}
              <span className="token string">"États-Unis"</span>,
              <br />
              <span className="token property">"stateProv"</span>:{" "}
              <span className="token string">"Californie"</span>,
              <br />
              <span className="token property">"district"</span>:{" "}
              <span className="token string">"Comté de Santa Clara"</span>,
              <br />
              <span className="token property">"city"</span>:{" "}
              <span className="token string">"Mountain View"</span>,
              <br />
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ paddingTop: "20px" }}>
        <Grid item xs={12} lg={6}>
          <Paper variant="outlined" className={classes.Paper}>
            <Typography variant="body1" className={classes.data}>
              <b>Accept-Language</b>: en-US
              <br />
              <br />
              <span className="token property">"countryName"</span>:{" "}
              <span className="token string">"United States"</span>,
              <br />
              <span className="token property">"stateProv"</span>:{" "}
              <span className="token string">"California"</span>,
              <br />
              <span className="token property">"district"</span>:{" "}
              <span className="token string">"Santa Clara County"</span>,
              <br />
              <span className="token property">"city"</span>:{" "}
              <span className="token string">"Mountain View"</span>,
              <br />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper variant="outlined" className={classes.Paper}>
            <Typography variant="body1" className={classes.data}>
              <b>Accept-Language</b>: fr-FR
              <br />
              <br />
              <span className="token property">"countryName"</span>:{" "}
              <span className="token string">"États-Unis"</span>,
              <br />
              <span className="token property">"stateProv"</span>:{" "}
              <span className="token string">"Californie"</span>,
              <br />
              <span className="token property">"district"</span>:{" "}
              <span className="token string">"Comté de Santa Clara"</span>,
              <br />
              <span className="token property">"city"</span>:{" "}
              <span className="token string">"Mountain View"</span>,
              <br />
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "100px", paddingBottom: "40px" }}
      >
        Batch queries
      </Typography>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingBottom: "20px" }}
      >
        If this is compatible with your usage pattern, you may significantly
        improve query performance by making multiple IP address lookups in a
        single API query.
      </Typography>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingBottom: "20px" }}
      >
        Furthermore, batch queries are given a 10% bonus regarding daily quotas,
        it means that your quota will only be decremented by 9 for a batch query
        of 10 addresses, by 45 for 50 addresses, etc ...{" "}
      </Typography>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingBottom: "20px" }}
      >
        In order to fetch information about multiple IP addresses at once, you
        need to build a request URL of the following form :{" "}
      </Typography>
      <Paper variant="outlined" className={classes.Paper}>
        require "dbip-client.class.php";
      </Paper>
      <Typography variant="body1" className={classes.body}>
        The two parameters are defined as follows :
      </Typography>
      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "15px" }}
      >
        apiKey
      </Typography>
      <Typography variant="body1" className={classes.body}>
        Your API key
      </Typography>
      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "15px" }}
      >
        ipAddressList
      </Typography>
      <Typography variant="body1" className={classes.body}>
        A comma separated list of IPv4 and/or IPv6 address
      </Typography>

      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "100px" }}
      >
        Example
      </Typography>
      <Typography variant="body1" className={classes.body}>
        Sample command line for fetching information about multiple IP address
        in a single API call with the resulting JSON response :{" "}
      </Typography>

      <Paper variant="outlined" className={classes.Paper}>
        <pre>{curlResponse}</pre>
      </Paper>
      <Typography variant="body1" className={classes.body}>
        The server responds with JSON encoded set of key-value pairs where the
        key is an IP address and the value either an object of the format
        described above for single address queries or an error object.
      </Typography>

      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "100px", paddingBottom: "50px" }}
      >
        Get IP address details
      </Typography>
      <Typography variant="body1" className={classes.body}>
        In order to fetch information about an IP address, you need to build a
        request URL of the following form :
      </Typography>
      <Paper variant="outlined" className={classes.Paper}>
        require "dbip-client.class.php";
      </Paper>
      <Typography variant="body1" className={classes.body}>
        The three parameters are defined as follows :
      </Typography>

      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "15px" }}
      >
        apiKey
      </Typography>

      <Typography variant="body1" className={classes.body}>
        Your API key or the string "free" for the free AP I
      </Typography>
      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "15px" }}
      >
        apiKey
      </Typography>

      <Typography variant="body1" className={classes.body}>
        Your API key or the string "free" for the free AP I
      </Typography>
      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "15px" }}
      >
        ipAddress
      </Typography>

      <Typography variant="body1" className={classes.body}>
        IPv4 / IPv6 address or the string "self" to lookup the calling address I
      </Typography>
      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "15px" }}
      >
        propertyName
      </Typography>

      <Typography variant="body1" className={classes.body}>
        [optional] specify a single field name to request instead of the whole
        address details I
      </Typography>

      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "100px" }}
      >
        Example
      </Typography>
      <Typography variant="body1" className={classes.body}>
        Here are a few examples for fetching IP address information from the
        command line :
      </Typography>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingTop: "10px" }}
      >
        Fetch address details from free API
      </Typography>
      <Paper variant="outlined" className={classes.Paper}>
        require "dbip-client.class.php";
      </Paper>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingTop: "30px" }}
      >
        Determine whether to apply EU regulations
      </Typography>
      <Paper variant="outlined" className={classes.Paper}>
        require "dbip-client.class.php";
      </Paper>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingTop: "30px" }}
      >
        Find my own IP address using the free API
      </Typography>
      <Paper variant="outlined" className={classes.Paper}>
        require "dbip-client.class.php";
      </Paper>

      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "100px" }}
      >
        Response details
      </Typography>
      <Typography variant="body1" className={classes.body}>
        The server responds with a JSON encoded object with some or all of the
        following properties :
      </Typography>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="response tabs"
        id="resp_details_tabs"
      >
        <Tab
          className={classes.navLink}
          label={
            <div>
              <FontAwesomeIcon icon={faGift} />
              &nbsp;&nbsp;Free API
            </div>
          }
          value="free"
          aria-controls="response-free"
        />
        <Tab
          className={classes.navLink}
          label={
            <div>
              <FontAwesomeIcon icon={faMapMarker} />
              &nbsp;&nbsp;Basic API
            </div>
          }
          value="basic"
          aria-controls="response-basic"
        />
        <Tab
          className={classes.navLink}
          label={
            <div>
              <FontAwesomeIcon icon={faSitemap} />
              &nbsp;&nbsp;Core API
            </div>
          }
          value="core"
          aria-controls="response-core"
        />
        <Tab
          className={classes.navLink}
          label={
            <div>
              <FontAwesomeIcon icon={faShield} />
              &nbsp;&nbsp;Extended API
            </div>
          }
          value="extended"
          aria-controls="response-extended"
        />
      </Tabs>
      <br />
      <br />
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={12} lg={6}>
          <dl className="dl-horizontal">
            <dt>
              <Typography
                component="span"
                variant="body1"
                className={classes.h3}
              >
                continentCode{" "}
                <code
                  style={{
                    fontSize: "0.95rem",
                    color: "#e83e8c",
                    wordWrap: "break-word",
                  }}
                >
                  String
                </code>
              </Typography>
            </dt>
            <dd>
              <Typography variant="body1" className={classes.body}>
                Requested IP address
              </Typography>
            </dd>
          </dl>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} lg={6} style={{ paddingTop: "4px" }}>
          <Paper variant="outlined" className={classes.Paper}>
            <pre className="code-sample language-json">
              <code>"ipAddress": "123.45.67.89",</code>
            </pre>
          </Paper>
        </Grid>

        {/* First Column */}
        <Grid item xs={12} lg={6}>
          <dl className="dl-horizontal">
            <dt>
              <Typography
                component="span"
                variant="body1"
                className={classes.h3}
              >
                continentCode{" "}
                <code
                  style={{
                    fontSize: "0.95rem",
                    color: "#e83e8c",
                    wordWrap: "break-word",
                  }}
                >
                  char[2]
                </code>
                <Box
                  component="small"
                  sx={{
                    fontSize: "0.95rem",
                  }}
                  className={classes.body}
                >
                  [AF, AS, EU, NA, OC, SA, AN]
                </Box>
              </Typography>
            </dt>
            <dd>
              <Typography variant="body1" className={classes.body}>
                2-letter continent code
              </Typography>
            </dd>
          </dl>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} lg={6} style={{ paddingTop: "4px" }}>
          <Paper variant="outlined" className={classes.Paper}>
            <pre className="code-sample language-json">
              <code>"continentCode": "NA",</code>
            </pre>
          </Paper>
        </Grid>

        {/* First Column */}
        <Grid item xs={12} lg={6}>
          <dl className="dl-horizontal">
            <dt>
              <Typography
                component="span"
                variant="body1"
                className={classes.h3}
              >
                continentName{" "}
                <code
                  style={{
                    fontSize: "0.95rem",
                    color: "#e83e8c",
                    wordWrap: "break-word",
                  }}
                >
                  String
                </code>
              </Typography>
            </dt>
            <dd>
              <Typography variant="body1" className={classes.body}>
                Continent name
              </Typography>
            </dd>
          </dl>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} lg={6} style={{ paddingTop: "4px" }}>
          <Paper variant="outlined" className={classes.Paper}>
            <pre className="code-sample language-json">
              <code>"continentName": "North America",</code>
            </pre>
          </Paper>
        </Grid>

        {/* First Column */}
        <Grid item xs={12} lg={6}>
          <dl className="dl-horizontal">
            <dt>
              <Typography
                component="span"
                variant="body1"
                className={classes.h3}
              >
                continentCode{" "}
                <code
                  style={{
                    fontSize: "0.95rem",
                    color: "#e83e8c",
                    wordWrap: "break-word",
                  }}
                >
                  String
                </code>
              </Typography>
            </dt>
            <dd>
              <Typography variant="body1" className={classes.body}>
                Requested IP address
              </Typography>
            </dd>
          </dl>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} lg={6} style={{ paddingTop: "4px" }}>
          <Paper variant="outlined" className={classes.Paper}>
            <pre className="code-sample language-json">
              <code>"ipAddress": "123.45.67.89",</code>
            </pre>
          </Paper>
        </Grid>

        {/* First Column */}
        <Grid item xs={12} lg={6}>
          <dl className="dl-horizontal">
            <dt>
              <Typography
                component="span"
                variant="body1"
                className={classes.h3}
              >
                continentCode{" "}
                <code
                  style={{
                    fontSize: "0.95rem",
                    color: "#e83e8c",
                    wordWrap: "break-word",
                  }}
                >
                  String
                </code>
              </Typography>
            </dt>
            <dd>
              <Typography variant="body1" className={classes.body}>
                Requested IP address
              </Typography>
            </dd>
          </dl>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} lg={6} style={{ paddingTop: "4px" }}>
          <Paper variant="outlined" className={classes.Paper}>
            <pre className="code-sample language-json">
              <code>"ipAddress": "123.45.67.89",</code>
            </pre>
          </Paper>
        </Grid>

        {/* Repeat the pattern for other rows */}
      </Grid>
      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "100px", paddingBottom: "40px" }}
      >
        Upgrading from version 1.x
      </Typography>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingBottom: "20px" }}
      >
        This version of the API adds several features and breaks compatibility
        with the previous version in a number of ways and altough we will still
        support v1 queries for as long as necessary, it is now considered as
        deprecated and we strongly recommend that you target the latest version
        for new projects and port legacy code to be able to use the new features
        in v2.
      </Typography>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingBottom: "20px" }}
      >
        If you are already using version 1.x of our official query library, you
        will be able to safely upgrade to a newest version and enjoy the new
        features without breaking legacy code.
      </Typography>

      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingBottom: "20px" }}
      >
        The new features in version 2 include :
      </Typography>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="h6" className={classes.body}>
              Additional information
            </Typography>
            <List component="ul" disablePadding>
              <ListItem component="li">
                <Typography className={classes.body}>
                  Continent code and name
                </Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>Country name</Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>
                  Currency code and name
                </Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>Phone prefix</Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>
                  ISO 639 language codes
                </Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>
                  <a
                    href="https://en.wikipedia.org/wiki/Autonomous_system_(Internet)"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.body}
                  >
                    Autonomous System
                  </a>{" "}
                  number and name
                </Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>District name</Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>Zip code</Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>
                  <a
                    href="http://geonames.org"
                    target="_blank"
                    rel="nofollow"
                    className={classes.body}
                  >
                    GeoNames
                  </a>{" "}
                  identifier
                </Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>
                  Crawler and proxy detection, threat level assessment
                </Typography>
              </ListItem>
            </List>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="h6" className={classes.body}>
              Batch queries
            </Typography>
            <List component="ul" disablePadding>
              <ListItem component="li">
                <Typography className={classes.body}>
                  Free users can batch 32 queries per API request
                </Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>
                  Paid keys can batch 256 queries per API request
                </Typography>
              </ListItem>
            </List>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="h6" className={classes.body}>
              Localized place names
            </Typography>
            <List component="ul" disablePadding>
              <ListItem component="li">
                <Typography className={classes.body}>
                  {" "}
                  New York, Moscow, Beijing, ...
                </Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>
                  Нью-Йорк, Москва, Пекин, ...
                </Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>
                  纽约, 莫斯科, 北京, ...
                </Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>
                  न्यूयॉर्क, मास्को, बीजिंग, ...
                </Typography>
              </ListItem>
              <ListItem component="li">
                <Typography className={classes.body}>
                  マンハッタン, モスクワ, 北京市, ...
                </Typography>
              </ListItem>
            </List>
          </ListItemText>
        </ListItem>
      </List>
      <Typography
        variant="h3"
        className={classes.h3}
        style={{ paddingTop: "100px", paddingBottom: "40px" }}
      >
        Contact Us With Additional Questions About Our IP Address Location API
        Developer Documentation
      </Typography>
      <Typography
        variant="body1"
        className={classes.body}
        style={{ paddingBottom: "20px" }}
      >
        If you would like more information about our API that isn’t available in
        our IP geolocation API developer documentation, simply contact us at any
        time and we’ll be able to help you find what you need.
      </Typography>
      
    </>
    
  );
};

export default Devloper1;
