require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe } = require("../db");

const getAllRecipes = async (req, res) => {
  try {
    //   Busco todos los usuarios de la db
    const databaseRecipes = await Recipe.findAll();
    //Busco todos los usuarios de la api
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`
    );

    const apiRecipes = data.results;

    const allRecipes = [...databaseRecipes, ...apiRecipes];

    return res.status(200).json(allRecipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllRecipes;
