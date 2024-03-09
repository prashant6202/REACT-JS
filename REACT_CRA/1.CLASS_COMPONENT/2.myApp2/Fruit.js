import React, { Component } from "react";
import food from "./food";
import { choice, remove } from "./helper";
export default class Fruit extends Component {
  render() {
    let randomFruit = choice(food);
    let remainingFruits = remove(food, randomFruit);
    return (
      <div>
        <p>Total fruits:{food.length}</p>
        <p>They are: {food.join()}</p>
        <p>Chosen fruit:{randomFruit}</p>
        <p>Remaining fruits:{remainingFruits.length}</p>
        <p>They are: {remainingFruits.join()}</p>
      </div>
    );
  }
}
