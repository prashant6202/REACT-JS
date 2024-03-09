import React, { Component } from "react";
export default class Student3 extends Component {
  handleClick(name, roll, e) {
    console.log(`Name:${name},Roll:${roll},Event:${e}`);
  }
  render() {
    return (
      <div>
        <p>
          Name is {this.props.name} ,Roll no is {this.props.roll}
          <button
            onClick={this.handleClick.bind(
              this,
              this.props.name,
              this.props.roll
            )}
          >
            show
          </button>
        </p>
      </div>
    );
  }
}
