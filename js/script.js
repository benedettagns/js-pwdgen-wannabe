// chiedere all'utente il nome
const userName = prompt('Inserisci il tuo nome')

// chiedere all'utente il cognome
const userSurname = prompt('Inserisci il tuo cognome')

// chiedere all'utente il colore preferito 
const userFavcolor = prompt('Inserisci il tuo colore preferito')

// la password deve essere nomecognomecoloreanno

let password = document.getElementById("password")
password.innerHTML = `La tua nuova password è ${userName}${userSurname}${userFavcolor}2021`