import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const faqs = [
  {
    category: "General",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  {
    category: "General",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  {
    category: "General",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  {
    category: "General",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  // Add more FAQ objects as needed
];
const faqs1 = [
  {
    category: "Download",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  {
    category: "Download",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  {
    category: "Download",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  {
    category: "Download",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },

  // Add more FAQ objects as needed
];
const faqs2 = [
  {
    category: "API",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  {
    category: "API",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  {
    category: "API",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  {
    category: "API",
    question:
      "Where can I find a list of the country codes present in the database or returned by the API?",
    answer:
      "The country codes in our databases and API services are standard ISO 3166-1 alpha-2 codes with the addition of two non-standard codes: XK which is used by the European Commission, Switzerland, the Deutsche Bundesbank, SWIFT, and other organizations as a temporary country code for Kosovo, and ZZ which is assigned to address blocks that have by definition no location and owner such as private or multicast IP addresses.",
  },
  // Add more FAQ objects as needed
];
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
  },
  subtitle: {
    fontSize: "2.7rem",
    fontWeight: 600,
    marginBottom: "20px",
  },
  spaceXL: {
    padding: "30px 160px",
    margin: "0px 0px 12px",
    background: "#f8f9fa",
    [theme.breakpoints.down("sm")]: {
      padding: "25px 15px",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 600,
    margin: "0 30px 20px 0",
    borderRadius: 5,
    textTransform: "uppercase",
    padding: 7,
    fontSize: "0.8rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0 0 20px 0", // Adjust margin for mobile view
      flexDirection: "column",
    },
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 300,
    fontFamily: "Montserrat",
    lineHeight: 1.6,
    color: "#6a6a6a",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
  },
  button: {
    color: "#fff",
    borderRadius: 5,
    textTransform: "uppercase",
    padding: 7,
    margin: "0 30px 20px 0",
    fontSize: ".8rem",
    background: "#5537ed",
    [theme.breakpoints.down("sm")]: {
      height: "20px", // Adjust the height for small screens
      "& .MuiButtonBase-root span": {
        margin: "0 30px 20px 0",
      },
    },
  },
}));

function Faq() {
  const classes = useStyles();

  return (
    <div>
      {/* <Header /> */}
      <Box>
        <Typography className={classes.title}>
          <Typography className={classes.sub}>FAQ</Typography>
          <Typography variant="h5" className={classes.subtitle}>
            Geolocation API and Database FAQ
          </Typography>
          <Typography className={classes.body1} variant="body1">
            Frequently Asked Questions about the DB-IP databases and API
            services{" "}
          </Typography>
        </Typography>
      </Box>
      <div className={classes.spaceXL}>
        <br />
        <br />
        <br />
        <Box>
          {faqs.map((faq, index) => (
            <Accordion key={index} style={{ marginBottom: "20px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  className={classes.button}
                  style={{ background: "#5537ed" }}
                >
                  {faq.category}
                </Typography>
                <Typography
                  className={classes.heading}
                  style={{ color: "#5537ed" }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body1" className={classes.body1}>
                      {faq.answer}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box>
          {faqs1.map((faq, index) => (
            <Accordion key={index} style={{ marginBottom: "20px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  className={classes.button}
                  style={{ background: "#55d4da" }}
                >
                  {faq.category}
                </Typography>
                <Typography
                  className={classes.heading}
                  style={{ color: "#55d4da" }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body1" className={classes.body1}>
                      {faq.answer}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box>
          {faqs2.map((faq, index) => (
            <Accordion key={index} style={{ marginBottom: "20px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  className={classes.button}
                  style={{ background: "#fd7e14" }}
                >
                  {faq.category}
                </Typography>
                <Typography
                  className={classes.heading}
                  style={{ color: "#fd7e14" }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body1" className={classes.body1}>
                      {faq.answer}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
