import { useState } from "react";

import { Link, NavLink /* , useNavigate */ } from "react-router-dom";

import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Search } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { TextField } from "@mui/material";
import logo from "../assets/logo.svg";

const pages = ["Deportivas", "Urbanas", "Zapatos"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  // const navigate = useNavigate(); /* Inicializo una instancia de navigate */

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    // navigate("/")  /* Redirige a la persona la url indicada */
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

  const ButtonLink = styled(Button)(({ theme }) => ({
    margin: "0 10px",
    "&active": {
      color: "white",
      backgroundColor: "#4fa94d",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  }));

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img
                src={logo}
                alt="not found"
                width={100}
                height={100}
                style={{ margin: "0 5px" }}
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="span"
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
              CALZATE
            </Typography>
          </Link>

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
              }}
            >
              {pages.map((page) => (
                <Link
                  to={`/category/${page}`}
                  key={page}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              src={logo}
              alt="not found"
              width={100}
              height={50}
              style={{ margin: "0 5px" }}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
            CALZATE
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              width: "50%",
              margin: "0 10px",
            }}
          >
            {pages.map((page) => (
              <Link to={`category/${page}`} key={page}>
                <ButtonLink
                  variant="outlined"
                  onClick={handleCloseNavMenu}
                  // sx={{
                  //   my: 2,
                  //   color: "white",
                  //   display: "block",
                  //   margin: "0 10px",
                  // }}
                  // activeStyle={{
                  //   color: "white",
                  //   backgroundColor: "#4fa94d",
                  // }}
                  // style={({ isActive, isPending }) => {
                  //   return {
                  //     fontWeight: isActive ? "bold" : "",
                  //     color: isPending ? "red" : "black",
                  //   };
                  // }}
                >
                  {page}
                </ButtonLink>
              </Link>
            ))}
          </Box>
          <TextField
            sx={{ ml: 2, my: 2 }}
            id="standard-basic"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            size="small"
            variant="standard"
          />

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              ></IconButton>
              <ShoppingCartIcon />
            </Tooltip> */}
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
