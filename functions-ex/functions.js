// Esercizio 1: Saluto Semplice

// Crea una funzione chiamata hiUser che non accetta nessun parametro.
// All'interno della funzione, stampa in console il messaggio: "Ciao! Benvenuto/a nel mondo delle funzioni."
// Chiama la funzione.

function hiUser() {
    console.log('Ciao! Benvenuto/a nel mondo delle funzioni.')
}

hiUser();

// Esercizio 2: Somma di due Numeri

// Crea una funzione chiamata sumNumbers che accetta due parametri: num1 e num2.
// La funzione deve restituire la somma di num1 e num2.
// Chiama la funzione con due numeri a tua scelta (es. 5 e 10) e stampa il risultato in console.

function sumNumbers(num1, num2) {
    return num1 + num2
}

console.log(sumNumbers(2, 7));

// Esercizio 3: Verifica Maggiore Età

// Crea una funzione chiamata isAdult che accetta un parametro: age.
// La funzione deve restituire true se age è maggiore o uguale a 18, altrimenti deve restituire false.
// Chiama la funzione isAdult con un'età che rende true e una che rende false (es. 20 e 16).
// Stampa entrambi i risultati in console.

function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(16));
console.log(isAdult(20));
