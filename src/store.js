import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// import reducers to combine

const rootReducer = combineReducers({
  // reducers 
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store