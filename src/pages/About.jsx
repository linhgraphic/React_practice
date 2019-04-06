import React, { Component } from "react";
import { Link } from "react-router-dom";
import contacts from "../fixtures";
import ContactCard from "../components/contactCard";
class About extends Component {
  render() {
    return (
      <div className="About">
        <div>My name is Linh</div>
        {this.props.children}
      </div>
    );
  }
}

export default About;
