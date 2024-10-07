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

/*
Crear un objeto que diga persona y debe tener 3 notas en una asignatura
la primera nota vale 30%
la segunda vale 20%
y la ultima vale 50%
pasar promedio de la nota segun el porcentaje 

promedio sin tomar en cuenta el porcentaje 
*/

/*
cachipun con elección de valores
*/
 
/*
Una persona va a llevar productos en su carrito 
lleva 3 productos y cada uno tiene un valor propio
la persona va decir cual producto quiere y cuanta cantidad quiere del producto
se debe sacar el valor total por producto y el valor total de la boleta
*/

/* Estructura de producto */

const productos = {
  bebida: {
    nombre:"CocaCola",
    precio: 1500,
    cantidad: 3
  },
  cereal: {
    nombre:"Estrellitas",
    precio: 2500,
    cantidad: 2
  },  
  pan: {
    nombre:"Pan",
    precio: 2400,
    cantidad: 1
  },
}