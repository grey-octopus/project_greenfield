import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import reducers to combine
import averageRatingReducer from './src/overview/reducers/averageRatingReducer.js'

const rootReducer = combineReducers({
  averageRatingReducer
});

const store = createStore(rootReducer, {prod: 1}, applyMiddleware(thunk));

export default store;
