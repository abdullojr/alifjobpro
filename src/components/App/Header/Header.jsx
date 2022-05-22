import logo from "../Img/logo.svg";
import React from "react";
import { Navbar } from "react-bootstrap";
import App from "@mui/material/AppBar";
import { Link, useLocation } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  const location = useLocation();

  const Style = {
    logo: {
      padding: "20px",
    },
  };

  return (
    <App>
      <Navbar bg="white">
        <Navbar.Brand href="/" style={Style.logo}>
          <img src={logo} width={100} alt="icon" />
        </Navbar.Brand>
        <Navbar.Collapse
          className="justify-content-end"
          style={{ padding: "20px" }}
        >
          <Navbar.Text>
            {location.pathname !== "/favs" ? (
              <Link to="/favs">
                <FavoriteBorderIcon
                  color="error"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            ) : (
              <Link to="/">
                <HomeIcon color="error" style={{ cursor: "pointer" }} />
              </Link>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </App>
  );
};

export default Header;
