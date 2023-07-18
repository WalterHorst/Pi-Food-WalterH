const getRecipes = async (req, res) => {
  try {
    const { name } = req.query;
    // if (name)
    //   return res.status(200).send(`Esta ruta trae receta llamada ${name}`);
    // return res.status(200).send(`Esta ruta trae todas las recetas`);
    return name
      ? res.status(200).send(`Esta ruta trae receta llamada ${name}`)
      : res.status(200).send(`Esta ruta trae todas las recetas`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getRecipes;
