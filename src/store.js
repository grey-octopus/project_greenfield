import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers to combine

import { relatedProductsReducer } from "./related_prod_your_outfit/reducers/related_products.js";
import averageRatingReducer from './overview/reducers/averageRatingReducer.js';
import fetchProductInfoReducer from './overview/reducers/fetchProductInfoReducer.js';
import fetchReviewReducer from './reviews/review_reducers/fetchReviewsReducer.js';

const rootReducer = combineReducers({
  averageRatingReducer,
  fetchProductInfoReducer,
  relatedProducts: relatedProductsReducer,
  fetchReviewReducer
});

const initialState = {
  averageRatingReducer,
  fetchProductInfoReducer: { prodId: 1 },
  relatedProducts: [],
  fetchReviewReducer
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
