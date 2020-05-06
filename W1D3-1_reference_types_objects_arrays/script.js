// Deel 1 Objects

let person = {
	name: 'Mark',
	age: 45
};

console.log(person);

console.log(person.name);

console.log(person.age);

console.log(person['name']);

console.log(person['age']);

person.evaluations = [ 7, 10, 9 ];

console.log(person.evaluations);

// Deel 2 Arrays

let thing = [];

console.log(thing);

thing[0] = 'groen';
thing[1] = 'blauw';
thing[2] = 'rood';

//Dit werkt niet:
//(thing[(0, 1, 2, 3, 4, 5)] = 'rood'), 'groen', 'blauw', 'paars', 'geel', 'oranje';
//(hoe) kan je meerdere items toevoegen aan je array in 1 keer?

console.log(thing);

console.log(thing.length);

console.log(thing[0]);

//console.log(thing[2]);

console.log(thing[thing.length - 1]);

thing.push('geel');

console.log(thing);

thing.push(5);

console.log(thing);

thing.push({ greeting: 'Hi, ik ben een object' });

console.log(thing);

//Deel3 "real-life" object

//Aangeleverd object:

const catBreeds = [
	{
		name: 'Abyssinian',
		description:
			'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
		dog_friendly: 4,
		energy_level: 5,
		life_span: '14 - 15',
		origin: 'Egypt',
		temperament: [ 'Active', 'Energetic', 'Independent', 'Intelligent', 'Gentle' ],
		wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
		food: {
			favourite_food: 'fish',
			medium_liked_food: 'dried fruits',
			disliked_food: 'walnuts'
		}
	},
	{
		name: 'Aegean',
		description:
			'Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.',
		dog_friendly: 4,
		energy_level: 53,
		life_span: '9- 12',
		origin: 'Greece',
		temperament: [ 'Affectionate', 'Social', 'Intelligent', 'Playful', 'Active' ],
		wikipedia_url: 'https://en.wikipedia.org/wiki/Aegean_cat',
		food: {
			favourite_food: 'tuna',
			medium_liked_food: 'canned food',
			disliked_food: 'all fruits'
		}
	},
	{
		name: 'American Bobtail',
		description:
			'American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.',
		dog_friendly: 5,
		energy_level: 3,
		life_span: '11 - 15',
		origin: 'United States',
		temperament: [ 'Intelligent', 'Interactive', 'Lively', 'Playful', 'Sensitive' ],
		wikipedia_url: 'https://en.wikipedia.org/wiki/American_Bobtail',
		food: {
			favourite_food: 'meaty things',
			medium_liked_food: 'tuna',
			disliked_food: 'canned food'
		}
	}
];

//opdrachten:

console.log(catBreeds[catBreeds.length - 1].name);

console.log(catBreeds[0].energy_level);

console.log(catBreeds[1].temperament[0]);

console.log(catBreeds[2].temperament[catBreeds[2].temperament.length - 1]);

console.log(catBreeds[2].food.favourite_food);
