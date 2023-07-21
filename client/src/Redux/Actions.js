import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=035aef75e50445e4bb44b40ee3a7cc46&addRecipeInformation=true&number=100`
    );

    const apiRecipes = data.results;
    dispatch({ type: GET_RECIPES, payload: apiRecipes });
  };
};
