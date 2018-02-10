import React, {Component} from 'react';

export default class ModalButton extends Component {

  static defaultProps = {
    displayName: "ModalButton",
    linkTitle: "ModalButton",
    path: "/modal"
  }

  render() {
    return <div path={this.path} linkTitle={this.linkTitle}>
        ModalButton 1
      </div>;
  }
}
