import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Card,CardContent,Container,Grid,Typography,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Button,Link,} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const useStyles = makeStyles((theme) => ({
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
    fontSize: "2.1rem",
    fontWeight: 400,
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
  spaceXl: {
    [theme.breakpoints.up("lg")]: {
      padding: "100px 30px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px",
      width:"100%",
    },
  },
  greyBg: {
    background: "#f8f9fa",
  },
  table: {
    fontSize: ".9rem",
    background: "#fff",
    margin: "0px 0 0px",
    borderRadius: "5px",
    "& table": {
      width: "10%",
      marginBottom: "1rem",
      color: "#212529",
      borderCollapse: "collapse",
    },
  },
  table: {
    width: "10%",
    marginBottom: "1rem",
    color: "#212529",
    borderCollapse: "collapse",
    boxSizing: "border-box",
  },
  body: {
    lineHeight: 1.8,
    fontSize: "1.1rem",
    fontWeight: 300,
    fontFamily: "montserrat",
    color: "#27254d",
  },
  // sx: {
  //   background: "#5537ed",
  
  //   marginTop: "3rem",
  //   color: "#fff",
  //   "&.icon-txt": {
  //     position: "relative",
  //   },
  //   "&.download": {
  //     cursor: "pointer",
  //     display: "inline-block",
  //     textTransform: "uppercase",
  //     fontWeight: 600,
  //     fontSize: ".9rem",
  //     backgroundColor: "#27254d",
  //     color: "#212529",
  //     textAlign: "center",
  //     verticalAlign: "middle",
  //     userSelect: "none",
  //     borderColor: "transparent",
  //     transition:
  //       "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
  //     "&:hover": {
  //       backgroundColor: "#5537ed",
  //       color: "#6a6a6a",
  //     },
  //   },
  // },
  container12: {
    position: 'relative',
    left: '0px',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      left: -0,
      width:"100%",
    },
  },
  container13: {
    position: 'relative',
    left: '0px',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      left: -0,
      width:"100%",
    },
  }
}));
function Database() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      {/* <Header /> */}
      <Container>
        <Typography className={classes.title}>
          <Typography className={classes.sub}>DATABASE</Typography>
          <Typography variant="h5" className={classes.subtitle}>
            IP address database download
          </Typography>
          <Typography className={classes.body1} variant="body1">
            The IP geolocation database is updated daily and available in CSV
            and MMDB format.
          </Typography>
        </Typography>
      </Container>

      <section className={`${classes.spaceXl} ${classes.greyBg}`}>
     
          <Grid container spacing={3} justify="space-between">
          <Container>
            
            <Grid item lg={8} sm={8}>
              <Typography
                variant="h2"
                gutterBottom
                className={classes.subtitle}
              >
                IP Geolocation Database
              </Typography>
              <span className={classes.body1}>
                With more than 33 million IPv4 and IPv6 blocks, this is one of 
                the most comprehensive and accurate IP geolocation database
                download available today.
              <br/>
                Tens of thousands of records are added to our IP address
                database or updated every day, and we are always working hard to
                improve the coverage of our data set and its accuracy.
                Ultimately, when you choose our IP geographical location
                database, you’ll get the best available with all of the relevant
                data you need.
              </span>
              </Grid>
              </Container>

              <Container>
              <Grid item lg={8} sm={8}>
              <Container maxWidth={isMobileView ? "sm" : "lg"}   className={classes.container12}>
                <CardContent component={Paper}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <b>Database</b>
                          </TableCell>
                          <TableCell>
                            <b>Formats</b>
                          </TableCell>
                          <TableCell align="right">
                            <b>Size</b>
                          </TableCell>
                          <TableCell align="right">
                            <b>Last Update</b>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody className={classes.body1}>
                        <TableRow>
                          <TableCell>
                            <Typography variant="h6 ">
                              <Link href="/db/ip-to-country">
                                <b>IP to Country</b>
                              </Link>
                            </Typography>
                          </TableCell>
                          <TableCell>CSV, MMDB</TableCell>
                          <TableCell align="right">41.0 MB</TableCell>
                          <TableCell align="right">
                            February 23rd 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="h6">
                              <Link href="/db/ip-to-country">
                                <b>IP to Location</b>
                              </Link>
                            </Typography>
                          </TableCell>
                          <TableCell>CSV, MMDB</TableCell>
                          <TableCell align="right">3.58 GB</TableCell>
                          <TableCell align="right">
                            February 23rd 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="h6">
                              <Link href="/db/ip-to-country">
                                <b>IP to ISP</b>
                              </Link>
                            </Typography>
                          </TableCell>
                          <TableCell>CSV, MMDB</TableCell>
                          <TableCell align="right">1.09 GB</TableCell>
                          <TableCell align="right">
                            February 23rd 2024
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Typography variant="h6">
                              <Link href="/db/ip-to-country">
                                <b>IP to Location + ISP</b>
                              </Link>
                            </Typography>
                          </TableCell>
                          <TableCell>CSV, MMDB</TableCell>
                          <TableCell align="right">5.69 GB</TableCell>
                          <TableCell align="right">
                            February 23rd 2024
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Container>
              </Grid>
</Container>

<Container>
              <Grid item lg={8} sm={12} >
              <Typography
                variant="h2"
                gutterBottom
                className={classes.subtitle}
                style={{ padding: "0px",position:"relative",right:"10px" }}
              >
                IP Address Database<br/> Features Comparison
              </Typography>
              <Container  maxWidth={isMobileView ? "sm" : "lg"}   className={classes.container13}>
              <CardContent >
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center" >
                          <b>Country</b>
                        </TableCell>
                        <TableCell align="center" >
                          <b>Location</b>
                        </TableCell>
                        <TableCell align="center" >
                          <b>ISP</b>
                        </TableCell>
                        <TableCell align="center" >
                          <b>Location + ISP</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell >
                          Continent and Country
                        </TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell >
                          State or Province
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell >
                          City and Zip code
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell >
                          Latitude and Longitude
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell >
                          Time Zone
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell >
                          Geoname ID
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell >
                          ISP and Organization
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell >
                          AS number and Org.
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell >
                          Connection Type
                        </TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <CheckIcon
                            sx={{ fontSize: "24px", color: "success.main" }}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
              </Container>
              
              {/* <Typography
                variant="h2"
                gutterBottom
                className={classes.subtitle}
                style={{ padding: "25px" }}
              >
                Free IP address location database downloads
              </Typography>
              <Typography className={classes.body1}>
                The DB-IP Lite databases are subsets of the commercial database
                with reduced coverage and accuracy. Lite IP address location
                database downloads are updated monthly and distributed under the
                Creative Commons Attribution License.
              </Typography> */}

              <div className={classes.icon}>
                <Button
                  variant="contained"
                  component="a"
                  href="/db/lite.php"
                  className={classes.sx}
                >
                  Free IP databases
                </Button>
              </div>

              {/* Add other content */}
            </Grid>
            </Container>
            <Grid item lg={3}>
              {/* <div className="sticky-top">
                <Paper className="menu shadow">
                  <Typography variant="h6">Database</Typography>
                  <ul className="nav sidenav flex-column">
                    <li className="nav-item">
                      <Link href="/db/" className="nav-link active">
                        Database
                      </Link>
                    </li>
                  
                  </ul>
                </Paper>
               
              </div> */}
            </Grid>
          </Grid>
        {/* </Container> */}
      </section>
      <Footer />
    </div>
  );
}

export default Database;
