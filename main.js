// Get JSON word list
var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/dariusk/corpora/master/data/words/common.json', true);
request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
		data = JSON.parse(request.responseText);
		// console.log("Data successfully fetched.");
	} else {
		console.log('Error fetching data.');
	}
}
request.onerror = function() {
	console.log('Error fetching data.');
}
request.send();

function createString(data) {
	var numbers = Math.floor(Math.random() * 99);
	var symbols = ['!', '@', '$', '&', '#', '?'];
	var symbol = symbols[Math.floor(Math.random() * symbols.length)];
	var words = '';
	var password = '';
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
	var retArray = createString(data.commonWords);
	var password = retArray[0];
	var words = retArray[1];
	document.getElementById('password-field').value = password;
	// console.log(`Password is: ${password}`);
	document.getElementById('words').innerHTML = words;
	// console.log(words);
}

function copyPass() {
	var copyText = document.getElementById('password-field');
	copyText.select();
	document.execCommand("copy");
	// alert("Copied the text: " + copyText.value);
}