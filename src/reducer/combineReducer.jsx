import { combineReducers } from "redux";
import reducerData from "./reducer";

const rootReducer = combineReducers({
  carDetail: reducerData,
});

export default rootReducer;