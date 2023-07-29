import { useEffect } from "react";
import CardsContainer from "../../Componets/Cards/CardsContainer";
import { getRecipes } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { orderCards } from "../../Redux/Actions";

const Home = () => {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!recipes.length) {
      dispatch(getRecipes());
    }
  }, [dispatch, recipes]);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  if (!recipes.length) {
    // Muestra un mensaje de carga mientras se obtienen las recetas
    return <div>Cargando recetas...</div>;
  }

  return (
    <>
      <select onChange={handleOrder}>
        <option value="A">A-Z</option>
        <option value="B">Z-A</option>
      </select>
      <h1>Esta es la vista de Home</h1>
      <CardsContainer></CardsContainer>
    </>
  );
};
export default Home;
