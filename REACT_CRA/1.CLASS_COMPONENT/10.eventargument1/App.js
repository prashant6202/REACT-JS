import React, { Component } from "react";
import Student1 from "./Student1";

export default class App extends Component {
  render() {
    return (
      <div>
        <Student1 roll={101} name="Prashant" />
        <Student1 roll={102} name="Arun" />
      </div>
    );
  }
}
