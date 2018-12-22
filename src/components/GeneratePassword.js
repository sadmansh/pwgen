import React, { Component } from 'react';

class GeneratePassword extends Component {
	constructor(props) {
		super(props);
		this.state = { passGenerated: true };

		this.generate = this.generate.bind(this);
	}

	generate() {
		this.setState(state => ({
			passGenerated: !state.passGenerated
		}));
	}

	render() {
		return (
			<div ClassName="Generator">
				<input type="text" placeholder="Your password..." />
				<button onClick={this.generate}>{this.state.passGenerated ? 'Generate Password' : 'Get Another'}</button>
			</div>
		)
	}
}

export default GeneratePassword;