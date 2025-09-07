// Esercizio 1: Metodo Reduce

// Dato un array di prezzi [10.50, 20.00, 5.75, 15.25], 
// utilizza il metodo reduce() per calcolare la somma totale di tutti i prezzi nell'array.
// Stampa il risultato.

const prices = [13.00, 20.50, 8.30, 23.50];

const priceAddition = prices.reduce((accumulator, currentValue) => {

    return accumulator += currentValue;
})

console.log(priceAddition);

// Esercizio 2: Somma dei numeri dell'array
// Dato l'array numeri, usa reduce per calcolare la somma totale
// e stampa un messaggio del tipo "La somma dei numeri è: ..."

const numbers = [2, 7, 5, 1];

const numbersAddition = numbers.reduce((accumulator, currentValue) => {

    return accumulator += currentValue
})

console.log(`La somma dei numeri è ${numbersAddition}`);