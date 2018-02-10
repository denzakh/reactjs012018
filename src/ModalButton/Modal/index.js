import React, {Component} from 'react';
import ReactDOM from "react-dom";

export default class Modal extends Component {

  render() {
    return ReactDOM.createPortal(this.props.children, this.props.domNode);
  }
}
