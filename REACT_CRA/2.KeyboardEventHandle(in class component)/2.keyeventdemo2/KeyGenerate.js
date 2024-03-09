import React, { Component } from "react";

export default class KeyGenerate extends Component {
  handleClick(e) {
    if (e.code === "Enter") {
      alert(`Hello ${e.target.value}`);
    } else if (e.code === "Escape") {
      e.target.value = "";
    }
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Type your message</h2>
        <br />
        <input type="text" onKeyUp={this.handleClick} />
      </div>
    );
  }
}
