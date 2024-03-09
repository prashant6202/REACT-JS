import React, { Component } from "react";
import Student2 from "./Student2";

export default class App extends Component {
  render() {
    return (
      <div>
        <Student2 roll={101} name="Prashant" />
        <Student2 roll={102} name="Arun" />
      </div>
    );
  }
}
