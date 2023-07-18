const { Router } = require("express");
const getRecipeById = require("../controllers/getRecipe");
const newRecipe = require("../controllers/newRecipe");
const getDiet = require("../controllers/getDiet");
const getRecipeByName = require("../controllers/getRecipes");

// Importar todos los routers;

const router = Router();

// Configurar los routers

router.get("/recipes", getRecipeByName);

router.get("/recipes/:id", getRecipeById);

router.post("/recipes", newRecipe);

router.get("/diet", getDiet);

module.exports = router;
