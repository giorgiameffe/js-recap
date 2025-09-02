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