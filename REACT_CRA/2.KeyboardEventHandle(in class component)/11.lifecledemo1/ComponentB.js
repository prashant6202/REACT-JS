import React, { Component } from "react";
import ComponentA from "./ComponentA";
export default class ComponentB extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "aryan" };
    console.log(" ComponentB  Constructor called.");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("ComponentB getDerivedStateFromProps called");
    return null;
  }
  render() {
    console.log("ComponentB render called");
    return (
      <div>
        <ComponentA />
      </div>
    );
  }
  componentDidMount() {
    console.log("ComponentB componentDidMount called");
  }
}
