import { useParams, Link } from "react-router-dom";
import projektLista from "../data/projekt.json";

function ProjektDetalj() {
  const { id } = useParams();
  const projekt = projektLista.find((p) => p.id === Number(id));

  if (!projekt) {
    return <p>Projektet finns inte. <Link to="/">Till startsidan</Link></p>;
  }

  const { titel, text, teknik } = projekt;

  return (
    <section className="projekt-detalj">
      <h2>{titel}</h2>
      <p>{text}</p>
      <ul>
        {teknik.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </section>
  );
}

export default ProjektDetalj;