import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from "./signUpReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
});
export default rootReducer;
