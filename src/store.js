import { createStore, combineReducers } from "redux";
import regionReducer from "./reducers/regionsReducer";

const store = createStore(
  combineReducers({
    mapIcon: regionReducer
  })
);

export default store;
