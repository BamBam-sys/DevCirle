import { combineReducers } from "redux";
import { changePasswordReducer } from "./ChangePasswordReducer";
import { getUsersReducer } from "./getUsersReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signUpReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  changePassword: changePasswordReducer,
  getUsers: getUsersReducer,
});
export default rootReducer;
