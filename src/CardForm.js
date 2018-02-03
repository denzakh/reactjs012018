import React from 'react';
import './CardForm.css';

export default class CardForm extends React.Component {
	constructor(props){
    super(props);
	}
	handleChangeForm = e => {
		let fnChangeForm = this.props.onChangeForm;
		let name = e.target.name;
		let value = e.target.value;
		fnChangeForm(name, value);
	};

	componentWillUnmount() {}

	render() {
		return <div className="card-form">
				<h1 className="title">Номер карты</h1>
				<input placeholder="0000000000000" name="cardNumber" value={this.props.cardNumber} onChange={this.handleChangeForm} />
			</div>;
	}
}