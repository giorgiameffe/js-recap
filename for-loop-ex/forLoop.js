// Esercizio 1: Conto alla rovescia

// Scrivi un programma che utilizzi un ciclo for per stampare i numeri da 10 a 1.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Esercizio 2: Somma di numeri

// Scrivi un programma che utilizzi un ciclo for per calcolare la somma di tutti i numeri interi da 1 a 100.
// Stampa il risultato nella console.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// Esercizio 3: Numeri pari

// Scrivi un programma che utilizzi un ciclo for per stampare tutti i numeri pari da 2 a 20 (incluso) nella console.

for (let i = 2; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}

// Esercizio 4: Scorrere un Array

// Stampare tutti gli elementi di un array.

const fruits = ['anguria', 'mela', 'banana', 'pesca', 'mango'];

for (let i = 0; i < fruits.length; i++) {

    const currentFruit = fruits[i];
    console.log(currentFruit);
}

// Esercizio 5: Stampa Inversa di un Array

// Stampare gli elementi di un array in ordine inverso.

for (let i = fruits.length - 1; i >= 0; i--) {

    const currentFruit = fruits[i];
    console.log(currentFruit);
}

// Esercizio 6: Tabellina di un Numero

// Chiedere all'utente un numero e stampare la sua tabellina fino a 10.

const userNumber = parseInt(prompt('Inserisci un numero'));

for (let i = 1; i <= 10; i++) {

    const userNumberMultiplication = userNumber * i;
    console.log(userNumberMultiplication);
}

// Esercizio 7: Contare le Vocali in una Stringa

// Contare quante vocali (a, e, i, o, u) ci sono in una data stringa.

const string = 'Ciao, sono Giorgia';

const vowels = 'aeiou';
let count = 0;

for (let i = 0; i < string.length; i++) {

    const singleLetter = string[i];

    if (vowels.includes(singleLetter)) {
        count++
    }
}

console.log(`Le vocali presenti sono ${count}`);

