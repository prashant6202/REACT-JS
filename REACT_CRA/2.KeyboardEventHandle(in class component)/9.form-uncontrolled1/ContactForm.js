//if int the form more than one input text box than we have to take more event handler but
//we can write in one line using dynamicEventhandler

import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = React.createRef();
    this.userEmailRef = React.createRef();
    this.userPwdRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(
      "your name:" +
        this.userNameRef.current.value +
        "\n" +
        "Your email:" +
        this.userEmailRef.current.value +
        "\n" +
        "your password:" +
        this.userPwdRef.current.value
    );
    this.userNameRef.current.value = "";
    this.userEmailRef.current.value = "";
    this.userPwdRef.current.value = "";
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
                  size={30}
                  placeholder="Type your name"
                  ref={this.userNameRef}
                />
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
                  size={30}
                  placeholder="Type your email"
                  ref={this.userEmailRef}
                />
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
                  size={30}
                  placeholder="Type your Password"
                  ref={this.userPwdRef}
                />
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
