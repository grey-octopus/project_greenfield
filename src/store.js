import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers to combine
import averageRatingReducer from './overview/reducers/averageRatingReducer.js';
import fetchProductInfoReducer from './overview/reducers/fetchProductInfoReducer.js';
import fetchQuestionListReducer from './q_and_a/reducers/fetchQuestionListReducer.js';
import { relatedProductsReducer } from './related_prod_your_outfit/reducers/related_products.js';

//reducers for review widget
import fetchReviewReducer from './reviews/review_reducers/fetchReviewsReducer.js';
import fetchReviewMetadataReducer from './reviews/review_reducers/fetchReviewMetadataReducer.js';

const rootReducer = combineReducers({
  averageRatingReducer,
  fetchProductInfoReducer,
  fetchQuestionListReducer,
  relatedProducts: relatedProductsReducer,

  //reducers for review widget
  fetchReviewReducer,
  fetchReviewMetadataReducer
});

const initialState = {
  averageRatingReducer,
  fetchProductInfoReducer: { prodId: 1 },
  fetchQuestionListReducer,

  //reducers for review widget
  fetchReviewReducer,
  fetchReviewMetadataReducer
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
