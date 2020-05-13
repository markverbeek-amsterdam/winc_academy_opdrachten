const superheroes = [
	{ name: 'Batman', alter_ego: 'Bruce Wayne' },
	{ name: 'Superman', alter_ego: 'Clark Kent' },
	{ name: 'Spiderman', alter_ego: 'Peter Parker' }
];

const findSpiderMan = (superHeroesToBeFiltered) => {
	return superHeroesToBeFiltered.find((superhero) => {
		return superhero.name === 'Spiderman';
	});
};

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

///////////////////////////////////

const doubleArrayValues = (array) => {
	let newArray = [];
	array.forEach((number) => {
		newArray.push(number * 2);
	});
	return newArray;
};

console.log(doubleArrayValues([ 1, 2, 3 ]));

const doubleArrayValues2 = (array) => {
	return array.map((number) => {
		return number + number;
	});
};

console.log(doubleArrayValues2([ 1, 2, 3 ]));

const doubleArrayValues3 = (x) => {
	return x.map((n) => n * 2);
};

console.log(doubleArrayValues3([ 1, 2, 3 ]));

// result should be [2, 4, 6]

///////////////////////////////////

const containsNumberBiggerThan10 = (array) => {
	return array.some((item) => {
		return item > 10;
	});
};

console.log(containsNumberBiggerThan10([ 1, 4, 3, 6, 9, 7, 11 ]));
// result should be true

///////////////////////////////////
const isItalyInTheGreat7 = (array) => {
	return array.includes('Italy');
};

console.log(isItalyInTheGreat7([ 'Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States' ]));
// result should be true

///////////////////////////////////

const tenfold = (array) => {
	return array.map((number) => {
		return number * 10;
	});
};

console.log(tenfold([ 1, 4, 3, 6, 9, 7, 11 ]));
// result should be [10, 40, 30, 60, 90, 70, 110]

///////////////////////////////////

const isBelow100 = (array) => {
	return array.every((item) => {
		return item < 100;
	});
};

console.log(isBelow100([ 1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));
// result should be: false

///////////////////////////////////

const bigSum = (array) => {
	return array.reduce((total, item) => {
		return item + total;
	}, 0);
};

console.log(bigSum([ 1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234 ]));
// result should be 1118

///////////////////////////////////
