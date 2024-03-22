import React from "react";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  ThemeProvider,
  Box
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

const useStyles = makeStyles((theme) => ({
  space: {
    margin: "0 2px",
    padding:"15px 30px"
  },
  title: {
   
    textAlign: "center",
    fontSize: "1.0rem",
    fontWeight: 600,
    padding:'20px',
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem", // Increase font size for medium screens and above
    },
  },
  span: {
    color: "#5537ed",
  },
  introItem: {
   
    marginBottom: theme.spacing(4), // Adjust margin for smaller screens
  },
  imgIntro: {
    width: "100%",
    maxWidth: "130px",
    height: "auto",
    maxHeight: "200px",
    marginBottom: theme.spacing(2),
  },
  // gridItem: {
  //   margin: '0 2px', // Adjust the value as per your preference
  //   [theme.breakpoints.down('md')]: {
  //     margin: '0', // No margin for small screens
  //   },
  // },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "130px",
    padding:"0 30px 0px 30px"
  },
  h2: {
    marginTop: 0,
    marginBottom: "0.5rem",
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: "1.4rem",
    fontFamily: "Montserrat",
    position: 'relative',
    width: '100%',
    paddingRight:'15px',
    paddingLeft:'15px',
    justifyContent: 'space-between',

    marginInlineStart: "0px",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem", // Increase font size for medium screens and above
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
  justifyContentBetween: {
    justifyContent: 'space-between',

  },
}));

function Feature() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <section className={classes.space}>
        <Container>
          <Box className={classes.title}>
            <Typography variant="h3" component="h3" gutterBottom>
              Discover DB IP{" "}
              <span className={classes.span}>in a few steps</span>
            </Typography>
            <Typography className={classes.body1} variant="body1">
              The reference for IP address geolocation and network intelligence
              since 2010
            </Typography>
          </Box>
          <Grid container spacing={10}>
            {[
              {
                imgSrc: "https://db-ip.com/img/location-aware-content.svg",
                title: "Location-aware content",
                text: "Know your visitors before they even sign in and customize their experience based on country, state, language, currency, or connection speed. Using our IP geolocation tool, you can also implement geographic restrictions for your sensitive content or improve your ad targeting.",
              },
              {
                imgSrc: "https://db-ip.com/img/traffic-survey.svg",
                title: "Traffic survey",
                text: "Get insights about your core market demographics through IP geolocation, and discover new hidden opportunities and emerging trends. Add location awareness to your network security stack.",
              },
              {
                imgSrc: "https://db-ip.com/img/risk-analysis.svg",
                title: "Risk analysis",
                text: "Defend your infrastructure against cyberattacks, identify risky situations, and account for originating country, proxy, or Tor usage in your scoring process. Compare visitor geolocation with known customer data to detect online fraud and identity theft.",
              },
            ].map((item, index) => (
              <Grid
                key={index}
                item
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className={`${classes.introItem} ${classes.gridItem}`}
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className={classes.imgIntro}
                  loading="lazy"
                  style={{ textAlign: "left" }}
                />
                <div className={classes.textContainer}>
                  <Typography
                    className={`${classes.h2} ${classes.justifyContentBetween}`}
                    component="h5"
                    gutterBottom
                    style={{ textAlign:"left"}}
                  >
                    {item.title}
                  </Typography>   
                  <Typography
                    className={classes.body1}
                    variant="body1"
                    
                    style={{ textAlign: "left" }}
                  >
                    {item.text}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </ThemeProvider>
  );
}

export default Feature;
