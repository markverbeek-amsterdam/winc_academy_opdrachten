const calculateDogAge = (puppyAge) => {
	console.log('Your doggie is ' + puppyAge * 7 + ' years old in dog years!');
};

calculateDogAge(2);
calculateDogAge(1);
calculateDogAge(5);

const calculateDogAgeBonus = (puppyAge, conversionRate) => {
	console.log(
		'Based on a conversion rate of ' +
			conversionRate +
			' your doggie is ' +
			puppyAge * conversionRate +
			' years old in dog years!'
	);
};

calculateDogAgeBonus(2, 7);
calculateDogAgeBonus(1, 7);
calculateDogAgeBonus(5, 7);

calculateDogAgeBonus(2, 6);
calculateDogAgeBonus(1, 6);
calculateDogAgeBonus(5, 6);
