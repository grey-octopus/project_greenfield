import { GET_RELATED_PRODUCTS } from "../actions/related_products";

export const relatedProductsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RELATED_PRODUCTS:
      let newState = Object.assign([], action.relatedProducts);
      return newState;
    default:
      return state;
  }
};
