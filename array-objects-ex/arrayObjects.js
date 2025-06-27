// Esercizio 1: Trovare oggetti specifici

// Hai un array di prodotti. Trova tutti i prodotti con un prezzo inferiore a 50 euro e restituiscili in un nuovo array.

const products = [
    { id: 1, name: 'T-shirt', price: 25, category: 'Abbigliamento' },
    { id: 2, name: 'Jeans', price: 70, category: 'Abbigliamento' },
    { id: 3, name: 'Cuffie', price: 45, category: 'Elettronica' },
    { id: 4, name: 'Libro', price: 15, category: 'Libri' },
    { id: 5, name: 'Orologio', price: 120, category: 'Accessori' },
    { id: 6, name: 'Mouse', price: 30, category: 'Elettronica' }
]

// metodo filter
const cheapProducts = products.filter(product => product.price < 50);
console.log(cheapProducts);

// ciclo for 
const newArrayProducts = [];

for (let i = 0; i < products.length; i++) {

    const currentProduct = products[i];
    const currentProductPrice = products[i].price;

    if (currentProductPrice < 50) {
        newArrayProducts.push(currentProduct);
    }

}

console.log(newArrayProducts);

// Esercizio 2: Modificare le proprietà degli oggetti

// Per ogni libro nel seguente array, aggiungi una nuova proprietà disponibile impostata su true.

const books = [
    { title: 'Il Signore degli Anelli', author: 'J.R.R. Tolkien', year: 1954 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Orgoglio e Pregiudizio', author: 'Jane Austen', year: 1813 }
];

// ciclo for

for (let i = 0; i < books.length; i++) {
    books[i].available = true;
}

console.log(books);

// metodo Map

const booksAvailable = books.map(book => {
    return { ...book, available: true };
});

console.log(books);

// Esercizio 3: Creazione e Accesso

// Dichiara un array e inizializzalo con tre oggetti prodotto:
// Prodotto 1: "Laptop", 1200.00, true
// Prodotto 2: "Mouse", 25.50, true
// Prodotto 3: "Tastiera", 75.00, false
// Accedi e stampa nel terminale (usando console.log) il nome del secondo prodotto.
// Accedi e stampa se il terzo prodotto è disponibile o meno.

const itProducts = [
    { name: "Laptop", price: 1200.00, available: true },
    { name: "Mouse", price: 25.50, available: true },
    { name: "Tastiera", price: 75.00, available: false }
]

console.log(`Nome del secondo prodotto: ${itProducts[1].name}`);
console.log(`Il prodotto è disponibile? ${itProducts[2].available}`);