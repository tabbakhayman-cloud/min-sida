import "./Footer.css";
import { copyright } from "../utils/text";
import { NAMN, EPOST } from "../data/installningar"; // استيراد الاسم والإيميل من ملف الإعدادات

function Footer() {
  const år = new Date().getFullYear();   // årtalet just nu, t.ex. 2026

  return (
    <footer style={{ textAlign: "center", padding: "20px", background: "#1e293b", color: "#fff" }}>
      <p>Kontakt: <a href={`mailto:${EPOST}`} style={{ color: "#93c5fd" }}>{EPOST}</a></p>
      <p>{copyright(NAMN)}</p>
      <p>© {år} {NAMN}</p>
    </footer>
  );
}

export default Footer;