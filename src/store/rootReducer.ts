import { combineReducers } from "redux";
import { filmReducer } from "./film/reducers";

export default combineReducers({
  film: filmReducer,
});
