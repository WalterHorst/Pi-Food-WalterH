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
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            Nombre={recipe.name}
            HealthScore={recipe.healthScore}
          />
        );
      })}
    </div>
  );
};
export default CardsContainer;
