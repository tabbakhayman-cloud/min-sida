import { useState } from "react";
import "./Kontakt.css";

function Kontakt() {
  const [namn, setNamn] = useState("");
  const [epost, setEpost] = useState("");
  const [meddelande, setMeddelande] = useState("");
  const [skickat, setSkickat] = useState(false);
  const [skickar, setSkickar] = useState(false); // حالة التحميل أثناء الإرسال
  const [fel, setFel] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // التحقق من الحقول
    if (namn.trim() === "" || epost.trim() === "" || meddelande.trim() === "") {
      setFel("Fyll i alla fält.");
      return;
    }

    if (!epost.includes("@")) {
      setFel("E-postadressen ser inte rätt ut.");
      return;
    }

    setFel("");
    setSkickar(true); // تعطل الزر وتظهر "Skickar..."

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
      setSkickar(false); // يتم تشغيلها دائماً لإعادة تعطيل حالة التحميل
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

          {fel && <p className="fel-meddelande">{fel}</p>}

          <button type="submit" disabled={skickar}>
            {skickar ? "Skickar..." : "Skicka meddelande"}
          </button>
        </form>
      )}
    </section>
  );
}

export default Kontakt;