/*
usa el mismo concepto de while-01 pero que se ingrese un producto, 
y decir cuanto es el total de la boleta
*/

const productos = ["Coca Cola", "Sprite", "Fanta"];
let lista = true;
let cocaCola = 0;
let sprite = 0;
let fanta = 0;
const precio = {
  "Coca Cola": 1390,
  "Sprite": 1560,
  "Fanta": 1450,
};

while (lista == true) {
  const producto = prompt("Ingrese su producto: \n 1 : Coca Cola \n 2 : Sprite \n 3 : Fanta");
  
  while (producto != 1 && producto != 2 && producto != 3) {
    alert("Opción inválida, por favor intente de nuevo.");
    producto = prompt("Ingrese su producto: \n 1 : Coca Cola \n 2 : Sprite \n 3 : Fanta"); 
  }

  alert("Ha ingresado " + producto);
  if(producto == 1){
    productos.push(1390)
    cocaCola = cocaCola + 1
  }  
  if(producto == 2){
    productos.push(1560)
    sprite = sprite + 1
  }  
  if(producto == 3){
    productos.push(1450)
    fanta = fanta + 1
  };

  let pagar = prompt("Si desea seguir comprando presione 1, si desea pagar presione 2")
  while(pagar != 1 && pagar != 2 ){
    alert("Opción inválida, por favor intente de nuevo.")
    pagar = prompt("Si desea seguir comprando presione 1, si desea pagar presione 2")
  };
  
  if(pagar == 2){
    lista = false
  }
}

const total = (cocaCola * 1390) + (sprite * 1560) + (fanta * 1450);

alert("Ha ingresado al carrito:\n" +
  "Coca Cola: " + cocaCola + "\n" +
  "Sprite: " + sprite + "\n" +
  "Fanta: " + fanta + "\n" +
  "Precio total: $" + total);

