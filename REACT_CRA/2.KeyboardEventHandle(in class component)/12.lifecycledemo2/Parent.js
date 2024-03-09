import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState((previous) => {
      return { count: previous.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <Child countValue={this.state.count} />
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
