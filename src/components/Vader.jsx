import { useState, useEffect } from "react";

// رابط API لطقس هلسنبوري
const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.69&current=temperature_2m,wind_speed_10m";

function Vader() {
  const [vaderData, setVaderData] = useState(null);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaVader() {
      try {
        const svar = await fetch(API_URL);
        if (!svar.ok) {
          throw new Error("Feil vid hämtning");
        }
        const data = await svar.json();
        setVaderData(data.current);
      } catch (err) {
        setFel("Kunde inte hämta vädret just nu.");
      } finally {
        setLaddar(false);
      }
    }
    hamtaVader();
  }, []);

  return (
    <section style={{ padding: "20px", margin: "20px 0", backgroundColor: "#f3f4f6", borderRadius: "8px" }}>
      <h2>Väder i Helsingborg</h2>

      {laddar && <p>Laddar väder...</p>}
      {fel && <p style={{ color: "red" }}>{fel}</p>}

      {vaderData && (
        <div style={{ fontSize: "18px", marginTop: "10px" }}>
          <p>🌡️ Temperatur: <strong>{vaderData.temperature_2m} °C</strong></p>
          <p>💨 Vindhastighet: <strong>{vaderData.wind_speed_10m} m/s</strong></p>
        </div>
      )}
    </section>
  );
}

export default Vader;