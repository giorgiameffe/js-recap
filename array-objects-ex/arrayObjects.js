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