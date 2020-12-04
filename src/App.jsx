import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
