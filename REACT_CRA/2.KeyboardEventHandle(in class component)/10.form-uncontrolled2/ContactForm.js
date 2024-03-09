import React, { Component } from "react";
import MyInput from "./MyInput";
export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.hancleClick = this.hancleClick.bind(this);
  }
  hancleClick(e) {
    this.childRef.current.setFocus();
  }
  render() {
    return (
      <div>
        <MyInput ref={this.childRef} />
        <button onClick={this.hancleClick}>click me</button> 
      </div>
    );
  }
}
