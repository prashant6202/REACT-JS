import React, { Component } from "react";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      totalCount: this.props.items.length,
    };
    setTimeout(this.updateCart, 5000);
  }

  updateCart = () => {
    let newItems = [...this.state.items, "Dell-inspron Laptop"];
    let newCount = (this.state.totalCount += 1);
    this.setState({ items: newItems, totalCount: newCount });
  };

  render() {
    return (
      <div>
        <h2>Your cart details</h2>
        <h3>Product details: {this.state.items.join()}</h3>
        <h3>Total count: {this.state.totalCount}</h3>
      </div>
    );
  }
}
