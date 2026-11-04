import "./Vader.css";
import { useState, useEffect } from "react";
import { STADER } from "../data/stader";
import { grader } from "../utils/text";

const BAS_URL = "https://api.open-meteo.com/v1/forecast";

// جدول رموز حالة الجو (تعديل 2)
const vaderKoder = {
  0: { text: "Klart", ikon: "☀️" },
  1: { text: "Mestadels klart", ikon: "🌤️" },
  2: { text: "Delvis molnigt", ikon: "⛅" },
  3: { text: "Mulet", ikon: "☁️" },
  45: { text: "Dimma", ikon: "🌫️" },
  48: { text: "Dimma", ikon: "🌫️" },
  51: { text: "Lätt duggregn", ikon: "🌦️" },
  53: { text: "Duggregn", ikon: "🌦️" },
  55: { text: "Kraftigt duggregn", ikon: "🌦️" },
  61: { text: "Lätt regn", ikon: "🌧️" },
  63: { text: "Regn", ikon: "🌧️" },
  65: { text: "Kraftigt regn", ikon: "🌧️" },
  71: { text: "Lätt snöfall", ikon: "🌨️" },
  73: { text: "Snöfall", ikon: "🌨️" },
  75: { text: "Kraftigt snöfall", ikon: "❄️" },
  80: { text: "Regnskurar", ikon: "🌦️" },
  81: { text: "Regnskurar", ikon: "🌦️" },
  82: { text: "Kraftiga skurar", ikon: "🌧️" },
  95: { text: "Åska", ikon: "⛈️" },
};

function hamtaVaderInfo(kod) {
  return vaderKoder[kod] || { text: "Okänt", ikon: "❓" };
}

// 3. دالة جلب طقس مدينة واحدة
async function hamtaStad(stad) {
  const url =
    BAS_URL +
    "?latitude=" +
    stad.lat +
    "&longitude=" +
    stad.lon +
    "&current=temperature_2m,wind_speed_10m,weather_code&wind_speed_unit=ms"; // تعديل 1

  const svar = await fetch(url);

  if (!svar.ok) {
    throw new Error("Kunde inte hämta " + stad.namn);
  }

  const data = await svar.json();

  return {
    namn: stad.namn,
    temp: data.current.temperature_2m,
    vind: data.current.wind_speed_10m,
    kod: data.current.weather_code, // تعديل 2
  };
}

function Vader() {
  const [vader, setVader] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaAllaStader() {
      try {
        const resultat = await Promise.all(STADER.map(hamtaStad));
        setVader(resultat);
      } catch {
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

      <div className="vader-grid">
        {vader.map((stad) => {
          const info = hamtaVaderInfo(stad.kod); // تعديل 4
          return (
            <div key={stad.namn} className="vader-kort">
              <h3>{stad.namn}</h3>
              <p>
                {info.ikon} {info.text}
              </p>
              <p>🌡️ {grader(stad.temp)}</p>
              <p>💨 {stad.vind} m/s</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Vader;