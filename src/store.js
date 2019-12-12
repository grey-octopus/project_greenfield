import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers to combine
import averageRatingReducer from './overview/reducers/averageRatingReducer.js';
import fetchProductInfoReducer from './overview/reducers/fetchProductInfoReducer.js';
import fetchQuestionListReducer from './q_and_a/reducers/fetchQuestionListReducer.js';
import fetchReviewReducer from './reviews/review_reducers/fetchReviewsReducer.js';
import fetchReviewMetadataReducer from './reviews/review_reducers/fetchReviewMetadataReducer.js';
import { relatedProductsReducer } from './related_prod_your_outfit/reducers/related_products.js';
import averageRatingReducer from './overview/reducers/averageRatingReducer.js';
import fetchProductInfoReducer from './overview/reducers/fetchProductInfoReducer.js';
import fetchQuestionListReducer from './q_and_a/reducers/fetchQuestionListReducer.js';
import fetchReviewReducer from './reviews/review_reducers/fetchReviewsReducer.js';

const rootReducer = combineReducers({
  averageRatingReducer,
  fetchProductInfoReducer,
  fetchQuestionListReducer,
  fetchReviewReducer,
  fetchReviewMetadataReducer,

  relatedProducts: relatedProductsReducer,

  fetchReviewReducer,
  fetchQuestionListReducer
});

const initialState = {
  averageRatingReducer,
  fetchProductInfoReducer: { prodId: 1 },
  fetchQuestionListReducer,
  fetchReviewReducer,
  fetchReviewMetadataReducer,
  fetchQuestionListReducer
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
