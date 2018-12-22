import React, { Component } from 'react';

class GeneratePassword extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			passGenerated: true,
			password: ''
		};

		this.generate = this.generate.bind(this);
	}

	generate() {
		let newPass = 'Skylinesplitsin2!';

		this.setState(state => ({
			passGenerated: false,
			password: newPass
		}));
	}

	render() {
		return (
			<div className="Generator">
				<input type="text" placeholder="Your password..." defaultValue={this.state.password}/>
				<button onClick={this.generate}>{this.state.passGenerated ? 'Generate Password' : 'Get Another'}</button>
			</div>
		)
	}
}

export default GeneratePassword;