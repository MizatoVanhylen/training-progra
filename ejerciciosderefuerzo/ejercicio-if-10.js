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

const msg = (name, price, qty) => `Llevas ${qty} de ${name} con un total de ${price} pesos`;


const { bebida, pan, cereal } = productos;

const valorProducto1 = ( bebida.precio * bebida.cantidad);

console.log(msg(bebida.nombre, bebida.precio, bebida.cantidad));

const valorProducto2 = ( cereal.precio * cereal.cantidad);

console.log(`Llevas ${cereal.cantidad} de ${cereal.nombre} con un total de ${valorProducto2} pesos`);

const valorProducto3 = ( pan.precio * pan.cantidad);

console.log(`Llevas ${pan.cantidad} de ${pan.nombre} con un total de ${valorProducto3} pesos`);

const valorBoleta = (valorProducto1 + valorProducto2 + valorProducto3);

console.log(`El valor total de tu boleta es de ${valorBoleta} pesos`);