// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   Typography,
//   Grid
// } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     position: 'relative',
//     width: '100%',
//     height: '100%', // Set container height to 100vh (100% of viewport height)
//     display: 'flex', // Assuming you want to use flexbox layout
//     zIndex: -1,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'right center',
//     backgroundImage: 'url(https://images.top10.com/f_auto,fl_progressive:semi,q_auto/v1/production/charts/uploads/photo/BGC_DT_H.20240131143621.jpg)',
//     [theme.breakpoints.down('sm')]: {
//       // Adjust background position for smaller screens if needed
//       backgroundPosition: 'center',
//     },
//   },

//    title:{
//     boxSizing: 'border-box',
//     margin: 0,
//     minWidth: 0,
//     padding: 0,
//     fontFamily: 'hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif',
//     overflow: 'hidden',
//     display: 'block',
//     maxWidth: 700,
//     lineHeight: '36px',
//     color: '#ffffff',
//     fontSize: 28,
//     fontWeight:"00px",
//     letterSpacing: '-0.1px',
//     [theme.breakpoints.up('sm')]: {
//       marginTop: 40,
//     },
//    },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   button: {
//     margin: theme.spacing(2),
//   },
//   subtitle:{
//     margin: 0,
//     fontFamily: 'hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif',
//     fontWeight: 400,
//     lineHeight: '28px',
//     fontSize: 18,
//     letterSpacing: '-0.1px',
//     color: '#FFFFFF',
//     maxWidth: 700,
//     [theme.breakpoints.up('sm')]: {
//       marginTop: 20,
//       marginBottom: 'unset',
//       width: 'unset',
//       display: 'block',
//       WebkitLineClamp: 'unset',
//       WebkitBoxOrient: 'unset',
//     },
//   },

// }));

// const Hero1 = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid item xs={12} lg={8}>
//       <Typography variant="h4" className={classes.title}>Best Background Check Services of 2024</Typography>
//       <Typography variant="subtitle1" className={classes.subtitle}>Search people, social media posts, public records and the deep web <br></br>to arm yourself with information—quickly and easily.</Typography>
//       <FormControl className={classes.formControl}>
//         <TextField

//           // Add necessary props and event handlers
//         />
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <TextField

//           // Add necessary props and event handlers
//         />
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="state-label">State</InputLabel>
//         <Select

//         >
//           {/* Render menu items for each state */}
//           <MenuItem value="">All States</MenuItem>
//           {/* Add other states dynamically */}
//         </Select>
//       </FormControl>
//       <Button

//         className={classes.button}
//         // Add necessary props and event handlers
//       >
//         Search Now
//       </Button>
//       </Grid>
//     </div>
//   );
// };

// export default Hero1;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Link,
  ListItem,
  List,
  SvgIcon,
  Box,
  Paper,
  Grid,
  ListItemText,
  Button,
} from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import Head from "./Head";
import Containe from "./Containe";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "250px",
    paddingRight: "250px",
    // marginTop:'-150px',
    position: "relative",
    top: "-40px",
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      position: "relative",
      top: "40px",
    },
  },
  ribbon: {
    display: "flex",
    borderBottom: "initial",
    flexDirection: "row",
    padding: "48px 30px 28px 28px",
    width: "130px",
    height: "50px",
  },
  productRibbon: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#035d4c", // Add background color here
    padding: theme.spacing(1), // Add padding for better appearance
    borderRadius: theme.shape.borderRadius, // Add border radius for rounded corners
    color: "white", // Set text color to white
    width: "initial",
    position: "absolute",
    left: "390px",
    height: "10px",
    [theme.breakpoints.up("md")]: {
      top: "12px",
    },
  },
  ribbonIcon: {
    marginRight: theme.spacing(1),
  },
  productAttributes: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  attributeItem: {
    display: "flex",
    alignItems: "center",
  },
  list: {
    alignTtems: "flex-start",
    lineHeight: "24px",
    letterSpacing: "-0.1px",
    fontFamily: "hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
  },
  link: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1789D5",
    cursor: "pointer",
  },
  body: {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    padding: 0,
    fontFamily:
      "hurmegeometricsans_no-10_6, Gilroy, Almarai, Arial, sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    color: "#000000",
    margin: "0 0 12px",
  },
}));

const ProductCard = ({ displayDirection }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Head />
      <div className={classes.root}>
        <Paper
          style={{
            background: "#fff",
            boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)",
            marginTop: 0,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Box>
                {/* <div className={classes.productRibbon}>
            <SvgIcon
              className={classes.ribbonIcon}
              style={{
                [theme.breakpoints.up('md')]: {
                  top: '12px',
                },
              }}
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"

            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.25 6.452c-.068 1.896-.795 5.592-2.304 5.991-1.622.43-2.796.47-5.605-.142-.582-.089-1.169-.137-1.758-.143a.196.196 0 01-.191-.197V6a.188.188 0 01.075-.154c.382-.272.611-.985 1.023-1.353.774-.692 1.365-.899 1.884-1.29.892-.674 1.056-1.529 1.339-2.2.232-.55.614-.942 1.186-.687.577.258 1.179 1.306.456 2.796-.21.433-.511.748-.788 1.512-.063.177-.078.458.125.445a20.274 20.274 0 013.401.03 1.313 1.313 0 011.157 1.353zM3.642 12.086V5.585a.392.392 0 00-.393-.392H1.142a.392.392 0 00-.392.392v6.501a.395.395 0 00.392.393H3.25a.395.395 0 00.393-.393z"
                fill="currentColor"
              />
            </SvgIcon>

            <Typography variant="body1"
             style={{
              fontFamily: 'hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              backgroundColor: '#035d4c',
              justifyContent: 'initial',
              color: '#ffffff',
              display: 'inline-flex',
              pointerEvents: 'none',
              margin: 0,
              minWidth: 0
              
            }}
            >Our Most Popular</Typography>
          </div> */}

                <img
                  className={classes.ribbon}
                  src="//umbrella.data.naturalint.com/production/partners/uploads/photo/2023_Logo_CollegeHUNKS.20231108094904.svg"
                  alt="College HUNKS Hauling Junk & Moving®"
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={2} style={{ padding: "24px 0px" }}>
                <Typography className={classes.body}>
                  College HUNKS Hauling Junk &amp; Moving® - millions across
                  North America for over 15 years
                  <span>
                    {" "}
                    <Link
                      href="/moving-companies/reviews/college-hunks-hauling-junk-moving"
                      className={classes.link}
                    >
                      Read Review
                    </Link>
                  </span>
                </Typography>
                <List className={classes.productAttributes} disablePadding>
                  <ListItem
                    className={classes.attributeItem}
                    style={{ padding: 0 }}
                  >
                    <SvgIcon viewBox="0 0 16 12" fontSize="small">
                      <path
                        fill="currentColor"
                        d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </SvgIcon>
                    <ListItemText
                      primary="200+ locations across the US"
                      className={classes.list}
                    />
                  </ListItem>
                  <ListItem
                    className={classes.attributeItem}
                    style={{ padding: 0 }}
                  >
                    <SvgIcon viewBox="0 0 16 12" fontSize="small">
                      <path
                        fill="currentColor"
                        d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </SvgIcon>
                    <ListItemText
                      primary="Professionally trained & insured team"
                      className={classes.list}
                    />
                  </ListItem>
                  <ListItem
                    className={classes.attributeItem}
                    style={{ padding: 0 }}
                  >
                    <SvgIcon viewBox="0 0 16 12" fontSize="small">
                      <path
                        fill="currentColor"
                        d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </SvgIcon>
                    <ListItemText
                      primary="Local & office solutions, junk pick-up"
                      className={classes.list}
                    />
                  </ListItem>
                </List>

                {/* Add other content */}
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box style={{ padding: "28px 28px 28px 41px" }}>
                <Box
                  p={2}
                  style={{
                    padding: "0 0 35px",
                    position: { sm: "relative", top: "500px" },
                  }}
                >
                  <Box item>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="body1"
                          className="css-2ggun4"
                          style={{
                            marginRight: "8px",
                            display: "block",
                            color: "#1564BF",
                            fontWeight: "600",
                          }}
                        >
                          Excellent
                        </Typography>
                        <Button
                          variant="contained"
                          style={{
                            background: "#1564bf",
                            padding: "2px",
                            borderRadius: "4px",
                            transform: "translateZ(0)",
                            minWidth: "38px",
                            color: "#fff",
                            fontSize: "22px",
                            lineHeight: "20px",
                            fontWeight: "700",
                          }}
                          size="small"
                        >
                          9.3
                        </Button>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      {[...Array(5)].map((_, index) => (
                        <StarIcon
                          key={index}
                          style={{ color: "#FFB401", fontSize: "medium" }}
                        />
                      ))}
                    </div>
                  </Box>
                </Box>
                <Box item>
                  <Button
                    data-testid="popover-trigger"
                    data-role="product-cta"
                    data-product-id="14193"
                    data-product-name="College HUNKS Hauling Junk & Moving®"
                    rel="nofollow noreferrer"
                    className="nilink css-gquxlj"
                    href="/v?product_id=14193&amp;url=https%3A%2F%2Fwww.tkqlhce.com%2Fclick-100111480-15551426%3Fsid%3DDES_%5Btracking-subid%5D&amp;cms_platform=xsite&amp;rank=1&amp;bi=%7B%22blrs%22%3A82369%2C%22utm_source%22%3A%22Other%22%7D&amp;comp_iid=fea8b9f3-60ad-4439-9977-4da192893bcd&amp;uid=836m0Mf3OjDX5X322vz5&amp;riid=z92KxMyzDar1k0724wdr&amp;tkn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY21zIiwidmVyc2lvbiI6MSwiaGFzaCI6Imx5Wi9kWTJhZE0zVm5nVC9IbXUxbTBsLzhKTT0iLCJpYXQiOjE3MDkyODg1MjIsImV4cCI6MTcwOTM3NDkyMn0.gA1TMczJpiSoRdmi-VyAAEeNtq7eXU_yI1CuWduBlww&amp;gid=500726099.1707197081"
                    target="_blank"
                    style={{
                      backgroundColor: "#FF4A64",
                      width: "100px",
                      padding: "12px 5px",
                    }}
                  >
                    <span style={{ color: "#FFFFFF", fontSize: "16px" }}>
                      {" "}
                      Visit Site
                    </span>
                    <div className="endIcon css-k15e0p">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.405 6.613l-4.022 3.89a.718.718 0 000 1.039.779.779 0 001.074 0l5.32-5.144a.718.718 0 000-1.039L6.458.215A.771.771 0 005.92 0a.771.771 0 00-.537.215.718.718 0 000 1.04l4.022 3.889H.76c-.42 0-.76.329-.76.734 0 .406.34.735.76.735h8.645z"
                        fill="currentColor"
                      ></path>
                    </div>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          style={{
            background: "#fff",
            boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)",
            marginTop: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Box>
                {/* <div className={classes.productRibbon}>
            <SvgIcon
              className={classes.ribbonIcon}
              style={{
                [theme.breakpoints.up('md')]: {
                  top: '12px',
                },
              }}
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"

            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.25 6.452c-.068 1.896-.795 5.592-2.304 5.991-1.622.43-2.796.47-5.605-.142-.582-.089-1.169-.137-1.758-.143a.196.196 0 01-.191-.197V6a.188.188 0 01.075-.154c.382-.272.611-.985 1.023-1.353.774-.692 1.365-.899 1.884-1.29.892-.674 1.056-1.529 1.339-2.2.232-.55.614-.942 1.186-.687.577.258 1.179 1.306.456 2.796-.21.433-.511.748-.788 1.512-.063.177-.078.458.125.445a20.274 20.274 0 013.401.03 1.313 1.313 0 011.157 1.353zM3.642 12.086V5.585a.392.392 0 00-.393-.392H1.142a.392.392 0 00-.392.392v6.501a.395.395 0 00.392.393H3.25a.395.395 0 00.393-.393z"
                fill="currentColor"
              />
            </SvgIcon>

            <Typography variant="body1"
             style={{
              fontFamily: 'hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              backgroundColor: '#035d4c',
              justifyContent: 'initial',
              color: '#ffffff',
              display: 'inline-flex',
              pointerEvents: 'none',
              margin: 0,
              minWidth: 0
              
            }}
            >Our Most Popular</Typography>
          </div> */}

                <img
                  className={classes.ribbon}
                  src="https://umbrella.data.naturalint.com/production/products/uploads/photo/Logo260x100-LS.20220707092929.png"
                  alt="College HUNKS Hauling Junk & Moving®"
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={2} style={{ padding: "24px 0px" }}>
                <Typography className={classes.body}>
                  iMoving -Online platform for planning & managing a move, from
                  beginning to end
                  <span>
                    {" "}
                    <Link
                      href="/moving-companies/reviews/college-hunks-hauling-junk-moving"
                      className={classes.link}
                    >
                      Read Review
                    </Link>
                  </span>
                </Typography>
                <List className={classes.productAttributes} disablePadding>
                  <ListItem
                    className={classes.attributeItem}
                    style={{ padding: 0 }}
                  >
                    <SvgIcon viewBox="0 0 16 12" fontSize="small">
                      <path
                        fill="currentColor"
                        d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </SvgIcon>
                    <ListItemText
                      primary="Compare quotes and book online"
                      className={classes.list}
                    />
                  </ListItem>
                  <ListItem
                    className={classes.attributeItem}
                    style={{ padding: 0 }}
                  >
                    <SvgIcon viewBox="0 0 16 12" fontSize="small">
                      <path
                        fill="currentColor"
                        d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </SvgIcon>
                    <ListItemText
                      primary="24/7 support"
                      className={classes.list}
                    />
                  </ListItem>
                  <ListItem
                    className={classes.attributeItem}
                    style={{ padding: 0 }}
                  >
                    <SvgIcon viewBox="0 0 16 12" fontSize="small">
                      <path
                        fill="currentColor"
                        d="M1 6.002l4.6 4.6a.093.093 0 00.133 0L15 1.335"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </SvgIcon>
                    <ListItemText
                      primary="No added fees"
                      className={classes.list}
                    />
                  </ListItem>
                </List>

                {/* Add other content */}
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box style={{ padding: "28px 28px 28px 41px" }}>
                <Box
                  p={2}
                  style={{
                    padding: "0 0 35px",
                    position: { sm: "relative", top: "500px" },
                  }}
                >
                  <Box item>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="body1"
                          className="css-2ggun4"
                          style={{
                            marginRight: "8px",
                            display: "block",
                            color: "#1564BF",
                            fontWeight: "600",
                          }}
                        >
                          Very Good
                        </Typography>
                        <Button
                          variant="contained"
                          style={{
                            background: "#1564bf",
                            padding: "2px",
                            borderRadius: "4px",
                            transform: "translateZ(0)",
                            minWidth: "38px",
                            color: "#fff",
                            fontSize: "22px",
                            lineHeight: "20px",
                            fontWeight: "700",
                          }}
                          size="small"
                        >
                          9.3
                        </Button>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      {[...Array(5)].map((_, index) => (
                        <StarIcon
                          key={index}
                          style={{ color: "#FFB401", fontSize: "medium" }}
                        />
                      ))}
                    </div>
                  </Box>
                </Box>
                <Box item>
                  <Button
                    data-testid="popover-trigger"
                    data-role="product-cta"
                    data-product-id="14193"
                    data-product-name="College HUNKS Hauling Junk & Moving®"
                    rel="nofollow noreferrer"
                    className="nilink css-gquxlj"
                    href="/v?product_id=14193&amp;url=https%3A%2F%2Fwww.tkqlhce.com%2Fclick-100111480-15551426%3Fsid%3DDES_%5Btracking-subid%5D&amp;cms_platform=xsite&amp;rank=1&amp;bi=%7B%22blrs%22%3A82369%2C%22utm_source%22%3A%22Other%22%7D&amp;comp_iid=fea8b9f3-60ad-4439-9977-4da192893bcd&amp;uid=836m0Mf3OjDX5X322vz5&amp;riid=z92KxMyzDar1k0724wdr&amp;tkn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY21zIiwidmVyc2lvbiI6MSwiaGFzaCI6Imx5Wi9kWTJhZE0zVm5nVC9IbXUxbTBsLzhKTT0iLCJpYXQiOjE3MDkyODg1MjIsImV4cCI6MTcwOTM3NDkyMn0.gA1TMczJpiSoRdmi-VyAAEeNtq7eXU_yI1CuWduBlww&amp;gid=500726099.1707197081"
                    target="_blank"
                    style={{
                      backgroundColor: "#FF4A64",
                      width: "100px",
                      padding: "12px 5px",
                    }}
                  >
                    <span style={{ color: "#FFFFFF", fontSize: "16px" }}>
                      {" "}
                      Visit Site
                    </span>
                    <div className="endIcon css-k15e0p">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.405 6.613l-4.022 3.89a.718.718 0 000 1.039.779.779 0 001.074 0l5.32-5.144a.718.718 0 000-1.039L6.458.215A.771.771 0 005.92 0a.771.771 0 00-.537.215.718.718 0 000 1.04l4.022 3.889H.76c-.42 0-.76.329-.76.734 0 .406.34.735.76.735h8.645z"
                        fill="currentColor"
                      ></path>
                    </div>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default ProductCard;
