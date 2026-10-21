import './Footer.css';

function Footer() {
  const år = new Date().getFullYear();   // årtalet just nu, t.ex. 2026

  return (
    <footer className="footer" id="kontakt">
      <p>Kontakt: ayman.tabbakh@hotmail.com</p>

      <p>© {år} Ayman Tabbakh</p>
    </footer>
  );
}

export default Footer;