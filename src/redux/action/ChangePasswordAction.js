import { config } from "../../config";
import axios from "axios";
import {
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from "../types/changePasswordType";

const { BASEURL } = config;

const changePasswordStart = () => ({ type: CHANGE_PASSWORD_START });

const changePasswordSuccess = (data) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: data,
});

const changePasswordFailure = (err) => ({
  type: CHANGE_PASSWORD_FAILURE,
  payload: err,
});

export const changePasswordAsync = (data) => async (dispatch) => {
  try {
    dispatch(changePasswordStart());
    // const response = await axios.post(`/users/changepassword`, data);
    // dispatch(changePasswordSuccess(response.data));
    dispatch(changePasswordSuccess(data));
  } catch (err) {
    dispatch(changePasswordFailure(err.response));
  }
};
