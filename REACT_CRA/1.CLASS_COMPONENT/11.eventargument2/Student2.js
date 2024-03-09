import React, { Component } from "react";
export default class Student2 extends Component {
  handleClick(name, roll, e) {
    console.log(`Name:${name},Roll:${roll}`);
  }
  render() {
    return (
      <div>
        <p>
          Name is {this.props.name} ,Roll no is {this.props.roll}
          <button
            onClick={(e) => {
              this.handleClick(this.props.name, this.props.roll);
            }}
          >
            show
          </button>
        </p>
      </div>
    );
  }
}
