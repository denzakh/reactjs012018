import React, { Component } from "react";
import CardNumberInput from "../CardNumberInput";

export default class CardNumberHolder extends Component {
  state = { cardNumber: "" };

  static defaultProps = {
    displayName: "CardNumberHolder",
    linkTitle: "Card number formating",
    path: "/card"
  };
  // path={this.path} linkTitle={this.linkTitle}>

  handleChange = e => {
    let value = e.target.value;
    this.setState({ cardNumber: value });
  };

  render() {
    return (
      <div>
        <CardNumberInput
          onChange={this.handleChange}
          cardNumber={this.state.cardNumber}
        />
      </div>
    );
  }
}
