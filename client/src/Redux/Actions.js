import axios from "axios";

export const SET_PAGE = "SET_PAGE";
export const GET_RECIPES = "GET_RECIPES";
export const SET_FOUND_RECIPE = "SET_FOUND_RECIPE";
export const ORDER = "ORDER";
export const ORDER_BY_DIETS = "ORDER_BY_DIETS";

export const getRecipes = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/recipes");

    const apiRecipes = data;
    dispatch({ type: GET_RECIPES, payload: apiRecipes });
  };
};

export const setFoundRecipe = (recipe) => {
  return {
    type: SET_FOUND_RECIPE,
    payload: recipe,
  };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

export const orderByDiets = (diet) => {
  return { type: ORDER_BY_DIETS, payload: diet };
};

export const setPage = (pageNumber) => ({
  type: SET_PAGE,
  payload: pageNumber,
});
