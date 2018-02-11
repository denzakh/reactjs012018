import React, { Component } from "react";

export default class CardNumberInput extends Component {
  constructor(props) {
    super();
    let stateObj = {};
    let normalizeStr = this.normalize(props.cardNumber);
    stateObj.number = this.format(normalizeStr);
    this.state = stateObj;
  }

  // тесты ругаются на match
  normalize = str => {
    let reg = new RegExp(/\d/g);
    let normalizeStr = str.match(reg) || [];
    normalizeStr = normalizeStr.join("");
    return normalizeStr;
  };

  format = str => {
    let numberArray = Array.from(str);
    let newArray = [];
    for (let i = 0; i < numberArray.length; i++) {
      if ((i + 1) % 4 === 0) {
        if (i === numberArray.length - 1) {
          newArray.push(numberArray[i]);
        } else {
          newArray.push(numberArray[i] + " ");
        }
      } else {
        newArray.push(numberArray[i]);
      }
    }
    let stateStr = newArray.join("");
    return stateStr;
  };

  componentWillReceiveProps = nextProps => {
    let normalizeStr = this.normalize(nextProps.cardNumber);
    let number = this.format(normalizeStr);
    this.setState({ number });
  };

  render() {
    return (
      <input
        type="text"
        onChange={this.props.onChange}
        value={this.state.number}
      />
    );
  }
}
