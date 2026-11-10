import './Hero.css';
import heroBild from '../assets/Hero1.jpg';
import { Link } from "react-router-dom";
import { halsning } from '../utils/text';

function Hero({ namn }) {
  return (
    <section className="hero" aria-labelledby="hero-rubrik">
      <div className="hero-innehall">
        <p className="hero-etikett">Min portfolio</p>
        
        {/* العنوان الرئيسي أصبح ديناميكياً يتغير حسب الوقت (God morgon / Hej / God kväll) */}
        <h1 id="hero-rubrik">{halsning()}, jag heter {namn}.</h1>
        
        <p className="hero-text">
          Välkommen till min portfoliosida. Här kan du se några av mina projekt
          och vad jag arbetar med.
        </p>

        {/* زر الانتقال تم وضعه في مكانه الصحيح داخل الـ return */}
        <Link className="hero-knapp" to="/projekt">Se mina projekt</Link>
      </div>

      <img className="hero-image" src={heroBild} alt="En inspirerande bild för portfoliosidan" />
    </section>
  );
}

export default Hero;