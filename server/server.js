import express from "express";
import cors from "cors";
import { projekt } from "./projekt.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(new Date().toLocaleTimeString("sv-SE"), req.method, req.url);
  next();
});

app.get("/hej", (req, res) => {
  res.json({
    meddelande: "Hej från min egen server!",
    namn: "Ayman",
    roll: "Frontendutvecklare under utbildning",
    intressen: ["React", "CSS", "JavaScript"],
  });
});

app.get("/tid", (req, res) => {
  res.json({ tid: new Date().toLocaleTimeString("sv-SE") });
});

app.get("/slump", (req, res) => {
  const tal = Math.floor(Math.random() * 100) + 1;
  res.json({ slump: tal });
});

app.get("/rakna/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.json({ summa: a + b });
});

app.get("/projekt", (req, res) => {
  res.json(projekt);
});

app.get("/projekt/:id", (req, res) => {
  const id = Number(req.params.id);
  const hittat = projekt.find((p) => p.id === id);

  if (!hittat) {
    return res.status(404).json({ fel: "Projektet finns inte" });
  }

  res.json(hittat);
});

app.get("/projekt/teknik/:namn", (req, res) => {
  const namn = req.params.namn.toLowerCase();
  const resultat = projekt.filter(
    (p) => p.teknik.toLowerCase() === namn
  );
  res.json(resultat);
});

app.get("/statistik", (req, res) => {
  res.json({ antal: projekt.length });
});

app.delete("/projekt/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = projekt.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ fel: "Projektet finns inte" });
  }

  projekt.splice(index, 1);
  res.status(204).end();
});

const meddelanden = [];

app.post("/kontakt", (req, res) => {
  const { namn, email, text } = req.body;

  if (!namn || !text || text.trim() === "") {
  return res.status(400).json({ fel: "Namn och meddelande måste fyllas i" });
}

  meddelanden.push({ namn, email, text });
  console.log(`${namn} skrev: ${text}`);

  res.status(201).json({ meddelande: "Tack!" });
});

app.get("/kontakt", (req, res) => {
  res.json(meddelanden);
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});