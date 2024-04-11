//develop
import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./Components/Menu/Menu";
import Home from "./paginas/Home/Home";
import { Footer } from "./Components/Footer/footer";
import About from "./paginas/About/About";
import SingIn from "./paginas/SingIn/singin";
import Tratamiento from "./paginas/Tratamientos/tratamientos";
import { Programa } from "./paginas/Programas/Programas";
import SingUp from "./paginas/SingUp/singup";

function App() {

  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programa" element={<Programa />} />
        <Route path="/tratamientos" element={<Tratamiento />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/singin" element={<SingIn />} />        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
