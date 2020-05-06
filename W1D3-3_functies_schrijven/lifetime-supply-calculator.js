calculateSupply = (age, daylyAmount) => {
	console.log('You will need ' + (85 - age) * daylyAmount * 365 + ' to last you until the ripe old age of 85');
};

calculateSupply(45, 3);
calculateSupply(12, 1);
calculateSupply(84, 10);

calculateSupplyBonus = (age, daylyAmount) => {
	console.log(
		'You will need ' + Math.round((85 - age) * daylyAmount * 365) + ' to last you until the ripe old age of 85'
	);
};

calculateSupplyBonus(84, 0.5);
