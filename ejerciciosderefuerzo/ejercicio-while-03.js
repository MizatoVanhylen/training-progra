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

let pokemones = {
  eevee: {
    nombre: "Eevee",
    vida: 160,
    ataques: {
      atk1: {
        nombre: "",
        daño: 30
      }
    }
  }
}

const arr = ["eevee", "espeon"]
const ob = {
  nombre: "Juan",
  signo: "cancer"
}

const arr2 = [{nombre: "juan", signo: "cancer"},{nombre: "Alex", signo: "tauro"},]