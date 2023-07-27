import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

import axios from "axios";

const Detail = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/recipes/${id}`)
      .then(({ data }) => {
        setRecipe(data);
      })
      .catch((error) => {
        alert("Error al obtener los detalles de la receta:", error);
      });
  }, [id]);

  return (
    <div className="detailContainer">
      <div className="detail">
        <h1>{recipe.name}</h1>
        <h1>{recipe.healthScore}</h1>
        <h1>{recipe.dietas}</h1>
        <h1>{recipe.summary}</h1>
        <h1>{recipe.pasos}</h1>
        <img src={recipe.image} alt={recipe.name} />
      </div>
    </div>
  );
};
export default Detail;
