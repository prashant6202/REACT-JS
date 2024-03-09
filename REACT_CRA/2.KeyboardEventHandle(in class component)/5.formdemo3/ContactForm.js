import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", enterPress: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.data = "";
  }
  handleChange(e) {
    this.setState({ userName: e.target.value, enterPress: false });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.data = this.state.userName;
    this.setState({ userName: "", enterPress: true });
  }
  render() {
    return (
      <div>
        <h1>Contact Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="uname">Name:</label>
          <input
            type="text"
            id="uname"
            placeholder="Type your name"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
        {this.state.enterPress && <p>you typed:{this.data}</p>}
      </div>
    );
  }
}
