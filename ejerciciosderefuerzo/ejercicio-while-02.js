/*
usa el mismo concepto de while-01 pero que se ingrese un producto, 
y decir cuanto es el total de la boleta
*/

const productos = []
let lista = true;
let pagar = "";
let cocaCola =0;
let sprite = 0;
let fanta = 0;
const precio = {
  "Coca Cola": 1390,
  "Sprite": 1560,
  "Fanta":1450,
};

//Coca Cola 1390 
//Sprite 1560
//Fanta 1450

while(lista == true){
  const producto = prompt("Ingrese su producto: \n 1 : Coca Cola \n 2 : Sprite \n 3 : Fanta")
  
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
  }
  /*pagar = prompt("Si desea seguir comprando presione 1, si desea pagar presione 2");
  if(pagar == 2){
    lista = false
  };*/
}

/*let carrito = "";
for(i = 0; i < productos.length; i++){
  carrito += cantidades[i] + productos[i] + precios[i] + "\n";
  let suma = cantidades[i] * productos [i];
  total = suma;
}
alert("A ingresado al carrito:\n"  +  carrito + "con un precio:\n" + suma + "con un tota de:\n" + total );*/