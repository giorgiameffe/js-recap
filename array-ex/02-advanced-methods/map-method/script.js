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


// Esercizio 3: Metodo Map - Quadrati dei numeri
// Dato un array di numeri [2, 3, 4, 5], usa map() per creare un nuovo array
// in cui ogni numero sia elevato al quadrato.

const numbers = [2, 3, 4, 5];

const squareNumbers = numbers.map(number => number * number);
console.log(squareNumbers);


// Esercizio 4: Metodo Map - Aggiungi un simbolo
// Dato un array di parole ["cane", "gatto", "uccello"], usa map()
// per creare un nuovo array aggiungendo un "!" alla fine di ogni parola.



// Esercizio 5: Metodo Map - Lunghezza delle stringhe
// Dato un array di città ["Roma", "Milano", "Napoli"], usa map()
// per creare un nuovo array contenente la lunghezza di ogni nome di città.
