import { combineReducers } from "redux";
import { changePasswordReducer } from "./ChangePasswordReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signUpReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  changePassword: changePasswordReducer,
});
export default rootReducer;
