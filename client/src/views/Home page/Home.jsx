import { useEffect } from "react";
import CardsContainer from "../../Componets/Cards/CardsContainer";
import { getRecipes } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>
      <h1>Esta es la vista de Home</h1>
      <CardsContainer></CardsContainer>
    </>
  );
};
export default Home;
