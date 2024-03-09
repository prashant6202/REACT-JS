import React, { Component } from "react";

export default class ComponentA extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "sachin" };
    console.log(" ComponentA  Constructor called.");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("ComponentA getDerivedStateFromProps called");
    return null;
  }

  render() {
    console.log("ComponentA render called");
    return <div>{this.state.name}</div>;
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount called");
  }
}
