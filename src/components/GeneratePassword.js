import React, { Component } from 'react';

class GeneratePassword extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			passGenerated: true,
			password: '',
			words: {}
		};

		this.getCommonWords = this.getCommonWords.bind(this);
	}

	getCommonWords() {
		fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/words/common.json')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				console.log(JSON.stringify(data));
			});
	}

	render() {
		return (
			<div className="generator">
				<input type="text" placeholder="Your password..." defaultValue={this.state.password}/>
				<button onClick={this.getCommonWords}>{this.state.passGenerated ? 'Generate Password' : 'Get Another'}</button>
			</div>
		)
	}
}

export default GeneratePassword;