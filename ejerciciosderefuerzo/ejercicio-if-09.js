/*
Crear un cachipun con elección de valores

if (![jugador1, jugador2].every(opcion => opciones.includes(opcion))) {
  console.log("opción inválida");
}   pasa por cada elemento de la opció, y despues revisa si los elementos los incluye el array de las opciones.
*/

const opciones = ["piedra", "papel", "tijeras"];
const resultados = ["Gana jugador 1", "Gana Jugador 2", "Empate"];
const jugador = {
  jugador1: opciones[2],
  jugador2: opciones[1]
};

const{ jugador1, jugador2 } = jugador;

if(jugador1 != opciones[0] && jugador1 != opciones[1] && jugador1 != opciones[2] && jugador2 != opciones[0] && jugador2 != opciones[1] && jugador2 != opciones[2]) {
  console.log("opción invalida")
};

if(jugador1 === jugador2){
  console.log("Empate")
};

if (
  (jugador1 == opciones[2] && jugador2 == opciones[1]) ||
  (jugador1 == opciones[1] && jugador2 == opciones[0]) ||
  (jugador1 == opciones[0] && jugador2 == opciones[2])
){
  console.log(`Jugador 1 a elegido ${jugador1} y Jugador 2 a elegido  ${jugador2}  ${resultados[0]}`)
};

if (
  (jugador1 == opciones[1] && jugador2 == opciones[2]) ||
  (jugador1 == opciones[0] && jugador2 == opciones[1]) ||
  (jugador1 == opciones[2] && jugador2 == opciones[0])
){
   console.log(`Jugador 1 a elegido ${jugador1} y Jugador 2 a elegido  ${jugador2} ${resultados[1]}`)
};