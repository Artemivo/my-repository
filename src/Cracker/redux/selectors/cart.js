import { createSelector } from "reselect";

export const getTotalPrice = createSelector(
  (state) => state.products,
  (products) => {
    return products.reduce((sum, el) => sum + el.price, 0);
  }
);
