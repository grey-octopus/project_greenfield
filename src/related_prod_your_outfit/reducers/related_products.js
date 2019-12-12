import { GET_RELATED_PRODUCTS } from "../actions/related_products";
import { getRelatedProducts } from "../actions/related_products.js";

export const relatedProductsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RELATED_PRODUCTS:
      let newState = Object.assign([], action.relatedProducts);
      return newState;
    default:
      return state;
  }
};
