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

//ciclo sugli object contenuti nell'array per ricavare le key desiderata


//soluzione se ci si vuole complicare la vita
//??? da trasformare in funzione
// let newArray = [];
// // console.log(newArray);

// for (const key in bikes) {
//   let element = bikes[key].peso;
//   newArray.push(element);
//   // console.log(element);
// }

// const minorWeight = newArray.indexOf(Math.min(...newArray));

// // Stampare a schermo la bici con peso minore.
// console.log(bikes[minorWeight]);

//soluzione standard

//inserisco il peso di una delle bici in una variabile
let minorWeight = bikes[0].peso;
console.log(minorWeight);

//itero l'array contenente le bici
for (let i = 0; i < bikes.length; i++) {
  let currentElement = bikes[i].peso;
  // console.log(currentElement);

  if (currentElement < minorWeight) {
    minorWeight = currentElement;
  }
}

console.log(minorWeight);
//faccio il confronto tra il peso della bici che ho preso con quelle dell'array
//in una nuova variabile memorizzo il peso minore per ogni iterazione fatta
//se l'elemento corrente dell'iterazione ha un peso minore rispetto alla bici nella variabile esterna al ciclo
//sovrascrivo il valore della variabile











//   Snack2
// Creare un array di oggetti di squadre di calcio.

// let teams = [ //  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//   {
//     nome: 'napoli',
//     punti_fatti: 0,
//     falli_subiti: 0
//   },
//   {
//     nome: 'roma',
//     punti_fatti: 0,
//     falli_subiti: 0
//   },
//   {
//     nome: 'juventus',
//     punti_fatti: 0,
//     falli_subiti: 0
//   }
// ];

// // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// // Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

// //funzione numeri random
// function randomInt() {
//   let num = math.floor(Math.random() * 30) + 1;
// }

//funzione aggiunta valori in oggetti



// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



//   Snack 3(Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.;