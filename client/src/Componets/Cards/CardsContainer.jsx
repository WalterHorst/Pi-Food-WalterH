import "./CardsContainer.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = ({ recipes }) => {
  return (
    <div className="Container">
      {recipes.map((recipe) => {
        return (
          <Card
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            nombre={recipe.name}
            dietas={recipe.diets}
          />
        );
      })}
    </div>
  );
};
export default CardsContainer;
