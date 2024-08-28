const eaea = () => {
    const usuario = "admin";
    const password = "admin";
    const usuario3 = "Catalina";
    const password3 = "C123";
   
    const usuario2 = document.querySelector("#B1").value.toLowerCase();
    const password2 = document.querySelector("#B2").value;
    

    if(usuario == usuario2 && password == password2){
        return alert("usuario valido como administrador")
    }
    
    if(usuario2 == usuario3 && password2 == password3){
        return alert("Usuario y contraseña validos")
    }

    return alert("usuario no se encuentra registrado")

}

const pelea = () => {
/*    const jugador1 = "piedra";
    const jugador1 = "papel";
    const jugador1 = "tijeras";
    const jugador2 = "piedra";
    const jugador2 = "papel";
    const jugador2 = "tijeras";
    const opcion1 = "piedra";
    const opcion2 = "papel";
    const opcion3 = "tijeras";
 
    if(jugador1 == opcion1 == opcion2 == opcion3 && jugador2 == opcion1 == opcion2 == opcion3){
        return alert("Ganada Jugador 1")
  }

  return alert("gana jugador 2")


*/ 

const opciones = ["piedra", "papel","tijeras"];
const random = Math.floor(Math.random() * 3);
const cpu = opciones[random]
const resultados = ["Gana Jugador", "Gana CPU", "Empate", "Opción no valida"];
const jugador = prompt("ingresa piedra, papel o tijeras")
const eleccion = "Jugador  elige:  " + jugador +  "\nCPU  elige:  " + cpu +  "\n";


if(jugador != opciones[2] && jugador != opciones[0] && jugador != opciones[1] ){
  alert(resultados[3])
  }

  if(
    (jugador == opciones[2] && cpu == opciones[1]) || 
    (jugador == opciones[1] && cpu == opciones[0]) || 
    (jugador == opciones[0] && cpu == opciones[2])
  ){
    alert(eleccion + resultados[0])
  }

  if(
    (jugador == opciones[1]&& cpu == opciones[2]) || 
    (jugador == opciones[0] && cpu == opciones[1]) || 
    (jugador == opciones[2] && cpu == opciones[0])

    ){
    alert(eleccion + resultados[1])
  }

 
  if(jugador == cpu ){
    alert(eleccion + resultados[2])
  }

}   


/*
const db = {
    usuarios: [
      {
        name: "admin",
        password: "admin",
        type: "administrator"
      }, {
        name: "catalina",
        password: "C123",
        type: "user"
      }
    ]
  }
  
  const eaea = () => {
    const username = document.querySelector("#B1").value.toLowerCase();
    const password = document.querySelector("#B2").value;
  
    const getUser = db.usuarios.find(user => user.name == username && user.password == password);
  
    if(!getUser){
      return alert('No se ha encontrado el usuario');
    }
  
    const message = getUser.type == 'administrator' ? "Usuario admin iniciando sesion" : "Puedes iniciar sesion";
  
    return alert(message);
  }
 */