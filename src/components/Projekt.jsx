import './Projekt.css';
import ProjektKort from './Projektkort';
import bild1 from '../assets/Hero1.jpg';
import bild2 from '../assets/Hero2.jpg';
import bild3 from '../assets/Hero3.jpg';

// 1. Skapa en array med projektdata och unika id-värden
const minaProjekt = [
  {
    id: 1,
    titel: "Min portfoliosida",
    text: "Sidan du tittar på nu, byggd med React och Vite.",
    bild: bild1
  },
  {
    id: 2,
    titel: "Kontaktformulär",
    text: "Formulär med useState, validering och tackmeddelande.",
    bild: bild2
  },
  {
    id: 3,
    titel: "Statisk sida",
    text: "Min första sida i ren HTML och CSS.",
    bild: bild3
  }
];

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>
      <div className="projekt-grid">
        {/* 2. Använd .map() för att automatiskt skapa projektkort med en unik key */}
        {minaProjekt.map((p) => (
          <ProjektKort 
            key={p.id} 
            titel={p.titel} 
            text={p.text} 
            bild={p.bild} 
          />
        ))}
      </div>
    </section>
  );
}

export default Projekt;