const { Diet } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const getDiets = async (req, res) => {
  try {
    const { data } = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=90`
    );
    const dietsDB = data.results
      .map((recipe) => recipe.diets) //mapeo las recetas para obtener las dietas (en este punto tengo un array de arrays)
      .toString() // transformo todo en un string
      .split(",") //ahora tengo un unico array de string (osea los nombres de las recetas)
      .map((diet) => diet.trim()) //otro mapeo para eliminar los espacios en blanco al comiezo y final de cada string
      .filter((recipe) => recipe.length > 1); //Esto se hace para eliminar valores vacíos o con un solo carácter

    const filtro = dietsDB.filter((diet) => diet); //: Se realiza un filtrado adicional para eliminar valores falsy ,es decir, valores: null, undefined, false, 0, NaN y una cadena vacía ("")
    const dietsFilt = [...new Set(filtro)]; //Un set para eliminar duplicados ya que las recetas pertenecen a varias dietas

    // Crear un array de objetos para realizar un bulkCreate
    const dietObjects = dietsFilt.map((name) => ({ name }));

    // Utilizar bulkCreate para insertar todas las dietas en la base de datos
    await Diet.bulkCreate(dietObjects, { ignoreDuplicates: true });

    const totaldiets = await Diet.findAll();
    res.status(200).json(totaldiets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDiets;
