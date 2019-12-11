import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import reducers to combine
import averageRatingReducer from './overview/reducers/averageRatingReducer.js';
import fetchReviewReducer from './reviews/review_reducers/fetchReviewsReducer.js';

const rootReducer = combineReducers({
  averageRatingReducer,
  fetchReviewReducer
});

const store = createStore(rootReducer, { prod: 1 }, applyMiddleware(thunk));

export default store;
