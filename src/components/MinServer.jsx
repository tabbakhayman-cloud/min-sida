import { useState, useEffect } from "react";

export default function MinServer() {
  const [data, setData] = useState(null);
  const [slump, setSlump] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/hej")
      .then((response) => {
        if (!response.ok) throw new Error("Något gick fel");
        return response.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/slump")
      .then((response) => response.json())
      .then((json) => setSlump(json.slump))
      .catch(() => {});
  }, []);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <div>
      <h2>{data.meddelande}</h2>
      <p>{data.namn}</p>
      <p>{data.roll}</p>
      <ul>
        {data.intressen.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p>Slumptal: {slump}</p>
    </div>
  );
}