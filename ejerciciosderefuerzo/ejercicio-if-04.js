/*
Revisar si un numero es positivo o negativo, 
además en el caso de que sea par por consola debe tirar un beep 
en caso contrario debe tirar un boop
*/
let numero = -3
  if (numero < 0) {
    console.log("El numero es negativo")
  } else if (numero == 0) {
    console.log("El numero es 0")
  } else if (numero > 0) {
    console.log("El numero es positivo")
  }

  if (numero % 2 === 0) {
    console.log("BEEP")
  } else {
    console.log("BOOP")
  }