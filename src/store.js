import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import reducers to combine
import averageRatingReducer from './src/overview/reducers/averageRatingReducer.js'

const rootReducer = combineReducers({
  averageRatingReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
