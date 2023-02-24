'use strict'


/* Genera un numero casuale tra 1 e 6 per il giocatore e il computer */
const giocatore = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

/* Mostra il numero generato per il giocatore in un alert */
alert("Il giocatore ha generato il numero " + giocatore);

/* Mostra il numero generato per il computer in un alert */
alert("Il computer ha generato il numero " + computer);

/* Confronta i punteggi e determina il vincitore */
if (giocatore > computer) {
  alert("Complimenti hai vinto con un punteggio di " + giocatore + " contro " + computer + " del computer!");
} else if (giocatore < computer) {
    alert("Mi dispiace il computer ha vinto con un punteggio di " + computer + " contro il tuo " + giocatore );
} else {
  alert("WOW hai pareggiato con un punteggio di " + giocatore);
}
