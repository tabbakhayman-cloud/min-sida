import { useState, useEffect } from "react";
import { STADER } from "../data/stader"; // التأكد من مطابقة اسم الاستيراد مع ملف stader.js
import { grader } from "../utils/text";

const BAS_URL = "https://api.open-meteo.com/v1/forecast";

function CityWeather() {
  const [selectedCity, setSelectedCity] = useState(STADER[0].namn);
  const [weather, setWeather] = useState(null);
  const [laddar, setLaddar] = useState(true);

  useEffect(() => {
    async function hamtaValdStad() {
      setLaddar(true);
      const city = STADER.find((c) => c.namn === selectedCity);
      if (!city) return;

      try {
        const url = `${BAS_URL}?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,wind_speed_10m`;
        const svar = await fetch(url);
        const data = await svar.json();

        setWeather({
          temp: data.current.temperature_2m,
          vind: data.current.wind_speed_10m,
        });
      } catch (err) {
        console.error("Kunde inte hämta väder", err);
      } finally {
        setLaddar(false);
      }
    }

    hamtaValdStad();
  }, [selectedCity]);

  return (
    <div style={{ padding: "20px", background: "#f1f5f9", borderRadius: "8px", margin: "20px 0" }}>
      <h3>Välj stad för väder</h3>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} style={{ padding: "8px", marginBottom: "15px" }}>
        {STADER.map((city) => (
          <option key={city.namn} value={city.namn}>
            {city.namn}
          </option>
        ))}
      </select>

      {laddar ? (
        <p>Laddar väder för {selectedCity}...</p>
      ) : weather ? (
        <div>
          <p><strong>Stad:</strong> {selectedCity}</p>
          <p>🌡️ Temperatur: {grader(weather.temp)}</p>
          <p>💨 Vind: {weather.vind} m/s</p>
        </div>
      ) : (
        <p>Kunde inte ladda väder.</p>
      )}
    </div>
  );
}

export default CityWeather;