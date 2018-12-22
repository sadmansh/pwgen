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
		// let newPass = 'Skylinesplitsin2!';
		let retArray = createString(data.commonWords);
		let newPass = retArray[0];

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

let request = new XMLHttpRequest();
let data = {};
request.open('GET', 'https://raw.githubusercontent.com/dariusk/corpora/master/data/words/common.json', true);
request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
		data = JSON.parse(request.responseText);
		// console.log("Data successfully fetched.");
	} else {
		console.error('Error fetching data.');
	};
}
request.onerror = function() {
	console.error('Error fetching data.');
}
request.send();

function createString(data) {
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