import {
  GET_RECIPES,
  SET_FOUND_RECIPE,
  ORDER,
  ORDER_BY_DIETS,
  ORDER_BY_HEALTHSCORE,
  SET_PAGE,
  GET_DIETS,
  FILTER_BY_SOURCE,
} from "./Actions";

const initialState = {
  recipes: [],
  currentPage: 1,
  diets: [],
};
console.log(initialState);

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return { ...state, recipes: payload };

    case GET_DIETS:
      return state.diets.length === 0 ? { ...state, diets: payload } : state;

    case SET_FOUND_RECIPE:
      return { ...state, recipes: payload };
    case SET_PAGE:
      return { ...state, currentPage: payload };

    case ORDER:
      const recipesCopy = [...state.recipes];
      const sortedRecipes = recipesCopy.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (payload === "A") {
          return nameA.localeCompare(nameB);
        } else if (payload === "B") {
          return nameB.localeCompare(nameA);
        } else {
          return 0;
        }
      });
      return {
        ...state,
        recipes: sortedRecipes,
      };

    case ORDER_BY_DIETS:
      const recipeCopy = [...state.recipes];
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.diets.includes(payload)
      );
      if (filteredRecipes.length === 0) {
        alert("No se encuentran recetas con ese tipo de dieta");
        return { ...state, recipes: recipeCopy };
      }
      return { ...state, recipes: filteredRecipes };

    case ORDER_BY_HEALTHSCORE:
      const healthScoreCopy = [...state.recipes];
      const sortedByHealthScore = healthScoreCopy.sort((a, b) => {
        if (payload === "asc") {
          return a.healthScore - b.healthScore;
        } else if (payload === "desc") {
          return b.healthScore - a.healthScore;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        recipes: sortedByHealthScore,
      };

    case FILTER_BY_SOURCE:
      if (payload === "api") {
        const apiRecipes = state.recipes.filter((recipe) => !recipe.created);
        return { ...state, recipes: apiRecipes };
      } else if (payload === "created") {
        const createdRecipes = state.recipes.filter((recipe) => recipe.created);
        return { ...state, recipes: createdRecipes };
      } else {
        return state;
      }

    default:
      return { ...state };
  }
};

export default reducer;
