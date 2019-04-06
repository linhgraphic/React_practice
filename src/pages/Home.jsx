import React, { Component } from "react";
import logo from "../logo.svg";
import Button from "../components/button";
import Input from "../components/input";
import { numToArr } from "../components/list";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "Linh",
      surName: "Ng",
      a: 0,
      b: 0,
      H: 0,
      num: 0
    };
  }
  increment = () => this.setState({ counter: this.state.counter + 1 });
  updateInputName = event => this.setState({ name: event.target.value });
  updateInputSurname = event => this.setState({ surName: event.target.value });
  updateInputNum = event => this.setState({ num: event.target.value });
  // displayList = num => {
  //   function numToArr(num) {
  //     const arr = [];
  //     for (let i = 1; i <= num; i++) {
  //       i % 15 == 0
  //         ? arr.push("fizzBuzz")
  //         : i % 3 == 0
  //         ? arr.push("fizz")
  //         : i % 5 == 0
  //         ? arr.push("buzz")
  //         : arr.push(i);
  //     }
  //     return arr;
  //   }

  //   return numToArr(num).map(elem => <li>{elem}</li>);
  // };
  updateInputa = event =>
    this.setState({
      a: event.target.value
      // c: this.updatHhypotenuse(this.state.b, event.target.value)
    });
  updateInputb = event =>
    this.setState({
      b: event.target.value
      // c: this.updatHhypotenuse(this.state.a, event.target.value)
    });
  updatHhypotenuse = (a, b) => Math.sqrt(a * a + b * b);
  render() {
    return (
      <header className="App-header">
        <Button onClick={this.increment}>
          <img src="https://media1.tenor.com/images/3d3f3413b6b674585fbe3335eb00af24/tenor.gif?itemid=9541076" />{" "}
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <Button className="btn" />
        <p>
          Counter value: {this.state.counter}
          <Input value={this.state.name} onChange={this.updateInputName} />
          <Input
            value={this.state.surName}
            onChange={this.updateInputSurname}
          />
        </p>
        <p>
          <Input value={this.state.a} onChange={this.updateInputa} />
          <Input value={this.state.b} onChange={this.updateInputb} />
        </p>
        <p>
          <Input value={this.state.num} onChange={this.updateInputNum} />
        </p>
        <p>
          Hello {this.state.name} {this.state.surName}
        </p>
        {/* <p>Hypotenuse {this.state.c}</p> */}
        <p>Hypotenuse {this.updatHhypotenuse(this.state.a, this.state.b)}</p>
        {/* <ol>list {this.displayList(this.state.num)}</ol> */}
        <ol>
          List{" "}
          {numToArr(this.state.num).map(elems => (
            <li>{elems}</li>
          ))}
        </ol>
        <a
          className="App-link"
          href="http://linhgraphics.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Linh</Button>
      </header>
    );
  }
}

export default Home;
