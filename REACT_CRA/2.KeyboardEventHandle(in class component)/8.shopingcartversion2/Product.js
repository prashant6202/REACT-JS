import React, { Component } from "react";
import "./Product.css";
export default class Product extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.remove(this.props.item.name, e);
  }
  render() {
    console.log(this.props.key);
    return (
      <tr className="Product">
        <td>{this.props.item.name}</td>
        <td>{this.props.item.qty}</td>
        <td>
          <button onClick={this.handleClick}>delete</button>
        </td>
      </tr>
    );
  }
}
