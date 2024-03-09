import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { timeStamp: new Date() };
    setInterval(this.updateTime, 1000);
  }

  updateTime = () => {
    this.setState({ timeStamp: new Date() });
  };
  render() {
    return (
      <div>
        <h2>Hello everyone</h2>
        <h3>Currnet date and time {this.state.timeStamp.toLocaleString()}</h3>
      </div>
    );
  }
}
