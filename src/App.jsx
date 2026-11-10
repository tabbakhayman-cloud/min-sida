import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";
import OmMig from "./pages/OmMig";
import ProjektSida from "./pages/ProjektSida";
import Kontakt from "./pages/Kontakt";
import EjHittad from "./pages/EjHittad";
import TodoList from "./components/Todo";
import ProjektDetalj from "./pages/ProjektDetalj"; // أو حسب مسار الملف الصحيح لديك

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<Hem />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/projekt" element={<ProjektSida />} />
        <Route path="*" element={<EjHittad />} />
        <Route path="/projekt/:id" element={<ProjektDetalj />} />
        
      </Routes>

      <Footer />
      <TodoList />
    </>
  );
}

export default App;