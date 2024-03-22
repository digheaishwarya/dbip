import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Grid, Box } from "@mui/material";
import SvgIcon from "@material-ui/core/SvgIcon";
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "20px",
    lineHeight: "27px",
    fontWeight: 700,
    color: "#2d2d2d",
    padding: "0px 15px",
    margin: "0 0 40px 0",
    boxSizing: "border-box",
    display: "block",
    letterSpacing: "-0.1px",
    fontFamily: "hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif",
  },
  body: {
    display: "block",
    margin: "0 0 40px 0",

    lineHeight: "inherit",
    marginTop: "-20px",
    letterSpacing: "-0.1px",
    fontFamily: "hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif",
    wordWrap: "break-word",
    color: "#2d2d2d",
    paddingLeft: "10px",
  },
  root1: {
    display: "flex",
    alignItems: "center",
    "& p": {
      marginLeft: theme.spacing(2),
    },
  },
  logo: {
    marginRight: theme.spacing(2),
    fill: theme.palette.primary.main, // Customize fill color as needed
  },
  heading: {
    margin: "0 0 40px 0",
    display: "flex",
    flexDirection: "column",
    fontSize: "35px",
    lineHeight: "1.14",
    fontWeight: "bold",
    color: "#2d2d2d",
    letterSpacing: "-0.1px",
    fontFamily: "hurmegeometricsans_no3_6, Gilroy, Almarai, Arial, sans-serif",
    "&::before": {
      content: '""',
      marginTop: "40px",
      display: "flex",
      width: "60px",
    },
  },
  number: {
    display: "flex",
    alignItems: "center",
    color: "#D5D5D5",
    fontSize: "60px",
    fontWeight: 700,
    height: "100%",
    paddingRight: "16px",
    borderRight: "1px solid #E2E2E2",
  },
  Box: {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  root2: {
    flexGrow: 1,
  },
  imageContainer: {
    width: "130px",
    height: "50px",
    padding: 0,
    marginLeft: "12px", // margin-inline-start is not directly supported, use marginLeft instead
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  root3: {
    flexGrow: 1,
    borderTop: "1px solid #d5d5d5",
  },
  container: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderBottom: "1px solid #d5d5d5",
  },
  validIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  miniReviewsPromotion: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2, 4), // Adjust padding for medium screens and above
    },
    borderBottom: "1px solid #d5d5d5",
    borderTop: "1px solid #d5d5d5",
  },
  endIcon: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "#FF4A64",
    color: "#ffffff",
    border: "none",
    fontSize: "16px",
    padding: theme.spacing(1.5, 4), // Convert padding to Material-UI spacing units
    height: "40px",
    [theme.breakpoints.up("md")]: {
      width: "140px", // Adjust width for medium screens and above
    },
    [theme.breakpoints.down("md")]: {
      width: "100%", // Full width for screens between 768px and 999px
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%", // Full width for screens below 768px
    },
  },
  SvgIcon: {
    color: "inherit",
    alignSelf: "center",
    marginInlineStart: "4px",
    marginTop: "4px",
    width: "13px",
    height: "13px",
    marginLeft: "4px",
    position: "relative",
    top: "0.20em",
  },
}));
function NinjaTop10Logo() {
  return (
    <SvgIcon>
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.29 7.71l-4.58 4.59L7 11.41l-1.29 1.3L10.71 17 17 10.71l-1.29-1.3z" />
    </SvgIcon>
  );
}
function ExternalLinkIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M9.405 6.613l-4.022 3.89a.718.718 0 000 1.039.779.779 0 001.074 0l5.32-5.144a.718.718 0 000-1.039L6.458.215A.771.771 0 005.92 0a.771.771 0 00-.537.215.718.718 0 000 1.04l4.022 3.889H.76c-.42 0-.76.329-.76.734 0 .406.34.735.76.735h8.645z"
      ></path>
    </SvgIcon>
  );
}
const Kalyan = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} lg={8}>
          <Grid>
            <Box className={classes.root1}>
              <NinjaTop10Logo className={classes.logo} />
              <Typography variant="body1">
                We find the 10 best options, so you can make informed decisions
                on tons of products and services.
              </Typography>
            </Box>

            <Typography variant="h2" className={classes.root}>
              Commit to the Right Dating Site: 4 Questions to Guide the Decision
            </Typography>
            <Typography variant="h3" className={classes.root}>
              1 - What Type of Relationship Are You Looking For?
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Before deciding which dating site and choosing one of the best
              dating apps to sign up for, consider your desired outcome. There
              are a lot of options besides Tinder. Whether you’re looking to
              meet interesting people, start dating again after a heartbreak or
              searching for that person to start a family with, dating sites
              aren’t a “one size fits all” deal.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              No matter what type of relationship you’re looking for, there’s a
              dating site and best dating app—or multiple sites and dating
              apps—to meet your needs. Compare some of the best sites to help
              guide your decision.
            </Typography>
            <Typography variant="h3" className={classes.root}>
              2 - Do You Prefer Being Matched or Searching Independently?
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Personal preferences matter with online dating—just as they do
              with offline dating. Some singles want to search through profiles
              on dating sites like the Tinder app or prefer using a paid app
              with scientific algorithms to match others, while other people
              feel more comfortable being set up. Luckily, the world of online
              dating and best dating apps 2024 has answers for both.
            </Typography>
            <Typography variant="h3" className={classes.root}>
              Matchmaker, matchmaker, make me a match:
            </Typography>
            <Typography variant="body1" className={classes.body}>
              One of the major benefits of using a dating site or top dating app
              is the ability to filter potential matches according to the values
              and characteristics that matter most to you. This immediate
              screening saves time and energy by ruling out users who aren’t
              compatible.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              <span style={{ color: "blue" }}>eharmony</span>, for example, is
              best suited for daters seeking a serious relationship. While
              signing up is a lengthy process involving a thorough
              questionnaire, the result, from one of the best dating apps, is
              quality matches with the potential for long-term commitment.
            </Typography>
            <Typography variant="h3" className={classes.root}>
              The search:
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Another benefit of online dating is the options. Dating sites
              bring together enormous numbers of singles, who may have otherwise
              never met. Using the search filters, singles can explore their
              options based on specific preferences.{" "}
            </Typography>
            <Typography variant="h3" className={classes.root}>
              3 - Which Features Matter Most?
            </Typography>
            <Typography variant="body1" className={classes.body}>
              While dating sites all provide singles with the same essential
              service—a platform to meet new people and find a potential
              partner—each site does it in a different way from basic
              Tinder-like swiping to in-depth personality quizzes.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Compare the features available on the best dating sites to choose
              the right one for you. Differentiating features include online
              chat or video chat, safety features like photo verification, and
              dating games. Choose a dating site that offers the features which
              are most important to you.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              <span style={{ color: "blue" }}>eharmony</span> As you begin your
              online dating journey, explore the features available on different
              sites. Use the comparison chart above,
              <span style={{ color: "blue" }}>expert reviews</span> , and{" "}
              <span style={{ color: "blue" }}> relevant articles </span>to guide
              your decision. long-term commitment.
            </Typography>

            <Typography variant="h3" className={classes.root}>
              4 - How Much Will it Cost Me?
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Many of the best dating sites offer free sign up or a free trial
              period, which is not the same as free Tinder use. However, to
              unlock all features and communication tools, you’ll need to
              subscribe. Consider the features, matchmaking and search
              capabilities, and overall quality of the sites as you compare
              prices. As with most things, you get what you pay for.
            </Typography>

            <Typography variant="body1" className={classes.body}>
              We believe that joining a dating site or top dating apps is a
              smart investment. If you put yourself out there, you won’t need to
              subscribe for long. After all, it’s worth it — this is your future
              and happiness at stake
            </Typography>

            <Typography variant="h2" className={classes.heading}>
              Our Top 3 Picks
            </Typography>

            <div className={classes.Box}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                  <Typography className={classes.number}>1</Typography>
                </Grid>
                <Grid item xs={11}>
                  <Paper className={classes.imageContainer}>
                    <img
                      src="https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/silver-singles.20180530111059.20220901071124.png"
                      alt="SilverSingles"
                      className={classes.image}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </div>

            <div className={classes.root3}>
              <List>
                <ListItem>
                  <CheckIcon className={classes.validIcon} />
                  <Typography variant="body2">
                    <strong>Pricing - </strong> As low as $24.95
                  </Typography>
                </ListItem>
                <ListItem>
                  <CheckIcon className={classes.validIcon} />
                  <Typography variant="body2">
                    <strong>Free version - </strong> Yes
                  </Typography>
                </ListItem>
                <ListItem>
                  <CheckIcon className={classes.validIcon} />
                  <Typography variant="body2">
                    <strong>Age range - </strong> 50 and up
                  </Typography>
                </ListItem>
              </List>
              <div className={classes.miniReviewsPromotion}>
                <Grid
                  container
                  alignItems="center"
                  sx={{ justifyContent: "space-between" }}
                >
                  <Grid item>
                    <span>Connecting compatible seniors</span>
                  </Grid>
                  <Grid item>
                    <Link
                      href="/v?product_id=12731&amp;url=https%3A%2F%2Fwww.spark-an.com%2Fgo.cgi%3Fpid%3D101%26wmid%3D1004%26cpid%3D42%26prid%3D661%26subid%3D%5Btracking-subid%5D%26target%3DSilverSingles.com-default&amp;cms_platform=xsite&amp;rank=1&amp;bi=%7B%22blrs%22%3A71286%2C%22utm_source%22%3A%22Other%22%7D&amp;uid=j6UZHAu1wYA5xJ24097q&amp;riid=k8QxgZHxkUCqtw445fw4&amp;tkn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY21zIiwidmVyc2lvbiI6MSwiaGFzaCI6IjRldEZxdDVnajJBSmpEYTNwZ1U2M3c4R0R0az0iLCJpYXQiOjE3MDg5NDU4NTgsImV4cCI6MTcwOTAzMjI1OH0.2h66XKhFrd_4-rYpdlFhwX_yq0EsCu4tUt-kFob56GQ"
                      target="_blank"
                      rel="nofollow noreferrer"
                      className={classes.button}
                    >
                      Visit Site
                    </Link>
                  </Grid>
                </Grid>
              </div>
              <Typography variant="h3" className={classes.root}>
                SilverSingles - Best for seniors
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Most dating apps target younger people, but SilverSingles gives
                the over-50 demographic plenty of opportunities to find
                companionship.
              </Typography>
              <Typography variant="body1" className={classes.body}>
                SilverSingles matches members based on a personality test
                designed by psychologists and relationship experts. This test
                has over 100 questions and scores your answers on four traits:
                openness, agreeableness, conscientiousness, and neuroticism.
                These are used to assess your personality type and find matches
                whose interests and lifestyles are compatible with yours.{" "}
              </Typography>

              <Typography variant="body1" className={classes.body}>
                The matching process values quality over quantity. After
                answering the test questions, the site identifies three to seven
                matches per day. So while taking a test initially may sound like
                a lot of work, it will save you the trouble of searching for
                dates later down the line.{" "}
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Why we chose SilverSingles: This service is available as an app
                and a website. Both are easy to navigate and use with
                well-organized tabs and big and bold fonts. Plus, if you're not
                well-versed in writing dating profiles, you can request someone
                to help you write yours for an additional fee. This site is the
                ideal choice for singles over 50 seeking long-term
                relationships.
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Our experience: We felt that SilverSingles' personality test was
                particularly useful to develop self-knowledge. And while you do
                have limited control over who you can connect with, we liked
                that all potential matches are curated specifically for you.
              </Typography>
            </div>
            <Link
              href="/dating/reviews/silversingles"
              target="_self"
              className="css-88u5dt"
              underline="none"
            >
              Read SilverSingles Review
              <SvgIcon
                sx={{
                  fontSize: "24px", // Adjust the font size to increase the icon size
                }}
                className={classes.SvgIcon}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.405 6.613l-4.022 3.89a.718.718 0 000 1.039.779.779 0 001.074 0l5.32-5.144a.718.718 0 000-1.039L6.458.215A.771.771 0 005.92 0a.771.771 0 00-.537.215.718.718 0 000 1.04l4.022 3.889H.76c-.42 0-.76.329-.76.734 0 .406.34.735.76.735h8.645z"
                  fill="currentColor"
                />
              </SvgIcon>
            </Link>
            <div className={classes.root}>
              <Typography variant="h4" className={classes.header}>
                PROS
              </Typography>
              <List component="div" aria-label="Pros">
                <ListItem>
                  <ListItemText primary="Smart compatibility matching tools" />
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                  <ListItemText primary="Strong safety precautions in place" />
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                  <ListItemText primary="Users don’t need to be tech savvy" />
                </ListItem>
              </List>
              <Typography variant="h4" className={classes.header}>
                CONS
              </Typography>
              <List component="div" aria-label="Cons">
                <ListItem>
                  <ListItemText primary="Lengthy signup process" />
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                  <ListItemText primary="No manual searching" />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Kalyan;
