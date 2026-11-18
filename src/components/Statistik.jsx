import projektLista from "../data/projekt.json";
import "./Statistik.css";

function Statistik() {
  // 1. حساب عدد تكرار كل تقنية
  const antal = projektLista.reduce((summa, projekt) => {
    for (const teknik of projekt.teknik) {
      summa[teknik] = (summa[teknik] || 0) + 1;
    }
    return summa;
  }, {});

  // 2. تحويل الكائن إلى مصفوفة وترتيبها تنازلياً
  const sorteradStatistik = Object.entries(antal).sort((a, b) => b[1] - a[1]);

  // إجمالي عدد المشاريع لحساب النسبة المئوية
  const totalProjekt = projektLista.length;

  return (
    <div className="statistik-box">
      <h3>Det här har jag använt mest</h3>
      <ul className="statistik-lista">
        {sorteradStatistik.map(([teknik, count]) => {
          // حساب النسبة المئوية
          const procent = Math.round((count / totalProjekt) * 100);

          return (
            <li key={teknik} className="statistik-rad">
              <div className="statistik-text">
                <span><strong>{teknik}</strong> ({count} projekt)</span>
                <span>{procent}%</span>
              </div>

              {/* شريط التقدم */}
              <div className="statistik-bar">
                <div
                  className="statistik-fyllning"
                  style={{ width: `${procent}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Statistik;