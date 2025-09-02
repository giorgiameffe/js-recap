// Esercizio 1: Metodo forEach

// Data un array di nomi ["Alice", "Bob", "Charlie"], 
// utilizza il metodo forEach() per stampare ogni nome sulla console, preceduto dalla frase "Ciao, ".

const names = ["Alice", "Bob", "Charlie"];

names.forEach((name) => {
    console.log(`Ciao, ${name}`);
})

// Esercizio 2: Metodo forEach, Punteggi

// Hai un array di numeri che rappresentano i punteggi ottenuti in un test [85, 92, 78, 65, 95, 72]. 
// Utilizza il metodo forEach() per:
// Stampare ogni punteggio, indicando se è un punteggio "alto" (maggiore o uguale a 80) o "basso" (minore di 80).
// Calcolare la media di tutti i punteggi.
// Stampa la media finale alla fine.

const scores = [85, 92, 78, 65, 95, 72];

let sum = 0;

scores.forEach((score) => {
    if (score >= 80) {
        console.log(`${score} è un punteggio alto!`)
    } else {
        console.log(`${score} è un punteggio basso!`)
    }

    sum += score;
})