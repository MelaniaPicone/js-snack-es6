const squad = [

{
nome: 'Juventus',
punti_assegnati: 0,
falli_subiti: 0,
},


{
nome: 'Inter',
punti_assegnati: 0,
falli_subiti: 0,
},


{
nome: 'Napoli',
punti_assegnati: 0,
falli_subiti: 0,
},


{
nome: 'Fiorentina',
punti_assegnati: 0,
falli_subiti: 0,
},


{
nome: 'Roma',
punti_assegnati: 0,
falli_subiti: 0,
},
]

console.log(squad);


// numeri randomici

function randomNumb () {
const points = Math.floor(Math.random() * 100 +1);
return points;
}


// aggiunta numeri randomici a punti e falli

for (let i=0; i < squad.length ; i++) {

squad[i].punti_assegnati = randomNumb();
squad[i].falli_subiti = randomNumb ();

}

console.log(squad);

// array con solo nomi e falli

const newArray = [];

for (let i=0 ; i < squad.length; i++) {

const squadNum = {
nome: squad[i].nome,
falli_subiti: squad[i].falli_subiti
}

newArray.push(squadNum);

}


console.log(newArray);