import { config } from "../../config";
import axios from "axios";
import {
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "../types/signUpType";
import { setUserSession } from "../../utility/Common";

const { BASEURL } = config;

const signupStart = () => ({
  type: SIGN_UP_START,
});

const signupSuccess = (data) => ({
  type: SIGN_UP_SUCCESS,
  payload: data,
});

const signupFailure = (err) => ({
  type: SIGN_UP_FAILURE,
  payload: err,
});

export const signupAsync = (data) => async (dispatch) => {
  try {
    dispatch(signupStart());
    const response = await axios.post(`${BASEURL}/api/v1/register`, data);
    setUserSession(response.data.data.token.split(" ")[1], response.data.data);
    dispatch(signupSuccess(response.data));
    console.log("RESPONSE", response.data);
  } catch (err) {
    console.log("error", err);
    dispatch(signupFailure(err));
  }
};
