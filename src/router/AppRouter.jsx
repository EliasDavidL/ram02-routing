/* Librerías */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Importaciones de páginas y componente Navbar */
import { EpisodesPage, HomePage, LocationPage, NavbarComponent } from "../ram";
import NotFoundPage from "../ram/pages/NotFoundPage";
import Registrar from "../auth/Registrar";
import Iniciar from "../auth/Iniciar";


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
      </div>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/episodios" element={ <EpisodesPage /> } />
        <Route path="/ubicacion" element={ <LocationPage /> } />
        <Route path="/Registrarse" element={ <Registrar/>} />
        <Route path="/Iniciar" element={ <Iniciar/> } />
        <Route path="/*" element={ <NotFoundPage /> } />
      </Routes>
    </Router>
  )
}
