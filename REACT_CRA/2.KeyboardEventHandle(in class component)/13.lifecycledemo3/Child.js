import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Amit" };
    console.log("Child Constructor is called");
  }
  static getDerivedStateFromProps(Props, State) {
    console.log("child getDerivedStateFromProps is called");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate is called");
    return true;
  }
  render() {
    console.log("child render is called");

    return (
      <div>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
  componentDidMount() {
    console.log("child componentDidMount is called");
  }
}
