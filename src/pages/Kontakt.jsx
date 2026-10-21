import { useState } from 'react';
import "./Kontakt.css";

function Kontakt() {
  // 1. Skapa state för formulärets fält
  const [namn, setNamn] = useState('');
  const [epost, setEpost] = useState('');
  const [meddelande, setMeddelande] = useState('');

  // State för bekräftelsemeddelande
  const [skickat, setSkickat] = useState(false);

  // 2. Hantera när formuläret skickas
  function handleSubmit(e) {
    e.preventDefault(); // Förhindrar att sidan laddas om

    // Logga värdena i konsolen (valfritt)
    console.log("Formulärdata:", { namn, epost, meddelande });

    // Visa bekräftelse och rensa fälten
    setSkickat(true);
    setNamn('');
    setEpost('');
    setMeddelande('');
  }

  return (
    <section className="kontakt">
      {/* Vänster kolumn: text */}
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p className="kontakt-text">Har du en fråga? Skriv ett meddelande!</p>
        <p><strong>E-post:</strong> ayman.tabbakh@hotmail.com</p>
      </div>

      {/* Höger kolumn: formuläret */}
      <form className="kontakt-form" onSubmit={handleSubmit}>
        {/* Visa bekräftelsemeddelande om formuläret har skickats */}
        {skickat && (
          <p style={{ color: '#2e7d32', fontWeight: 'bold', marginBottom: '15px' }}>
            Tack för ditt meddelande! Jag återkommer så snart som möjligt.
          </p>
        )}

        <label htmlFor="namn">Namn</label>
        <input 
          type="text" 
          id="namn" 
          name="namn" 
          placeholder="Ditt namn"
          value={namn}
          onChange={(e) => setNamn(e.target.value)}
          required
        />

        <label htmlFor="epost">E-post</label>
        <input 
          type="email" 
          id="epost" 
          name="epost" 
          placeholder="namn@exempel.se"
          value={epost}
          onChange={(e) => setEpost(e.target.value)}
          required
        />

        <label htmlFor="meddelande">Meddelande</label>
        <textarea 
          id="meddelande" 
          name="meddelande" 
          rows="5" 
          placeholder="Skriv ditt meddelande här..."
          value={meddelande}
          onChange={(e) => setMeddelande(e.target.value)}
          required
        />

        <button type="submit">Skicka</button>
      </form>
    </section>
  );
}

export default Kontakt;