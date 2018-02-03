import React from 'react';
import './App.css';
import PersonalForm from './PersonalForm';
// import CardForm from './CardForm';
import Step from './Step';



export default 
class App extends React.Component {
  state = { step: 1, firstName: "", lastName: "", email: "", cardNumber: "" };

  handleTabClick = e => {
    let step = e.target.value;
    this.setState({ step: step });
  };

  handleChangeForm = (label, value) => {
    this.setState({ [label]: value });
  };

  handleClickNextForm = e => {
    this.setState({
      step: this.state.step + 1
    });
  };

  isFormCommitable = () => {
    if (this.state.step === 1) {
      if (this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && this.state.email.includes("@")) {
        return true;
      } else {
        return false;
      }
    } else if (this.state.step === 2) {
      if (this.state.cardNumber.length === 16) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  render() {
    let stepsArr = [
      { number: 1, title: "Personal information" }, 
      { number: 2, title: "Card information" }, 
      { number: 3, title: "Finish" }
    ];

    let steps = stepsArr.map( (step) => {
      let isSelected;
      if (step.number === this.state.step) {
        isSelected = true;
      } else {
        isSelected = false;
      }
      return <Step number={step.number} key={step.title} children={step.title} onClick={this.handleTabClick} isClickable={this.isFormCommitable()} isSelected={isSelected} />;      
    });

    return <div>
        <div className="container">
          <div className="tab-panel">{steps}</div>
          <div className="form-content">
            <PersonalForm onChangeForm={this.handleChangeForm} firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} />
          </div>
          <div className="button-panel">
            <button className="button-next" onClick={this.handleClickNextForm} disabled={!this.isFormCommitable()}>
              Next
            </button>
          </div>
        </div>
      </div>;
  }
}







