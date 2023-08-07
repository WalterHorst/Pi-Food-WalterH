import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, setPage, getDiets } from "../../Redux/Actions";
import CardsContainer from "../../Componets/Cards/CardsContainer";
import Loader from "../../Componets/Loader/Loader";
import "./Home.css";

const Home = () => {
  const diets = useSelector((state) => state.diets);
  const recipes = useSelector((state) => state.recipes);
  const currentPage = useSelector((state) => state.currentPage);
  const recipesPerPage = 20; // Número de recetas por página
  const dispatch = useDispatch();

  useEffect(() => {
    if (!recipes.length) {
      dispatch(getRecipes());
    }
    if (!diets.length) {
      // Si no hay dietas en localStorage o en el estado, obtenerlas de la API
      dispatch(getDiets());
    }
  }, [dispatch]);

  const handleClick = () => {
    dispatch(setPage(1)); // Reiniciar el número de página al hacer clic en el botón de recarga
    window.location.reload();
  };

  // Función para obtener las recetas de la página actual
  const getCurrentRecipes = () => {
    const startIndex = (currentPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    return recipes.slice(startIndex, endIndex);
  };

  // Función para cambiar a la página anterior
  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  // Función para cambiar a la página siguiente
  const handleNextPage = () => {
    const totalPages = Math.ceil(recipes.length / recipesPerPage);
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  if (!recipes.length) {
    // Muestra un mensaje de carga mientras se obtienen las recetas
    return (
      <div className="loaderContainer">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <button onClick={handleClick}>↻</button>
      <CardsContainer recipes={getCurrentRecipes()} />
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>{currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(recipes.length / recipesPerPage)}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};

export default Home;
