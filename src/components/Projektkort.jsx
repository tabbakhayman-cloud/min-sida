import './Projektkort.css';

function Projektkort({ titel, text, beskrivning, bild, lank, teknik }) {
  return (
    <article className="projekt-kort">
      {bild && <img src={bild} alt={titel} className="projekt-bild" />}
      
      <h3>{titel}</h3>
      
      {/* يقرأ beskrivning أو text حتى لا يتأثر الكود القديم */}
      <p>{beskrivning || text}</p> 

      {/* Block 3: عرض شارة التقنية Badge إذا كانت موجودة */}
      {teknik && <span className="teknik-badge">{teknik}</span>}

      {lank && (
        <a href={lank} target="_blank" rel="noreferrer" className="projekt-knapp">
          Läs mer
        </a>
      )}
    </article>
  );
}

export default Projektkort;