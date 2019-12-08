import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = props => (
  <nav className="demo">
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact-list">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
