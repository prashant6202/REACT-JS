import React, { Component } from "react";

export default class Student2 extends Component {
  constructor() {
    super();
    this.state = { name: "Prashant", roll: 40 };
  }
  render() {
    return (
      <div>
        <h2>using constructor</h2>
        <p>
          Name is<b> {this.state.name}</b>
        </p>
        <p>
          Roll no is<b> {this.state.roll}</b>
        </p>
      </div>
    );
  }
}
