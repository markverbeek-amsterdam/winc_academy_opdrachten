const colors = [ 'yellow', 'blue', 'red', 'orange' ];

let i = 0;

while (i < colors.length) {
	console.log(colors[i]);
	i++;
}

for (i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

colors.forEach((i) => console.log(i));

// 1.  for loop" 2 regels
// 2.  forEach method: 1 regel
// 3.  Een voordeel is dat je minder kans hebt op fouten, het is inderdaad makkelijker leesbaar omdat de de iteratie 'onder de motorkap' gebeurt.
// 4.  Je kunt snel door een object lopen door het eerst te converteren naar een array/ Daar zijn drie methodes voor:
// 1.  Object.keys         (maakt een array van keys)
// 2.  Object.values       (maakt een array van values)
// 3.  Object.entries      (maakt een array van arrays met in iedere array een key en de b ijbehorende value)

const movie = {
	title: 'Back To the Future',
	star: 'Michael J. Fox',
	duration: 116,
	year: 1985,
	director: 'Robert Zemeckis'
};

const properties = Object.entries(movie);

//allemaal in 1 array:

console.log(properties);

//allemaal losse arrays:

properties.forEach((i) => console.log(i));

//dit is ook itereren

//Of alleen de values:

const values = Object.values(movie);

//allemaal in 1 array:

console.log(values);

//allemaal losse arrays:

values.forEach((i) => console.log(i));
