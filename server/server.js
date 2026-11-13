import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

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

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});