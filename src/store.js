import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
// import reducers to combine
import averageRatingReducer from "./overview/reducers/averageRatingReducer.js";
import fetchProductInfoReducer from "./overview/reducers/fetchProductInfoReducer.js";
import fetchQuestionListReducer from "./q_and_a/reducers/fetchQuestionListReducer.js";
import fetchReviewReducer from "./reviews/review_reducers/fetchReviewsReducer.js";
import fetchAnswerListReducer from "./q_and_a/reducers/fetchAnswerListReducer";
import handleCountChangeReducer from "./q_and_a/reducers/handleCountChangeReducer.js";
import { relatedProductsReducer } from "./related_prod_your_outfit/reducers/related_products.js";
import { myOutfitReducer } from "./related_prod_your_outfit/reducers/my_outfit.js";
import fetchReviewMetadataReducer from "./reviews/review_reducers/fetchReviewMetadataReducer.js";
import stylesReducer from './overview/reducers/stylesReducer.js'

const rootReducer = combineReducers({
  averageRatingReducer,
  fetchProductInfoReducer,
  fetchQuestionListReducer,
  // reducers for relatedProducts and myOutfits
  relatedProducts: relatedProductsReducer,
  myOutfit: myOutfitReducer,
  fetchAnswerListReducer,
  //reducers for review widget
  fetchReviewReducer,
  fetchReviewMetadataReducer,
  handleCountChangeReducer,
  styles: stylesReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
