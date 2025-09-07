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
console.log('Primo numero grande:', findNumber);


// Esercizio 3: Trova la prima parola lunga
// Dato un array di parole ["ciao", "programmazione", "web", "javascript", "fun"],
// usa find() per ottenere la prima parola che ha più di 5 lettere.

const words = ['ciao', 'programmazione', 'web', 'javascript', 'fun'];

const longWord = words.find(word => word.length > 5);
console.log('Prima parola lunga:', longWord);


// Esercizio 4: Trova il primo numero negativo
// Crea un array di numeri misti [4, -3, 7, -1, 0, 9] e usa find() per trovare il primo numero negativo.

const numbers = [4, -3, 7, -1, 0, 9];

const findNegativeNumber = numbers.find(number => number < 0);
console.log('Primo numero negativo:', findNegativeNumber);


// Esercizio 5: Trova il primo nome che inizia con "B"
// Dato un array di nomi ["Alice", "Bob", "Carla", "Bruno", "Anna"],
// usa find() per ottenere il primo nome che inizia con la lettera "B".

const names = ['Alice', 'Bob', 'Carla', 'Bruno', 'Anna'];

const nameStartWithB = names.find(name => name[0].toUpperCase() === 'B');
console.log('Primo nome che inizia con la B:', nameStartWithB);