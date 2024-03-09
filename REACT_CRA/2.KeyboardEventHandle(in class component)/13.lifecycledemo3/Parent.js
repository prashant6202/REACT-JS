import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "prashant" };
    console.log("Parent Constructor is called");
    this.handleClick = this.handleClick.bind(this);
  }
  static getDerivedStateFromProps(Props, State) {
    console.log("Parent getDerivedStateFromProps is called");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent shouldComponentUpdate is called");
    if (this.state.name !== nextState.name) {
      return true;
    }
    return false;
  }

  handleClick(e) {
    console.log("Parent handleClick is called");
    this.setState({ name: "jadu" });
  }

  render() {
    console.log("Parent render is called");

    return (
      <div>
        <h2>{this.state.name}</h2>
        <Child />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("Parent componentDidMount is called");
  }
}
