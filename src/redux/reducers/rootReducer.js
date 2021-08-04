import { combineReducers } from "redux";
import { changePasswordReducer } from "./ChangePasswordReducer";
import likeUnlikeReducer from "./likeUnlikeReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signUpReducer";

const rootReducer = combineReducers({
  likeUnlike: likeUnlikeReducer,
  signup: signupReducer,
  login: loginReducer,
  changePassword: changePasswordReducer,
});
export default rootReducer;
