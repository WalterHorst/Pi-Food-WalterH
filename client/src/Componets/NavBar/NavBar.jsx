import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Search from "../SearchBar/Search";
import { orderByDiets, orderCards } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const goTo = useNavigate();

  const handleHomeClick = () => {
    // Redirigir a la ruta de Home
    goTo("/home");
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleDiets = (event) => {
    dispatch(orderByDiets(event.target.value));
  };

  return (
    <div className="NavBar">
      <Link to={"/home"} onClick={handleHomeClick}>
        Home
      </Link>
      <select onChange={handleOrder}>
        <option value="A">A-Z</option>
        <option value="B">Z-A</option>
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
      <Search></Search>
      <Link to={"/create"}>Crear</Link>
      <Link to={"/"}>Salir</Link>
    </div>
  );
};
export default NavBar;
