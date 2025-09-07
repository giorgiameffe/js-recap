// Esercizio 1: Calcola il prezzo totale dei prodotti disponibili
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

    console.log('Il totale è:', sumPrices)

}

// Esercizio 2: Concatenazione di metodi
// Dato un array di film con proprietà: title, rating, genre
// Trova tutti i film con rating maggiore di 7, prendi solo il titolo e stampa un nuovo array

const movies = [
    { title: 'Inception', rating: 8.8, genre: 'Sci-Fi' },
    { title: 'Twilight', rating: 5.2, genre: 'Romance' },
    { title: 'Interstellar', rating: 8.6, genre: 'Sci-Fi' },
    { title: 'Jumanji', rating: 7.0, genre: 'Adventure' }
];

const moviesTitle = movies
    .filter(movie => movie.rating > 7)
    .map(movie => movie.title)
console.log(moviesTitle);


// Esercizio 3: Riduzione combinata
// Dato un array di ordini con proprietà: product, quantity, price
// Calcola il totale complessivo di tutti gli ordini utilizzando map + reduce

const orders = [
    { product: 'Maglietta', quantity: 2, price: 25 },
    { product: 'Pantaloni', quantity: 1, price: 50 },
    { product: 'Cappello', quantity: 3, price: 15 },
    { product: 'Calze', quantity: 5, price: 5 }
];

const total = orders
    .map(order => order.quantity * order.price)
    .reduce((accumulator, currentValue) => accumulator += currentValue);
console.log('Totale complessivo:', total);