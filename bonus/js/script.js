alert ('Primi bonus per capire js')

const firstFood = prompt('Inserisci una ricetta che vorresti cucinare');

const secondFood = prompt('Inserisci una seconda ricetta che vorresti cucinare');

const thirdFood = prompt('Inserisci una terza ricetta che vorresti cucinare');

let htmlElement = document.getElementById('ricetta');
htmlElement.innerHTML = `${secondFood}`;