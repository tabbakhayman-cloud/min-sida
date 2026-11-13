import "./Projekt.css";
import { useState } from "react";
import ProjektKort from "./Projektkort";

// استيراد بيانات المشاريع من ملف JSON
import projektLista from "../data/projekt.json";

// استيراد الصور
import bild1 from "../assets/Hero1.jpg";
import bild2 from "../assets/Hero2.jpg";
import bild3 from "../assets/Hero3.jpg";

// ربط أسماء الصور في الـ JSON بالمتغيرات المستوردة
const bilder = {
  "Hero1.jpg": bild1,
  "Hero2.jpg": bild2,
  "Hero3.jpg": bild3,
};

// إنشاء قائمة الأزرار ديناميكياً باستخدام حلقات for...of
const filterLista = ["Alla"];

for (const projekt of projektLista) {
  for (const teknik of projekt.teknik) {
    if (!filterLista.includes(teknik)) {
      filterLista.push(teknik);
    }
  }
}

function Projekt() {
  const [vald, setVald] = useState("Alla");
  const [sok, setSok] = useState("");
  const [sortering, setSortering] = useState("standard");

  // الفلترة حسب التقنية ونص البحث
  const synligaProjekt = projektLista.filter((p) => {
    const rattTeknik = vald === "Alla" || p.teknik.includes(vald);
    const rattSok = p.titel.toLowerCase().includes(sok.toLowerCase());
    return rattTeknik && rattSok;
  });

  // نأخذ نسخة من القائمة المفلترة ونرتبها
  const sorteradeProjekt = [...synligaProjekt];

  if (sortering === "titel") {
    sorteradeProjekt.sort((a, b) => a.titel.localeCompare(b.titel, "sv"));
  } else if (sortering === "teknik") {
    sorteradeProjekt.sort((a, b) => b.teknik.length - a.teknik.length);
  }

  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      {/* أزرار الفلترة الديناميكية */}
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

      {/* خانة البحث */}
      <label className="projekt-sok">
        Sök projekt
        <input
          type="search"
          value={sok}
          onChange={(e) => setSok(e.target.value)}
          placeholder="t.ex. räknare"
        />
      </label>

      {/* قائمة الترتيب */}
      <div className="projekt-sortering" style={{ margin: "15px 0" }}>
        <label>
          Sortera efter:{" "}
          <select value={sortering} onChange={(e) => setSortering(e.target.value)}>
            <option value="standard">Standard</option>
            <option value="titel">Titel (A-Ö)</option>
            <option value="teknik">Flest tekniker först</option>
          </select>
        </label>
      </div>

      <p className="projekt-antal">
        Visar {sorteradeProjekt.length} av {projektLista.length} projekt
      </p>

      {/* عرض قائمة المشاريع المرتبة والمفلترة */}
      {sorteradeProjekt.length === 0 ? (
        <p className="projekt-tom">Inga projekt matchar. Prova ett annat filter.</p>
      ) : (
        <div className="projekt-lista">
          {sorteradeProjekt.map((p) => (
            <ProjektKort
              key={p.id}
              id={p.id}
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