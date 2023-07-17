const { Router } = require("express");
const getRecipesById = require("../controllers/getRecipes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// GET /recipes/:idRecipe
router.get("/recipes/:idRecipe", (req, res) => {
  getRecipesById(req, res);
});

module.exports = router;
