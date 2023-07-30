import { useEffect } from "react";
import CardsContainer from "../../Componets/Cards/CardsContainer";
import { getRecipes } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Componets/Loader/Loader";
import "./Home.css";

const Home = () => {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!recipes.length) {
      dispatch(getRecipes());
    }
  }, [dispatch]);

  const handleClick = () => {
    window.location.reload();
  };

  if (!recipes.length) {
    // Muestra un mensaje de carga mientras se obtienen las recetas
    return (
      <div className="loaderContainer">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <>
      <button onClick={handleClick}>↻</button>
      <CardsContainer></CardsContainer>
    </>
  );
};
export default Home;
