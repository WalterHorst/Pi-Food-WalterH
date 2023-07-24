import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/recipes");

    const apiRecipes = data;
    dispatch({ type: GET_RECIPES, payload: apiRecipes });
  };
};
