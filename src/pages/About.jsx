import React, { Component } from "react";
import cv from "../assets/documents/CV-Linh Nguyen.pdf";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div>My name is Linh</div>
        <Link to={cv} target="_blank" download>
          Download my CV here
        </Link>
        {this.props.children}
      </div>
    );
  }
}

export default About;
