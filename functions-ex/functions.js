// Esercizio 1: Saluto Semplice

// Crea una funzione chiamata hiUser che non accetta nessun parametro.
// All'interno della funzione, stampa in console il messaggio: "Ciao! Benvenuto/a nel mondo delle funzioni."
// Chiama la funzione.

function hiUser() {
    console.log('Ciao! Benvenuto/a nel mondo delle funzioni.')
}

hiUser();

// Esercizio 2: Somma di due Numeri

// Crea una funzione chiamata sumNumbers che accetta due parametri: num1 e num2.
// La funzione deve restituire la somma di num1 e num2.
// Chiama la funzione con due numeri a tua scelta (es. 5 e 10) e stampa il risultato in console.

function sumNumbers(num1, num2) {

    return num1 + num2
}

console.log(sumNumbers(2, 7));

// Esercizio 3: Verifica Maggiore Età

// Crea una funzione chiamata isAdult che accetta un parametro: age.
// La funzione deve restituire true se age è maggiore o uguale a 18, altrimenti deve restituire false.
// Chiama la funzione isAdult con un'età che rende true e una che rende false (es. 20 e 16).
// Stampa entrambi i risultati in console.

function isAdult(age) {

    return age >= 18;
}

console.log(isAdult(16));
console.log(isAdult(20));

// Esercizio 4: Saluto Personalizzato 

// Crea una funzione chiamata personalizedGreeting che accetta un parametro: name.
// La funzione deve stampare in console un messaggio di saluto che include il nome fornito, ad esempio: "Ciao, [nome]! Come stai oggi?"
// Chiama la funzione con il tuo nome o un nome a tua scelta.

function personalizedGreeting(name) {

    console.log(`Ciao, ${name}! Come stai oggi?`)
}

personalizedGreeting('Giorgia');

// Esercizio 5: Calcolo Area Rettangolo

// Crea una funzione per calcolare l'area del rettangolo che accetta due parametri: base e height.
// La funzione deve calcolare l'area del rettangolo (base * height) e restituire il risultato.
// Chiama la funzione con valori per base e altezza (es. 7 e 4) e stampa l'area calcolata in console.

function calculateAreaRectangle(base, height) {

    return base * height
}

console.log(calculateAreaRectangle(7, 4));

// Esercizio 6: Calcolo Media Ponderata

// Crea una funzione chiamata calcolaMediaPonderata che accetta quattro parametri: vote1, weight1, vote2, weight2.
// La funzione deve calcolare la media ponderata dei due voti utilizzando la seguente formula:

// Media= ((voto1×peso1)+(voto2×peso2)) / (peso1+peso2)

// La funzione deve restituire il valore della media ponderata.

function calculateWeightedAverage(vote1, weight1, vote2, weight2) {

    const average = ((vote1 * weight1) + (vote2 * weight2)) / (weight1 + weight2)
    return average;
}

console.log(calculateWeightedAverage(7, 0.4, 9, 0.6));

// Esercizio 4: Funzione per Controllare Pari o Dispari

// Scrivere una funzione che prenda un numero e restituisca true se è pari, false se è dispari.

function isEven(num) {

    return num % 2 === 0;
}

console.log(isEven(2));
console.log(isEven(3));