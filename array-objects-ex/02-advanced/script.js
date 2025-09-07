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


// Esercizio 3: Iterazione e Filtro 
// Dichiara un array chiamato users con almeno 4 oggetti user a tua scelta. Assicurati che alcuni utenti abbiano età diverse.
// Itera sull'array users e stampa il nome e l'eta di ogni utente utilizzando un ciclo for...of o forEach.
// Crea un nuovo array chiamato adultUsers che contenga solo gli utenti con eta maggiore o uguale a 18. 
// Stampa questo nuovo array.

const users = [
    { id: 1, name: 'Debora', age: 33 },
    { id: 2, name: 'Sofia', age: 17 },
    { id: 3, name: 'Sabrina', age: 56 },
    { id: 4, name: 'Samuel', age: 42 },
    { id: 5, name: 'Viola', age: 16 }
]

users.forEach((user) => {
    console.log(`Nome: ${user.name}, Età: ${user.age}`);
})

const adultUsers = users.filter(user => user.age >= 18);
console.log(adultUsers);


// Esercizio 4: Modifica e Ricerca
// Lavoriamo ancora con l'array users dell'esercizio precedente.
// Trova l'utente con un id specifico (es. id: 2).
// Una volta trovato, modifica la sua età a 30 (o a un nuovo valore a tua scelta).
// Stampa l'utente modificato.
// Cerca un utente per nome (es. "Mario"). Se lo trovi, stampa tutte le sue informazioni.
// Se non lo trovi, stampa un messaggio appropriato.

const userIdTwo = users.find(user => user.id === 2);
console.log(userIdTwo);

userIdTwo.age = 30;
console.log(userIdTwo);

const userSearchName = 'Viola';
const userToFind = users.find(user => user.name === userSearchName);

if (userToFind) {
    console.log(`L'utente ${userSearchName} è stato trovato:`, userToFind)
} else {
    console.log(`L'utente ${userSearchName} non è stato trovato`)
}


// Esercizio 5: Calcola il prezzo totale dei prodotti disponibili
// Dato un array di prodotti, in cui ogni prodotto è un oggetto con: name, price, available
// Trova solo i prodotti disponibili
// Calcola il prezzo totale di questi prodotti.
// Stampa il totale. 

{
    const products = [
        { name: "Laptop ASUS", price: 899.99, available: true },
        { name: "Mouse Wireless Logitech", price: 25.50, available: false },
        { name: "Tastiera Meccanica RGB", price: 120.00, available: true },
        { name: "Monitor Curvo Samsung", price: 349.99, available: true }
    ]

    const availableProducts = products.filter(product => product.available === true);
    console.log(availableProducts);

    const sumPrices = availableProducts.reduce((accumulator, currentValue) => {

        return accumulator + currentValue.price;
    }, 0)

    console.log(`Il totale è ${sumPrices}`)

}

// Esercizio 6: Filtra oggetti per categoria
// Dato un array di prodotti con proprietà: name, price, category
// Crea un nuovo array che contenga solo i prodotti appartenenti alla categoria "Abbigliamento"

const items = [
    { name: 'Felpa', price: 35, category: 'Abbigliamento' },
    { name: 'Pantaloni', price: 50, category: 'Abbigliamento' },
    { name: 'Orologio', price: 120, category: 'Accessori' },
    { name: 'Libro', price: 20, category: 'Libri' },
    { name: 'Cappello', price: 15, category: 'Accessori' }
];


// Esercizio 7: Modifica proprietà con map
// Dato un array di studenti con proprietà: name, score
// Aumenta il punteggio di ogni studente del 5% e restituisci un nuovo array

const students = [
    { name: 'Luca', score: 75 },
    { name: 'Marta', score: 82 },
    { name: 'Sara', score: 91 },
    { name: 'Tommaso', score: 68 }
];


// Esercizio 8: Trova primo oggetto con condizione
// Dato un array di veicoli con proprietà: brand, year, available
// Trova il primo veicolo con year maggiore di 2018

const vehicles = [
    { brand: 'Fiat', year: 2015, available: true },
    { brand: 'BMW', year: 2020, available: false },
    { brand: 'Tesla', year: 2021, available: true },
    { brand: 'Audi', year: 2019, available: true }
];


// Esercizio 9: Concatenazione di metodi
// Dato un array di film con proprietà: title, rating, genre
// Trova tutti i film con rating maggiore di 7, prendi solo il titolo e stampa un nuovo array

const movies = [
    { title: 'Inception', rating: 8.8, genre: 'Sci-Fi' },
    { title: 'Twilight', rating: 5.2, genre: 'Romance' },
    { title: 'Interstellar', rating: 8.6, genre: 'Sci-Fi' },
    { title: 'Jumanji', rating: 7.0, genre: 'Adventure' }
];


// Esercizio 10: Riduzione combinata
// Dato un array di ordini con proprietà: product, quantity, price
// Calcola il totale complessivo di tutti gli ordini utilizzando map + reduce

const orders = [
    { product: 'Maglietta', quantity: 2, price: 25 },
    { product: 'Pantaloni', quantity: 1, price: 50 },
    { product: 'Cappello', quantity: 3, price: 15 },
    { product: 'Calze', quantity: 5, price: 5 }
];
