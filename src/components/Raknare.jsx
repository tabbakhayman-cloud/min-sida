import { useState } from 'react';
import "./Raknare.css";

function Raknare() {
  // 1. Skapa state för räknaren
  const [antal, setAntal] = useState(0);

  // 2. Funktion för att öka
  function oka() {
    setAntal(antal + 1);
  }

  // 3. Funktion för att minska (går inte under 0)
  function minska() {
    if (antal > 0) {
      setAntal(antal - 1);
    }
  }

  return (
    <div className="raknare">
      <h3>Räknare</h3>

      {/* Siffran ändrar färg: grön om > 0, annars röd */}
      <div className={antal > 0 ? "raknare-siffra positiv" : "raknare-siffra"}>
        {antal}
      </div>

      <div className="raknare-knappar">
        <button onClick={minska} aria-label="Minska">–</button>
        <button onClick={oka} aria-label="Öka">+</button>
      </div>

      {/* Reset-knapp */}
      <button className="raknare-nollstall" onClick={() => setAntal(0)}>
        Nollställ
      </button>
    </div>
  );
}

export default Raknare;