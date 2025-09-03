import { useState } from "react";
import { useFetch } from "./useFetch";
import { parsearKi } from "./parsearKi.js";

function App() {
  const { data, loading } = useFetch("https://dragonball-api.com/api/characters?limit=100");
  const [selectedKi, setselectedKi] = useState("");
  const [selectedKi2, setselectedKi2] = useState("");
  const [winnerText, setWinnerText] = useState("");

  const handleChange = (e) => {
    let selectedChar = data.items[parseInt(e.target.value)-1];
    setselectedKi(parsearKi(selectedChar.maxKi));
  };

  const handleChange2 = (e) => {
    let selectedChar = data.items[parseInt(e.target.value)-1];
    setselectedKi2(parsearKi(selectedChar.maxKi));
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
                <option key={character.id} value={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          )}
          {selectedKi && <p>Ki seleccionado: <strong>{selectedKi}</strong></p>}
        </div>

        
        <button class="animated-button" id="botonVS" onClick={handleClick}> 
            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">VS</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
        </button>

        
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <select id="pj2" onChange={handleChange2} value={selectedKi2}>
              <option value="">Selecciona un personaje</option>
              {data?.items?.map((character) => (
                <option key={character.id} value={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          )}
          {selectedKi2 && <p>Ki seleccionado: <strong>{selectedKi2}</strong></p>}
        </div>
      </div>

      
      <span id="resultado" class="loading-winner">{winnerText}</span>
    </>
  );
}

export default App;
