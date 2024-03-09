import React, { Component } from "react";
import Student3 from "./Student3";

export default class App extends Component {
  render() {
    return (
      <div>
        <Student3 roll={101} name="Prashant" />
        <Student3 roll={102} name="Arun" />
      </div>
    );
  }
}
