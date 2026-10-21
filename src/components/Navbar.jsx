import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Hem</Link>
      <Link to="/om-mig">Om mig</Link>
      <Link to="/kontakt">Kontakt</Link>
      <a href="/#projekt">Projekt</a>
    </nav>
  );
}

export default Navbar;