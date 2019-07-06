import React, { Component } from "react";
import linhgraphics from "../assets/images/linhgraphics.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="App-header">
        <img
          style={{ width: "500px" }}
          src={linhgraphics}
          alt="Linhgraphics profile"
        />

        <a
          className="App-link"
          href="http://linhgraphics.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web developer
        </a>
      </header>
    );
  }
}

export default Home;
