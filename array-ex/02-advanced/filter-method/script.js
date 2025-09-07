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

// Esercizio 4: Filtra parole lunghe
// Dato un array di parole ["ciao", "javascript", "esercizio", "web", "fun"],
// usa filter() per creare un nuovo array contenente solo le parole con più di 5 lettere.

const words = ['ciao', 'javascript', 'esercizio', 'web', 'fun'];

const filteredWords = words.filter(word => word.length > 5);
console.log(filteredWords);


// Esercizio 5: Numeri dispari elevati al quadrato
// Crea un array di numeri da 1 a 15.
// Usa filter() per ottenere solo i numeri dispari e poi map() per calcolare il quadrato di ciascun numero dispari.

{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const filteredNumbers = numbers.filter(number => number % 2 !== 0);
    console.log(`Numeri dispari: ${filteredNumbers}`);

    const squareNumbers = filteredNumbers.map(number => number * number);
    console.log(`Quadrato dei numeri dispari: ${squareNumbers}`);

}


// Esercizio 6: Filtra nomi che iniziano con "A"
// Dato un array di nomi:
// ["Alice", "Anna", "Bob", "Carla", "Antonio"]
// usa filter() per creare un nuovo array contenente solo i nomi che iniziano con la lettera "A".

const names = ['Alice', 'Anna', 'Bob', 'Carla', 'Antonio'];

const filteredNames = names.filter(name => name[0].toUpperCase() === 'A');
console.log(`Nomi che iniziano con la lettera A: ${filteredNames}`);