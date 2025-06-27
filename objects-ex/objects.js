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

// Esercizio 4: Oggetti annidati

// Crea un oggetto chiamato student con le seguenti proprietà:
// firstname (stringa, es: "Anna")
// lastname (stringa, es: "Verdi")
// votes (un oggetto annidato con proprietà per diverse materie, es: { math: 8, history: 7, english: 9 })
// Stampa in console il nome e cognome dello studente.
// Stampa in console il voto di matematica dello studente.

const student = {
    firstname: "Giorgia",
    lastname: "Meffe",
    votes: {
        math: 8,
        history: 7,
        english: 9
    }
}

console.log(`${student.firstname} ${student.lastname}`);
console.log(`Voto matematica: ${student.votes.math}`);

// Esercizio 5: Rimuovere proprietà

// Crea un oggetto product con le seguenti proprietà:
// name: "Laptop"
// price: 1200
// available: true
// code: "LP-XYZ-789"
// Elimina la proprietà code dall'oggetto product.
// Stampa l'oggetto product in console per verificare che la proprietà codice non ci sia più.

const product = {
    name: "Laptop",
    price: 1200,
    available: true,
    code: "LP-XYZ-789"
}

delete product.code;
console.log(product);