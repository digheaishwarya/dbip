import React from "react";
import { Button, Box, Typography, SvgIcon, Link, Grid } from "@mui/material";
import { Paper } from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    padding: 0,
    fontFamily: "hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    marginBottom: "auto",
    backgroundColor: " #ffffff",
    color: "#2D2D2D",
    paddingBottom: "26px",
  },
}));

const Card = () => {
  const classes = useStyles();

  return (
    <Box
      style={{
        paddingRight: "450px",
        paddingLeft: "450px",
        paddingTop: "12px",
      }}
    >
      <Paper style={{ padding: "16px 15px 20px" }}>
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12} sm={1}>
            <img
              className="css-0"
              src="https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/people-looker.20181224140412.png"
              alt="PeopleLooker"
              width="30"
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography style={{
                fontWeight: "400",
                fontSize: "16px",
              }}>
              PeopleLooker
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
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
                      fontSize: "15px",
                      lineHeight: "20px",
                      fontWeight: "500",
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
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography
              variant="body2"
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
              }}
            >
              Easy, affordable access to info
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="product-cta css-sl85a">
              <Typography variant="body2"
               style={{
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "13px",
                color: '#FF4A64',
              }}
              >Search Now</Typography>
              <span>
                {/* <SvgIcon width="12" height="12" viewBox="0 0 12 12">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.405 6.613l-4.022 3.89a.718.718 0 000 1.039.779.779 0 001.074 0l5.32-5.144a.718.718 0 000-1.039L6.458.215A.771.771 0 005.92 0a.771.771 0 00-.537.215.718.718 0 000 1.04l4.022 3.889H.76c-.42 0-.76.329-.76.734 0 .406.34.735.76.735h8.645z"
                />
              </SvgIcon> */}
              </span>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Card;
