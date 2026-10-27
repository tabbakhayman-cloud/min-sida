import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // false = menyn är stängd (gäller bara på mobil)
  const [oppen, setOppen] = useState(false);

// Stäng menyn när man har valt en sida
  function stang() {
    setOppen(false);
  }

  return (
    <nav className="navbar">
      <div className="logo">Min Portfolio</div>

      {/* زر الهامبرجر للموبايل */}
      <button
        className="meny-knapp"
        onClick={() => setOppen(!oppen)}
        aria-expanded={oppen}
        aria-controls="huvudmeny"
        aria-label="Meny"
      >
        {oppen ? "✕" : "☰"}
      </button>

      {/* روابط التنقل باستخدام NavLink وإغلاق القائمة عند النقر */}
      <div id="huvudmeny" className={oppen ? "lankar oppen" : "lankar"}>
        <NavLink to="/" end onClick={stang}>Hem</NavLink>
        <NavLink to="/om-mig" onClick={stang}>Om mig</NavLink>
        <NavLink to="/projekt" onClick={stang}>Projekt</NavLink>
        <NavLink to="/kontakt" onClick={stang}>Kontakt</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;