function sum(...numbers) {
	console.log(numbers);
	console.log(...numbers);
	return numbers.reduce((prev, current) => {
		return prev + current;
	});
}

let x = sum(1, 2, 3, 4);

console.log(x);

let y = sum(3, 4, 5, 6, 7, 8);

console.log(y);

///////////////////////////////

function sum2(a, b, c) {
	return a + b + c;
}

let z = [ 10, 20, 30 ];

console.log(sum2(...z));
