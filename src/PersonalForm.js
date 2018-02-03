import React from "react";
import "./PersonalForm.css";

export default class PersonalForm extends React.Component {

    handleChangeForm = (e) => {        
        let fnChangeForm = this.props.onChangeForm;
        let name = e.target.name;
        let value = e.target.value;
        fnChangeForm(name, value);
    }

    render () {

        return <div className="personal-form">
            <h1 className="title">Персональная информация</h1>
            <input placeholder="First name" name="firstName" value={this.props.firstName} onChange={this.handleChangeForm} />
            <input placeholder="Last name" name="lastName" value={this.props.lastName} onChange={this.handleChangeForm} />
            <input placeholder="Email" name="email" value={this.props.email} onChange={this.handleChangeForm} />
          </div>;

    }
}
