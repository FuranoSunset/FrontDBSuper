import { useState } from "react";
import { useFetch } from "./useFetch";

function App() {
  const { data, loading } = useFetch("https://dragonball-api.com/api/characters/");
  const [selectedCharacter, setSelectedCharacter] = useState("");

  const handleChange = (e) => {
    setSelectedCharacter(e.target.value);
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
      </div>
    </>
  );
}

export default App;
