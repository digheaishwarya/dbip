import {
  Grid,
  Link,
  Typography,
  Popover,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { ListItem } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Menu as MenuIcon, ExpandLess, ExpandMore } from "@mui/icons-material";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import AdbIcon from "@mui/icons-material/Adb";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

// import { makeStyles } from "@material-ui/core/styles";
const pages = ["API", "Developers", "Database", "Tools", "Statistics", "FAQ"];
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(true);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [open1, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open1);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",

    "&:hover": {},
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    container1: {
      maxWidth: '100%', // By default, no maxWidth is set
      [theme.breakpoints.up('sm')]: {
        maxWidth: theme.breakpoints.values.sm,
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: theme.breakpoints.values.md,
      },
    }
  }

  ));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft:` calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    root: {
      background: "white",
      marginLeft: "-2px",
      marginRight: "-2px",
      display: "flex",
      flexDirection: "row",
    },
  }
  
  ));

  const ContainerWithBackground = styled(Container)({
    backgroundImage: `url('https://db-ip.com/img/hero-bg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center", 
  });
  return (
    <React.Fragment>
      {/* <ContainerWithBackground maxWidth="xl"> */}
        <Grid container>
          <Grid item xs={12}  >
            <AppBar
              position="static"
              sx={{ display: { xs: "block", sm: "none" } ,
              backgroundImage:` url('https://db-ip.com/img/hero-bg.jpg')`,
              backgroundSize: 'cover',
             
            }}
              
            >
              <Toolbar  sx={{ justifyContent: "flex-end" }}>
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  onClick={handleClick}
                  sx={{ marginRight: 0 }}
                >
                  <MenuIcon sx={{position:"relative",top:"30px"}}/>
                </IconButton>
              </Toolbar>

              <Box
                component={NavLink}
                to="/"              
              >
                <img
                  src="https://db-ip.com/img/main-logo.svg"
                  alt="IP Geolocation Logo"
                  style={{
                    maxWidth: "40%",
                    maxHeight: "auto",
                    position: "relative",
                    top:"-50px",
                    right:"5px",
                    objectFit: "contain",
                  }}
                />
              </Box>
                {/* <img
                  src="https://db-ip.com/img/main-logo.svg"
                  alt="IP Geolocation Logo"
                  style={{
                    maxWidth: "40%",
                    maxHeight: "auto",
                    position: "relative",
                    top:"-50px",
                    right:"5px",
                    objectFit: "contain",
                  }}
                /> */}
              {/* </Box> */}

              <List
                sx={{
                  width: "100%",
                  marginLeft: "10px",
                  maxWidth: 200,
                  color: "white",
                  position: "relative",
                  top: "-50px",
                }}
                component="nav"
              >
                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <List disablePadding sx={{ marginLeft: "0px" ,}}>
                    <ListItem>
                      <ListItemButton
                        onClick={handleCloseNavMenu}
                        sx={{ pl: 1, marginTop: "-15px" }}
                        component={NavLink} // Define the route for each page
                        to="/api"
                      >
                        <ListItemText>API</ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        onClick={handleCloseNavMenu}
                        sx={{ pl: 1, marginTop: "-15px" }}
                        component={NavLink} // Define the route for each page
                        to="/developer"
                      >
                        <ListItemText>Developer</ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        onClick={handleCloseNavMenu}
                        sx={{ pl: 1, marginTop: "-15px" }}
                        component={NavLink} // Define the route for each page
                        to="/database"
                      >
                        <ListItemText>Database</ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        onClick={handleCloseNavMenu}
                        sx={{ pl: 1, marginTop: "-15px" }}
                        component={NavLink} // Define the route for each page
                        to="/tool"
                      >
                        <ListItemText>Tools</ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        onClick={handleCloseNavMenu}
                        sx={{ pl: 1, marginTop: "-15px" }}
                        component={NavLink} // Define the route for each page
                        to="/faq"
                      >
                        <ListItemText>FAQ</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </AppBar>
          </Grid>

          <Grid item xs={12} md={12} sx={{
      backgroundImage: `url('https://db-ip.com/img/hero-bg.jpg')`,
      backgroundSize: 'cover',
    
      // Add any additional background properties here
    }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                component={NavLink}
                to="/"
                sx={{
                  mr: 2,
                  width: 120,
                  height: 100,
                  alignItems: "left",
                  position: "relative",
                  left: "70px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img
                  src="https://db-ip.com/img/main-logo.svg"
                  alt="IP Geolocation Logo"
                  style={{ width: "300", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        sx={{ width: "400px", color: "white" }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon
                sx={{ display: { xs: "none", sm: "none", md: "none" }, mr: 1 }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                }}
              ></Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  marginLeft: "380px",
                }}
              >
                <Button
                  to="/api"
                  component={NavLink}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  API
                </Button>
                <Button
                  to="/developer"
                  component={NavLink}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  Developer
                </Button>
                <Button
                  to="/database"
                  component={NavLink}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  Database
                </Button>
                <Button
                  to="/tool"
                  component={NavLink}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  Tools
                </Button>
                {/* <Button
                  to="/statistics"
                  component={NavLink}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  Statistics
                </Button> */}
                <Button
                  to="/faq"
                  component={NavLink}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  FAQ
                </Button>
                <Search
                  sx={{
                    color: "black",
                    width: "100%",
                    height: "40px",
                    marginTop: "10px",
                  }}
                >
                  <SearchIconWrapper></SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <SearchIcon
                    sx={{ position: "absolute", right: "20px", top: "8px" }}
                  />
                </Search>
                <AccountCircle sx={{ marginTop: "20px", color: "white" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      {/* </ContainerWithBackground>   */}
    </React.Fragment>
  );
};

export default Header;