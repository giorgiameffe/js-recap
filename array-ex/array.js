// Esercizio 1: Creazione e conteggio

// Crea un array contenente i seguenti elementi: "mela", "banana", "ciliegia", "kiwi".
// Successivamente, stampa il secondo elemento dell'array (ricorda che gli array sono basati su indice 0) e l'ultimo elemento.

const fruits = ["mela", "banana", "ciliegia", "kiwi"];

console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// Esercizio 2: Aggiunta e rimozione di elementi

// Partendo dall'array [1, 2, 3]:
// Aggiungi il numero 4 alla fine dell'array.
// Aggiungi il numero 0 all'inizio dell'array.
// Rimuovi l'ultimo elemento dall'array.
// Rimuovi il primo elemento dall'array. 
// Stampa l'array dopo ogni operazione per vedere le modifiche.

const numbers = [1, 2, 3];

numbers.push(4);
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

// Esercizio 3: Iterazione dell'array

// Crea un array con i seguenti elementi: "rosso", "verde", "blu".
// Utilizza un ciclo for per stampare ogni elemento dell'array sulla console.

const colors = ["rosso", "verde", "blu"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Esercizio 4: Ricerca di un elemento

// Dato l'array ["computer", "mouse", "tastiera", "monitor"], scrivi del codice che verifichi se la stringa "computer" è presente nell'array.
// Stampa un messaggio appropriato che indichi se l'elemento è stato trovato o meno.

const products = ["computer", "mouse", "tastiera", "monitor"];
const searchProduct = "computer";

if (products.includes(searchProduct)) {
    console.log(`L'elemento ${searchProduct} è presente nell'array`)
} else {
    console.log(`L'elemento ${searchProduct} non è presente nell'array`)
}

// Esercizio 5: Modifica di un elemento

// Dato l'array ["Roma", "Milano", "Napoli"], cambia il secondo elemento (Milano) in "Firenze".
// Stampa l'array prima e dopo la modifica.

const cities = ["Roma", "Milano", "Napoli"];
console.log(cities);

cities[1] = "Firenze";
console.log(cities);

// Esercizio 6: Metodo Map 

// Dato un array di numeri [1, 2, 3, 4, 5], utilizza il metodo map() per creare un nuovo array in cui ogni numero sia moltiplicato per 2. 
// Stampa il nuovo array.

const arrayNumbers = [1, 2, 3, 4, 5];

const numbersForTwo = arrayNumbers.map(number => number * 2);
console.log(numbersForTwo);

// Esercizio 7: Metodo Filter

// Dato l'array di età [12, 18, 25, 6, 30, 16], utilizza il metodo filter() per creare un nuovo array contenente solo le età che sono maggiori o uguali a 18. 
// Stampa il nuovo array.

const ages = [12, 18, 25, 6, 30, 16];

const filteredAges = ages.filter(age => age >= 18);
console.log(filteredAges);

// Esercizio 8: Metodo Reduce 

// Dato un array di prezzi [10.50, 20.00, 5.75, 15.25], utilizza il metodo reduce() per calcolare la somma totale di tutti i prezzi nell'array. 
// Stampa il risultato.

const prices = [13.00, 20.50, 8.30, 23.50];

const priceAddition = prices.reduce((accumulator, currentValue) => {

    return accumulator += currentValue;
})

console.log(priceAddition);

// Esercizio 9: Metodo forEach

// Data un array di nomi ["Alice", "Bob", "Charlie"], utilizza il metodo forEach() per stampare ogni nome sulla console, preceduto dalla frase "Ciao, ".

const names = ["Alice", "Bob", "Charlie"];

names.forEach((name) => {
    console.log(`Ciao, ${name}`);
})

// Esercizio 10: Metodo Find 

// Dato un array di numeri [7, 3, 10, 5, 12, 8], utilizza il metodo find() per trovare il primo numero pari presente nell'array. 
// Stampa il numero trovato o un messaggio se nessun numero pari è stato trovato.

const numbersArray = [7, 3, 10, 5, 12, 8];

const evenNumber = numbersArray.find(number => number % 2 === 0);

if (evenNumber != undefined) {
    console.log(evenNumber);
} else {
    console.log("Nessun numero pari presente")
}







