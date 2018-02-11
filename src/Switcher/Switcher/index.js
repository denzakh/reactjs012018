import React, { Component } from "react";
import "./Switcher.css";

export default class Switcher extends Component {
  state = { selectedChild: 0 };

  handleChangeChild = e => {
    let item = e.target;
    let id = item.getAttribute("data-id");
    this.setState({ selectedChild: id });
  };

  render() {
    let list = React.Children.map(this.props.children, (child, index) => {
      return (
        <li
          className="component-list__name"
          data-id={index}
          key={index}
          onClick={this.handleChangeChild}
        >
          {child.type.displayName || child.type.name}
        </li>
      );
    });

    let componentList = React.Children.map(
      this.props.children,
      (child, index) => {
        if (index === +this.state.selectedChild) {
          return child;
        }
      }
    );

    return (
      <div className="switcher">
        <div>
          <ul className="component-list">{list}</ul>
          <hr />
        </div>
        <div className="component-wrapper">{componentList}</div>
      </div>
    );
  }
}
