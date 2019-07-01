import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

//reducers are passed into the index.js file(index reducer)
export default combineReducers({
  contact: contactReducer
}); 