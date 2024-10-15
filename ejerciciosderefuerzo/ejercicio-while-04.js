
/*
hacer un for o while que muestre por pantalla una cantidad de 10 digitos 
de la sucesión de fibonacci
a = 0
b = 1
c = a + b
*/
const fib = [0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
for(let i = 2; i <= 10; i++ ){
  fib[i] = fib[i - 2] + fib[i - 1]
  console.log("El siguiente numero es ", fib[i])
};
return fib[10]; 


