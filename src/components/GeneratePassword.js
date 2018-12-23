import React, { Component } from 'react';

class GeneratePassword extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			passGenerated: true,
			password: '',
			words: {},
			isLoading: false
		};

		// this.generate = this.generate.bind(this);
	}

	getCommonWords() {
		fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/words/common.json')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				console.log(JSON.stringify(data.commonWords));
				generate(data);
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

function generate(x) {
	let retArray = createString(x.commonWords);
	let password = retArray[0];
	let words = retArray[1];
	// document.getElementById('password-field').value = password;
	console.log(`Password is: ${password}`);
	// document.getElementById('words').innerHTML = words;
}

function createString(data) {
	console.log(data);
	let numbers = Math.floor(Math.random() * 99);
	let symbols = ['!', '@', '$', '&', '#', '?'];
	let symbol = symbols[Math.floor(Math.random() * symbols.length)];
	let words = '';
	let word = '';
	let password = '';
	while(password.length <= 16) {
		word = data[Math.floor(Math.random() * data.length)];
		if (word.length > 3 && word.length < 8) {
			password += word;
			words += word + ' ';
		}
	}
	password = password.charAt(0).toUpperCase() + password.substr(1);
	password += numbers + symbol;
	words += numbers + ' ' + symbol;
	let retArray = [];
	retArray.push(password);
	retArray.push(words);
	return retArray;
}

export default GeneratePassword;