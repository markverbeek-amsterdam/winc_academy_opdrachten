const huiswerkMaken = (vak, callback) => {
	console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
	setTimeout(function() {
		callback();
	}, 1000);
};

const klaarMetHuiswerk = () => {
	console.log('Kijk, ik ben klaar met mijn huiswerk!');
};

huiswerkMaken('wiskunde', klaarMetHuiswerk);

const sinterklaasIsGul = true;

// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)

const krijgIkEenNieuweiPhone = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (sinterklaasIsGul) {
			const smartphone = {
				merk: 'Apple',
				type: 'iPhone 11'
			};
			resolve(smartphone);
		} else {
			const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
			reject(metWelkeReden);
		}
	}, 1250);
});

// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
const vraagAanSinterklaas = () => {
	krijgIkEenNieuweiPhone
		.then(function(resolved) {
			// yay, je hebt een nieuwe smartphone
			console.log(resolved);
		})
		.catch(function(error) {
			// oeps, geen Sinterklaas cadeau dit jaar
			console.log(error.message);
		});
};

vraagAanSinterklaas();
