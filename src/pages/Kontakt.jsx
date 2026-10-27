import { useState } from "react";
import "./Kontakt.css";

function Kontakt() {
  const [namn, setNamn] = useState("");
  const [epost, setEpost] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [fel, setFel] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setFel("");

    try {
      //"https://formspree.io/f/xyeewbop"
      const svar = await fetch("https://formspree.io/f/xyeewbop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ namn, email: epost, meddelande }),
      });

      if (svar.ok) {
        setSkickat(true);
        setNamn("");
        setEpost("");
        setMeddelande("");
      } else {
        setFel("Något gick fel. Försök igen senare.");
      }
    } catch (err) {
      setFel("Kunde inte ansluta till servern.");
    }
  }

  return (
    <div className="kontakt-sida">
      <h1>Kontakta mig</h1>
      
      {skickat ? (
        <p className="success-meddelande">Tack för ditt meddelande! Jag återkommer så snart som möjligt.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Namn:</label>
            <input
              type="text"
              value={namn}
              onChange={(e) => setNamn(e.target.value)}
              required
            />
          </div>

          <div>
            <label>E-post:</label>
            <input
              type="email"
              value={epost}
              onChange={(e) => setEpost(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Meddelande:</label>
            <textarea
              value={meddelande}
              onChange={(e) => setMeddelande(e.target.value)}
              required
            />
          </div>

          {fel && <p className="fel-meddelande">{fel}</p>}

          <button type="submit">Skicka meddelande</button>
        </form>
      )}
    </div>
  );
}

export default Kontakt;