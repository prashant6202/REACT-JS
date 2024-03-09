//if int the form more than one input text box than we have to take more event handler but
//we can write in one line using dynamicEventhandler

import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", useremail: "", userpwd: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(
      "your name:" +
        this.state.userName +
        "\n" +
        "Your email:" +
        this.state.useremail +
        "\n" +
        "your password:" +
        this.state.userpwd
    );
    this.setState({ userName: "", useremail: "", userpwd: "" });
  }
  render() {
    return (
      <div style={{ position: "absolute", left: "40em" }}>
        <h1>Contact Form</h1>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td>
                <label htmlFor="uname">Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="uname"
                  name="userName"
                  size={30}
                  placeholder="Type your name"
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
                <span>{this.state.userName}</span>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="uemail">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="uemail"
                  name="useremail"
                  size={30}
                  placeholder="Type your email"
                  value={this.state.useremail}
                  onChange={this.handleChange}
                />
                <span>{this.state.useremail}</span>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label htmlFor="upwd">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  id="upwd"
                  name="userpwd"
                  size={30}
                  placeholder="Type your Password"
                  value={this.state.userpwd}
                  onChange={this.handleChange}
                />
                <span>{this.state.userpwd}</span>
              </td>
            </tr>
            <br></br>
            <tr>
              <td>
                <button
                  type="submit"
                  style={{ position: "absolute", left: "11em" }}
                >
                  submit
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
