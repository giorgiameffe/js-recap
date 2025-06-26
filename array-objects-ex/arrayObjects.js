// Esercizio 1: Creare un oggetto e accedere ai suoi valori

// Crea un oggetto book con le seguenti proprietà:
// title (stringa, es: "Il Signore degli Anelli")
// author (stringa, es: "J.R.R. Tolkien")
// publicationYear (numero, es: 1954)
// Stampa in console il titolo del libro.
// Stampa in console l'autore del libro usando la notazione con le parentesi quadre

const book = {
    title: "Le formidabili donne del Grand Hotel",
    author: "Ruth Kvarnstorm-Jones",
    publicationYear: 2024
}

console.log(book.title);
console.log(book["author"]);

// Esercizio 2: Aggiungere e modificare proprietà 

// Prendi l'oggetto libro creato nell'Esercizio 1.
// Aggiungi una nuova proprietà chiamata genre (stringa, es: "Fantasy") e assegnala un valore.
// Modifica il valore di annoPubblicazione a un anno diverso (es: 1965).
// Stampa l'intero oggetto libro in console per vedere le modifiche.

book.genre = "Romance";
book.publicationYear = 2025;
console.log(book);

// Esercizio 3: Aggiungere una funzione (metodo) a un oggetto.

// Crea un oggetto chiamato cat con le seguenti proprietà:
// name (stringa, es: "Whiskers")
// age (numero, es: 3)
// Aggiungi un metodo chiamato meows a questo oggetto. Quando viene chiamato, questo metodo dovrebbe stampare in console: "Meow! Il mio nome è [nome del gatto]."
// Chiama il metodo meows dell'oggetto cat.

const cat = {
    name: "Margot",
    age: 5,
    meows: function Meows() {
        console.log(`Meow! Il mio nome è ${cat.name}.`)
    }
}

cat.meows();
