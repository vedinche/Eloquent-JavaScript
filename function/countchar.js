let str = 'Eloquent JavaScript';

function countBs(str) {
	let strArr = str.match(/[A-Z]/g).join('');
	let result = strArr.length;
	console.log(result);
}

countBs(str);

function countChar(str, char) {
	let result = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] == char) {
			result += 1;
		} 
	}
	console.log(result);
}

countChar(str, 't');