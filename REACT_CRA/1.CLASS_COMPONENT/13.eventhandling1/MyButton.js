import React, { Component } from "react";

export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    // console.log(this);
    alert(new Date());
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
