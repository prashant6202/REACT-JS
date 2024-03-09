import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ userName: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("You typed:" + this.state.userName);
    this.setState({ userName: "" });
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
      </div>
    );
  }
}
