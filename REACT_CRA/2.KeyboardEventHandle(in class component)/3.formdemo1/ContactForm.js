import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = { userName: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ userName: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Contact Form</h1>
        <form>
          <label htmlFor="uname">Name:</label>
          <input
            type="text"
            id="uname"
            placeholder="Type your name"
            value={this.state.userName}
            onChange={this.handleChange}
          />
        </form>
        <p>
          You typed:<strong>{this.state.userName}</strong>
        </p>
      </div>
    );
  }
}
