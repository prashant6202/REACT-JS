import React, { Component } from "react";
import ProductList from "./ProductList.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <ProductList
          items={[
            { name: "JBL Earphones", qty: 2 },
            { name: "PoleStar BackPack", qty: 3 },
            { name: "One Plus 12", qty: 1 },
            { name: "Apple I-Phone 15", qty: 2 },
            { name: "Cannon DSLR", qty: 4 },
            { name: "Dettol N 95 Mask", qty: 3 },
          ]}
        />
      </div>
    );
  }
}
