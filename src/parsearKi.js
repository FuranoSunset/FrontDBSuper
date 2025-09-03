//Con esta funcion detecto los espacios en blanco, también la usamos para detectar si hay sufijo

function detectarEspacios(ki) {
  return /\s/.test(ki);
}
//Con esta funcion detecto y quito los puntos y las comas

function quitarPuntos(ki) { 
  ki = ki.replace(",", "."); //con esto cambiamos todas las comas por puntos
  if (ki[ki.length-2] === "." || ki[ki.length-3] === ".") { //con esto detectamos si es un float
    return ki;
  } else {
    return ki.replace(".", '');
  }
}


//La idea es crear una funcion que pase los string a int pero para ello hay que usar las funciones creadas anteriormente

export function parsearKi(ki){
  //Si entra dentro del if implica que no hay sufijo, eso lleva directamente a eliminar los puntos y luego parsea el String
  if (!detectarEspacios(ki)){
    let kiSinPuntos = quitarPuntos(ki);
    return parseFloat(kiSinPuntos);
      
  } else {
    let arrayKi = ki.split(" "); //con esto separo en dos partes el ki y lo convierto en un array
    let prefijo = arrayKi[0]; //aqui almaceno la parte numerica
    let sufijo = arrayKi[1]; //aqui almaceno el sufijo (como por ejemplo Septillion)

    let prefijoSinPuntos = quitarPuntos(prefijo);
    let prefijoInt = parseFloat(prefijoSinPuntos); //Con los puntos ya quitados parseamos el prefijo

    if(sufijo === "Billion" || sufijo === "billion") { //aquí pueden cumplirse 1 de las 2 condiciones
      prefijoInt = prefijoInt * 1e9; //aquí reasignamos la variable prefijoInt anadiendole los 0s correspondientes
    
    } else if(sufijo === "Trillion" || sufijo === "trillion") { 
      prefijoInt = prefijoInt * 1e12; 
    
    } else if(sufijo === "Quadrillion" || sufijo === "quadrillion") { 
      prefijoInt = prefijoInt * 1e15; 
    
    } else if(sufijo === "Quintillion" || sufijo === "quintillion") { 
      prefijoInt = prefijoInt * 1e18; 
    
    } else if(sufijo === "Sixtillion" || sufijo === "sixtillion") { 
      prefijoInt = prefijoInt * 1e21; 
    
    } else if(sufijo === "Septillion" || sufijo === "septillion") { 
      prefijoInt = prefijoInt * 1e24; 
    
    } else {
      prefijoInt = prefijoInt * 1e30;
    }

    return prefijoInt;
  }
}

/*
Si encuentro un fallo debo parar todo lo que esté haciendo y apuntar 
los datos del fallo, recargo e intento replicar el fallo. Hacer lista de
los datos que fallan y buscar un patron. Adaptar mi algoritmo al patron de
fallos para que se solucione.
 */