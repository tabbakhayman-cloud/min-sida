import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import GitHubRepon from "../components/GitHubRepon";
import Vader from "../components/Vader";
import CityWeather from "../components/CityWeather"; // تعديل الحرف الكبير C و W
import Todo from "../components/Todo"; // تعديل الحرف الكبير T

function Hem() {
  return (
    <>
      <Header namn="Ayman" titel="Tech Trainee Talent" />
      <Hero namn="Ayman" />
      <Projekt />
      <GitHubRepon />
      <CityWeather /> {/* تم تعديلها لتصبح بحرف كبير */}
      <Todo />        {/* تم تعديلها لتصبح بحرف كبير وتم إزالة TodoItem الزائد */}
      <Vader />
    </>
  );
}

export default Hem;