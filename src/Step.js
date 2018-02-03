import React from 'react';
import './Step.css';

export default class Step extends React.Component {


  handleClick = e => {
    let number = this.props.number;
    if (this.props.isClickable) {
      this.props.onClick(number);
    }
  }

  setClassName = () => {
    let basicClassName = "step";
    let selectedClassName = "";
    if (this.props.isSelected)  {
      selectedClassName = " step-selected";
    }
    let clickableClassName = "";
    if (this.props.isClickable) {
      clickableClassName = " step-clickable";
    }
    let allClassName = basicClassName + selectedClassName + clickableClassName;
    return allClassName;
  }
  
  render() {

    return (
      <div className={this.setClassName()}>
        <p className="step__number" onClick={this.handleClick}>{this.props.number}</p>
        <p className="step__title">{this.props.children}</p>
      </div>
    );
  }
}
