import { Link, useLocation } from "react-router-dom";

export const NavbarComponent = () => {
  const location = useLocation();

  return (
    <nav>
      <div>
        <Link to="/">
          Logo
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Personajes
        </Link>
        <Link
          to="/episodios"
          className={location.pathname === "/episodios" ? "active" : ""}
        >
          Episodios
        </Link>
        <Link
          to="/ubicacion"
          className={location.pathname === "/ubicacion" ? "active" : ""}
        >
          Ubicación
        </Link>
      </div>
      <div>
        ingresar
      </div>
    </nav>
  );
};