  /*
1 crear un un ob con 3 pokemones dentro 
que tengan 4 atakes y vida
cada atake tiene que tener poder de daño
 
2 crear un ob con 3 poke enemigos con las mismas 
caracteristicas

3 seleccionar por pantalla que pokemon se quiere utilizar
y seleccionar al azar el pokemon enemigo

4 pokemon pelea contra el pokemon enemigo eligiendo un 
atake a usar y que muestre el daño que se hizo y vida restante

5 lo mismo con el pokemon enemigo, elegir atake al azar y indicar
daño y vida

6 repetir paso 4 y 5 hasta que uno de los pokemones muera

*/

let elegirpokemon = true;
let elegirpokemonenemigo= true;
let jugador = [];
let jugadorEnemigo = [];
let pokemones = [
 {
    nombre: "Eevee",
    vida: 80,
    ataques: [
     {nombre: "Antojo", daño: 25},
     {nombre: "Placaje", daño: 40},
     {nombre: "Ataque Rapido",daño: 40},
     {nombre: "Mordisco",daño: 40}
    ]
  },
  {
    nombre: "Espeon",
    vida: 160,
    ataques: [
     {nombre: "Confusión", daño: 50},
     {nombre: "Placaje", daño: 40},
     {nombre: "Psicorrayo", daño: 65},
     {nombre: "Premonición", daño: 120}
    ],
  },  
 {
    nombre: "Umbreon",
    vida: 160,
    ataques: [
      {nombre: "Persecución", daño: 40},
      {nombre: "Ataque Rapido", daño: 40},
      {nombre: "Finta", daño: 60},
      {nombre: "Última Baza", daño: 140}
    ]
  }
]

let pokemonesEnemigos = [
  {
    nombre: "Pichu",
    vida: 80,
    ataques: [
       {nombre: "Doble Bofetón", daño: 15},
       {nombre: "Megapuño", daño: 80},
       {nombre: "Golpe Cabeza", daño: 70},
       {nombre: "Megapatada", daño: 120}
    ]
  },
 {
    nombre: "Pikachu",
    vida: 160,
    ataques: [
       {nombre: "Doble Bofeton", daño: 15},
       {nombre: "Megapuño", daño: 80},
       {nombre: "Megapatada", daño: 120},
       {nombre: "Doble Filo",  daño: 120}
    ]
  },
  {
    nombre: "Raichu",
    vida: 180,
    ataques: [
       {nombre: "Doble Bofetón", daño: 15},
       {nombre: "Atizar", daño: 80},
       {nombre: "Golpe Cabeza", daño: 70},
       {nombre: "Doble Filo", daño: 120}
    ]
  }
];

/* Elección de Pokémon jugador*/

while (elegirpokemon === true) {
  const pokemon = prompt("Elige tu Pokémon:\n 1 : Eevee \n 2 : Espeon \n 3 : Umbreon \n 4 : No deseo elegir un Pokémon");
 if (pokemon == 1) {
  jugador = pokemones[0];
  alert("Elegiste a Eevee que tiene " + pokemones[0].vida + " de vida");
  elegirpokemon = false
 } else if (pokemon == 2) {
    jugador = pokemones[1];
     alert("Elegiste a Espeon que tiene " + pokemones[1].vida + " de vida");
     elegirpokemon = false
  } else if (pokemon == 3) {
    jugador = pokemones[2];
     alert("Elegiste a Umbreon que tiene " + pokemones[2].vida + " de vida");
     elegirpokemon = false
  } else if (pokemon == 4) {
    alert("No elegiste ningun Pokémon");
    elegirpokemon = false;
  } else {
    alert("Opción no válida, por favor elige de nuevo.");
  }
  console.log(jugador)
}

/* Elección del Pokémon Random*/

const enemigo = Math.floor(Math.random() * 3);
jugadorEnemigo = pokemonesEnemigos[enemigo];
alert("El enemigo a elegido ha " + jugadorEnemigo.nombre + " que tiene " + jugadorEnemigo.vida + " de vida");

/* Elección de ataques jugador*/

while(jugador.vida > 0 && jugadorEnemigo.vida > 0){
  let ataques = prompt("Elige entre estos ataques:\n 1 : " + jugador.ataques[0].nombre + " daño: " + jugador.ataques[0].daño + "\n 2 : " + jugador.ataques[1].nombre +  " daño: " + jugador.ataques[1].daño + "\n 3 : " + jugador.ataques[2].nombre +  " daño: " + jugador.ataques[2].daño +"\n 4 : " + jugador.ataques[3].nombre +  " daño: " + jugador.ataques[3].daño);
  ataques = ataques -1;
  let peleaJugador = (jugadorEnemigo.vida - jugador.ataques[ataques].daño);
  alert("Usas " + jugador.ataques[ataques].nombre + " que hace " + jugador.ataques[ataques].daño + " de daño para atacar a " + jugadorEnemigo.nombre + " dejandolo en " + peleaJugador + " de vida");
  if(jugadorEnemigo.vida < 0) {
    alert("Haz derrotado a " + jugadorEnemigo.nombre + "\n Ganaste!");
    break;
  };
/* Elección ataque random*/
  const ataqueEnemigo = Math.floor(Math.random() * 4);
  jugadorEnemigo = pokemonesEnemigos[ataqueEnemigo]
  let peleaJugadorEnemigo = (jugador.vida - jugador.ataques[ataqueEnemigo].daño);
  alert("El enemigo usa " + jugador.ataques[ataqueEnemigo].nombre + " que hace " + jugador.ataques[ataqueEnemigo].daño + " de daño para atacar a " + jugador.nombre + " dejandolo en " + peleaJugadorEnemigo + " de vida");
  if(jugador.vida < 0) {
    alert("El enemigo ha derrotado a " + jugador.nombre + "\n Haz perdido, vuelve a intentarlo!");
    break;
  }
}