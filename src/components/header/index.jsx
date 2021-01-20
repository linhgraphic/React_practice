import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <nav className="nav-menu mobile-only">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <span aria-label="About" role="img"></span>Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <NavLink exact to="/">
              <span aria-label="Home" role="img">
                Home
              </span>
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink to="/about">
              <span aria-label="About" role="img">
                About
              </span>
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink to="/projects">Projects</NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink to="/contact-list">Contacts</NavLink>
          </MenuItem>
        </Menu>
      </nav>

      <nav className="nav-menu desktop-only">
        <NavLink exact to="/">
          <span aria-label="Home" role="img">
            Home
          </span>
        </NavLink>
        <NavLink to="/about">
          <span aria-label="About" role="img">
            About
          </span>
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact-list">Contacts</NavLink>
      </nav>
    </header>
  );
};

export default Header;
