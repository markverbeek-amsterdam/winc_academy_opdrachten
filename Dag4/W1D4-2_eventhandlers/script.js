let myButton = document.getElementById('mybutton');

myButton.addEventListener('click', function() {
	alert('button clicked');
});

let bgButton = document.getElementById('bgbutton');

let bgClass = document.querySelector('body');

bgButton.addEventListener('click', function() {
	bgClass.classList.toggle('red-background');
});
