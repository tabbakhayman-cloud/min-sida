import './Projektkort.css';

function Projektkort({ titel, text, bild, lank }) {
  return (
    <article className="projekt-kort">
      <img src={bild} alt={titel} className="projekt-bild" />
      <h3>{titel}</h3>
      <p>{text}</p>      {lank && (
        <a href={lank} target="_blank" rel="noreferrer" className="projekt-knapp">
          Läs mer
        </a>
      )}
    </article>
  );
}

export default Projektkort;