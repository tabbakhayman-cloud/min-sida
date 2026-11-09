import { useState } from "react";
import "./Kontakt.css";

function Kontakt() {
  const [namn, setNamn] = useState("");
  const [epost, setEpost] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [skickar, setSkickar] = useState(false);
  const [fel, setFel] = useState("");

  const MAX_TECKEN = 500;
  const kvar = MAX_TECKEN - meddelande.length;
  const fardigt = meddelande.trim() !== "" && kvar >= 0;
  
  async function handleSubmit(e) {
    e.preventDefault();

    if (namn.trim() === "" || epost.trim() === "" || meddelande.trim() === "") {
      setFel("Fyll i alla fält.");
      return;
    }

    if (!epost.includes("@")) {
      setFel("E-postadressen ser inte rätt ut.");
      return;
    }

    setFel("");
    setSkickar(true);

    try {
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
        setFel("Något gick fel. Försök igen om en stund.");
      }
    } catch (err) {
      setFel("Kunde inte skicka. Kolla din internetanslutning.");
    } finally {
      setSkickar(false);
    }
  }

  return (
    <section className="kontakt">
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p className="kontakt-text">
          Har du en fråga eller vill du samarbeta? Fyll i formuläret så
          återkommer jag så snart som möjligt.
        </p>
      </div>

      {skickat ? (
        <p className="success-meddelande">
         ✓ Tack för ditt meddelande! Jag återkommer så snart som möjligt.
         </p>
      ) : (
        <form className="kontakt-form" onSubmit={handleSubmit}>
          <label htmlFor="namn">Namn</label>
          <input
            id="namn"
            type="text"
            value={namn}
            onChange={(e) => setNamn(e.target.value)}
            required
          />

          <label htmlFor="epost">E-post</label>
          <input
            id="epost"
            type="email"
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
            required
          />

          <label htmlFor="meddelande">Meddelande</label>
          <textarea
            id="meddelande"
            rows="5"
            value={meddelande}
            onChange={(e) => setMeddelande(e.target.value)}
            required
          />

          {/* عداد الحروف المتبقية مع تغيير اللون إذا قلّت عن 50 */}
          <p className={kvar < 50 ? "varning röd-text" : "tecken-info"} style={{ color: kvar < 50 ? "red" : "inherit" }}>
            {kvar} tecken kvar
          </p>

          {fel && <p className="fel-meddelande">{fel}</p>}

          {/* زر الإرسال معطل إذا لم تقم بملء الرسالة صحيحة أو أثناء الإرسال */}
          <button type="submit" disabled={!fardigt || skickar}>
            {skickar ? "Skickar..." : "Skicka meddelande"}
          </button>
        </form>
      )}
    </section>
  );
}

export default Kontakt;