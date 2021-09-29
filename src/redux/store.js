import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import asyncMiddleware from "./middleware/asyncMiddleware";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
