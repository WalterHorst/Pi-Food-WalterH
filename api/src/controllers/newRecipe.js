const { Recipe } = require("../db");

const newRecipe = async (req, res) => {
  try {
    const { name, imagen, resumen, healtScore, Pasos } = req.body;

    const newRecipe = await Recipe.create({
      name,
      imagen,
      resumen,
      healtScore,
      Pasos,
    });
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = newRecipe;
