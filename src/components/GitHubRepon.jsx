import "./GitHubRepon.css";
import { useState, useEffect } from "react";
import { snyggtDatum, kortText } from "../utils/text";
import { GITHUB_ANVANDARE } from "../data/installningar";

function GitHubRepon() {
  const [repon, setRepon] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  useEffect(() => {
    async function hamtaData() {
      try {
        const urlRepon = `https://api.github.com/users/${GITHUB_ANVANDARE}/repos?sort=updated&per_page=6`;
        const svar = await fetch(urlRepon);
        if (!svar.ok) throw new Error("Kunde inte hämta repon");
        const data = await svar.json();
        setRepon(data);
      } catch {
        setFel("Kunde inte hämta GitHub-information.");
      } finally {
        setLaddar(false);
      }
    }

    hamtaData();
  }, []);

  return (
    <section className="github">
      <h2>Senast på GitHub</h2>

      {laddar && <p>Laddar...</p>}
      {fel && <p className="github-fel" role="alert">{fel}</p>}

      <ul className="github-lista">
        {repon.map((repo) => (
          <li key={repo.id} className="github-kort">
            <h3><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h3>
            <p>{kortText(repo.description ?? "Ingen beskrivning än.", 100)}</p>
            {repo.language && <span className="github-sprak">{repo.language}</span>}
            <p className="github-datum">Uppdaterad {snyggtDatum(repo.updated_at)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GitHubRepon;