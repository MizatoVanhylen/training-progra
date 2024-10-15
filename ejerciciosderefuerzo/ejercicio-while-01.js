/*let i = 0

while(i <= 10){
  console.log("El numero actual es ", i)
  i = i + 1
}*/

/* 
Crear un while, preguntar en cada vuelta si desea ingresar un nombre 
1 para si y 2 para no
si ingresa un nombre se agregara a la lista del array 
si pone que no, debe mostrar todos los nombres que se ingresaron
*/

const nombres = []
let lista = true
let finalizar = ""

while(lista == true){
  const nombre = prompt("Ingrese su nombre");
  alert("El nombre ingresado es " + nombre );
  nombres.push(nombre);
  finalizar = prompt("Si deseas agregar otro nombre 1 para si, 2 para no");
  if(finalizar == 2){
    lista = false;
  }
};

alert ("La lista de nombres ingresados es " + nombres);

/*
usa el mismo concepto pero que se ingrese un producto, y decir cuento es el total de la boleta
*/

/*
un for que sume todos los valores de un array 
*/

/*
un ejercicio que permita saber si un numero es primo o no
*/

/*
hacer un for o while que muestre por pantalla una cantidad de 10 digitos 
de la sucesión de fibonacci
a = 0
b = 1
c = a + b
*/



