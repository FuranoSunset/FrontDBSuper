  import { parsearKi } from "parsearKi.js";
   
//Aquí quiero crear una funcion que compare los dos Ki's maximos de los personajes seleccionados e indique cual es mayor

  /*function compararMaxKi(selectedCharacter, selectedCharacter2){
    if (selectedCharacter = false){
        alert("Selecciona 2 personajes")
    } else if (selectedCharacter2 = false) { 
        alert("Selecciona 2 personajes") } else if (selectedCharacter.maxKi > selectedCharacter2.maxKi) {
            alert("Ganaría {selectedCharacter}")
        } else if (selectedCharacter2.maxKi > selectedCharacter.maxKi){
            alert("Ganaría {selectedCharacter2}")
        }};*/

export function compararKi(personajeA, personajeB) {

  const kiA = parsearKi(personajeA.maxKi);
  const kiB = parsearKi(personajeB.maxKi);

  if(kiA > kiB){
    alert("Gana el personaje 1");
  } else if (kiA < kiB){
    alert("Gana el personaje 2");
  } else {
    alert("Error");
  }

}