import { useState, useEffect } from "react";

const VADER_URL = "https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.69&current=temperature_2m,wind_speed_10m";

function Vader() {
  const [vaderData, setVaderData] = useState(null);
  const [laddار, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaDataSamtidigt() {
      try {
        // نستخدم Promise.all لإرسال الطلبات معاً في نفس الوقت
        const [vaderSvar] = await Promise.all([
          fetch(VADER_URL)
        ]);

        if (!vaderSvar.ok) {
          throw new Error("Kunde inte hämta data");
        }

        const vaderJson = await vaderSvar.json();
        setVaderData(vaderJson.current);
      } catch (err) {
        setFel("Något gick fel vid hämtningen.");
      } finally {
        setLaddar(false);
      }
    }

    hamtaDataSamtidigt();
  }, []);

  return (
    <section style={{ padding: "20px", margin: "20px 0", backgroundColor: "#f3f4f6", borderRadius: "8px" }}>
      <h2>Väder i Helsingborg</h2>

      {laddار && <p>Laddar...</p>}
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