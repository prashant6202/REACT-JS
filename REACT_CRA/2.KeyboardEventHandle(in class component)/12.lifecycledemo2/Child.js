import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps(props, state) {
    state = { c_count: props.countValue };
    return state;
  }

  render() {
    return <div>{this.state.c_count}</div>;
  }
}
