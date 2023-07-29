import { GET_RECIPES, SET_FOUND_RECIPE, ORDER } from "./Actions";

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

    default:
      return { ...state };
  }
};

export default reducer;
