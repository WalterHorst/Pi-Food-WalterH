const { Router } = require("express");
const getRecipeById = require("../controllers/getRecipeID");
const newRecipe = require("../controllers/newRecipe");
const getDiets = require("../controllers/getDiet");
const getRecipeByName = require("../controllers/getRecipeName");
const getRecipes = require("../controllers/getRecipes");

// Importar todos los routers;

const router = Router();

// Configurar los routers

router.get("/recipesname", getRecipeByName); //listo

router.get("/recipes", getRecipes); //listo

router.get("/recipes/:id", getRecipeById); //listo

router.post("/recipes", newRecipe); //listo

router.get("/diet", getDiets); //listo

module.exports = router;
