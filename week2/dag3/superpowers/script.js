const superHeroes = [
	{
		name: 'Batman',
		publisher: 'DC Comics',
		alter_ego: 'Bruce Wayne',
		first_appearance: 'Detective Comics #27',
		weight: '210'
	},
	{
		name: 'Superman',
		publisher: 'DC Comics',
		alter_ego: 'Kal-El',
		first_appearance: 'Action Comics #1',
		weight: '220'
	},
	{
		name: 'Flash',
		publisher: 'DC Comics',
		alter_ego: 'Jay Garrick',
		first_appearance: 'Flash Comics #1',
		weight: '195'
	},
	{
		name: 'Green Lantern',
		publisher: 'DC Comics',
		alter_ego: 'Alan Scott',
		first_appearance: 'All-American Comics #16',
		weight: '186'
	},
	{
		name: 'Green Arrow',
		publisher: 'DC Comics',
		alter_ego: 'Oliver Queen',
		first_appearance: 'All-American Comics #16',
		weight: '195'
	},
	{
		name: 'Wonder Woman',
		publisher: 'DC Comics',
		alter_ego: 'Princess Diana',
		first_appearance: 'The Incredible Hulk #180',
		weight: '165'
	},
	{
		name: 'Blue Beetle',
		publisher: 'DC Comics',
		alter_ego: 'Dan Garret',
		first_appearance: 'Mystery Men Comics #1',
		weight: '145'
	},
	{
		name: 'Spider Man',
		publisher: 'Marvel Comics',
		alter_ego: 'Peter Parker',
		first_appearance: 'Amazing Fantasy #15',
		weight: '167'
	},
	{
		name: 'Captain America',
		publisher: 'Marvel Comics',
		alter_ego: 'Steve Rogers',
		first_appearance: 'Captain America Comics #1',
		weight: '220'
	},
	{
		name: 'Iron Man',
		publisher: 'Marvel Comics',
		alter_ego: 'Tony Stark',
		first_appearance: 'Tales of Suspense #39',
		weight: '250'
	},
	{
		name: 'Thor',
		publisher: 'Marvel Comics',
		alter_ego: 'Thor Odinson',
		first_appearance: 'Journey into Myster #83',
		weight: '200'
	},
	{
		name: 'Hulk',
		publisher: 'Marvel Comics',
		alter_ego: 'Bruce Banner',
		first_appearance: 'The Incredible Hulk #1',
		weight: '1400'
	},
	{
		name: 'Wolverine',
		publisher: 'Marvel Comics',
		alter_ego: 'James Howlett',
		first_appearance: 'The Incredible Hulk #180',
		weight: '200'
	},
	{
		name: 'Daredevil',
		publisher: 'Marvel Comics',
		alter_ego: 'Matthew Michael Murdock',
		first_appearance: 'Daredevil #1',
		weight: '200'
	},
	{
		name: 'Silver Surfer',
		publisher: 'Marvel Comics',
		alter_ego: 'Norrin Radd',
		first_appearance: 'The Fantastic Four #48',
		weight: 'unknown'
	}
];

const heroNames = superHeroes.map((hero) => {
	return hero.name;
});

console.log('namen van alle superhelden', heroNames);

const lightHeroes = superHeroes.filter((hero) => {
	return hero.weight <= 190;
});

console.log('alle lichte superhelden', lightHeroes);

const twohundredPoundHeroes = superHeroes.filter((hero) => {
	return hero.weight === '200';
});

console.log('200 pond helden', twohundredPoundHeroes);

const twohundredPoundHeroNames = twohundredPoundHeroes.map((hero) => {
	return hero.name;
});

console.log('namen van 200 pond helden', twohundredPoundHeroNames);

const chainedTwoHundredPoundHeroNames = superHeroes
	.filter((hero) => {
		return hero.weight === '200';
	})
	.map((hero) => {
		return hero.name;
	});

console.log('chained namen van 200 pond helden', chainedTwoHundredPoundHeroNames);

const firstAppearance = superHeroes.map((hero) => {
	return hero.first_appearance;
});

console.log('first appearance', firstAppearance);

const heroPublisherDC = superHeroes.filter((hero) => {
	return hero.publisher === 'DC Comics';
});

console.log('DC helden', heroPublisherDC);

const heroesOfDC = heroPublisherDC.map((hero) => {
	return hero.name;
});

console.log('namen DC helden', heroesOfDC);

const chainedHeroesOfDC = superHeroes
	.filter((x) => {
		return x.publisher === 'DC Comics';
	})
	.map((x) => {
		return x.name;
	});

console.log('chained namen DC helden', chainedHeroesOfDC);

const chainedHeroesOfMarvel = superHeroes
	.filter((y) => {
		return y.publisher === 'Marvel Comics';
	})
	.map((y) => {
		return y.name;
	});

console.log('chained namen Marvel helden', chainedHeroesOfMarvel);

const totalWeightDC = superHeroes
	.filter((q) => {
		return q.publisher === 'DC Comics';
	})
	.map((q) => {
		return q.weight;
	})
	.reduce((total, q) => {
		return parseInt(q) + total;
	}, 0);

console.log('total DC weight', totalWeightDC);

const totalWeightMarvel = superHeroes
	.filter((q) => {
		return q.publisher === 'Marvel Comics';
	})
	.map((q) => {
		return q.weight;
	});

// .reduce((total, q) => {
// 	if (typeof q === 'number') {
// 		return parseInt(q) + total;
// 	}
// }, 0);

console.log('total Marvel weight', totalWeightMarvel);

// const bigSum = (array) => {
// 	return array.reduce((total, item) => {
// 		return item + total;
// 	}, 0);
// };

// .reduce((total, q) => {
// 	if (Number.isInteger(q)) {
// 		return Number + total;
// 	}
// }, 0);

//const maxWeight = superheroes.map((n) => n.weight).reduce((acc, v) => (parseInt(v) > acc ? v : acc), 0);
