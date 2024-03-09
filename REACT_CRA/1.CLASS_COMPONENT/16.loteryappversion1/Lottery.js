import React, { Component } from "react";
import "./Lottery.css";
import Ball from "./Ball.js";
export default class Lottery extends Component {
  static defaultProps = { title: "Lotto", numBalls: 6, maxValue: 50 };
  constructor(props) {
    super(props);
    let arr = Array.from({ length: this.props.numBalls });
    this.state = { numsArr: arr };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let arr = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      let randNum = Math.floor(Math.random() * this.props.maxValue) + 1;
      arr.push(randNum);
    }
    this.setState({ numsArr: arr });
  }
  produceBalls(n) {
    return <Ball num={n} />;
  }
  render() {
    let ballArr = this.state.numsArr.map(this.produceBalls);
    return (
      <div className="Lottery">
        <h2>{this.props.title}</h2>
        <div>{ballArr}</div>
        <button onClick={this.handleClick}>Generate Random Nums</button>
      </div>
    );
  }
}
