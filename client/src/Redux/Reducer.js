import { GET_RECIPES } from "./Actions";

const initialState = {
  recipes: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return { ...state, recipes: payload };
    default:
      return { ...state };
  }
};

export default reducer;
