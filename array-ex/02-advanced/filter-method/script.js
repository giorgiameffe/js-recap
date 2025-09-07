// Esercizio 1: Metodo Filter
// Dato l'array di età [12, 18, 25, 6, 30, 16], 
// utilizza il metodo filter() per creare un nuovo array contenente solo le età che sono maggiori o uguali a 18.
// Stampa il nuovo array.

const ages = [12, 18, 25, 6, 30, 16];

const filteredAges = ages.filter(age => age >= 18);
console.log(filteredAges);


// Esercizio 2: Filtra numeri grandi
// Usa filter per creare un array con i numeri maggiori di 20.

{
    const numbers = [13, 5, 22, 9, 30, 40];

    const filteredNumbers = numbers.filter(number => number > 20);
    console.log(filteredNumbers);
}

// Esercizio 3: Filtra parole lunghe
// Dato un array di parole ["ciao", "javascript", "esercizio", "web", "fun"],
// usa filter() per creare un nuovo array contenente solo le parole con più di 5 lettere.

const words = ['ciao', 'javascript', 'esercizio', 'web', 'fun'];

const filteredWords = words.filter(word => word.length > 5);
console.log(filteredWords);


// Esercizio 4: Filtra nomi che iniziano con "A"
// Dato un array di nomi:
// ["Alice", "Anna", "Bob", "Carla", "Antonio"]
// usa filter() per creare un nuovo array contenente solo i nomi che iniziano con la lettera "A".

const names = ['Alice', 'Anna', 'Bob', 'Carla', 'Antonio'];

const filteredNames = names.filter(name => name[0].toUpperCase() === 'A');
console.log(`Nomi che iniziano con la lettera A: ${filteredNames}`);