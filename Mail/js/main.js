'use strict'

/* Chiedi all'utente di inserire la sua e-mail */
const mailUtente = prompt("Inserisci la tua e-mail:");

/* Definisci l'array di mail consentite */
const mailConsentite = ["birra@yahoo.com", "pizza@gmail.com", "vino@hotmail.com", "alcool@libero.it"];

/* Inizializza una variabile per tenere traccia se l'e-mail dell'utente è presente nell'array di e-mail consentite */
let emailTrovata = false;

/* Uso il ciclo "for" per cercare l'e-mail dell'utente */
for (let i = 0; i < mailConsentite.length; i++) {
  if (mailConsentite[i] === mailUtente) {
    emailTrovata = true;
    
  }
}

/* Stampo i messaggi in base a se la mail è stata trovata o meno */
if (emailTrovata) {
  /* Messaggio di benvenuto se l'utente è autorizzato */
  console.log("Benvenuto, " + mailUtente + "!");
  alert("Benvenuto, " + mailUtente + "!");
} else {
  /* Messaggio se l'utente è non è autorizzato */
  console.log("Mi dispiace, " + mailUtente + ". Sei stato bannato in precedenza.");
  alert("Mi dispiace, " + mailUtente + ". Sei stato bannato in precedenza.");
}
