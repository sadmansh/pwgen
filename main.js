// Get JSON word list
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

function generatePassword() {
	let retArray = createString(data.commonWords);
	let password = retArray[0];
	let words = retArray[1];
	document.getElementById('password-field').value = password;
	// console.log(`Password is: ${password}`);
	document.getElementById('words').innerHTML = words;
	// console.log(words);
}

function copyPass() {
	let copyText = document.getElementById('password-field');
	copyText.select();
	document.execCommand("copy");
	// alert("Copied the text: " + copyText.value);
}