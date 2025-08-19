import { useState } from "react";
import { useFetch } from "./useFetch";
import { parsearKi } from "./parsearKi.js";


function App() {
  const { data, loading } = useFetch("https://dragonball-api.com/api/characters/");
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [selectedCharacter2, setSelectedCharacter2] = useState("");


  const handleChange = (e) => {
    setSelectedCharacter(parsearKi(e.target.value));
  };

  const handleChange2 = (e) => {
    setSelectedCharacter2(parsearKi(e.target.value));
  };


  return (
    <>
      <div>
        <h1>Consumiendo APIs</h1>
        <div className="card">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <select id="pj1" onChange={handleChange} value={selectedCharacter}>
              <option value="">Selecciona un personaje</option>
              {data?.items?.map((character) => (
                <option key={character.maxKi} value={character.maxKi}>
                  {character.name} - Max Ki: {character.maxKi}
                </option>
              ))}
            </select>
          )}
          
          {selectedCharacter && (
            <p>
              Has seleccionado el personaje con un nivel máximo de Ki de: <strong>{selectedCharacter}</strong>
            </p>
          )}
        </div>
        {loading ? (
            <p>Loading...</p>
          ) : (
            <select id="pj2" onChange={handleChange2} value={selectedCharacter2}>
              <option value="">Selecciona un personaje</option>
              {data?.items?.map((character) => (
                <option key={character.maxKi} value={character.maxKi}>
                  {character.name} - Max Ki: {character.maxKi}
                </option>
              ))}
            </select>
          )}
          
          {selectedCharacter2 && (
            <p>
              Has seleccionado el personaje con un nivel máximo de Ki de: <strong>{selectedCharacter2}</strong>
            </p>
          )}
      </div>
    </>
  );
}


export default App;
