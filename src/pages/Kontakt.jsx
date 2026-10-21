import "./Kontakt.css";

function Kontakt() {
  return (
    <section className="kontakt">
      {/* Vänster kolumn: text */}
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p className="kontakt-text">Har du en fråga? Skriv ett meddelande!</p>
      </div>
      
<div className="kontakt-info">
  <h2>Kontakta mig</h2>
  <p className="kontakt-text">Har du en fråga? Skriv ett meddelande!</p>
  <p><strong>E-post:</strong> ayman.tabbakh@hotmail.com</p>
</div>

      {/* Höger kolumn: formuläret */}
      <form className="kontakt-form">
        <label htmlFor="namn">Namn</label>
        <input type="text" id="namn" name="namn" placeholder="Ditt namn" />

        <label htmlFor="epost">E-post</label>
        <input type="email" id="epost" name="epost" placeholder="namn@exempel.se" />

        <label htmlFor="meddelande">Meddelande</label>
        <textarea id="meddelande" name="meddelande" rows="5" placeholder="Skriv ditt meddelande här..." />

        <button type="submit">Skicka</button>
      </form>
    </section>
  );
}

export default Kontakt;