const name = prompt('Welkom! Wat is je naam?', []);

alert('Hey ' + name + ', welkom bij Guess the Number!');

loNum = prompt('Geef zelf de range aan waarbinnen je wil raden. Eerst het kleinste nummer: ', []);

hiNum = prompt('En nu het grootste nummer: ', []);

const check = parseInt(loNum) + 1 + Math.floor(Math.random()) * parseInt(hiNum - loNum);

askNum = prompt('Voer een nummer in van ' + loNum + ' tot ' + hiNum + ' om te beginnen met raden', []);

let i = 4;

while (parseInt(askNum) !== check && i >= 1) {
	askNum = prompt('Dat is niet correct. Je hebt nog ' + i + ' pogingen. Raad opnieuw:', []);
	i--;
}

if (parseInt(askNum) === check) {
	alert('Gefeliciteerd, je hebt gewonnen!');
} else {
	alert('Helaas, je hebt verloren.');
}

alert('Dag ' + name + '. Tot de volgende keer!');
