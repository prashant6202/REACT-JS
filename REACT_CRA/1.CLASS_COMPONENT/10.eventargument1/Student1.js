import React, { Component } from "react";
export default class Student1 extends Component {
  constructor(props) {
    super(props);

    this.handleArgClick = this.handleArgClick.bind(this);
  }
  handleClick(name, roll) {
    console.log(`Nmae:${name},Roll:${roll}`);
  }
  handleArgClick(e) {
    this.handleClick(this.props.name, this.props.roll);
  }

  render() {
    return (
      <div>
        <p>
          Name is {this.props.name} ,Roll no is {this.props.roll}
          <button onClick={this.handleArgClick}>show</button>
        </p>
      </div>
    );
  }
}
