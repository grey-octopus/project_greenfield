import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers to combine
import averageRatingReducer from './overview/reducers/averageRatingReducer.js';
import fetchProductInfoReducer from './overview/reducers/fetchProductInfoReducer.js';
import fetchQuestionListReducer from './q_and_a/reducers/fetchQuestionListReducer.js';
import fetchReviewReducer from './reviews/review_reducers/fetchReviewsReducer.js';
import fetchAnswerListReducer from './q_and_a/reducers/fetchAnswerListReducer'


const rootReducer = combineReducers({
  averageRatingReducer,
  fetchProductInfoReducer,
  fetchQuestionListReducer,
  fetchAnswerListReducer
});

const initialState = {averageRatingReducer, fetchProductInfoReducer: { prodId: 1 },fetchQuestionListReducer}


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


export default store;
