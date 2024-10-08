/*
> mayor  que
< menor que
!= distinto a
= es asignación
== igual
=== completamente igual
% modulo
& y deben cumplirse todas las condiciones
| o debe cumplirse al menos una condición
! pero a la izquierda de una condición 
 */

const pokemon = {
  nombre: "Eevee",
  nivel: 22,
  shiny: true,
  feliz: true,
  hambriento: false,
  envenenado: true,
  tipo: "psiquico"
};

if (pokemon.nombre == "Eevee") {
  console.log("Eevee")
}

if (pokemon.nivel > 16) {
  console.log("Tu pokemon cumple con el nivel requerido")
} else {
  console.log("Tu pokemon no cumple con el nivel requerido")
}

if (!pokemon.shiny) {
  console.log("Shiny")
} else {
  console.log("Tu pokemon no es Shiny")
}

if (pokemon.feliz) {
  console.log("Eevee es un pokemon feliz")
}

if (pokemon.hambriento) {
  console.log("El pokemon tiene hambre")
}

if (pokemon.envenenado) {
  console.log("Pierde vida")
}

if (pokemon.tipo == "fuego") {
  console.log("Tu pokemon es tipo Fuego")
} else if (pokemon.tipo == "agua"){
  console.log("Tu pokemon es tipo agua")
} else if (pokemon.tipo == "psiquico"){
  console.log("Tu pokemon es tipo psiquico")
}
