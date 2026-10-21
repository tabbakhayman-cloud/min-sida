import "./OmMig.css";
import minBild from "../assets/Bild.jpg";

function OmMig() {
  return (
    <section className="om-mig" id="om-mig">
      <img
        className="om-mig-bild"
        src={minBild}
        alt="Porträtt av Ayman"
      />

      <div className="om-mig-innehall">
        <h2>Om mig</h2>
        <p className="om-mig-text">
          Jag heter Ayman och går på Tech Trainee Talent, där jag lär mig att bygga för
          webben. Den här sidan är mitt första projekt i React.
        </p>
        <p>
          Här lär jag mig att bygga sidor med komponenter och att spara min kod
          på GitHub.
        </p>

        <h3>Det här lär jag mig i kursen</h3>
        <ul className="om-mig-lista">
          <li>React</li>
          <li>JavaScript</li>
          <li>REST API</li>
        </ul>
      </div>
    </section>
  );
}

export default OmMig;