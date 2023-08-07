const { Recipe, Diet } = require("../db");

const newRecipe = async (req, res) => {
  try {
    const { name, image, resumen, healthScore, pasos, diets } = req.body;

    // Buscar las instancias de las dietas por sus nombres
    const selectedDiets = await Diet.findAll({ where: { name: diets } });

    // Crear la nueva receta con las dietas asociadas
    const newRecipe = await Recipe.create({
      name,
      image,
      resumen,
      healthScore,
      pasos,
    });

    await newRecipe.addDiet(selectedDiets);
    res.status(200).send("Receta creada exitosamente");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = newRecipe;

// const { Recipe, Diet } = require("../db");
// const newRecipe = async (req, res) => {
//   try {
//     const { name, image, resumen, healthScore, pasos, diets } = req.body;

//     const newRecipe = await Recipe.create(
//       {
//         name,
//         image,
//         resumen,
//         healthScore,
//         pasos,
//       },
//       {
//         include: [{ model: Diet, through: "RecipeDiet" }],
//       }
//     );
//     res.status(200).send("Receta creada exitosamente");
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = newRecipe;
