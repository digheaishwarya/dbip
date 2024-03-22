import React from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spaceBottom: {
    textAlign: "center",
  },
  body: {
    fontSize: "1.3rem", // Adjust font size as needed
    fontFamily: "montserrat",
    lineHeight: 2.3,
    color: " #6a6a6a",
    padding: "30px",
  },
  title: {
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "1.4rem",
    fontWeight: 600,
    marginBottom: "10px",
    color: "#5537ed",
  },
  image: {
    maxWidth: "100%", // Ensure the image fits its container
    height: "50%", // Maintain aspect ratio
    display: "block",
  },
  sub: {
    fontWeight: "bold",
    fontSize: "2.7rem",
    fontWeight: 600,
    marginBottom: "20px",
    color: " #27254d",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },
  },
  cat: {
    position: "relative",
    fontSize: "1.4rem",
    fontWeight: 500,
    marginBottom: 30,
    paddingLeft: 70, // Assuming you meant paddingLeft instead of 'padding-left'
  },
  logo: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,

      marginTop: "-5px",
      width: "46px",
      height: "52px",
      background: `url(https://db-ip.com/img/ip-address-geolocation.svg) no-repeat`, // Assuming you have localization.svg in public/img folder
      boxSizing: "border-box",
    },
  },
  logo1: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      marginTop: "-5px",
      width: "46px",
      height: "52px",
      background: `url(https://db-ip.com/img/localization.svg) no-repeat`, // Assuming you have localization.svg in public/img folder
      boxSizing: "border-box",
    },
  },
  logo2: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      marginTop: "-5px",
      width: "46px",
      height: "52px",
      background: `url(https://db-ip.com/img/dashboard-alerts.svg) no-repeat`, // Assuming you have localization.svg in public/img folder
      boxSizing: "border-box",
    },
  },
  logo3: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      marginTop: "-5px",
      width: "46px",
      height: "52px",
      background: `url(https://db-ip.com/img/easy-integration.svg) no-repeat`, // Assuming you have localization.svg in public/img folder
      boxSizing: "border-box",
    },
  },
  logo4: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      marginTop: "-5px",
      width: "46px",
      height: "52px",
      background: `url(https://db-ip.com/img/threat-level-assessment.svg) no-repeat`, // Assuming you have localization.svg in public/img folder
      boxSizing: "border-box",
    },
  },
  colLg5: {
    flex: "0 0 41.66667%",
    maxWidth: "100.66667%", // You can apply max-width here
  },
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
     width:"300px",
    },
  },
  
}));

const FeatureSection = () => {
  const classes = useStyles();

  return (
    <section>
      <Container maxWidth="lg" className={classes.body}>
        <div className={classes.spaceBottom}>
          <Typography variant="h4" className={classes.title}>
            Our features
          </Typography>
          <Typography variant="subtitle1" className={classes.sub}>
            What we can offer
          </Typography>
        </div>
        <Grid
          container
          spacing={2}
          className="space-bottom"
          justifyContent="space-between"
          style={{ marginBottom: "80px" }}
        >
          <Grid item lg={5}>
            <div>
              <div className={`${classes.logo} localization`}>
                <Typography variant="h6" className={classes.cat}>
                  IP Address Geolocation
                </Typography>
              </div>
              <Typography variant="body1" className={classes.body}>
                Our geolocation data set covers the whole IPv4 and IPv6 address
                spaces with more than 2 million unique locations in 215,000+
                cities worldwide. It is interoperable with popular third party
                geographic services such as the Geonames open database.{" "}
              </Typography>
            </div>
          </Grid>
          <Grid item lg={5}>
            <div className="browser" >
            <img src="https://db-ip.com/img/browser.svg" width="100%" style={{position:"relative",top:"17px"}}/>

      <iframe
        title="Map"
        width="100%"
        height="300"
        style={{border:"1px solid #EAECEE"}}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2262500830254!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa5d4fb63d7d1681!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1612182492114!5m2!1sen!2sus"
      ></iframe>
                </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          className="space-bottom"
          justifyContent="space-between"
          style={{ marginBottom: "80px" }}
        >
          <Grid item lg={5}>
            <div className="browser">
              <img
                loading="lazy"
                src="https://db-ip.com/img/localization_illustration.svg"
                alt="Dashboard & Alerts"
                className={classes.image}
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <div>
              <div className={`${classes.logo1} localization`}>
                <Typography variant="h6" className={classes.cat}>
                  Localization
                </Typography>
              </div>
              <Typography variant="body1" className={classes.body}>
                Show your non-english speaking visitors the place names they are
                used to. We support country, state, district and city name
                localization in more than fifty languages including Chinese,
                Russian, Farsi, Spanish, French and live amount conversions for
                more than 50 currencies.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          className="space-bottom"
          justifyContent="space-between"
          style={{ marginBottom: "80px" }}
        >
          <Grid item lg={5}>
            <div>
              <div className={`${classes.logo2} localization`}>
                <Typography variant="h6" className={classes.cat}>
                  Dashboard & alerts
                </Typography>
              </div>
              <Typography variant="body1" className={classes.body}>
                From your API dashboard you are able to manage your keys, watch
                your API usage in real-time and analyze its historical trends.
                You may also setup email alerts whenever you go near or over
                your daily quota
              </Typography>
            </div>
          </Grid>
          <Grid item lg={5}>
            <div className="browser">
              <img
                loading="lazy"
                src="https://db-ip.com/img/dashboard-alerts.jpg"
                alt="Dashboard & Alerts"
                className={classes.image}
              />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          className="space-bottom"
          justifyContent="space-between"
          style={{ marginBottom: "80px" }}
        >
          <Grid item lg={5}>
            <div className="browser">
              <Grid item className={classes.colLg5} xs={12} lg={5}>
                <div className={classes.browser}>
                  <div className={classes.code}>
                    <pre className="language-php">
                     

                        <Paper >
                        <img src="https://db-ip.com/img/browser.svg" width="100%"/>

                          <Typography variant="body1" component="div">
                            <span className="token keyword">try</span>{" "}
                            <span className="token punctuation">&#123;</span>
                            <br />
                            &nbsp;&nbsp;
                            <span className="token variable">$info</span>{" "}
                            <span className="token operator">=</span>{" "}
                            <span className="token scope">DBIP\Address::</span>
                            <span className="token function">lookup</span>
                            <span className="token punctuation">(</span>
                            <span className="token variable">$visitorIp</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            <br />
                            &nbsp;&nbsp;
                            <span className="token keyword">if</span>{" "}
                            <span className="token punctuation">(</span>
                            <span className="token variable">$info</span>
                            <span className="token operator">-&gt;</span>
                            <span className="token property">
                              threatLevel
                            </span>{" "}
                            <span className="token operator">===</span>{" "}
                            <span className="token double-quoted-string string">
                              "high"
                            </span>
                            <span className="token punctuation">)</span>{" "}
                            <span className="token punctuation">&#123;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="token function">header</span>
                            <span className="token punctuation">(</span>
                            <span className="token double-quoted-string string">
                              "Status: 403 Forbidden"
                            </span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="token keyword">die</span>
                            <span className="token punctuation">(</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            <br />
                            &nbsp;&nbsp;
                            <span className="token punctuation">&#125;</span>
                            <br />
                            &nbsp;&nbsp;
                            <span className="token function">setlocale</span>
                            <span className="token punctuation">(</span>
                            <span className="token constant">LC_ALL</span>
                            <span className="token punctuation">,</span>{" "}
                            <span className="token variable">$info</span>
                            <span className="token operator">-&gt;</span>
                            <span className="token property">languages</span>
                            <span className="token punctuation">[</span>
                            <span className="token number">0</span>
                            <span className="token punctuation">]</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            <br />
                            &nbsp;&nbsp;
                            <span className="token keyword">echo</span>{" "}
                            <span className="token function">sprintf</span>
                            <span className="token punctuation">(</span>
                            <span className="token function">_</span>
                            <span className="token punctuation">(</span>
                            <span className="token double-quoted-string string">
                              "Hello %s !"
                            </span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">,</span>{" "}
                            <span className="token variable">$info</span>
                            <span className="token operator">-&gt;</span>
                            <span className="token property">city</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            <br />
                            <span className="token punctuation">
                              &#125;
                            </span>{" "}
                            <span className="token keyword">catch</span>{" "}
                            <span className="token punctuation">(</span>
                            <span className="token class-name">
                              DBIP\ServerError
                            </span>{" "}
                            <span className="token variable">$e</span>
                            <span className="token punctuation">)</span>{" "}
                            <span className="token punctuation">&#123;</span>
                            <br />
                            &nbsp;&nbsp;
                            <span className="token comment">
                              // Invalid key or address
                            </span>
                            <br />
                            &nbsp;&nbsp;
                            <span className="token scope">Log</span>
                            <span className="token function">.Warning</span>
                            <span className="token punctuation">(</span>
                            <span className="token variable">$e</span>
                            <span className="token operator">-</span>
                            <span className="token operator">&gt;</span>
                            <span className="token function">getMessage</span>
                            <span className="token punctuation">(</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">)</span>
                            <span className="token punctuation">;</span>
                            <br />
                            <span className="token punctuation">&#125;</span>
                            <br />
                          </Typography>
                        </Paper>
                     
                    </pre>
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>
          <Grid item lg={5}>
            <div>
              <div className={`${classes.logo3} localization`}>
                <Typography variant="h6" className={classes.cat}>
                  Easy Integration
                </Typography>
              </div>
              <Typography variant="body1" className={classes.body}>
                It only takes a few minutes to add IP geolocation awareness to
                your application. Our API uses RESTful semantics supported by
                all major development platforms, and we offer free open-source
                API query libraries and CSV import tools.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          className="space-bottom"
          justifyContent="space-between"
          style={{ marginBottom: "80px" }}
        >
          <Grid item lg={5}>
            <div>
              <div className={`${classes.logo4} localization`}>
                <Typography variant="h6" className={classes.cat}>
                  Threat level assessment
                </Typography>
              </div>

              <Typography variant="body1" className={classes.body}>
                Protect your web application, customer data and network
                infrastructure from cyber attacks. Our threat level indicator is
                computed in real-time from several security flags such as
                anonymous proxy usage or known attack sources.
              </Typography>
            </div>
          </Grid>
          <Grid item lg={5}>
            <div className="browser">
              <div className={classes.root}>
              <img src="https://db-ip.com/img/browser.svg" width="100%" style={{position:"relative",top:"17px"}}/>
                <Paper style={{border:"17px solid red"}}>
               
                  <Typography variant="body1">
                    {"{"}
                    <br />
                    &nbsp;&nbsp;isCrawler:{" "}
                    <span className="token boolean">false</span>,<br />
                    &nbsp;&nbsp;isProxy:{" "}
                    <span className="token boolean">true</span>,<br />
                    &nbsp;&nbsp;proxyType:{" "}
                    <span className="token double-quoted-string string">
                      "vpn"
                    </span>
                    ,<br />
                    &nbsp;&nbsp;threatLevel:{" "}
                    <span className="token double-quoted-string string">
                      "high"
                    </span>
                    ,<br />
                    &nbsp;&nbsp;threatDetails: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="token double-quoted-string string">
                      "anonymous-proxy"
                    </span>
                    ,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="token double-quoted-string string">
                      "attack-source"
                    </span>
                    ,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="token double-quoted-string string">
                      "attack-target:web"
                    </span>
                    ,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="token double-quoted-string string">
                      "bot-name:gherran"
                    </span>
                    ,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="token double-quoted-string string">
                      "bot-type:spam"
                    </span>
                    <br />
                    &nbsp;&nbsp;]
                    <br />
                    {"}"}
                  </Typography>
                </Paper>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FeatureSection;
