// document.body.innerHTML = 'Dit is de nieuwe inhoud';

document.getElementById('first-section');

let selectionA = document.getElementById('first-section');
console.log(selectionA);

// let is handiger dan const omdat de je de inhoud van het element waarschijnlijk opslaat in een variabele omdat je het vervolgens wil wijzigen. Dan zou const niet handig zijn, de waarde daarvan kun je niet wijzigen.

let selectionB = document.getElementsByClassName('paragraph');
console.log(selectionB);

//bij het selecteren obv id krijg je 1 HTML element terug, bij selecteren op basis van class krijg je 1 of meerdere elementen terug in een HTML collection.
