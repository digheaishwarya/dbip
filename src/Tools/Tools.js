import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
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
import BookmarkIcon from "@mui/icons-material/Bookmark";

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
    padding: "50px 30px",
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  codeSample: {
    backgroundColor: "white",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
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
}));

function Tools() {
  const classes = useStyles();

  return (
    <div>
      {/* <Header /> */}
      <Box>
        <Typography className={classes.title}>
          <Typography className={classes.sub}>TOOLS</Typography>
          <Typography variant="h5" className={classes.subtitle}>
            Free IP geolocation web tools
          </Typography>
          <Typography className={classes.body1} variant="body1">
            Free IP geolocation tools for you and your website
          </Typography>
        </Typography>
      </Box>

      <section className={classes.root}>
        <Box>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} lg={8}>
              <div id="bklet">
                <Typography variant="h3" className={classes.h3}>
                  Bookmarklet
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Do you often find yourself browsing log files or pages
                  containing meaningless IP address and having to cut and paste
                  too much in order to search for useful information?
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Thanks to our free bookmarklet, in addition to our other free
                  IP geolocation tools, you can now obtain all the data you need
                  without leaving your web browser tab, with a single click to
                  your bookmarks toolbar.
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Simply drag the <i>Lookup IP addresses</i> button to your
                  bookmarks toolbar to install this IP geolocation web tool.
                </Typography>
                <br />
                <Typography variant="h4" className={classes.h3}>
                  Try and adopt it
                </Typography>
                <Button
                  className={`${classes.pinkButton} ${classes.greyBgLink}`}
                  variant="contained"
                  color="primary"
                >
                  <BookmarkIcon /> Lookup IP addresses
                </Button>
                <br />
                <br />
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" className={classes.h3}>
                      Sample content with IP addresses
                    </Typography>
                    <Typography variant="body1" className={classes.body1}>
                      Here is one IP address: 12.34.56.78
                      <br />
                      And here is another: 78.90.12.34
                      <br />
                      More addresses: 89.12.34.56 123.45.67.89 and 195.67.89.123
                      <br />
                      And then some IPv6: 2001:41d0:9:b16a::1
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <br />
              <br />
              <div id="cflags">
                <Typography variant="h3" className={classes.h3}>
                  Country flags
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Do you already love our bookmarklet, but wonder how to add
                  those nice country flags to your own website without asking
                  your users to install and click a bookmark in their browser?
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  You can include it for free by simply adding this single line
                  to the header of your page HTML code:
                </Typography>
                <Paper variant="outlined" className={classes.codeSample}>
                  &lt;script src="//db-ip.com/tools/showipcountry.js"
                  async&gt;&lt;/script&gt;
                </Paper>
              </div>
              <br />
              <Typography variant="h4" className={classes.h3}>
                Use These Helpful Free IP Geolocation Tools Today
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Using these IP geolocation web tools, you can maintain more
                efficiency and add country flags to your website without any
                need to spend extra money.
              </Typography>
            </Grid>
            <Grid item xs={12} lg={3}>
              {/* <div id="nav_col" className="sticky-top">
              <div className="menu shadow">
                <Typography variant="h6">Navigation</Typography>
                <Divider />
                <ul className="nav sidenav flex-column">
                  <li className="nav-item"><Link href="#bklet" color="inherit">Bookmarklet</Link></li>
                  <li className="nav-item"><Link href="#cflags" color="inherit">Country flags</Link></li>
                </ul>
              </div>
            </div> */}
            </Grid>
          </Grid>
        </Box>
      </section>
      <Footer />
    </div>
  );
}

export default Tools;
