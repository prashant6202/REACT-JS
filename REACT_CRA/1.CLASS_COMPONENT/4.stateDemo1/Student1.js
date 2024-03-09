import React, { Component } from "react";

export default class Student1 extends Component {
  state = { name: "Amit", roll: 10 };
  render() {
    return (
      <div>
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
