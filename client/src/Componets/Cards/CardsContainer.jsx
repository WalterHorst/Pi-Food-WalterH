import "./CardsContainer.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const recipes = useSelector((state) => state.recipes);
  return (
    <div className="Container">
      {recipes.map((recipe) => {
        return (
          <Card
            image={recipe.image}
            Nombre={recipe.title}
            HealthScore={recipe.healthScore}
          />
        );
      })}
    </div>
  );
};
export default CardsContainer;
