import axios from "axios";

export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const ORDER_BY_HEALTHSCORE = "ORDER_BY_HEALTHSCORE";
export const SET_PAGE = "SET_PAGE";
export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
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

export const getDiets = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/diet");

    const diets = data;
    dispatch({ type: GET_DIETS, payload: diets });
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

export const orderByHealthScore = (order) => {
  return {
    type: ORDER_BY_HEALTHSCORE,
    payload: order,
  };
};

export const orderByDiets = (diet) => {
  return { type: ORDER_BY_DIETS, payload: diet };
};

export const filterBySource = (source) => {
  return {
    type: FILTER_BY_SOURCE,
    payload: source,
  };
};

export const setPage = (pageNumber) => ({
  type: SET_PAGE,
  payload: pageNumber,
});
