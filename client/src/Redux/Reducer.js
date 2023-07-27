import { GET_RECIPES, SET_FOUND_RECIPE } from "./Actions";

const initialState = {
  recipes: [],
};
console.log(initialState);

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return { ...state, recipes: payload };
    case SET_FOUND_RECIPE:
      return { ...state, recipes: payload };

    default:
      return { ...state };
  }
};

export default reducer;
