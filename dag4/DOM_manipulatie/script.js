const getButtons = Array.from(document.getElementsByClassName('big-five-button'));
console.log(getButtons);

const getList = document.getElementById('spotted-animals-list');
console.log(getList);

getButtons.forEach((button) => {
	button.addEventListener('click', function() {
		console.log(button.innerHTML);
		let x = document.createElement('li');
		x.innerHTML = button.innerHTML;
		x.classList.add('spotted-animals-list-item');
		console.log(x);
		getList.appendChild(x);
	});
});

const getRemoveFirstButton = document.getElementById('remove-first-item-button');
console.log(getRemoveFirstButton);

getRemoveFirstButton.addEventListener('click', function() {
	const getParent = document.getElementById('spotted-animals-list');
	console.log('getParent: ', getParent);
	const getFirstChild = getParent.getElementsByTagName('li')[0];
	console.log('FirstChild: ', getFirstChild);
	getParent.removeChild(getFirstChild);
});

const getRemoveAllButton = document.getElementById('remove-all-button');
console.log(getRemoveAllButton);

getRemoveAllButton.addEventListener('click', function() {
	const getParent = document.getElementById('spotted-animals-list');
	const getChildren = Array.from(document.getElementsByClassName('spotted-animals-list-item'));
	getChildren.forEach((item) => {
		console.log(item);
		getParent.removeChild(item);
	});
});
