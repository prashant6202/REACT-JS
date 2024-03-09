import React, { Component } from "react";
export default class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }

  handleClick = (value, e) => {
    // this.setState({ counter: this.state.counter + 1 });  not recomentent way by the FACEBOOK
    this.setState((previous) => {
      return { counter: previous.counter + value };
    });
  };

  render() {
    return (
      <div style={{ textAling: "center" }}>
        <h2>
          Counter is :<span>{this.state.counter}</span>
        </h2>
        <button
          id="button"
          onClick={(e) => {
            this.handleClick(1, e);
          }}
        >
          Click to increment by 1
        </button>
        <button
          id="button"
          onClick={(e) => {
            this.handleClick(2, e);
          }}
        >
          Click to increment by 2
        </button>

        <button
          id="button"
          onClick={(e) => {
            this.handleClick(3, e);
          }}
        >
          Click to increment by 3
        </button>
      </div>
    );
  }
}
