// Esercizio 1: Metodo Find

// Dato un array di numeri [7, 3, 10, 5, 12, 8], 
// utilizza il metodo find() per trovare il primo numero pari presente nell'array.
// Stampa il numero trovato o un messaggio se nessun numero pari è stato trovato.

const numbersArray = [7, 3, 10, 5, 12, 8];

const evenNumber = numbersArray.find(number => number % 2 === 0);

if (evenNumber != undefined) {
    console.log(evenNumber);
} else {
    console.log("Nessun numero pari presente")
}

// Esercizio 2: Trova il primo numero grande
// Usa find per ottenere il primo numero maggiore di 10

const findNumber = numbersArray.find(number => number > 10);
console.log(findNumber);