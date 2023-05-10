import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from "@mui/material/styles";
import logo from "../../images/images/logo.svg"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GetType } from "../../context/authContext";
import { Link } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

const pages = ["Home", "Add Article", "Recent Post", "My Article"];
const settings = ["Profile",  "Logout"];
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
});
const Header = ({ darkMode, setDarkMode }) => {
  const user = GetType()

  useEffect(() => {
    console.log(user.name)
  }, [user])
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    console.log("we are testing three");
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    console.log("we are testing two");
    console.log(event)
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (value) => {
    console.log("we are testing one")
    console.log(value);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid black",
    marginTop: "1.5vw",
    marginBottom:"1.5vw",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      marginLeft:"1vw"
    },
  }));

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
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/" class="logo">
                <img src={logo} width="129" height="40" alt="Blogy logo" />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
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
                  color: "#000",
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    value={page}
                    onClick={() => {
                      handleCloseNavMenu(page);
                    }}
                  >
                    <Typography sx={{ color: "#000" }} textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/" class="logo">
                <img src={logo} width="129" height="40" alt="Blogy logo" />
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu(page);
                  }}
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "1.5rem",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {user?.name ? (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        sx={{ backgroundColor: "#000" }}
                        alt={user.name}
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Link style={{ padding: "0.5vw 2vw" }} to="/login" class="btn1">
                  Join
                </Link>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header;
/*<>
      {" "}
       <header class="header section" data-header>
        <div class="container">
          <Link to="/" class="logo">
            <img src={logo} width="129" height="40" alt="Blogy logo" />
          </Link>

          <nav class="navbar" data-navbar>
            <ul class="navbar-list">
              <li class="navbar-item">
                <a href="#" class="navbar-link hover:underline" data-nav-link>
                  Home
                </a>
              </li>

              <li class="navbar-item">
                <a href="#" class="navbar-link hover:underline" data-nav-link>
                  Recent Post
                </a>
              </li>

              <li class="navbar-item">
                <Link to="/editor" class="navbar-link hover:underline" data-nav-link>
                  Add Article
                </Link>
              </li>
            </ul>
          </nav>

          <div class="wrapper">
            <button class="search-btn" aria-label="search" data-search-toggler>
              <ion-icon name="search-outline" aria-hidden="true"></ion-icon>

              <span class="span">Search</span>
            </button>

            <button
              class="nav-toggle-btn"
              aria-label="toggle menu"
              data-nav-toggler
            >
              <span class="span one"></span>
              <span class="span two"></span>
              <span class="span three"></span>
            </button>
            {user?.name ?
              <Link to="#" class="btn">
                {user.name}
              </Link> :
              <Link to="/login" class="btn">
                Join
              </Link>}
          </div>
        </div>
      </header>
      <div class="search-bar" data-search-bar>
        <div class="input-wrapper">
          <input
            type="search"
            name="search"
            placeholder="Search"
            class="input-field"
          />

          <button
            class="search-close-btn"
            aria-label="close search bar"
            data-search-toggler
          >
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <p class="search-bar-text">Please enter at least 3 characters</p>
      </div>
    </> */































































































































 // //   <div
      // //     className={classes.herovideo}

      // //   >
      // <div className={classes.header}>
      //   <i
      //     onClick={() => setBurger(!burger)}
      //     className="fa fa-bars fa-2x"
      //     aria-hidden="true"
      //   ></i>
      //   <div className={classes.logo}>
      //     <img className={classes.logo} src={logo} alt="logo-epo" />
      //   </div>
      //   <div>
      //     <ul
      //       style={{ transform: `${burger ? "translateX(-50px)" : ""}` }}
      //       className={classes.nav}
      //     >
      //       <i
      //         onClick={() => setBurger(!burger)}
      //         style={{ left: "11em", top: ".5em" }}
      //         className="fa fa-times"
      //         aria-hidden="true"
      //       ></i>
      //       <li onClick={() => setBurger(false)}>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li onClick={() => setBurger(false)}>
      //         <Link to="/about">About</Link>
      //       </li>
      //       <li onClick={() => setBurger(false)}>
      //         <Link to="/gallery">Gallery</Link>
      //       </li>
      //       <li onClick={() => setBurger(false)}>
      //         <Link to="/blog">Blog</Link>
      //       </li>
      //       <li onClick={() => setBurger(false)}>
      //         <Link to="/contact">Contact</Link>
      //       </li>
      //       <li onClick={() => setBurger(false)}>
      //         {user ? (
      //           user?.name ? (
      //             user.name
      //           ) : (
      //             "User"
      //           )
      //         ) : (
      //           <Link to="/login">Login</Link>
      //         )}
      //       </li>
      //     </ul>
      //   </div>
      // </div>
      // // </div>