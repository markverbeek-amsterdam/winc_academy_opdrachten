// Arrow functions video

let a = 1;
let b = 5;

function sum(a, b) {
	return a + b;
}

let sum2 = (a, b) => {
	return a + b;
};

let sum3 = (a, b) => a + b;

let sum4 = () => 1 + 2;

sum();

sum2();

sum3();

console.log(a);
console.log(b);

console.log(sum);
console.log(sum2);
console.log(sum3);
console.log(sum4);

console.log(sum());
console.log(sum2());
console.log(sum3());
console.log(sum4());

console.log(sum(1, 10));
console.log(sum2(1, 10));
console.log(sum3(1, 10));
console.log(sum4(1, 10));

console.log(sum(a, b));
console.log(sum2(a, b));
console.log(sum3(a, b));
console.log(sum4(a, b));

function isPositive(number) {
	return number >= 0;
}

let isPositive2 = (number) => {
	return number >= 0;
};

let isPositive3 = (number) => number >= 0;

function randomNumber() {
	return Math.random;
}

let randomNumber2 = () => {
	return Math.random;
};

let randomNumber3 = () => Math.random;

document.addEventListener('click', function() {
	console.log('Click');
});

document.addEventListener('click', () => {
	console.log('Click');
});

document.addEventListener('click', () => console.log('Click'));

//Opdracht W2D3-1

// A

const ikRockArrowFunctionsOud = function() {
	console.log('Joe, ik rock de arrow functions!');
};

ikRockArrowFunctionsOud();

const ikRockArrowFunctions = () => {
	console.log('Joe, ik rock de arrow functions!');
};

ikRockArrowFunctions();

//B

const fivePlusSevenOud = function() {
	return 5 + 7;
};

fivePlusSevenOud();

const fivePlusSeven = () => 5 + 7;

fivePlusSeven();

//C

() => 1 + 2;

console.log(() => 1 + 2);
console.log(1 + 2);

//D

const MyFunction = (a, b) => a + b;

//E

const addFive = (a) => a + 5;

//F

const createObject = () => ({ greeting: 'hoi' });
