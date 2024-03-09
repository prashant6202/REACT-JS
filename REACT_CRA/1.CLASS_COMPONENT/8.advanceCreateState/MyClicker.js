import React, { Component } from "react";
export default class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.handleClick = this.handleClick.bind(this);
    this.handleTripleClick = this.handleTripleClick.bind(this);
  }
  increment(prevState) {
    return { counter: prevState.counter + 1 };
  }

  handleClick(e) {
    // this.setState({ counter: this.state.counter + 1 });  not recomentent way by the FACEBOOK
    this.setState(this.increment);
  }

  handleTripleClick(e) {
    // this.setState({ counter: (this.state.counter + 3) });
    this.setState(this.increment); //facebook recomented way
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
    this.setState(this.increment);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>
          Counter is :<span>{this.state.counter}</span>
        </h2>
        <button id="button" onClick={this.handleClick}>
          Click to increment by 1
        </button>
        <button id="button" onClick={this.handleTripleClick}>
          Click to increment by 3
        </button>
      </div>
    );
  }
}
