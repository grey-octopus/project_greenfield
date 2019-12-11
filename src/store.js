import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import reducers to combine
import averageRatingReducer from "./overview/reducers/averageRatingReducer.js";
import fetchProductInfo from "./overview/reducers/fetchProductInfoReducer.js";

const rootReducer = combineReducers({
  averageRatingReducer,
  fetchProductInfo
});

const store = createStore(rootReducer, { prodId: 1 }, applyMiddleware(thunk));

export default store;
