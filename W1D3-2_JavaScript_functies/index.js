//DEEL A

/*  
makeSandwich
    get a slice of bread
    add the filling
*/

const sandwich = () => {
	'get a slice of bread';
	'add the filling';
};

console.log(sandwich);

// DEEL B

// function makeSandwich(topping) {
// 	console.log('There you go, a sandwich with ' + topping);
// }

// function declaration (eigenlijk een function EXPRESSION , hierbove staat een function declaration, commented out):
const makeSandwich = (topping) => {
	console.log('There you go, a sandwich with ' + topping);
};

//function call"
makeSandwich('ham');

//function call 2"
makeSandwich('cheese');

// DEEL C

const calculatedDiscountedPrice = (totalAmount, discount) => {
	return totalAmount;
};
console.log(calculatedDiscountedPrice(20.5, 5.89));

console.log(Math.round(calculatedDiscountedPrice(20.5, 5.89)));

//DEEL D

console.log('aangepaste korting vanaf 25');

const adjustedDiscountedPrice = (totalAmount, discount) => {
	if (totalAmount <= 25) return totalAmount;
	return totalAmount - discount;
	// return totalAmount;
};

console.log(adjustedDiscountedPrice(20.5, 5.89));

console.log(Math.round(adjustedDiscountedPrice(20.5, 5.89)));

console.log(adjustedDiscountedPrice(38, 5.89));

console.log(Math.round(adjustedDiscountedPrice(38, 5.89)));
