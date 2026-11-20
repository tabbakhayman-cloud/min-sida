import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import GitHubRepon from "../components/GitHubRepon";
import CityWeather from "../components/CityWeather"; // تعديل الحرف الكبير C و W
import Todo from "../components/Todo"; // تعديل الحرف الكبير T

function Hem() {
  return (
    <>
      <Hero namn="Ayman" />
      <Projekt />
      <GitHubRepon />
      <Todo />
      <CityWeather />
    </>
  );
}

export default Hem;