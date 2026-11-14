import { useState, useEffect } from "react";

export default function ProjektFranServer() {
  const [projekt, setProjekt] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/projekt")
      .then((response) => {
        if (!response.ok) throw new Error("Något gick fel");
        return response.json();
      })
      .then((json) => setProjekt(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <div>
      <h2>Projekt från servern</h2>
      <ul>
        {projekt.map((p) => (
          <li key={p.id}>
            {p.titel} ({p.teknik})
          </li>
        ))}
      </ul>
    </div>
  );
}