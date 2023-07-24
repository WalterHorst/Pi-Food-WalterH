const { Recipe } = require("../db");

const newRecipe = async (req, res) => {
  try {
    const { name, image, resumen, healthScore, pasos } = req.body;

    const newRecipe = await Recipe.create({
      name,
      image,
      resumen,
      healthScore,
      pasos,
    });
    res.status(200).send("Receta creada exitosamente");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = newRecipe;
