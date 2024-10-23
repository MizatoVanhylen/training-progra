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
let pokemones = {
  eevee: {
    nombre: "Eevee",
    vida: 80,
    ataques: {
      atk1: {nombre: "Antojo", daño: 25},
      atk2: {nombre: "Placaje", daño: 40},
      atk3: {nombre: "Ataque Rapido",daño: 40},
      atk4: {nombre: "Mordisco",daño: 40}
    }
  },
  espeon: {
    nombre: "Espeon",
    vida: 160,
    ataques: {
      atk1: {nombre: "Confusión", daño: 50},
      atk2: {nombre: "Placaje", daño: 40},
      atk3: {nombre: "Psicorrayo", daño: 65},
      atk4: {nombre: "Premonición", daño: 120}
    }
  },
  umbreon: {
    nombre: "Umbreon",
    vida: 160,
    ataques: {
      atk1: {nombre: "Persecución", daño: 40},
      atk2: {nombre: "Ataque Rapido", daño: 40},
      atk3: {nombre: "Finta", daño: 60},
      atk4: {nombre: "Última Baza", daño: 140}
    }
  }
}

let pokemonesEnemigos = {
  pichu: {
    nombre: "Pichu",
    vida: 80,
    ataques: {
      atk1: {nombre: "Doble Bofetón", daño: 15},
      atk2: {nombre: "Megapuño", daño: 80},
      atk3: {nombre: "Golpe Cabeza", daño: 70},
      atk4: {nombre: "Megapatada", daño: 120}
    }
  },
  pikachu: {
    nombre: "Pikachu",
    vida: 160,
    ataques: {
      atk1: {nombre: "Doble Bofeton", daño: 15},
      atk2: {nombre: "Megapuño", daño: 80},
      atk3: {nombre: "Megapatada", daño: 120},
      atk4: {nombre: "Doble Filo",  daño: 120}
    }
  },
  raichu: {
    nombre: "Raichu",
    vida: 180,
    ataques: {
      atk1: {nombre: "Doble Bofetón", daño: 15},
      atk2: {nombre: "Atizar", daño: 80},
      atk3: {nombre: "Golpe Cabeza", daño: 70},
      atk4: {nombre: "Doble Filo", daño: 120}
    }
  }
};
while (elegirpokemon === true) {
  let pokemon = prompt("Elige tu Pokémon:\n 1 : Eevee \n 2 : Espeon \n 3 : Umbreon \n 4 : Si no deseas elegir Pokémon presiona")
  if (pokemon === 1) {
   jugador.push(pokemones.eevee);
    alert("Elegiste a Eevee");
  } else if (pokemon === 2) {
    jugador.push(pokemones.espeon);
     alert("Elegiste a Espeon");
  } else if (pokemon === 3) {
    jugador.push(pokemones.umbreon);
     alert("Elegiste a Umbreon");
  } else if (pokemon == 4) {
    alert("No elegiste ningun Pokémon");
    elegirpokemon = false;
  } else {
    alert("Opción no válida, por favor elige de nuevo.");
  }
}






/*const arr = ["eevee", "espeon"]
const ob = {
  nombre: "Juan",
  signo: "cancer"
}

const arr2 = [{nombre: "juan", signo: "cancer"},{nombre: "Alex", signo: "tauro"},]*/