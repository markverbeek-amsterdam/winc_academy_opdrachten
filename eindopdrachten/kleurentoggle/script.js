//toggle the menu

const getButton = document.getElementById('toggle-button');
const getMenu = document.getElementById('menu');
getButton.addEventListener('mouseover', function() {
	getMenu.className = 'menu-visible';
});
getButton.addEventListener('mouseout', function() {
	getMenu.className = 'menu-invisible';
});

// set the background color

const getBackground = document.querySelector('body');
const getListItems = Array.from(document.getElementsByTagName('li'));
const colorFunc = function(color) {
	getBackground.style.backgroundColor = color;
	getMenu.className = 'menu-invisible';
};
getListItems.forEach((element) =>
	element.addEventListener('click', function() {
		const style = getComputedStyle(element);
		colorFunc(style.backgroundColor);
	})
);
