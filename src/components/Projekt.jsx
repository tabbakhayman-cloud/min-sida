import './Projekt.css';
import ProjektKort from './Projektkort';
import bild1 from '../assets/Hero1.jpg';

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>
      <div className="projekt-grid">
        <ProjektKort 
          titel="Min portfoliosida" 
          text="Sidan du tittar på nu, byggd med React och Vite." 
          bild={bild1} 
        />
        <ProjektKort 
          titel="Projekt 2" 
          text="Kommer snart." 
          bild={bild1} 
        />
        <ProjektKort 
          titel="Projekt 3" 
          text="Kommer snart." 
          bild={bild1} 
        />
      </div>
    </section>
  );
}

export default Projekt;