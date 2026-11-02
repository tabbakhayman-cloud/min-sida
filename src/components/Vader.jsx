import "./Vader.css";
import { useState, useEffect } from "react";

// 1. قائمة المدن المحددة وموقعها الجغرافي
const stader = [
  { namn: "Helsingborg", lat: 56.05, lon: 12.69 },
  { namn: "Stockholm", lat: 59.33, lon: 18.07 },
  { namn: "Kiruna", lat: 67.86, lon: 20.23 },
];

const BAS_URL = "https://api.open-meteo.com/v1/forecast";

// 2. دالة مساعدة لجلب طقس مدينة واحدة
async function hamtaStad(stad) {
  const url =
    BAS_URL +
    "?latitude=" +
    stad.lat +
    "&longitude=" +
    stad.lon +
    "&current=temperature_2m,wind_speed_10m";

  const svar = await fetch(url);

  if (!svar.ok) {
    throw new Error("Kunde inte hämta " + stad.namn);
  }

  const data = await svar.json();

  // تُرجع الأوبجكت المحسّن للمدينة
  return {
    namn: stad.namn,
    temp: data.current.temperature_2m,
    vind: data.current.wind_speed_10m,
  };
}

function Vader() {
  // 3. تحويل الـ state إلى قائمة فارغة لتبدأ بها
  const [vader, setVader] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaAllaStader() {
      try {
        // 4. استخدام Promise.all لجلب كافة المدن بالتوازي وفي نفس اللحظة!
        const resultat = await Promise.all(stader.map(hamtaStad));
        setVader(resultat);
      } catch (err) {
        setFel("Kunde inte hämta vädret för alla städer.");
      } finally {
        setLaddar(false);
      }
    }

    hamtaAllaStader();
  }, []);

  return (
    <section className="vader">
      <h2>Vädret i flera städer</h2>

      {laddar && <p>Laddar vädret...</p>}
      {fel && <p role="alert">{fel}</p>}

      {/* 5. عرض كارت مخصص لكل مدينة باستخدام map مع مفتاح unique (key) */}
      <div className="vader-grid">
        {vader.map((stad) => (
          <div key={stad.namn} className="vader-kort">
            <h3>{stad.namn}</h3>
            <p>🌡️ {stad.temp} °C</p>
            <p>💨 {stad.vind} m/s</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vader;