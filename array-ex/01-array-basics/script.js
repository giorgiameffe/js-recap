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


// Esercizio 6: Controlla se c'è il 7

// Usa includes per verificare se l’array contiene il numero 7

{
    const numbers = [4, 3, 7, 2];

    const number = numbers.includes(7);
    console.log(number);
}





