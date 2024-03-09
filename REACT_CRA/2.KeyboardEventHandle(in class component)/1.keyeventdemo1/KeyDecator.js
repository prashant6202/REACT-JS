import React, { Component } from "react";

export default class KeyDecator extends Component {
  constructor(props) {
    super(props);

    this.state = { key: "", code: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ key: e.key, code: e.code });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Key Decator</h2>
        <h3>
          Key:{this.state.key} , Code:{this.state.code}
          <br />
          <input type="text" onKeyUp={this.handleClick} />
        </h3>
      </div>
    );
  }
}
