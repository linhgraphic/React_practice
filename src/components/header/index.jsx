import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = props => (
  <nav className="demo">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact-list">Contacts</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
