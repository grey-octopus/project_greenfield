import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
// import reducers to combine
import { getRelatedProducts } from "./related_prod_your_outfit/actions/related_products";
import { relatedProductsReducer } from "./related_prod_your_outfit/reducers/related_products.js";
import averageRatingReducer from "./overview/reducers/averageRatingReducer.js";
import fetchProductInfoReducer from "./overview/reducers/fetchProductInfoReducer.js";

const rootReducer = combineReducers({
  averageRatingReducer,
  fetchProductInfoReducer,
  relatedProducts: relatedProductsReducer
});

const initialState = {
  averageRatingReducer,
  fetchProductInfoReducer: { prodId: 1 },
  relatedProducts: []
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
