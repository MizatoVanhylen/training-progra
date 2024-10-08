/*
hacer una calculadora de IMC
objeto con datos de personas
pesoKG / (alturaCm  * alturaCm) 

IMC    Nivel de peso
Por debajo de 18.5    Bajo peso
18.5 – 24.9    Normal
25.0 – 29.9    Sobrepeso
30.0 o más    Obesidad
*/

const persona = {
  peso: 42,
  altura: 1.65,
}; 

  const IMC = persona.peso / (persona.altura * persona.altura);

  const IMCComundecimal = IMC.toFixed(1);

  console.log("Tu IMC es de " + IMCComundecimal)
  
    if(IMC < 18.5) {
      console.log("Bajo peso")
    } else if (IMC >=18.5 && IMC <= 24.9){
      console.log("Peso Normal")
    } else if (IMC >=25.0 && IMC <= 29.9){
      console.log("Sobrepeso")
    } else {
      console.log("Obesidad")
    }

  
