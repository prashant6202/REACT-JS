import React, { Component } from "react";
import "./MyClicker.css";
export default class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div className="abc">
        <h2>
          Counter is :<span>{this.state.counter}</span>
        </h2>
        <button id="button" onClick={this.handleClick}>
          Increment counter
        </button>
      </div>
    );
  }
}
