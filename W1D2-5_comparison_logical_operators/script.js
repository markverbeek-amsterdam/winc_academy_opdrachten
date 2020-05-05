const age = 45;

if (age >= 18) {
	console.log('Je mag naar binnen');
} else {
	console.log('Kom maar terug als je 18 bent');
}

const isFemale = false;

if (isFemale) {
	console.log('Hartelijk Welkom!');
} else {
	console.log('Heute Nicht');
}

const driverStatus = 'bob';

if (driverStatus == 'bob') {
	console.log('Je bent bob en mag rijden');
} else {
	console.log('Je mag niet rijden');
}

if (age >= 18 && age <= 25) {
	console.log('Je krijgt 50% korting!');
} else {
	console.log('Geen korting helaas...');
}

const name = 'Bram';

if (name == 'Sarah' || name == 'Bram') {
	console.log('Gefeliciteerd, een gratis biertje voor jou!');
} else {
	console.log('Jammer, geen gratis biertje...');
}

const totalAmount = 100;

if (totalAmount >= 25 && totalAmount < 50) {
	console.log('Je krijgt gratis (vega) bitterballen!');
} else if (totalAmount >= 50 && totalAmount < 100) {
	console.log('Je krijgt gratis nachos!');
} else if (totalAmount >= 100) {
	console.log('Je krijgt gratis champagne!');
}
