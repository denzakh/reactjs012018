import React, { Component } from "react";
import "./ModalButton.css";
import Modal from "../Modal";

export default class ModalButton extends Component {
  state = {
    isModalShow: false
  };

  hideModal = () => {
    this.setState({ isModalShow: false });
  };

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  render() {
    let showFun = () => {
      if (this.state.isModalShow) {
        return (
          <Modal domNode={document.querySelector("#portal")} className="modal">
            <div className="modal__fog">
              <div className="modal__body">
                <h1>Модальное окно!</h1>
                <button onClick={this.hideModal}>Close</button>
              </div>
            </div>
          </Modal>
        );
      }
    };

    return (
      <div>
        <button type="button" onClick={this.showModal}>
          Show modal!
        </button>
        <div>{showFun()}</div>
      </div>
    );
  }
}
