import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Link,
  Divider,
  Paper,
  Box,
} from "@material-ui/core";
import Devloper1 from "./Devloper1";
import Header from "../Layout/Header";
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
  body1: {
    fontSize: "1rem",
    fontWeight: 300,
    fontFamily: "Montserrat",
    lineHeight: 1.8,
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
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
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
    background: "#f92672",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: ".9rem",
    padding: "15px 30px",
    marginTop: "auto",
  },
  greyBgLink: {
    color: "#fff",
  },
  h3: {
    marginBottom: "0.5rem",
    fontWeight: "500",
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
  },
}));
const dbipCode = `require "dbip-client.class.php";

// Replace the sample key below with your private API key
DBIP\\APIKey::set("a05p3c1m3n79875p3c1m3nd26cd0n07u5307ac5d");
$addrInfo = DBIP\\Address::lookup($_SERVER["REMOTE_ADDR"]);`;

function Developer() {
  const classes = useStyles();

  return (
    <>
      {/* <Header /> */}
      <Box>
        <Typography className={classes.title}>
          <Typography className={classes.sub}>DOCUMENTATION</Typography>
          <Typography variant="h5" className={classes.subtitle}>
            DB-IP geolocation API developer
          </Typography>
          <Typography className={classes.body1} variant="body1">
            Documentation for IP Geolocation API version 2 (r5578)
          </Typography>
        </Typography>
      </Box>

      <section className={classes.root}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} lg={8}>
              <div id="bklet">
                <Typography variant="body1" className={classes.body}>
                  The DB-IP API is exposed via RESTful web services and makes
                  use of the standard JSON encoding.
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  This geolocation API developer documentation will show you how
                  to query the API using either the officially supported PHP
                  client library or direct API calls over HTTP or HTTPs, and how
                  to use the information in your application.
                </Typography>
                {/* <Typography variant="body1"  className={classes.body}>
              Simply drag the <i>Lookup IP addresses</i> button to your bookmarks toolbar to install this IP geolocation web tool.
            </Typography> */}
                <br />
                <Typography variant="h4" className={classes.subtitle}>
                  Getting started
                </Typography>
                <Typography variant="h6" className={classes.h3}>
                  PHP with API client
                </Typography>
                <Typography className={classes.body}>
                  You can start using the API with just two lines of code, first
                  include the <Link>API client library :</Link>
                </Typography>

                <Paper variant="outlined" className={classes.Paper}>
                  require "dbip-client.class.php";
                </Paper>

                <Typography className={classes.body}>
                  ... and use it to lookup visitor IP address information :
                </Typography>
                <Paper variant="outlined" >
                <Typography className={classes.Paper} style={{ overflowX: 'scroll'}}> $addrInfo = DBIP\Address::lookup($_SERVER["REMOTE_ADDR"]);</Typography> 
                </Paper>
                <Typography className={classes.body}>
                  The <span style={{ color: "#EC7063" }}>$addrInfo </span>
                  variable is now populated with an object like this one :
                </Typography>
                <Paper variant="outlined" className={classes.Paper}>
                  <pre
                    class="code-sample language-php"
                    style={{ fontSize: "15px", marginLeft: "30px" }}
                  >
                    <span style={{ color: "#91B3FF" }}>var_dump</span>(
                    <span style={{ color: "#EC7063" }}>$addrInfo</span>);
                    <br />
                    <br />
                    <span style={{ color: "#91B3FF" }}>object</span>(stdClass)#2
                    (7) <br />[
                    <span style={{ color: "#EC7063" }}>"ipAddress"</span>]={">"}
                    <br />
                    <span style={{ color: "#91B3FF" }}>string</span>(7)
                    <span style={{ color: "#EC7063" }}>"8.8.8.8"</span>
                    <br />[
                    <span style={{ color: "#EC7063" }}>"continentCode"</span>]=
                    {">"}
                    <br />
                    <span style={{ color: "#91B3FF" }}>string</span>(2){" "}
                    <span style={{ color: "#EC7063" }}>"NA"</span>
                    <br />[
                    <span style={{ color: "#EC7063" }}>"continentName"</span>]=
                    {">"}
                    <br />
                    <span style={{ color: "#91B3FF" }}>string</span>(13){" "}
                    <span style={{ color: "#EC7063" }}>"North America"</span>
                    <br />[
                    <span style={{ color: "#EC7063" }}>"countryCode"</span>]=
                    {">"}
                    <br />
                    <span style={{ color: "#91B3FF" }}>string</span>(2) "US"
                    <br />[
                    <span style={{ color: "#EC7063" }}>"countryName"</span>]=
                    {">"}
                    <br />
                    <span style={{ color: "#91B3FF" }}>string</span>(13){" "}
                    <span style={{ color: "#EC7063" }}>"United States"</span>
                    <br />[<span style={{ color: "#EC7063" }}>"stateProv"</span>
                    ]={">"}
                    <br />
                    <span style={{ color: "#91B3FF" }}>string</span>(10){" "}
                    <span style={{ color: "#EC7063" }}>"California"</span>
                    <br />[<span style={{ color: "#EC7063" }}>"city"</span>]=
                    {">"}
                    <br />
                    <span style={{ color: "#91B3FF" }}>string</span>(13){" "}
                    <span style={{ color: "#EC7063" }}>"Mountain View"</span>
                    <br />
                  </pre>
                </Paper>
                <Typography variant="h3" className={classes.h3}>
                  Adding an API key
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Now this was only the free API, let's use an API key so we can
                  get much more useful data in the API response. At this point
                  in the IP location API developer documentation, we’ll go over
                  how to add the API key.
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  In order to do this we just call{" "}
                  <span style={{ color: "#EC7063" }}>DBIP\APIKey::set()</span>{" "}
                  after loading the client library and before making address
                  requests :
                </Typography>

                <Paper >
                  <pre
                    className={`${classes.Paper} language-php`}
                    style={{ overflowX: 'scroll'}}
                  >
                    {dbipCode}
                  </pre>
                </Paper>
                <Typography className={classes.body}>
                  The <Link>response object</Link> now has all the Extended API
                  information, it worked !
                </Typography>
                <Paper>
                  <pre
                    className={`${classes.Paper} language-php`}
                    style={{ height: "300px", overflowY: "auto" }}
                  >
                    <code className="language-php">
                      <span className="token function">object</span>
                      <span className="token punctuation">(</span>stdClass
                      <span className="token punctuation">)</span>
                      <span className="token shell-comment comment">
                        #1 (30) {"{"}
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "ipAddress"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">12</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "123.45.67.89"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "continentCode"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">2</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "NA"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "continentName"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">13</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "North America"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "countryCode"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">2</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "US"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "countryName"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">13</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "United States"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "isEuMember"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">bool</span>
                      <span className="token punctuation">(</span>
                      <span className="token boolean">false</span>
                      <span className="token punctuation">)</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "currencyCode"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">3</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "USD"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "currencyName"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">6</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "Dollar"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "phonePrefix"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">1</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "1"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "languages"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token keyword">array</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">4</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token punctuation">{"{"}</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token number">0</span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">5</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "en-US"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token number">1</span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">5</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "es-US"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token number">2</span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">3</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "haw"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token number">3</span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">2</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "fr"
                      </span>
                      <br />
                      <span className="token punctuation">{"}"}</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "stateProv"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">10</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "California"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "district"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">18</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "Santa Clara County"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "city"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">13</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "Mountain View"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "geonameId"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">int</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">5375480</span>
                      <span className="token punctuation">)</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "zipCode"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">5</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "94043"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "latitude"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">float</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">37.3861</span>
                      <span className="token punctuation">)</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "longitude"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">float</span>
                      <span className="token punctuation">(</span>
                      <span className="token operator">-</span>
                      <span className="token number">122.084</span>
                      <span className="token punctuation">)</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "gmtOffset"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">int</span>
                      <span className="token punctuation">(</span>
                      <span className="token operator">-</span>
                      <span className="token number">7</span>
                      <span className="token punctuation">)</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "timeZone"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">19</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "America/Los_Angeles"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "weatherCode"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">8</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "USCA0746"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "asNumber"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">int</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">16591</span>
                      <span className="token punctuation">)</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "asName"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">12</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "GOOGLE-FIBER"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "isp"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">17</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "Google Fiber Inc."
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "linkType"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">4</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "fttx"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "usageType"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">4</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "consumer"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "organization"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">17</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "Google Fiber Inc."
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "isCrawler"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">bool</span>
                      <span className="token punctuation">(</span>
                      <span className="token boolean">false</span>
                      <span className="token punctuation">)</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "isProxy"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">bool</span>
                      <span className="token punctuation">(</span>
                      <span className="token boolean">true</span>
                      <span className="token punctuation">)</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "proxyType"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">3</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "vpn"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "threatLevel"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">4</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "high"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "threatDetails"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token keyword">array</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">5</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token punctuation">{"{"}</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token number">0</span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">7</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "attack"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token number">1</span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">12</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "brute_force"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token number">2</span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">5</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "proxy"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token number">3</span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">4</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "proxy"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token number">4</span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">5</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "proxy"
                      </span>
                      <br />
                      <span className="token punctuation">{"}"}</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "network"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token keyword">array</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">4</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token punctuation">{"{"}</span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "networkAddress"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">13</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "123.45.67.0"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "networkType"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">9</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "residential"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "carrier"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">3</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "ISP"
                      </span>
                      <br />
                      <span className="token punctuation">[</span>
                      <span className="token double-quoted-string string">
                        "organization"
                      </span>
                      <span className="token punctuation">]</span>
                      <span className="token operator">=</span>
                      <span className="token operator">&gt;</span>
                      <br />
                      <span className="token function">string</span>
                      <span className="token punctuation">(</span>
                      <span className="token number">17</span>
                      <span className="token punctuation">)</span>{" "}
                      <span className="token double-quoted-string string">
                        "Google Fiber Inc."
                      </span>
                      <br />
                      <span className="token punctuation">{"}"}</span>
                      <br />
                      <span className="token punctuation">{"}"}</span>
                      <br />
                    </code>
                  </pre>
                </Paper>
                <Devloper1 />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Developer;
