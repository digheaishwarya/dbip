import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles } from "@mui/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Grid, Box } from "@mui/material";
import SvgIcon from "@material-ui/core/SvgIcon";
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Divider from "@material-ui/core/Divider";
import { Card, CardContent, CardMedia, IconButton } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "250px",
    paddingRight: "250px",
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
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "15px",
      paddingRight: "15px",
    },
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
    paddingTop: "10px",
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

  root4: {
    display: "flex",
    width: "70%",
    height: "50px",
    padding: "10px",
    marginBottom: theme.spacing(2),
  },
  content: {
    flex: "1 0 auto",
  },
  media: {
    width: 30,
    height: 30,
    margin: theme.spacing(2),
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  actions: {
    position: "relative",
    left: "500px",
    top: "-40px",
    textDecoration: "none",
    backgroundColor: "#FF4A64",
    color: "#ffffff",
    border: "none",
    fontSize: "16px",
    textAlign: "center",
    padding: theme.spacing(1, 1, 1, 1),
    width: "18%",
  },
  question: {
    fontSize: "20px",
    lineHeight: "27px",
    fontWeight: 700,
    color: "#2d2d2d",
    margin: "0 0 40px 0",
  },
  text: {
    fontSize: "16px",
    lineHeight: "27px",
    fontWeight: 700,
    color: "#2d2d2d",
    margin: "0 0 40px 0",
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
const Containe = () => {
  const classes = useStyles();

  return (
    <section>
      <div className={classes.root}>
        <Grid alignItems="center">
          <Box className={classes.root1}>
            <NinjaTop10Logo className={classes.logo} />
            <Typography variant="body1">
              We find the 10 best options, so you can make informed decisions on
              tons of products and services.
            </Typography>
          </Box>

          <Typography variant="h3" className={classes.question}>
            Why Do I Need a Moving Company?
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Most people have the same response when it comes time to move? Why
            do I need to hire a mover when I can do the work myself? There are
            many reasons why people choose to hire professional moving services.
            For example:
          </Typography>
          <Typography className={classes.text}>- Peace of mind</Typography>
          <Typography variant="body1" className={classes.body}>
            When you're moving house, there are a million and one things that
            only you can take care of. Moving isn't one of them. It's a lot
            easier to let someone else take care of the hauling, moving, and
            transporting. And it'll free you up to take care of the more
            important, technical details that only you can do.
          </Typography>
          <Typography className={classes.text}>- - Reliability</Typography>
          <Typography variant="body1" className={classes.body}>
            What’s more, professional moving companies will have some sort of
            insurance on your stuff. So, if something breaks during the move,
            it’s covered. If you break something while moving it yourself,
            you’re out of luck.
          </Typography>
          <Typography className={classes.text}>- Time savings</Typography>
          <Typography variant="body1" className={classes.body}>
            What’s even more valuable than money? Your time. Hiring local movers
            can help you save a load of time. Sometimes, that’s worth the
            investment.
          </Typography>
          <Typography className={classes.text}>- It’s safer</Typography>
          <Typography variant="body1" className={classes.body}>
            Moving can be hazardous to your health for many reasons. But one of
            the biggest ones is the strain you'll put on your body. Professional
            long-distance moving companies know how to move large, bulky, and
            heavy items without hurting themselves.
          </Typography>

          <Typography variant="h3" className={classes.question}>
            How Can I Find a Moving Company Near Me
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Bottom line, it's a good idea to hire one of the professional local
            or long distance moving companies out there, but make sure that you
            are working with someone that services your area. This is easily
            done by looking at their website to see the coverage area. Local
            movers will have a smaller coverage area than the major
            long-distance moving companies. But the coverage area doesn't have
            to be large. It just has to include you.
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Check on the moving companies' websites for a section like moving
            companies near me. You'll put in your address or zip code, and see
            what areas they cover. You can also search Google for "movers near
            me." Choose from the list to ensure you're getting a mover that
            works within your area.
          </Typography>
          <Typography variant="h3" className={classes.question}>
            How to Choose a Mover
          </Typography>
          <Typography variant="body1" className={classes.body}>
            The best moving companies will offer value-added services, good
            reputation, and insurance for your belongings. Here are a few
            important features you should look for during your quest for good
            and cheap moving companies:
          </Typography>
          <Typography className={classes.text}> - Reputation</Typography>
          <Typography variant="body1" className={classes.body}>
            Check out reviews online, ask around, and see if the company has a
            Better Business Bureau accreditation. A fair amount of good reviews
            will tell you that this company is worth investing in, will treat
            you well, and will get the job done right.
          </Typography>

          <Typography className={classes.text}> - Type of move</Typography>
          <Typography variant="body1" className={classes.body}>
            Are you moving locally or far away? Depending on the type of move,
            different moving companies will be more suitable for the task. If
            you're just moving around the corner or a few blocks away, local
            movers will be more price-efficient. On the other hand, if you're
            looking for a long trek, long-distance moving companies will offer
            you the most professionalism, along with the ability to move you
            farther.
          </Typography>
          <Typography className={classes.text}> - Amount of stuff</Typography>
          <Typography variant="body1" className={classes.body}>
            You also want to consider how much stuff you actually have to move.
            If you only have a small amount, 1 or 2 smaller appliances, etc.,
            then you can opt for one of the cheap movers on your list. On the
            other hand, if you've got quite a bit of belongings to move, along
            with multiple major appliances, a more reputable moving service with
            insurance, is a safer bet.
          </Typography>

          <Typography variant="h3" className={classes.question}>
            What Is the Best Moving Company?
          </Typography>
          <Typography variant="body1" className={classes.body}>
            The best moving companies are the ones that fulfill your
            requirements, offer affordable pricing, and will work within your
            moving area. Those are the only things you really need to look for.
            It's also a good idea to check out the customer support experience.
            While this isn't always a necessity, it's nice to know that there's
            someone you can reach out to in case you have questions or in the
            event that something goes wrong before, during, or after the move.
            It is typically an excellent idea to read online reviews and hear
            what others have to say about a service, as well. This gives you an
            indication of the general quality of service you can expect from a
            moving company.
          </Typography>
          <Typography variant="h3" className={classes.question}>
            What is the Cheapest Moving Company?
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Cheap moving companies are not unheard of. You just have to know
            where exactly to look. Start by getting a few online quotes. These
            are usually free, so don't pay for a quote. Once you've compiled a
            list of cheap movers, compare the different rates you received to
            find the most cost-efficient one.
          </Typography>
          <Typography variant="body1" className={classes.body}>
            But don’t just look at the price tag. After all, the best moving
            companies will offer added value on top of a standard price. That
            means they may be offering you more bang for your buck in the form
            of additional services, better coverage, or more flexible terms. So,
            don’t just pounce on the cheap moving companies. Weigh what you’re
            getting in the equation
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Also, bear in mind that cheap movers may not provide you with
            insurance. Often, the more professional movers will charge more
            because they come with the insurance and quality guarantee. If
            you're only moving a few items, insurance might not be that
            important to you, in which case, you should go with a cheap mover.
            But if you are moving valuable or expensive things, it's worth the
            investment to have an insurance policy in place.
          </Typography>

          <Typography variant="body1" className={classes.body}>
            <span style={{ color: "blue" }}>eharmony</span>, for example, is
            best suited for daters seeking a serious relationship. While signing
            up is a lengthy process involving a thorough questionnaire, the
            result, from one of the best dating apps, is quality matches with
            the potential for long-term commitment.
          </Typography>
          <Typography variant="h3" className={classes.question}>
            The search:
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Another benefit of online dating is the options. Dating sites bring
            together enormous numbers of singles, who may have otherwise never
            met. Using the search filters, singles can explore their options
            based on specific preferences.{" "}
          </Typography>
          <Typography variant="h3" className={classes.question}>
            3 - Which Features Matter Most?
          </Typography>
          <Typography variant="body1" className={classes.body}>
            While dating sites all provide singles with the same essential
            service—a platform to meet new people and find a potential
            partner—each site does it in a different way from basic Tinder-like
            swiping to in-depth personality quizzes.
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Compare the features available on the best dating sites to choose
            the right one for you. Differentiating features include online chat
            or video chat, safety features like photo verification, and dating
            games. Choose a dating site that offers the features which are most
            important to you.
          </Typography>

          <Typography variant="h2" className={classes.heading}>
            Our Top 3 Picks
          </Typography>

          <div className={classes.Box}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                <Typography className={classes.number}>1</Typography>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.imageContainer}>
                  <img
                    src="//umbrella.data.naturalint.com/production/partners/uploads/photo/2023_Logo_CollegeHUNKS.20231108094904.svg"
                    alt="SilverSingles"
                    className={classes.image}
                  />
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  style={{
                    fontSize: "16px",
                    lineHeight: "27px",
                    fontWeight: 600,
                    color: "#2d2d2d",
                  }}
                >
                  College HUNKS Hauling Junk & Moving®
                </Typography>
              </Grid>
            </Grid>
          </div>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <Typography variant="body1" className={classes.productHighlight}>
                Hire movers hourly for packing help and more
              </Typography>
              <Link
                href="/moving-companies/reviews/college-hunks-hauling-junk-moving"
                underline="none"
              >
                <Typography variant="body1" component="span">
                  Read College HUNKS Hauling Junk &amp; Moving® Review
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                href="/v?product_id=14193&amp;url=https%3A%2F%2Fwww.tkqlhce.com%2Fclick-100111480-15551426%3Fsid%3DDES_%5Btracking-subid%5D&amp;cms_platform=xsite&amp;rank=1&amp;bi=%7B%22blrs%22%3A82369%2C%22utm_source%22%3A%22Other%22%7D&amp;uid=j6UZHAu1wYA5xJ24097q&amp;riid=vEG2HimwjtdZ7v8634dn&amp;tkn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY21zIiwidmVyc2lvbiI6MSwiaGFzaCI6IjhoaE5Md1dxZnN1d3UyZGw0T3FwOElQQkxMbz0iLCJpYXQiOjE3MDk1NDUzNjQsImV4cCI6MTcwOTYzMTc2NH0.bdU52V9s6OYAs-Gbox6tbib4OEFpE319W5FIi6nO1j4&amp;comp_iid=8dc4d47d-300e-416c-9fa2-18ddb812e265&amp;gid=1386565214.1707235425"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </Button>
            </Grid>
          </Grid>

          <div className={classes.root3}>
            <List>
              <ListItem>
                <CheckIcon className={classes.validIcon} />
                <Typography variant="body2">
                  <strong>Main services covered - </strong> Yes
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIcon className={classes.validIcon} />
                <Typography variant="body2">
                  <strong>Participating states - </strong> 39
                </Typography>
              </ListItem>
              <ListItem>
                <CheckIcon className={classes.validIcon} />
                <Typography variant="body2">
                  <strong>Online quote too - </strong> No
                </Typography>
              </ListItem>
            </List>

            <Typography variant="body1" className={classes.body} style={{paddingTop:'30px'}}>
              College HUNKS Hauling Junk & Moving® is a local and intercity
              moving company with more than 200 locations across the US. You can
              get help moving across town, to a nearby city, or across state
              lines. The company offers additional services, including packing
              and unpacking, storage, junk removal, and home staging.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              <b>It’s easy to get a quote and schedule your move with College HUNKS
              Hauling Junk & Moving®. </b>Note that the company only operates in 39
              states and you must be near one of its locations to get moving
              help.
            </Typography>

            <Typography variant="body1" className={classes.body}>
              The matching process values quality over quantity. After answering
              the test questions, the site identifies three to seven matches per
              day. So while taking a test initially may sound like a lot of
              work, it will save you the trouble of searching for dates later
              down the line.{" "}
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
          <div className={classes.question}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Container>
          <Card className={classes.root4}>
            <CardMedia
              className={classes.media}
              image="https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/silversingles.20181113153755.png"
              title="SilverSingles Logo"
            />
            <CardContent className={classes.content}>
              <div className={classes.info}>
                <Typography variant="h6" component="span">
                  SilverSingles
                </Typography>
              </div>
              <div className={classes.actions}>
                <Link
                  href="/v?product_id=12731&amp;url=https%3A%2F%2Fwww.spark-an.com%2Fgo.cgi%3Fpid%3D101%26wmid%3D1004%26cpid%3D42%26prid%3D661%26subid%3D%5Btracking-subid%5D%26target%3DSilverSingles.com-default&amp;cms_platform=xsite&amp;rank=1&amp;bi=%7B%22blrs%22%3A71286%2C%22utm_source%22%3A%22Other%22%7D&amp;uid=836m0Mf3OjDX5X322vz5&amp;riid=21xjGWkKPINF3P59049d&amp;tkn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY21zIiwidmVyc2lvbiI6MSwiaGFzaCI6InpGY0loV2RQTUlPOFRlM0k1ajIwck94QXpDQT0iLCJpYXQiOjE3MDg5NjU1MzksImV4cCI6MTcwOTA1MTkzOX0.ndVaGdiU2xe45rzDFSHtLcJGUI5OK2rIYdXNK9xvQyM"
                  className={classes.link}
                  target="_blank"
                  rel="nofollow noreferrer"
                  style={{ textAlign: "center", display: "block" }}
                >
                  <span>Visit Site</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </Container>

        <Container>
          <div className={classes.Box}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                <Typography className={classes.number}>2</Typography>
              </Grid>
              <Grid item xs={11}>
                <Paper className={classes.imageContainer}>
                  <img
                    src="https://images.top10.com/q_auto/v1/production/products/uploads/photo/2023_Logo_Eharmony.20231224094829.svg"
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
                  <strong>Pricing - </strong> As low as $29.95
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
                  <strong>Age range - </strong> 30-50
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
                  <span>A science-based approach to love</span>
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
            <Typography variant="h3" className={classes.question}>
              eharmony - Best dating site and app overall
            </Typography>
            <Typography variant="body1" className={classes.body}>
              eharmony is for daters ready to find love and looking for others
              who are on the same page. With detailed questionnaires and
              profiles, compatibility scores, and icebreaker questions, it's
              easy to match with a potential long-term partner and initiate
              contact.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              On top of that, the site screens users to make sure none of them
              are on criminal registries—something that'll be reassuring to
              those concerned about getting pulled into an online dating scam
            </Typography>
            <Typography variant="body1" className={classes.body}>
              eharmony requires you to spend a significant amount of time
              creating a profile. Its detailed questionnaire stretches out the
              sign-up process but allows the site to find truly compatible
              matches and keeps out people who aren't serious about exploring
              meaningful connections.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Why we chose eharmony: Its patented algorithms consider several
              factors, from personality traits to daily living habits, making it
              a fantastic choice to find long-term relationships. It's been
              around since the year 2000 and has matched over 2 million people,
              refining its processes along the way.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Our experience: We found it helpful to be able to specify things
              like your faith and morals so you can find a match on all levels:
              physical, mental, spiritual, and emotional. When we browsed
              profiles, both on mobile and desktop, we really felt like we got
              to know the other members, even before we started talking to them.
            </Typography>

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
            <div className={classes.question}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h4" className={classes.header}>
                    PROS
                  </Typography>
                  <List component="div" aria-label="Pros">
                    <ListItem>
                      <ListItemText primary="Detailed compatibility quizzes" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem>
                      <ListItemText primary="Helpful conversation starters" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem>
                      <ListItemText primary="SecureCall safety feature" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4" className={classes.header}>
                    CONS
                  </Typography>
                  <List component="div" aria-label="Cons">
                    <ListItem>
                      <ListItemText primary="Users can’t search for matches" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem>
                      <ListItemText primary="Quizzes demand time and thought" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Container>
                <Card className={classes.root4}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.top10.com/q_auto/v1/production/products/uploads/photo/2023_Favicon_Eharmony.20231224094837.svg"
                    title="SilverSingles Logo"
                  />
                  <CardContent className={classes.content}>
                    <div className={classes.info}>
                      <Typography variant="h6" component="span">
                        eharmony
                      </Typography>
                    </div>
                    <div className={classes.actions}>
                      <Link
                        href="/v?product_id=12731&amp;url=https%3A%2F%2Fwww.spark-an.com%2Fgo.cgi%3Fpid%3D101%26wmid%3D1004%26cpid%3D42%26prid%3D661%26subid%3D%5Btracking-subid%5D%26target%3DSilverSingles.com-default&amp;cms_platform=xsite&amp;rank=1&amp;bi=%7B%22blrs%22%3A71286%2C%22utm_source%22%3A%22Other%22%7D&amp;uid=836m0Mf3OjDX5X322vz5&amp;riid=21xjGWkKPINF3P59049d&amp;tkn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY21zIiwidmVyc2lvbiI6MSwiaGFzaCI6InpGY0loV2RQTUlPOFRlM0k1ajIwck94QXpDQT0iLCJpYXQiOjE3MDg5NjU1MzksImV4cCI6MTcwOTA1MTkzOX0.ndVaGdiU2xe45rzDFSHtLcJGUI5OK2rIYdXNK9xvQyM"
                        className={classes.link}
                        target="_blank"
                        rel="nofollow noreferrer"
                        style={{ textAlign: "center", display: "block" }}
                      >
                        <span>Visit Site</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </Container>
            </div>
          </div>
        </Container>

        <Container>
          <div className={classes.Box}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                <Typography className={classes.number}>3</Typography>
              </Grid>
              <Grid item xs={11}>
                <Paper className={classes.imageContainer}>
                  <img
                    src="https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/elite-singles.20180530111040.20221031103434.png"
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
                  <strong>Pricing - </strong> As low as $31.95
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
                  <strong>Age range - </strong> 30-45
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
                  <span>Boutique dating for professionals</span>
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
            <Typography variant="h3" className={classes.question}>
              EliteSingles - Best for professionals
            </Typography>
            <Typography variant="body1" className={classes.body}>
              If you haven't been able to click with people on most mainstream
              dating apps, consider a more specialized service like
              EliteSingles. This site is aimed at intellectuals who value their
              professional lives and are looking for someone to have deep
              conversations with.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Since SilverSingles and EliteSingles are owned by the same
              company, they have a lot in common. EliteSingles also asks users
              to take a research-based personality test and shows them three to
              seven matches a day based on their answers. The quiz allows users
              to state what qualities are most important to them in a partner.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Like most apps and sites we've evaluated, EliteSingles offers free
              memberships but requires users to pay in order to message others.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Why we chose EliteSingles: Due to the extensive quizzes members
              have to take, the sign-up process can become quite lengthy. But we
              believe this is a good thing because it ensures that the site only
              attracts users who are serious about finding relationships with
              like-minded people. Plus, for members' safety, profiles are
              manually verified, and photos cannot be copied or downloaded from
              the site, so your personal information stays confidential.
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Our experience: We liked using the "Have We Met" feature, which
              allowed us to browse other profiles on top of our daily matches.
              We also liked that we could swipe "yes" or "no" to other users.
              But we were frustrated that there wasn't an instant chat or phone
              option for support—you'll have to wait up to two days to get a
              response over email.
            </Typography>

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
            <div className={classes.question}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h4" className={classes.header}>
                    PROS
                  </Typography>
                  <List component="div" aria-label="Pros">
                    <ListItem>
                      <ListItemText primary="Boutique, curated matches" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem>
                      <ListItemText primary="Advanced personality tests" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem>
                      <ListItemText primary="Users united by common relationship goals" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4" className={classes.header}>
                    CONS
                  </Typography>
                  <List component="div" aria-label="Cons">
                    <ListItem>
                      <ListItemText primary="Less interactive experience" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem>
                      <ListItemText primary="Smaller user base" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Container>
                <Card className={classes.root4}>
                  <CardMedia
                    className={classes.media}
                    image="https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/EliteSingles_icon.20210325051223.20220714094638.png"
                    title="SilverSingles Logo"
                  />
                  <CardContent className={classes.content}>
                    <div className={classes.info}>
                      <Typography variant="h6" component="span">
                        EliteSingles
                      </Typography>
                    </div>
                    <div className={classes.actions}>
                      <Link
                        href="/v?product_id=12731&amp;url=https%3A%2F%2Fwww.spark-an.com%2Fgo.cgi%3Fpid%3D101%26wmid%3D1004%26cpid%3D42%26prid%3D661%26subid%3D%5Btracking-subid%5D%26target%3DSilverSingles.com-default&amp;cms_platform=xsite&amp;rank=1&amp;bi=%7B%22blrs%22%3A71286%2C%22utm_source%22%3A%22Other%22%7D&amp;uid=836m0Mf3OjDX5X322vz5&amp;riid=21xjGWkKPINF3P59049d&amp;tkn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY21zIiwidmVyc2lvbiI6MSwiaGFzaCI6InpGY0loV2RQTUlPOFRlM0k1ajIwck94QXpDQT0iLCJpYXQiOjE3MDg5NjU1MzksImV4cCI6MTcwOTA1MTkzOX0.ndVaGdiU2xe45rzDFSHtLcJGUI5OK2rIYdXNK9xvQyM"
                        className={classes.link}
                        target="_blank"
                        rel="nofollow noreferrer"
                        style={{ textAlign: "center", display: "block" }}
                      >
                        <span>Visit Site</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Containe;
