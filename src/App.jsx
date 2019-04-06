import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact-list">contacts</Link>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
