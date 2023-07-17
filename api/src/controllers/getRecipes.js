const { API_KEY } = process.env;

const getRecipesById = async (req, res) => {
  const { idRecipe } = req.params;
  try {
    // Buscar la receta en la base de datos por su ID
    let recipe = await Recipe.findByPk(idRecipe, {
      include: Diet, // Incluir los tipos de dietas asociados a la receta
    });

    if (!recipe) {
      // Si no se encuentra en la base de datos, buscar en la API externa
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}&addRecipeInformation=true`
      );
      recipe = response.data;
    }

    if (!recipe) {
      return res.status(404).json({ message: "Receta no encontrada" });
    }

    res.json(recipe);
  } catch (error) {
    console.error("Error al obtener el detalle de la receta:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

module.exports = getRecipesById;
