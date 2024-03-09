import React, { Component } from "react";
import "./MySelf.css";
//import prashant from "./about-me.jpg";   1st trika
export default class MySelf extends Component {
  render() {
    return (
      <div className="mySelf">
        <h2>This is me !</h2>
        <img src={require("./about-me.jpg")} />
      </div>
    );
  }
}
