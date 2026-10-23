import { useState } from 'react';

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
    <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', margin: '20px auto', maxWidth: '300px' }}>
      <h3>Räknare</h3>
      
      {/* Siffran ändrar färg: grön om > 0, annars röd */}
      <div style={{ fontSize: '32px', fontWeight: 'bold', color: antal > 0 ? 'green' : 'red', margin: '15px 0' }}>
        {antal}
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '15px' }}>
        <button onClick={minska} style={{ padding: '8px 16px', fontSize: '18px', cursor: 'pointer' }}>–</button>
        <button onClick={oka} style={{ padding: '8px 16px', fontSize: '18px', cursor: 'pointer' }}>+</button>
      </div>

      {/* Reset-knapp */}
      <button 
        onClick={() => setAntal(0)}
        style={{ padding: '6px 12px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Nollställ
      </button>
    </div>
  );
}

export default Raknare;