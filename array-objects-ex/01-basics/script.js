// Esercizio 1: Creazione e Accesso
// Dichiara un array e inizializzalo con tre oggetti prodotto:
// Prodotto 1: "Laptop", 1200.00, true
// Prodotto 2: "Mouse", 25.50, true
// Prodotto 3: "Tastiera", 75.00, false
// Accedi e stampa nel terminale (usando console.log) il nome del secondo prodotto.
// Accedi e stampa se il terzo prodotto è disponibile o meno.

const itProducts = [
    { name: 'Laptop', price: 1200.00, available: true },
    { name: 'Mouse', price: 25.50, available: true },
    { name: 'Tastiera', price: 75.00, available: false }
]

console.log(`Nome del secondo prodotto: ${itProducts[1].name}`);
console.log(`Il prodotto è disponibile? ${itProducts[2].available}`);


// Esercizio 2: Aggiunta e Rimozione
// Continuiamo con l'array dell'esercizio precedente.
// Aggiungi un nuovo prodotto alla fine dell'array: "Monitor", 300.00, true.
// Rimuovi l'ultimo prodotto dall'array.
// Stampa l'intero array per verificare le modifiche.

const newProduct = {
    name: 'Monitor',
    price: 300.00,
    available: true
}

itProducts.push(newProduct);
console.log(itProducts);

itProducts.pop();
console.log(itProducts);


// Esercizio 3: Accesso e verifica disponibilità
// Crea un array di oggetti prodotto con almeno 4 prodotti.
// Ogni prodotto ha le proprietà: name, price, available.
// Stampa il prezzo del primo prodotto e verifica se il secondo prodotto è disponibile.

const products = [
    { name: 'Libro', price: 15.00, available: true },
    { name: 'Quaderno', price: 3.50, available: true },
    { name: 'Penna', price: 1.20, available: false },
    { name: 'Zaino', price: 40.00, available: true }
];

console.log('Prezzo primo prodotto:', products[0].price);
console.log('Disponibilità secondo prodotto:', products[1].available);


// Esercizio 4: Aggiungi un prodotto e controlla
// Continua con l'array dell'esercizio precedente.
// Aggiungi un nuovo prodotto alla fine: "Tablet", 450.00, true.
// Stampa l'intero array per verificare l'aggiunta.


// Esercizio 5: Rimuovi il primo prodotto
// Usa il metodo shift() per rimuovere il primo prodotto dall'array.
// Stampa l'intero array per verificare la rimozione.


// Esercizio 6: Aggiorna disponibilità
// Prendi un prodotto a scelta dall'array e cambia la sua proprietà available in false.
// Stampa il prodotto aggiornato per verificare la modifica.


// Esercizio 7: Trova prodotto costoso
// Usa find() per cercare il primo prodotto con prezzo maggiore di 500.
// Stampa il nome e il prezzo del prodotto trovato.
