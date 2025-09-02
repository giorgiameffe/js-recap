// Esercizio 1: Metodo Map

// Dato un array di numeri [1, 2, 3, 4, 5], 
// utilizza il metodo map() per creare un nuovo array in cui ogni numero sia moltiplicato per 2.
// Stampa il nuovo array.

const arrayNumbers = [1, 2, 3, 4, 5];

const numbersForTwo = arrayNumbers.map(number => number * 2);
console.log(numbersForTwo);

// Esercizio 2: Metodo Map

// Dato un array di nomi ["alice", "bob", "charlie"], 
// usa map() per creare un nuovo array dove ogni nome sia convertito in lettere maiuscole.
// Stampa il risultato.

const peopleNames = ["alice", "bob", "charlie"];

const uppercaseNames = peopleNames.map(name => name.toUpperCase());
console.log(uppercaseNames);