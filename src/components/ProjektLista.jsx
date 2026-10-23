import React from 'react';
import ProjektKort from './Projektkort';
import './ProjektLista.css';

// Block 1: مصفوفة البيانات مع id فريد لكل مشروع
const projekt = [
  { 
    id: 1, 
    titel: "Min portfolio", 
    beskrivning: "Sidan du tittar på just nu, byggd med React och Vite.", 
    teknik: "React" 
  },
  { 
    id: 2, 
    titel: "Statisk sida", 
    beskrivning: "Min första sida i ren HTML och CSS.", 
    teknik: "HTML/CSS" 
  },
  { 
    id: 3, 
    titel: "Räknare", 
    beskrivning: "Interaktiv räknare med useState och nollställningsknapp.", 
    teknik: "React" 
  }
];

function ProjektLista() {
  return (
    <section className="projekt-sektion">
      <h2>Mina projekt</h2>
      
      {/* Block 2: استخدام .map() لتوليد البطاقات مع key فريد */}
      <div className="projekt-grid">
        {projekt.map((p) => (
          <ProjektKort
            key={p.id}
            titel={p.titel}
            beskrivning={p.beskrivning}
            teknik={p.teknik}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjektLista;