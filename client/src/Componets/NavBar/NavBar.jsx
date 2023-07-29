import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Search from "../SearchBar/Search";

const NavBar = () => {
  const goTo = useNavigate();

  const handleHomeClick = () => {
    // Redirigir a la ruta de Home
    goTo("/home");
    // Recargar la página actual
    window.location.reload();
  };

  return (
    <div className="NavBar">
      <Link to={"/home"} onClick={handleHomeClick}>
        Home
      </Link>
      <Search></Search>
      <Link to={"/create"}>Crear</Link>
      <Link to={"/"}>Salir</Link>
    </div>
  );
};
export default NavBar;
