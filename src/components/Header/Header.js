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
import AddBlogForm from "../Form/AddBlogForm"
import { styled, alpha } from "@mui/material/styles";
import logo from "../../images/images/logo.svg"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GetType } from "../../utilities/context/authContext";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid, Input, Modal, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "react-toastify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const settings = ["Profile", "Logout"];

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
});
const Header = ({ darkMode, setDarkMode }) => {
  const cookies = new Cookies();
 const [searchParams] = useSearchParams();
  const googleToken = searchParams.get("googleToken");
  
  useEffect(() => {
    if (googleToken) {
      cookies.set("token", googleToken);
      searchParams.delete("googleToken");
      const newUrl = `${window.location.pathname}`;
      window.history.replaceState(null, "", newUrl);
      window.location.reload();
    }
  },[])
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  const navigate = useNavigate()
  const user = GetType()

  useEffect(() => {
    console.log(user.name)
  }, [user])
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
   const [image, setImage] = React.useState("");

  const handleOpenNavMenu = (event) => {
    console.log("we are testing three");
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
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
  const profileMenu = (value) => {
    console.log(value)
    if (value == "Logout") {
      logOut();

    } else if (value == "Add Article") {
      if (user?.email) {
         navigate("/Editor");
        // handleOpen()
      } else {
         navigate("/login");
      }
    } else if (value == "Profile") {
      navigate(`/profile/${user._id}`);
    }
  }
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

  const logOut = () => {
    const token = cookies.get("token");
    console.log("🚀 ~ file: Header.js:166 ~ logOut ~ token:", token)
    try {
      cookies.remove("token")
      window.location.reload();
      // axios.post(`${process.env.REACT_APP_API_URL}/user/logout`, {}, {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // }).then((response) => {
      //   cookies.set("token" , "")
      //   toast.success("Logout Success");
      //    navigate("/", { replace: true });
      //    window.location.reload();
      // }).catch((e) => {
      //   toast.error("Something went wrong")
      // })
    } catch (error) {
      
    }
  }
  return (
    <>
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
                  <MenuItem
                    onClick={() => {
                      profileMenu("Home");
                    }}
                  >
                    <Typography sx={{ color: "#000" }} textAlign="center">
                      Home
                    </Typography>
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      profileMenu("Add Article");
                    }}
                  >
                    <Typography sx={{ color: "#000" }} textAlign="center">
                      Add Article
                    </Typography>
                  </MenuItem>
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
                <Button
                  onClick={() => {
                    profileMenu("Add Article");
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
                  Add Article
                </Button>
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
                          src={user?.profileImage}
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
                        <MenuItem
                          key={setting}
                          onClick={() => {
                            profileMenu(setting);
                          }}
                        >
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Link
                    style={{ padding: "0.5vw 2vw" }}
                    to="/login"
                    class="btn1"
                  >
                    Join
                  </Link>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
      {/* onClose={handleClose} */}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            borderRadius: "40px 0px 0px 40px",
            width: { xs: "95%", md: "80%" },
            overflow: "auto",
            height: "70%",
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "grey",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <AddBlogForm />
        </Box>
      </Modal>
    </>
  );
}
export default Header;
{/* <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
  className={classes.modal}
>
  <div className={classes.modalContent}>
    <h2 id="modal-title">Add Article</h2>
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          color: "#000",
          fontFamily: "Sofia Pro",
          fontSize: "18px",
          fontWeight: 500,
        }}
      >
        Banner Image
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignItems: { xs: "center", md: "end" },
          gap: { xs: "15px", md: "30px" },
          mt: "20px",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "100%" },
            height: { xs: "100%", md: "100%" },
          }}
        >
          <Avatar
            // src={image ? URL.createObjectURL(image) : user?.displayImage}
            sx={{ width: "100%", height: "100%", borderRadius: "0%" }}
          ></Avatar>
        </Box>
        <Box>
          <label htmlFor="contained-button-file">
            <Input
              
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              sx={{ display: "none" }}
            />
            <Button
              variant="contained"
              component="span"
              sx={{
                textTransform: "none",
                fontSize: { xs: "8px", md: "14px" },
                fontFamily: "Sofia Pro",
                backgroundColor: "#000",
                color: "#fff",
                padding: { xs: "10px 20px", md: "15px 30px" },
                borderRadius: "8px",
                border: "1px solid black",
                mt: "30px",
                "&:hover": {
                  backgroundColor: "#fff",
                  border: "1px solid black",
                  color: "#000",
                },
              }}
            >
              Upload Photo
            </Button>
          </label>
        </Box>
      </Box>
    </Box>

    <Stack spacing={4} sx={{ mt: "50px" }}>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#202124",
                  fontFamily: "Sofia Pro",
                  fontSize: "15px",
                }}
              >
                First Name*
              </Typography>
              <TextField
                {...register("firstName", {
                  required: "First Name is required",
                })}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName && errors.firstName.message}
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%", mt: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>

    <Button variant="contained" color="secondary" onClick={handleClose}>
      Close
    </Button>
  </div>
</Modal> */}
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