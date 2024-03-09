import React, { Component } from "react";

export default  class Student3 extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name, roll: this.props.roll };
  }
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
