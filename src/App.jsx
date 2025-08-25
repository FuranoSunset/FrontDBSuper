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

  const handleClick = (_) => {
    if(selectedKi>selectedKi2){
      setWinnerText("Gana el personaje de la izquierda");
    } else if (selectedKi<selectedKi2){
      setWinnerText("Gana el personaje de la derecha");
    }
  };
  

  return (
    <>
      <div id="contenedorPrincipal">
        
        <div className="card" id="cajasPersonajes">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <select id="pj1" onChange={handleChange} value={selectedKi}>
              <option value="">Selecciona un personaje</option>
              {data?.items?.map((character) => (
                <option key={character.maxKi} value={character.maxKi}>
                  {character.name} - Max Ki: {character.maxKi}
                </option>
              ))}
            </select>
          )}
          
          {selectedKi && (
            <p>
              Has seleccionado el personaje con un nivel máximo de Ki de: <strong>{selectedKi}</strong>
            </p>
          )}
        
        {loading ? (
            <p>Loading...</p>
          ) : (
            <select id="pj2" onChange={handleChange2} value={selectedKi2}>
              <option value="">Selecciona un personaje</option>
              {data?.items?.map((character) => (
                <option key={character.maxKi} value={character.maxKi}>
                  {character.name} - Max Ki: {character.maxKi}
                </option>
              ))}
            </select>
          )}
          </div>
          
          {selectedKi2 && (
            <p>
              Has seleccionado el personaje con un nivel máximo de Ki de: <strong>{selectedKi2}</strong>
            </p>
            
          )}
          <button if="botonVS" onClick={handleClick}>Quien Gana</button>
          <span>{winnerText}</span>
      </div>
    </>
  );
}


export default App;
