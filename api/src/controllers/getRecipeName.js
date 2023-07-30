const axios = require("axios");
const { Recipe } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;
const { Op } = require("sequelize");

const removeHTMLTags = (text) => {
  // Expresión regular para buscar y eliminar las etiquetas HTML
  const regex = /(<([^>]+)>)/gi;
  return text.replace(regex, "");
};

const getRecipeByName = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res
        .status(400)
        .send("Debes proporcionar un nombre para buscar recetas.");
    }

    // Buscar en la base de datos y la API
    const dbRecipes = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true`
    );
    const recipeApi = data.results.map((recipe) => ({
      id: recipe.id,
      name: recipe.title.toLowerCase(),
      image: recipe.image,
      diets: recipe.diets,
      summary: removeHTMLTags(recipe.summary),
      healthScore: recipe.healthScore,
      dietas: recipe.diets,
      pasos:
        recipe.analyzedInstructions?.[0]?.steps
          .map((step) => step.step)
          .join(" ") || "No hay pasos aca rey",
    }));
    // Combinar las recetas de la base de datos y la API
    const allRecipes = [...dbRecipes, ...recipeApi];

    if (allRecipes.length === 0) {
      return res.status(404).send("No se encontraron recetas con ese nombre.");
    }

    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getRecipeByName;
