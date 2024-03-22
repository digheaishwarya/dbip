import React from 'react';
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Box
} from "@mui/material";
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import { AccountBalance, CheckCircle, Public } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(10),
  },
  title: {
    marginBottom: theme.spacing(4),
    fontSize: "1.4rem",
    fontFamily: "Montserrat",
    fontWeight: 600,
    lineHeight: 1.2,
    paddingTop: "20px",
    paddingBottom: "20px",
    fontWeight: "bold",
  },
  icon: {
    width: "60px",
    height: "auto",
    margin: "0 50px 50px",
  },
  sub: {
    textTransform: "uppercase",
    fontSize: "1.7rem",
    fontWeight: 600,
    marginBottom: 5,
    color: "#55d4da",
    fontWeight: "bold"
    
  },
  secondaryText: {
    fontSize: "1.3rem",
    fontFamily: "montserrat",
    lineHeight: 1.6,
    color: '#6a6a6a',
  },
  // New styles for responsive design
  ipad: {
    position: "absolute",
    [theme.breakpoints.up('md')]: {
      right: "5px",
      top: "45%",
      marginTop: "-45%",
      width: "130%",
    },
    [theme.breakpoints.down('sm')]: {
      position: "inherit",
      right: "inherit",
      top: "inherit",
      marginTop: 0,
      width: "100%",
      height: "auto",
    },
  },
}));

function StrengthSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section >
      <Box className={classes.container}>
        <Grid container spacing={4} direction={isSmallerScreen ? "column-reverse" : "row"}>
          <Grid item lg={6} sx={{ position: "relative", overflow: "hidden" }}>
            <img
              loading="lazy"
              src="https://db-ip.com/img/ipad.png"
              alt="iPad"
              className={`ipad ${classes.ipad}`}
              style={{ paddingTop: '100px' }} 
               // Apply responsive class
            />
          </Grid>
          <Grid item lg={6}>
            <Typography className="title head left" marginRight={'4px'}>
              <Typography  variant="h5" className={classes.sub}>Our Strength</Typography>
              <Typography variant="h4" className={classes.title}>
                Why choose DB-IP
              </Typography>
              <List className="step">
                {steps.map((step, index) => (
                  <ListItem key={index} disablePadding>
                    <img
                      src={step.icon}
                      alt="Your Icon"
                      className={classes.icon}
                    />
                    <ListItemText
                      variant="h4"
                      primary={
                        <span
                          style={{ fontSize: "1.7rem" ,paddingBottom:'8px', paddingTop:'20px'}}
                          className="MuiTypography-root MuiListItemText-primary MuiTypography-h4 MuiTypography-displayBlock"
                        >
                          {step.primary}
                        </span>
                      }
                      secondary={
                        <span className={classes.secondaryText}  >
                          {step.secondary}
                        </span>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
const steps = [
  {
    icon: "https://db-ip.com/img/step1.svg",
    primary: "Experience and innovation",
    secondary: "Since 2010 our passionate team works hard to provide the most comprehensive and accurate IP address database that has grown to more than 33 million IPv4 and IPv6 blocks.",
  },
  {
    icon: "https://db-ip.com/img/step2.svg",
    primary: "Accurate and up to date",
    secondary: "We aggregate data from a large number of sources and through agreements with popular ISPs. We constantly evolve our machine learning models for more accurate IP address geolocation.",
  },
  {
    icon: "https://db-ip.com/img/step3.svg",
    primary: "Ultra scalable global network",
    secondary: "Our server infrastructure is highly redundant and spans over multiple continents. If you need more than our standard API plans we can build your own private API infrastructure to handle any kind of load or special needs, just contact us.",
  },
];
export default StrengthSection;
