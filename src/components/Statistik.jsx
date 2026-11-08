import projektLista from "../data/projekt.json";

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
    <div className="statistik-box" style={{ padding: "20px", background: "#f8fafc", borderRadius: "8px", margin: "20px 0" }}>
      <h3>Det här har jag använt mest</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {sorteradStatistik.map(([teknik, count]) => {
          // حساب النسبة المئوية (مضروبة في 100 مع تقريب الرقم)
          const procent = Math.round((count / totalProjekt) * 100);

          return (
            <li key={teknik} style={{ padding: "8px 0", borderBottom: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span><strong>{teknik}</strong> ({count} projekt)</span>
                <span>{procent}%</span>
              </div>
              
              {/* شريط التقدم (CSS Progress Bar) */}
              <div style={{ width: "100%", background: "#e2e8f0", borderRadius: "4px", height: "8px", overflow: "hidden" }}>
                <div 
                  style={{ 
                    width: `${procent}%`, 
                    background: "#3b82f6", 
                    height: "100%", 
                    borderRadius: "4px",
                    transition: "width 0.3s ease"
                  }} 
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