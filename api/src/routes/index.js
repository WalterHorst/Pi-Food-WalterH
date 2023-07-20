const { Router } = require("express");
const getRecipeById = require("../controllers/getRecipeID");
const newRecipe = require("../controllers/newRecipe");
const getDiet = require("../controllers/getDiet");
const getRecipeByName = require("../controllers/getRecipeName");
const getAllRecipes = require("../controllers/getRecipes");

// Importar todos los routers;

const router = Router();

// Configurar los routers

router.get("/recipesname", getRecipeByName); //listo

router.get("/recipes", getAllRecipes); //listo

router.get("/recipes/:id", getRecipeById); //listo

router.post("/recipes", newRecipe); //listo

router.get("/diet", getDiet);

module.exports = router;
