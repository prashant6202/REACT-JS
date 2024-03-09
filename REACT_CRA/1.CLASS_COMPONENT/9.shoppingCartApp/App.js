import React, { Component } from "react";
import ProductList from "./ProductList.js";
export default class App extends Component {
  render() {
    return (
      <ProductList
        items={[
          "JBL Earphones",
          "PoleStar BackPlus",
          "One Plus 12",
          "Apple I-Phone 15",
          "Cannon DSLR",
          "Dettol N 95 Mask",
        ]}
      />
    );
  }
}
