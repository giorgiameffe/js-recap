// Esercizio 1: Modifica e Ricerca
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


// Esercizio 2: Calcola il prezzo totale dei prodotti disponibili
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

// Esercizio 3: Concatenazione di metodi
// Dato un array di film con proprietà: title, rating, genre
// Trova tutti i film con rating maggiore di 7, prendi solo il titolo e stampa un nuovo array

const movies = [
    { title: 'Inception', rating: 8.8, genre: 'Sci-Fi' },
    { title: 'Twilight', rating: 5.2, genre: 'Romance' },
    { title: 'Interstellar', rating: 8.6, genre: 'Sci-Fi' },
    { title: 'Jumanji', rating: 7.0, genre: 'Adventure' }
];


// Esercizio 4: Riduzione combinata
// Dato un array di ordini con proprietà: product, quantity, price
// Calcola il totale complessivo di tutti gli ordini utilizzando map + reduce

const orders = [
    { product: 'Maglietta', quantity: 2, price: 25 },
    { product: 'Pantaloni', quantity: 1, price: 50 },
    { product: 'Cappello', quantity: 3, price: 15 },
    { product: 'Calze', quantity: 5, price: 5 }
];