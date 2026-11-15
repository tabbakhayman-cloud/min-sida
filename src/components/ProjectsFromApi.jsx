import { useState, useEffect } from "react";

const SERVER_URL = "http://localhost:3001/projekt";

export default function ProjectsFromApi() {
  const [projekt, setProjekt] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(SERVER_URL);
        if (!response.ok) {
          throw new Error("Servern svarade med " + response.status);
        }
        const data = await response.json();
        setProjekt(data);
      } catch {
        setError("Får inget svar från servern. Är den igång?");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  async function deleteProject(id) {
    if (!confirm("Vill du ta bort projektet?")) return;

    try {
      const response = await fetch(SERVER_URL + "/" + id, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Servern svarade med " + response.status);
      }
      setProjekt((prev) => prev.filter((p) => p.id !== id));
    } catch {
      setError("Kunde inte ta bort projektet. Är servern igång?");
    }
  }

  return (
    <section>
      <h2>Projekt från min server</h2>
      {loading && <p>Hämtar projekt...</p>}
      {error && <p role="alert">{error}</p>}
      <ul>
        {projekt.map((p) => (
          <li key={p.id}>
            {p.titel} ({p.teknik}){" "}
            <button className="delete-button" onClick={() => deleteProject(p.id)}>
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}