import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/product";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = action.payload;
      return [...state, newProduct];

    case REMOVE_PRODUCT:
      return state.filter((e) => e.id !== action.payload);
    default:
      return state;
  }
};
