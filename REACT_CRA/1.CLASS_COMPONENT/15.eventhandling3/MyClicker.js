import React, { Component } from "react";
import "./MyClicker.css";
export default class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1, attempt: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let random = Math.floor(Math.random() * 10 + 1);
    this.setState({ counter: random });
    this.setState({ attempt: (this.state.attempt += 1) });
  }
  render() {
    return (
      <div className="abc">
        <h2>
          Counter is :<span>{this.state.counter}</span>
        </h2>
        {this.state.counter === 6 ? (
          <h2>
            you win!<h2>you attemepted :{this.state.attempt++}</h2>{" "}
          </h2>
        ) : (
          <button id="button" onClick={this.handleClick}>
            Increment counter
          </button>
        )}
      </div>
    );
  }
}
