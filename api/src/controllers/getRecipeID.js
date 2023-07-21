require("dotenv").config();
const { API_KEY } = process.env;
const { Recipe } = require("../db");
const axios = require("axios");

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  try {
    if (isNaN(id)) {
      //
      const recipe = await Recipe.findByPk(id);
      if (!recipe) {
        res.status(404).send("No se escuentra en la base de datos");
      } else return res.status(200).json(recipe);
    } //
    else {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      const recipeApi = {
        id: data.id,
        name: data.title.toLowerCase(),
        image: data.image,
        summary: data.summary,
        healthScore: data.healthScore,
        pasos:
          data.analyzedInstructions?.[0]?.steps
            .map((step) => step.step)
            .join(" ") || "No hay pasos aca rey",
      };
      return res.status(200).json(recipeApi);
    }
    //
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getRecipeById;
