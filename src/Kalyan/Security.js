import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import { Autocomplete } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    zIndex: -1,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundImage:
      "url(https://images.top10.com/f_auto,fl_progressive:semi,q_auto/v1/production/charts/uploads/photo/BGC_DT_H.20240131143621.jpg)",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "center", // Adjust background position for smaller screens
    },
  },
  title: {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    fontFamily: "hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif",
    overflow: "hidden",
    display: "block",
    maxWidth: 700,
    lineHeight: "36px",
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "800px",
    letterSpacing: "-0.1px",
    [theme.breakpoints.up("sm")]: {
      marginTop: 40,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(2),
  },
  subtitle: {
    margin: "0",
    fontFamily: "hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif",
    fontWeight: "400",
    lineHeight: "28px",
    fontSize: "18px",
    letterSpacing: "-0.1px",
    color: "#FFFFFF",
    maxWidth: 700,
    [theme.breakpoints.up("sm")]: {
      marginTop: "20",
      marginBottom: "unset",
      width: "unset",
      display: "block",
      WebkitLineClamp: "unset",
      WebkitBoxOrient: "unset",
    },
  },
}));

const states = [
  { label: "Alabama", value: "AL" },
  { label: "Alaska", value: "AK" },
  // Add more states here...
];

const Security = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid contain item={2}>
        <Grid item xs={12} lg={6} style={{ margin: "0 16px" }}>
          <Typography variant="h4" className={classes.title}>
            Best Background Check Services of 2024
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Search people, social media posts, public records and the deep web{" "}
            <br></br>to arm yourself with information—quickly and easily.
          </Typography>
        </Grid>
      </Grid>
      <Box
        style={{
          padding: "16px",
          backgroundColor: "#f5f5f5",
          boxShadow: "0 0 10px rgba(0,0,0,0.32)",
          maxWidth: "736",
          margin: "20px 0 0 0",
        }}
      >
        <div className="bg-search">
          <Typography className={classes.subtitle} style={{ color: "#2D2D2D" }}>
            <strong>Start Here</strong> - Try searching a friend, relative, or
            someone else you might know.
          </Typography>
          <Box>
            <Box className="bg-search-form__box">
              <Box className="bg-search-form__input__wrap">
                <TextField
                  type="text"
                  placeholder="First Name"
                  id="bg-search-form--first-name"
                  name="firstName"
                  inputProps={{
                    "data-form-min-length": 3,
                    "data-form-required": true,
                  }}
                  autoComplete="no"
                />
                <span className="bg-search-form__error">
                  At least 2 chars long
                </span>
              </Box>
              <Box className="bg-search-form__input__wrap">
                <TextField
                  type="text"
                  placeholder="Last Name"
                  id="bg-search-form--last-name"
                  name="lastName"
                  inputProps={{
                    "data-form-min-length": 3,
                    "data-form-required": true,
                  }}
                  autoComplete="no"
                />
                <span className="bg-search-form__error">
                  At least 2 chars long
                </span>
              </Box>
              <Box className="bg-search-form__input__wrap bg-search-form__input__wrap__state">
                <Autocomplete
                  id="bg-search-form--state"
                  options={states}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="All States" />
                  )}
                />
                <span className="bg-search-form__error">
                  Please choose a state
                </span>
              </Box>
              <Box className="bg-search-form__input__wrap">
                <Button
                  href="/v?product_id=643&amp;url=https%3A%2F%2Fhtrk1.beenverified.com%2Faff_c%3Foffer_id%3D634%26aff_id%3D1295%26fn%3D%7Bfirst_name%7D%26ln%3D%7Blast_name%7D%26state%3D%7Bstate%7D%26aff_sub%3Dbv_dt_%5Btracking-subid%5D%26aff_sub2%3D%7Baff_sub2%7D%26aff_sub3%3D%7Baff_sub3%7D&amp;cms_platform=xsite&amp;rank=1&amp;bi=%7B%22blrs%22%3A66886%2C%22utm_source%22%3A%22Other%22%7D&amp;uid=j6UZHAu1wYA5xJ24097q&amp;riid=OTfhO0dXIZRIex215mmk&amp;tkn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY21zIiwidmVyc2lvbiI6MSwiaGFzaCI6Im9uL25KQ29EdmZ1QTBWQWJ4WU1nbnRVUm1DND0iLCJpYXQiOjE3MDk2MDY3NjUsImV4cCI6MTcwOTY5MzE2NX0.RUNhnFdC6VmufibRoG5ZQA2SlGK1zapN50PsQSL1luY&amp;gid=1386565214.1707235425"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  className="bg-search-form__cta nilink"
                >
                  <span className="cta-button__text">Search Now</span>
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Security;
