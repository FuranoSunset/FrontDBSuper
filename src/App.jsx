import { useState } from "react";
import { useFetch } from "./useFetch";
import { parsearKi } from "./parsearKi.js";

function App() {
  const { data, loading } = useFetch("https://dragonball-api.com/api/characters?limit=100");
  const [selectedKi, setselectedKi] = useState("");
  const [selectedKi2, setselectedKi2] = useState("");
  const [winnerText, setWinnerText] = useState("");

  const handleChange = (e) => {
    setselectedKi(parsearKi(e.target.value));
  };

  const handleChange2 = (e) => {
    setselectedKi2(parsearKi(e.target.value));
  };

  const handleClick = () => {
    if (selectedKi > selectedKi2) {
      setWinnerText("Gana el personaje de la izquierda");
    } else if (selectedKi < selectedKi2) {
      setWinnerText("Gana el personaje de la derecha");
    } else {
      setWinnerText("Empate");
    }
  };

  return (
    <>

      <div id="contenedorPrincipal"> 
        
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <select id="pj1" onChange={handleChange} value={selectedKi}>
              <option value="">Selecciona un personaje</option>
              {data?.items?.map((character) => (
                <option key={character.id} value={character.maxKi}>
                  {character.name}
                </option>
              ))}
            </select>
          )}
          {selectedKi && <p>Ki seleccionado: <strong>{selectedKi}</strong></p>}
        </div>

        
        <button id="botonVS" onClick={handleClick}> 
          ¿Quién gana?
        </button>

        
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <select id="pj2" onChange={handleChange2} value={selectedKi2}>
              <option value="">Selecciona un personaje</option>
              {data?.items?.map((character) => (
                <option key={character.id} value={character.maxKi}>
                  {character.name} - Max Ki: {character.maxKi}
                </option>
              ))}
            </select>
          )}
          {selectedKi2 && <p>Ki seleccionado: <strong>{selectedKi2}</strong></p>}
        </div>
      </div>

      
      <span id="resultado">{winnerText}</span>
    </>
  );
}

export default App;
