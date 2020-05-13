const items = [
	{ name: 'Bike', price: 100 },
	{ name: 'TV', price: 200 },
	{ name: 'Album', price: 10 },
	{ name: 'Book', price: 5 },
	{ name: 'Phone', price: 500 },
	{ name: 'Computer', price: 1000 },
	{ name: 'Keyboard', price: 25 }
];

const filteredItems = items.filter((item) => {
	return item.price <= 100;
});

console.log(items);
console.log(filteredItems);

///////

const itemNames = items.map((item) => {
	return item.name;
});

console.log(items);
console.log(itemNames);

///////

const itemPrices = items.map((item) => {
	return item.price;
});

console.log(items);
console.log(itemPrices);

console.log(items);
console.log(itemNames);

///////

const foundItem = items.find((item) => {
	return item.price === 200;
});

console.log(items);
console.log(foundItem);

///////

items.forEach((item) => {
	console.log(item.name);
});

///////

const hasInexpensiveitems = items.some((item) => {
	return item.price <= 100;
});

console.log(hasInexpensiveitems);

///////

const hasOnlyInexpensiveitems = items.every((item) => {
	return item.price <= 100;
});

console.log(hasOnlyInexpensiveitems);

///////

const total = items.reduce((currentTotal, item) => {
	return item.price + currentTotal;
}, 0);

console.log(total);

///////

const concatName = items.reduce((currentNameConcat, item) => {
	return item.name + currentNameConcat;
}, '');

console.log(concatName);

///////

const items2 = [ 1, 2, 3, 4, 5 ];

const includesTwo = items2.includes(2);

console.log(includesTwo);

////////
