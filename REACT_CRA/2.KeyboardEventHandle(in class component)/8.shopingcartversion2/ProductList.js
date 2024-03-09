import React, { Component } from "react";
import "./ProductList.css";
import Product from "./Product.js";
import ProductForm from "./ProductForm.js";
export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items };
    this.handleClick = this.handleClick.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleClick(name, e) {
    let newArr = this.state.items.filter((item) => item.name !== name);
    this.setState({ items: newArr });
  }
  handleAddToCart(itemObj, e) {
    itemObj.qty = Number(itemObj.qty);
    let allItems = [...this.state.items];
    // let found = false;
    // for (let item of allItems) {
    //   if (
    //     item.name.trim().toLowerCase() === itemObj.name.trim().toLowerCase()
    //   ) {
    //     item.qty += itemObj.qty;
    //     found = true;
    //     break;
    //   }
    // }
    let searchItem = allItems.find(
      (item) =>
        item.name.trim().toLowerCase() === itemObj.name.trim().toLowerCase()
    );
    if (!searchItem) {
      allItems.push(itemObj);
    } else {
      searchItem.qty += itemObj.qty;
    }
    this.setState({ items: allItems });
  }
  produceProducts = (x) => {
    return <Product key={x} item={x} remove={this.handleClick} />;
  };
  render() {
    let productArr = this.state.items.map(this.produceProducts);
    return (
      <div className="ProductList">
        <h1>Your Shopping Cart</h1>
        <div>
          <table>
            <tbody>{productArr}</tbody>
          </table>
        </div>
        <hr />
        <div>
          <h1>Add New Product</h1>
          <ProductForm add={this.handleAddToCart} />
        </div>
      </div>
    );
  }
}
