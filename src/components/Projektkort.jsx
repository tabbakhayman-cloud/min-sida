import './Projektkort.css';
import { Link } from "react-router-dom"; // 1. استيراد Link

function Projektkort({ id, titel, text, beskrivning, bild, lank, teknik }) {
  return (
    <article className="projekt-kort">
      {bild && <img src={bild} alt={titel} className="projekt-bild" />}
      
      <h3>{titel}</h3>
      
      <p>{beskrivning || text}</p> 

      {/* عرض التقنيات */}
      {teknik && Array.isArray(teknik) ? (
        <div className="teknik-lista">
          {teknik.map((t) => (
            <span key={t} className="teknik-badge">{t}</span>
          ))}
        </div>
      ) : (
        teknik && <span className="teknik-badge">{teknik}</span>
      )}

      {/* زر الانتقال لصفحة التفاصيل الداخلية */}
      {id && (
        <Link to={`/projekt/${id}`} className="projekt-knapp">
          Läs mer (Detaljer)
        </Link>
      )}

      {/* إذا كان هناك رابط خارجي تود الاحتفاظ به */}
      {lank && (
        <a href={lank} target="_blank" rel="noreferrer" className="projekt-knapp-extern" style={{ marginLeft: "8px" }}>
          GitHub / Demo
        </a>
      )}
    </article>
  );
}

export default Projektkort;