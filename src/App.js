//develop
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./Components/Menu/Menu";
import Registro from "./paginas/registro/registro";
import Home from "./paginas/Home/Home";
import { Footer } from "./Components/footer/footer";
import About from "./paginas/About/About";
import Singin from "./paginas/singin/singin";
import Tratamiento from "./paginas/Tratamientos/tratamientos";
import { Programa } from "./paginas/Programas/programas";

function App() {


  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programa" element={<Programa />} />
        <Route path="/tratamientos" element={<Tratamiento />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/singin" element={<Singin />} />        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
