import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers to combine
<<<<<<< HEAD
import averageRatingReducer from './overview/reducers/averageRatingReducer.js'
import fetchProductInfoReducer from './overview/reducers/fetchProductInfoReducer.js'
=======
import averageRatingReducer from './overview/reducers/averageRatingReducer.js';
import fetchProductInfoReducer from './overview/reducers/fetchProductInfoReducer.js';
import fetchReviewReducer from './reviews/review_reducers/fetchReviewsReducer.js';
>>>>>>> 4e1394ae95e9d8d2148d86322d17c94ba6cd0add

const rootReducer = combineReducers({
  averageRatingReducer,
  fetchProductInfoReducer,
  fetchReviewReducer
});

<<<<<<< HEAD
const initialState = {averageRatingReducer, fetchProductInfoReducer: { prodId: 1 }}

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
=======
const initialState = {
  averageRatingReducer,
  fetchProductInfoReducer: { prodId: 1 },
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
>>>>>>> 4e1394ae95e9d8d2148d86322d17c94ba6cd0add

export default store;
