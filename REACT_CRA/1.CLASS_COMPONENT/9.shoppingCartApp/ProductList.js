import React, { Component } from "react";
import "./ProductList.css";
import Product from "./Product.js";
export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, e) {
    // let newArr = [];
    // for (let item of this.state.items) {
    //   if (item !== name) {
    //     newArr.push(item);
    //   }
    // }
    let newArr = this.state.items.filter((item) => item !== name);
    this.setState({ items: newArr });
  }

  render() {
    let productArr = this.state.items.map((x) => (
      <Product item={x} remove={this.handleClick} />
    ));
    return (
      <div className="ProductList">
        <h1>Available Products</h1>
        <hr />
        <div>
          <ul>{productArr}</ul>
        </div>
      </div>
    );
  }
}
