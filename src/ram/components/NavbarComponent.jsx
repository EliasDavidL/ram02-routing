import { NavLink, Link } from "react-router-dom";

export const NavbarComponent = () => {
  return (
    <nav>
      <div>
        <Link to="/">Logo</Link>
        <div>
          <div>
            <NavLink to="/">
              Personajes
            </NavLink>
            <NavLink to="/episodios">
              Episodios
            </NavLink>
            <NavLink to="/ubicacion">
              Ubicación
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        ingresar
      </div>
    </nav>
  )
}
