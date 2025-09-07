// Esercizio 1: Metodo Filter

// Dato l'array di età [12, 18, 25, 6, 30, 16], 
// utilizza il metodo filter() per creare un nuovo array contenente solo le età che sono maggiori o uguali a 18.
// Stampa il nuovo array.

const ages = [12, 18, 25, 6, 30, 16];

const filteredAges = ages.filter(age => age >= 18);
console.log(filteredAges);

// Esercizio 2: Filtra e trasforma numeri

// Crea un array di numeri interi da 1 a 10.
// Usa .filter() per tenere solo i numeri pari.
// Usa .map() per raddoppiare i numeri filtrati.
// Usa .forEach() per stampare ciascun numero risultante.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(number => number % 2 === 0);
console.log(filteredNumbers);

const doubledNumbers = filteredNumbers.map(number => number * 2);
console.log(doubledNumbers);

doubledNumbers.forEach((number) => {
    console.log(number);
})

// Esercizio 3: Filtra numeri grandi
// Usa filter per creare un array con i numeri maggiori di 20.

{
    const numbers = [13, 5, 22, 9, 30, 40];

    const filteredNumbers = numbers.filter(number => number > 20);
    console.log(filteredNumbers);
}
