import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import GitHubRepon from "../components/GitHubRepon";
import Vader from "../components/Vader"; // 1. استيراد المكون

function Hem() {
  return (
    <>
      <Header namn="Ayman" titel="Tech Trainee Talent" />
      <Hero namn="Ayman" />
      <Projekt />
      <GitHubRepon />
      <Vader /> {/* 2. عرضه في الصفحة */}
    </>
  );
}

export default Hem;