// Snack 1
// Creare un array di oggetti:

// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bikes = [
  {
    nome: 'bici1',
    peso: 5
  },

  {
    nome: 'bici9',
    peso: 3
  },

  {
    nome: 'bici4',
    peso: 8
  },

  {
    nome: 'bici6',
    peso: 12
  }
];

//obiettivo = la chiave peso contenuta negli object a loro volta contenuti nell'array bikes

//1 - funzione estrapolazione dati dagli object contenuti nell'array e inseriti in un obj temporaneo che pusha i dati in un nuovo array per la comparazione


//??? da trasformare in funzione
let newArray = [];
console.log(newArray);

for (const key in bikes) {
  let element = bikes[key].peso;
  newArray.push(element);
  console.log(element);
}

const minorNum = Math.min(...newArray);
console.log(minorNum);


//2 - estrapolazione key ciclando tutti gli object nell'array
//3 - creare un object esterno che contenga i pesi di tutte le bici




// console.log(bikes);

// console.log(bikes[0].peso);

// Stampare a schermo la bici con peso minore.

//variabile per il risultato finale
// let minorWeight;

// confronto pesi delle bici


//funzione per prendere numeri da diversi object e confrontarli tra loro per stabilire quale sia il minore

//presa dati da diversi obj in array
// function objectsDataInArray(array) {

//   element;
//   for (let key in obj) {
//     console.log(obj.key);
//   }
// }

// minorWeightCalcObj(bikes[0]);
//   Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
//   Snack 3(Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.;