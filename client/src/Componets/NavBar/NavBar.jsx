import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Search from "../SearchBar/Search";
import {
  orderByDiets,
  orderCards,
  orderByHealthScore,
  filterBySource,
} from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import HomeIcon from "../../icons/HomeIcon";

const NavBar = () => {
  const dispatch = useDispatch();
  const goTo = useNavigate();

  const handleHomeClick = () => {
    // Redirigir a la ruta de Home
    goTo("/home");
  };

  const handleOrder = (event) => {
    const value = event.target.value;

    if (value === "A") {
      // Ordenar A-Z
      dispatch(orderCards("A")); // Suponiendo que "asc" es el valor que ordena alfabéticamente de forma ascendente
    } else if (value === "B") {
      // Ordenar Z-A
      dispatch(orderCards("B")); // Suponiendo que "desc" es el valor que ordena alfabéticamente de forma descendente
    } else if (value === "C") {
      // Ordenar por Health Score (ascendente)
      dispatch(orderByHealthScore("asc")); // Suponiendo que "asc" es el valor que ordena por healthScore de forma ascendente
    } else if (value === "D") {
      // Ordenar por Health Score (descendente)
      dispatch(orderByHealthScore("desc")); // Suponiendo que "desc" es el valor que ordena por healthScore de forma descendente
    }
  };

  const handleDiets = (event) => {
    const value = event.target.value;

    if (value === "E") {
      // Filtrar recetas de la API
      dispatch(filterBySource("api")); // Suponiendo que "api" es el valor que filtra recetas de la API
    } else if (value === "F") {
      // Filtrar recetas creadas
      dispatch(filterBySource("created")); // Suponiendo que "created" es el valor que filtra recetas creadas
    } else {
      // Filtrar por otras dietas seleccionadas
      dispatch(orderByDiets(value)); // Suponiendo que orderByDiets es la acción que filtra por dietas seleccionadas
    }
  };

  return (
    <div className="NavBar">
      <Link to={"/home"} onClick={handleHomeClick}>
        <HomeIcon />
      </Link>
      <select onChange={handleOrder}>
        <option value="A">A-Z</option>
        <option value="B">Z-A</option>
      </select>
      <select onChange={handleOrder}>
        <option value="C">Por Health Score (ascendente)</option>
        <option value="D">Por Health Score (descendente)</option>
      </select>
      <select onChange={handleDiets}>
        <option value="gluten free">gluten free</option>
        <option value="dairy free">dairy free</option>
        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        <option value="vegan">vegan</option>
        <option value="paleolithic">paleolithic</option>
        <option value="primal">primal</option>
        <option value="whole 30">whole 30</option>
        <option value="pescatarian">pescatarian</option>
        <option value="ketogenic">ketogenic</option>
        <option value="fodmao friendly">fodmao friendly</option>
      </select>
      <select onChange={handleDiets}>
        <option value="E">Recetas de la API</option>
        <option value="F">Recetas creadas</option>
      </select>
      <Search></Search>
      <Link to={"/create"}>Crear</Link>
      <Link to={"/"}>Salir</Link>
    </div>
  );
};
export default NavBar;
