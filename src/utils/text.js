// Gör om "2026-11-02T09:15:00Z" till "2 nov. 2026"
export const snyggtDatum = (datum) =>
  new Date(datum).toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

// Klipper en lång text och lägger till tre punkter
export const kortText = (text, max) => {
  if (text.length <= max) {
    return text;
  }
  return `${text.slice(0, max)}...`;
};

// 3. صيغة درجة الحرارة
export const grader = (temp) => `${temp} °C`;

// 4. حقوق الملكية للحقوق
export const copyright = (namn) => `© 2026 ${namn}`;

// 5. عدد المشاريع المعروضة
export const antalProjekt = (antal, totalt) => `Visar ${antal} av ${totalt} projekt`;

// 6. استخراج الاسم الأول (مثلاً "Ayman" من "Ayman Tabbakh")
export const fornamn = (namn) => namn.split(" ")[0];

// 7. استخراج الأحرف الأولى (مثلاً "AT" من "Ayman Tabbakh")
export const initialer = (namn) =>
  namn
    .split(" ")
    .map((word) => word[0])
    .join("");

    export const halsning = () => {
  const timme = new Date().getHours();
  // (للاختبار المؤقت، يمكنك تجربة كتابة const timme = 21 أو timme = 3)

  if (timme >= 0 && timme < 5) {
    return "God natt";
  } else if (timme < 10) {
    return "God morgon";
  } else if (timme < 18) {
    return "Hej";
  } else {
    return "God kväll";
  }
};