import React, { Component } from "react";

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
