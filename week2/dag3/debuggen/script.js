const array = [
	{ name: 'N. Armstrong', profession: 'spacecowboy', age: 89 },
	{ name: 'H. de Haan', profession: 'kippen hypnotiseur', age: 59 },
	{ name: 'A. Curry', profession: 'kikvorsman', age: 32 },
	{ name: 'F. Vonk', profession: 'slangenmelker', age: 36 },
	{ name: 'B. Bunny', profession: 'konijnen uitlaatservice', age: 27 },
	{ name: 'Dr.Evil', profession: 'digital overlord', age: 56 }
];

for (let person of array) {
	console.log('array: ', array);
	console.log('person: ', person);
	console.log('naam: ', person.name);
	console.log('geboortejaar: ', 2020 - person.age);
	console.log('naam + beroep:', person.name, 'is een', person.profession);
}

console.log('Over 50:');

for (let person of array) {
	if (person.age > 50) {
		console.log('array: ', array);
		console.log('person: ', person);
		console.log('naam: ', person.name);
		console.log('geboortejaar: ', 2020 - person.age);
		console.log('naam + beroep:', person.name, 'is een', person.profession);
	}
}
