require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe } = require("../db");

const getRecipes = async (req, res) => {
  try {
    //   Busco todos los usuarios de la db
    const databaseRecipes = await Recipe.findAll();
    //Busco todos los usuarios de la api
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=90`
    );

    const apiRecipes = data.results.map((recipe) => ({
      id: recipe.id,
      name: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      healthScore: recipe.healthScore,
      pasos:
        recipe.analyzedInstructions?.[0]?.steps
          .map((step) => step.step)
          .join("\n") || "No hay pasos aca rey",
    }));

    const allRecipes = [...databaseRecipes, ...apiRecipes];

    return res.status(200).json(allRecipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getRecipes;
