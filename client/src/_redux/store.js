import { createStore, combineReducers, applyMiddleware } from "redux";
import short from "../_reducers/shorten";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  short
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
