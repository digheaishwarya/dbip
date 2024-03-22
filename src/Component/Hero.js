import {
  Grid,
  Link,
  Typography,
  Popover,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { ListItem } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Menu as MenuIcon, ExpandLess, ExpandMore } from "@mui/icons-material";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import AdbIcon from "@mui/icons-material/Adb";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const pages = ["API", "Developers", "Database", "Tools", "Statistics", "FAQ"];

const useStyles = makeStyles((theme) => ({
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
const Hero = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
    ipAddress: "152.58.16.200",
    continentCode: "AS",
    continentName: "Asia",
    countryCode: "IN",
    countryName: "India",
    isEuMember: false,
    currencyCode: "INR",
    currencyName: "Rupee",
    phonePrefix: "91",
    languages: [
      "en-IN",
      "hi",
      "bn",
      "te",
      "mr",
      "ta",
      "ur",
      "gu",
      "kn",
      "ml",
      "or",
      "pa",
      "as",
      "bh",
      "sat",
      "ks",
      "ne",
      "sd",
      "kok",
      "doi",
      "mni",
      "sit",
      "sa",
      "fr",
      "lus",
      "inc",
    ],
    stateProvCode: "MH",
    stateProv: "Maharashtra",
    district: "Nagpur",
    city: "Nagpur",
    geonameId: 1262180,
    latitude: 21.1463,
    longitude: 79.0849,
    gmtOffset: 5.5,
    timeZone: "Asia/Kolkata",
    weatherCode: "INXX0093",
    asNumber: 55836,
    asName: "RELIANCEJIO-IN",
    isp: "Reliancejio",
    linkType: "wireless",
    usageType: "consumer",
    organization: "Reliance Jio Infocomm Limited",
    isCrawler: false,
    isProxy: false,
    threatLevel: "low",
  };
  const ContainerWithBackground = styled(Container)({
    backgroundImage: `url('https://db-ip.com/img/hero-bg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });
  const classes = useStyles();
  const isLaptopView = useMediaQuery('(min-width: 1024px)');
  return (
    <React.Fragment>
      <ContainerWithBackground maxWidth="xl">
        
        <Grid container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{
              marginTop: "0px",
              padding:{md:"20px",sm:"0px"}
            
            }}
          >
            <Grid item xs={12} lg={5} textAlign="left" sx={{ color: "white" }}>
              <Typography sx={{    color:' #55d4da', fontWeight:' 600'}}>DBIP</Typography>
              <Typography variant="h4" className="title" sx={{ color:' #fff', fontSize:' 42.3px', fontWeight: '500', margin:'0 0 9px'}}>
                IP geolocation API
                <br />
                and database
              </Typography>
              <Typography
                variant="body1"
                className={classes.productDescription}
                sx={{ mt: 3 , textAlign: 'left',
                marginBottom: 35,
                padding:'20px 0 0',
                color: '#cdd0e8',
                margin:'0 0 35px',
                fontFamily: 'montserrat',
                fontSize: '1.1rem',}}
              >
                The ultimate resource for IP address geolocation and network
                intelligence...
              </Typography>
              <Button
                sx={{
                  mt: 3,
                  padding: "12px",
                  mr: "10px",
                  background: "#55d4da;",
                  fontWeight: "bold",
                }}
                href="/api/"
                variant="contained"
                color="primary"
              >
                Try for free
              </Button>
              <Button
                sx={{
                  mt: 3,
                  padding: "12px",
                  background: "white",
                  color: "#154360 ",
                  fontWeight: "bold",
                }}
                href="/api/doc.php"
                variant="contained"
                color="primary"
              >
                Learn more
              </Button>
            </Grid>

            <Grid item xs={12} lg={6} sx={{ mt: 3, marginTop: "100px" }}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
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
                      padding: isMobileView ? "2px" : "50px",
                    }}
                  >
                    <form>
                      <div>
                        <Paper sx={{background:"#342fa9"}}>
                          <img src="https://db-ip.com/img/browser.svg" width="100%"/>
                          <InputBase
                          sx={{width:"100%",height:"20px",padding:"10px",margin:"10px", color:'#fff' ,padding: '10px 20px 7px'}}
                            placeholder="Lookup IP Address or AS Number"
                            inputProps={{ "aria-label": "search" }}
                          />
                          <div>
                            <SearchIcon sx={{ position: "relative", left: isLaptopView ? "500px" : "280px", top: "-30px" ,color:'#fff'}}  />
                          </div>
                        </Paper>
                      </div>  
                    </form>
                    <Paper elevation={3} className="code" textAlign="left">
                      <pre
                        style={{
                          maxHeight: "25rem",
                          overflowY: "auto",
                          marginTop: "0px",
                        }}
                      >
                        <code style={{ textAlign: "left" }}>
                          {JSON.stringify(codeData, null, 2)}
                        </code>
                      </pre>
                    </Paper>
                    <div className="demo-examples mt-5 d-flex justify-content-between align-items-stretch">
                      <Button
                        href="#"
                        variant="contained"
                        color="primary"
                        sx={{ width: "100px", height: "30px" }}
                        className="demo-ip"
                      >
                        Your IP
                      </Button>
                      <Button
                        href="#"
                        variant="contained"
                        sx={{
                          background: "white",
                          color: "black",
                          width: "100px",
                          height: "30px",
                          ml: 1,
                        }}
                        className="demo-ip demo-navgeo"
                      >
                        Your IP
                      </Button>
                      <Button
                        href="#"
                        variant="contained"
                        sx={{
                          background: "white",
                          color: "black",
                          width: "100px",
                          height: "30px",
                          ml: 1,
                        }}
                        className="demo-input"
                        data-demo-input="8.8.8.8"
                      >
                        8.8.8.8
                      </Button>
                      <Button
                        href="#"
                        variant="contained"
                        sx={{
                          background: "white",
                          color: "black",
                          width: "200px",
                          height: "30px",
                          ml: 1,
                        }}
                        className="demo-input"
                        data-demo-input="2620:0:1c00:0:face:b00c::"
                      >
                        2620:1c00:face:b00c::
                      </Button>
                      <Button
                        href="#"
                        variant="contained"
                        sx={{
                          background: "white",
                          color: "black",
                          width: "100px",
                          height: "30px",
                          ml: 1,
                          display: { xs: "none", md: "none" },
                        }}
                        className="demo-input"
                        data-demo-input="AS7018"
                      >
                        AS7018
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContainerWithBackground>
    </React.Fragment>
  );
};

export default Hero;