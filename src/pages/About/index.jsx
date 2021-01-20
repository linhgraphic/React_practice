import React, { Component } from "react";
import cv from "../../assets/documents/CV-Linh Nguyen.pdf";
import { Link } from "react-router-dom";
import profile01 from "../../assets/images/profile01.JPG";
import CoffeeCup from "../../assets/images/CoffeeCup.png";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>.........Coding is my cup of coffee.........</h1>
        <img className="coffeeIcon" src={CoffeeCup} />

        <img className="profile" src={profile01} alt="Linhgraphics profile" />
        <p>
          I am Linh Nguyen, a coding and coffee lover, and web developer with
          unlimited passion for learning new technical skills.
        </p>
        <p>
          I am also a skilled Technical Artist with years of experience in game
          and CGI industry. As an artist-turned-programmer, I have a
          best-of-both-world approach and insight in CGI production and UI
          development.
          <p>
            More details in my{" "}
            <a
              href="http://linhgraphics.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Technical Artist
            </a>{" "}
            website.
          </p>
        </p>
        <p>
          One of my best interest is spending hours grinding through different
          problems on several coding challenge platforms, CodeWars and LeetCode
          being my favourites. Algorithms are beautiful!
        </p>

        {/* <Link to={cv} target="_blank" download>
          Download my CV here
        </Link> */}
        {this.props.children}
      </div>
    );
  }
}

export default About;
