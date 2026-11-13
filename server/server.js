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

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});