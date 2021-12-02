let userName = prompt('Inserisci il tuo nome');

let userDate = prompt ('Inserisci la tua data di nascita')

let userDog = prompt ('Inserisci il nome del tuo cane')

let userBrother = prompt ('Inserisci il nome di tuo fratello')

let htmlElement = document.getElementById('pass-lost');
htmlElement.innerHTML = `La tua password persa è ${userDog}01122019`;

