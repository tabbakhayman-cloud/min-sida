import "./Projekt.css";
import { useState } from "react";
import ProjektKort from "./ProjektKort";

// استيراد بيانات المشاريع من ملف JSON
import projektLista from "../data/projekt.json";

// استيراد الصور
import bild1 from "../assets/Hero1.jpg";
import bild2 from "../assets/Hero2.jpg";
import bild3 from "../assets/Hero3.jpg";

// ربط أسماء الصور في الJSON بالمتغيرات المستوردة
const bilder = {
  "Hero1.jpg": bild1,
  "Hero2.jpg": bild2,
  "Hero3.jpg": bild3,
};

// قائمة الأزرار الخاصة بالفلترة
// Knapparna ovanför korten – "Alla" visar allt
const filterLista = ["Alla", "React", "CSS", "HTML", "useState", "Git"];

function Projekt() {
  // Vilken filterknapp är vald, och vad står i sökrutan?
  const [vald, setVald] = useState("Alla");
  const [sok, setSok] = useState("");

  // .filter() går igenom listan och behåller bara de projekt där vi svarar true.
  // Den nya listan räknas ut på nytt varje gång state ändras – den behöver inget eget state.
  const synligaProjekt = projektLista.filter((p) => {
    const rattTeknik = vald === "Alla" || p.teknik.includes(vald);
    const rattSok = p.titel.toLowerCase().includes(sok.toLowerCase());
    return rattTeknik && rattSok; // båda måste stämma
  });

  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-filter">
        {filterLista.map((f) => (
          <button
            key={f}
            className={f === vald ? "filter-knapp aktiv" : "filter-knapp"}
            onClick={() => setVald(f)}
            aria-pressed={f === vald}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Samma kontrollerade input som i kontaktformuläret */}
      <label className="projekt-sok">
        Sök projekt
        <input
          type="search"
          value={sok}
          onChange={(e) => setSok(e.target.value)}
          placeholder="t.ex. räknare"
        />
      </label>

      <p className="projekt-antal">
        Visar {synligaProjekt.length} av {projektLista.length} projekt
      </p>

      {/* Tom lista? Visa ett meddelande istället för ingenting */}
      {synligaProjekt.length === 0 ? (
        <p className="projekt-tom">Inga projekt matchar. Prova ett annat filter.</p>
      ) : (
        <div className="projekt-lista">
          {/* .map() går igenom listan och gör ett ProjektKort för varje projekt p.
              Läs det som: "för varje projekt p – gör ett kort med p:s titel, text..."
              Vanliga parenteser ( ) efter => returnerar JSX:en automatiskt.
              Med måsvingar { } måste man skriva return – annars syns inga kort! */}
          {synligaProjekt.map((p) => (
            <ProjektKort
              // key = Reacts "namnbricka" så den kan hålla isär korten.
              // Den ska vara unik och sitta på det yttersta elementet i map:en.
              key={p.id}
              titel={p.titel}
              text={p.text}
              bild={bilder[p.bild]}
              lank={p.lank}
              teknik={p.teknik}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projekt;