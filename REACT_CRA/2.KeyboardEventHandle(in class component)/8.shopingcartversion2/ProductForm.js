import React, { Component } from "react";
import "./ProductForm.css";
export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { name: "", qty: "" };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.add(this.state, e);
    this.setState({ name: "", qty: "" });
  }
  render() {
    return (
      <div className="ProductForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Item Name</label>
          <br />
          <input
            type="text"
            id="name"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <br></br>
          <label htmlFor="qty">Item Qty</label>
          <br />
          <input
            type="number"
            id="qty"
            value={this.state.qty}
            name="qty"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  }
}
