import './Hero.css';
import heroBild from '../assets/Hero1.jpg';
import { Link } from "react-router-dom";
<Link className="hero-knapp" to="/projekt">Se mina projekt</Link>

function Hero({ namn }) {
  return (
    <section className="hero" aria-labelledby="hero-rubrik">
      <div className="hero-innehall">
        <p className="hero-etikett">Min portfolio</p>
        <h1 id="hero-rubrik">Hej, jag heter {namn}.</h1>
        <p className="hero-text">
          Välkommen till min portfoliosida. Här kan du se några av mina projekt
          och vad jag arbetar med.
        </p>
        <a className="hero-knapp" href="#projekt">Se mina projekt</a>
      </div>
      <img className="hero-image" src={heroBild} alt="En inspirerande bild för portfoliosidan" />
    </section>
  );
}

export default Hero;