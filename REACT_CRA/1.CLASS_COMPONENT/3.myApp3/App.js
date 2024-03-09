import React, { Component } from "react";
import MySelf from "./MySelf";
export default class App extends Component {
  render() {
    return (
      <div>
        {" "}
        <MySelf />
        <h2>This is not me</h2>
      </div>
    );
  }
}
