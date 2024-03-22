import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import {
  SvgIcon,
  ListItem,
  List,
  Link,
  Paper,
  Grid,
  Box,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder"; // Import the StarBorderIcon
import StarIcon from "@material-ui/icons/Star"; // Import the StarIcon

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align content to the left
    width: "100%",
    height: "300px", // Adjust height as needed
    marginBottom: theme.spacing(2),
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    backgroundImage:
      'url("https://images.top10.com/f_auto,fl_progressive:semi,q_auto/v1/production/charts/uploads/photo/Header0.20200603074017.20210726123142.20220512111057.jpg")', // Add your image path here
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  darkLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Add your preferred dark layer color here
  },
  headerContentContainer: {
    position: "absolute",
    top: "50%",
    left: 0, // Align content to the left
    transform: "translateY(-50%)", // Center vertically
    maxWidth: "80%", // Limit content width
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    textAlign: "left", // Align text to the left
  },
  lastUpdated: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    textAlign: "left",
    padding: "3px",
    width: "32%",
  },
  checkIcon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(1),
    margin: 0, // Remove any default margin
    padding: 0, // Remove any default padding
    fontFamily: "Arial", // Choose your desired font family
    fontWeight: "bold", // Set font weight to bold
    fontSize: "24px", // Set font size
    fontStyle: "italic", // Set font style to italic
    textTransform: "uppercase", // Transform text to uppercase
    letterSpacing: "1px", // Add letter spacing
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    fontSize: "16px", // Apply font size
  },
  root: {
    marginTop: "17%",
    display: "flex",
    flexDirection: "column",
    padding: "0 15px",
    marginBottom: theme.spacing(2),
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    padding: 0,
    fontFamily: "hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    position: "relative",
    width: "100%",
  },
  ribbon: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },

  logo: {
    padding: "48px 0px 28px 0px",
    height: " 50px",
    width: " 130px",
    objectFit: "contain",
  },
  attributes: {
    paddingLeft: theme.spacing(1),
  },
  backgroundImage: {
    backgroundImage:
      "url(https://images.top10.com/f_auto,fl_progressive:semi,q_auto/v1/production/charts/uploads/photo/Header0.20200603074017.20210726123142.20220512111057.jpg)",

    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    [theme.breakpoints.up("sm")]: {
      height: "330px",
    },
  },
  productRibbon: {
    width: "20%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#035d4c", // Add background color here
    padding: theme.spacing(1), // Add padding for better appearance
    borderRadius: theme.shape.borderRadius, // Add border radius for rounded corners
    color: "white", // Set text color to white
  },
  ribbonIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Head = ( { displayDirection }) => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.darkLayer}></div>

      <div className={classes.headerContentContainer}>
        <Typography variant="h4" className={classes.title}>
          The Best Local Moving Companies in Maharashtra
          <br />
          Take the stress out of local moving
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Take the stress out of local moving. Make your next local or in-state
          move easy and stress-free. <br />
          Read expert reviews and easily compare the best local moving companies
          near you.
        </Typography>
        <div className={classes.lastUpdated}>
          <CheckCircleIcon className={classes.checkIcon} />
          <Typography>Last Updated: Mar 2024</Typography>
        </div>
      </div>

    </div>
  );
};

export default Head;