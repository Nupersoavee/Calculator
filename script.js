function addToResult(value) {
	document.getElementById('result').value += value;
}

function clearResult() {
	document.getElementById('result').value = '';
}

function calculateResult() {
	try {
		let result = eval(document.getElementById('result').value);
		document.getElementById('result').value = result;
	} catch (error) {
		document.getElementById('result').value = 'Error';
	}
}

function backspaceResult() {
	let result = document.getElementById('result').value;
	document.getElementById('result').value = result.substr(0, result.length - 1);
}

function negateResult() {
	let result = document.getElementById('result').value;
	if (result.charAt(0) === '-') {
		document.getElementById('result').value = result.slice(1);
	} else {
		document.getElementById('result').value = '-' + result;
	}
}
