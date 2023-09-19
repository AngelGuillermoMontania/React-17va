import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { AppBar, Box, Toolbar, IconButton, Badge, Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled, alpha } from "@mui/material/styles";
import { TextField } from "@mui/material";
import logo from "../assets/logo.svg";
import { CartContext } from "../context/CartContext";

const pages = ["Deportivas", "Urbanas", "Zapatos"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  // const navigate = useNavigate(); /* Inicializo una instancia de navigate */

  const { calcularTotalProductosEnCarrito } = useContext(CartContext);

  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

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

  console.log(user);

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
                <ButtonLink variant="outlined" onClick={handleCloseNavMenu}>
                  {page}
                </ButtonLink>
              </Link>
            ))}
          </Box>
          <TextField
            sx={{ mr: 12, my: 2 }}
            id="standard-basic"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            size="small"
            variant="standard"
          />
          {isAuthenticated ? (
            <>
              <Button
                variant="outlined"
                color="error"
                loading={isLoading}
                onClick={() => {
                  logout();
                }}
              >
                LogOut
              </Button>
              <Link to={"/profile"}>
                <Avatar
                  sx={{ margin: "0 10px" }}
                  alt="Remy Sharp"
                  src={user.picture}
                />
              </Link>
            </>
          ) : (
            <Button
              variant="outlined"
              color="success"
              loading={isLoading}
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Login
            </Button>
          )}

          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Badge
              badgeContent={calcularTotalProductosEnCarrito()}
              color="success"
              sx={{ marginLeft: "10px" }}
            >
              <ShoppingCartIcon color="action" />
            </Badge>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
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
