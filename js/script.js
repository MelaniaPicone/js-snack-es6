// creo array di oggetti

const bikes = [
{
nome: 'Giant TCR Advanced',
peso: 6.4, 
},

{ 
nome: 'Scott Addict RC',
peso: 5.9, 
},

{ 
nome: 'Aethos Stram Red',
peso: 6.2, 
},

{ 
nome: 'Wilier Triestina',
peso: 6.8, 
},

{ 
nome: 'Orbea Orca',
peso: 7.2, 
},

{ 
nome: 'Look Blade RS',
peso: 7, 
},

{ 
nome: 'Shimano ACE',
peso: 7.4, 
}
];

console.log(bikes);

let lightBike = bikes[0];

// ciclo 
for (let i = 0; i<bikes.length ; i++) {
let kg = bikes[i].peso;
let maxKg = lightBike.peso;


if (kg < maxKg) {
heavBike = bikes[i];
console.log(lightBike);
}

}

