// Esercizio 1: Filtra e trasforma numeri
// Crea un array di numeri interi da 1 a 10.
// Usa .filter() per tenere solo i numeri pari.
// Usa .map() per raddoppiare i numeri filtrati.
// Usa .forEach() per stampare ciascun numero risultante.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(number => number % 2 === 0);
console.log(filteredNumbers);

const doubledNumbers = filteredNumbers.map(number => number * 2);
console.log(doubledNumbers);

doubledNumbers.forEach((number) => {
    console.log(number);
})


// Esercizio 2: Numeri dispari elevati al quadrato
// Crea un array di numeri da 1 a 15.
// Usa filter() per ottenere solo i numeri dispari e poi map() per calcolare il quadrato di ciascun numero dispari.

{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const filteredNumbers = numbers.filter(number => number % 2 !== 0);
    console.log(`Numeri dispari: ${filteredNumbers}`);

    const squareNumbers = filteredNumbers.map(number => number * number);
    console.log(`Quadrato dei numeri dispari: ${squareNumbers}`);

}