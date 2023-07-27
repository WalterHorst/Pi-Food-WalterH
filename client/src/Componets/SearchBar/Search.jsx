import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setFoundRecipe } from "../../Redux/Actions";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/recipesname?name=${searchTerm}`
      );
      dispatch(setFoundRecipe(data)); // Actualizar el estado global con la receta encontrada
      setSearchTerm("");
    } catch (error) {
      alert("Error al buscar recetas:", error);
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="searchInput"
          type="text"
          placeholder="Buscar recetas por nombre"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="inputButton" onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Search;
