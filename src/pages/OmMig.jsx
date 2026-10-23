import { useState } from 'react';
import "./OmMig.css";
import minBild from "../assets/Bild.jpg";
import Raknare from '../components/Raknare'; // 1. importera komponenten Raknare

function OmMig() {
  // State för att styra om den extra texten visas eller inte
  const [visas, setVisas] = useState(false);

  return (
    <section className="om-mig" id="om-mig">
      <img
        className="om-mig-bild"
        src={minBild}
        alt="Porträtt av Ayman"
      />

      <div className="om-mig-innehall">
        <h2>Om mig</h2>
        <p className="om-mig-text">
          Jag heter Ayman och går på Tech Trainee Talent, där jag lär mig att bygga för
          webben. Den här sidan är mitt första projekt i React.
        </p>

        {/* Toggle-knapp */}
        <button 
          onClick={() => setVisas(!visas)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#7e2b60',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '15px'
          }}
        >
          {visas ? "Visa mindre" : "Läs mer om mig"}
        </button>

        {/* Text och lista som visas/döljs baserat på visas-state */}
        {visas && (
          <div>
            <p>
              Här lär jag mig att bygga sidor med komponenter och att spara min kod
              på GitHub.
            </p>

            <h3>Det här lär jag mig i kursen</h3>
            <ul className="om-mig-lista">
              <li>React</li>
              <li>JavaScript</li>
              <li>REST API</li>
            </ul>
          </div>
        )}

        {/* 2. Visa räknaren */}
        <Raknare />

      </div>
    </section>
  );
}

export default OmMig;