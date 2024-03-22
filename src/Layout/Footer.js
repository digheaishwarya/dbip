import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(5, 0, 0),
    color: "#6a6a6a",
    fontSize: "1.4rem",
    fontWeight: 300,
    fontFamily: "montserrat",
    lineHeight: 2.3,
  },
  footerLink: {
    color: "#6a6a6a",
    fontSize: "1.8rem",
    fontWeight: 300,
    fontFamily: "montserrat",
    lineHeight: 1.8,
  },
  bottomFooter: {
    marginTop: theme.spacing(2),
    borderTop: "1px solid #ccc",
    paddingTop: theme.spacing(2),
  },
  Title: {
    fontSize: "1.4rem",
    fontWeight: 600,
    color: "#5537ed",
    marginBottom: 20,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={3} className={classes.footer}>
          <Grid item lg={3}>
            <Link href="https://db-ip.com/">
              <img
                loading="lazy"
                width="180"
                height="112"
                src="https://db-ip.com/img/footer-logo.svg"
                alt="DB-IP Logo"
                MarginBottom="5px"
              />
            </Link>
            <Typography className={classes.footer}>
              The ultimate resource for IP address geolocation and network
              intelligence
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h5" className={classes.Title}>
              Company
            </Typography>
            <List>
              <ListItem>
                <Link href="/api/">
                  <ListItemText
                    primary="IP Geolocation API"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/db/">
                  <ListItemText
                    primary="IP Geolocation Database"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/api/doc.php">
                  <ListItemText
                    primary="Developers"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/tools/">
                  <ListItemText
                    primary="Geolocation tools"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about/">
                  <ListItemText
                    primary="Statistics"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/account/">
                  <ListItemText
                    primary="Customer sign-in"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h5" className={classes.Title}>
              Resources
            </Typography>
            <List>
              <ListItem>
                <Link href="/api/">
                  <ListItemText primary="FAQ" className={classes.footerLink} />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/db/">
                  <ListItemText
                    primary="Tutorials"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/api/doc.php">
                  <ListItemText
                    primary="Articles"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/tools/">
                  <ListItemText
                    primary="Browse IPs"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about/">
                  <ListItemText
                    primary="ASN List"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/account/">
                  <ListItemText
                    primary="Service status"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h5" className={classes.Title}>
              {" "}
              Get in touch
            </Typography>
            <List>
              <ListItem>
                <Link href="/api/">
                  <ListItemText
                    primary="Eris Networks S.A.S"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/db/">
                  <ListItemText
                    primary="62 boulevard Jean Mermoz"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/api/doc.php">
                  <ListItemText
                    primary="22700 Perros-Guirec"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/tools/">
                  <ListItemText
                    primary="Geolocation tools"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about/">
                  <ListItemText primary=" " className={classes.footerLink} />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/account/">
                  <ListItemText
                    primary="Email contact"
                    className={classes.footerLink}
                  />
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container className={classes.bottomFooter}>
          <Grid item xs={8}>
            <Typography>
              © 2024 db-ip.com - <Link href="/tos.php">Terms of service</Link> -{" "}
              <Link href="/privacy.php">Privacy policy</Link> -{" "}
              <Link href="/affiliate/">Affiliate program</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
