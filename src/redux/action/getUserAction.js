import { config } from "../../config";
import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "../types/getUsersType";
import userFetch from "../../api/userFetch";

const getUsersStart = () => ({ type: GET_USERS_START });

const getUsersSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

const getUsersFailure = (err) => ({
  type: GET_USERS_FAILURE,
  payload: err,
});

export const getUsersAsync = () => async (dispatch) => {
  try {
    dispatch(getUsersStart());
    const response = await userFetch.get("/");
    localStorage.setItem("userList", JSON.stringify(response.data));
    dispatch(getUsersSuccess(response.data.data));
  } catch (err) {
    dispatch(getUsersFailure(err.response));
  }
};
