import { config } from "../../config";
import axios from "axios";
import setAuthHeader from "../../utility/setAuthHeader";
import { setUserSession } from "../../utility/Common";


import {
  LOG_IN_FAILURE,
  LOG_IN_START,
  LOG_IN_SUCCESS,
} from "../types/loginType";

const { BASEURL } = config;

const loginStart = () => ({
  type: LOG_IN_START,
});

const loginSuccess = (data) => ({
  type: LOG_IN_SUCCESS,
  payload: data,
});

const loginFailure = (err) => ({
  type: LOG_IN_FAILURE,
  payload: err,
});

export const loginAsync = (data) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await axios.post(`${BASEURL}api/v1/login`, data);

    dispatch(loginSuccess(response.data.data));

    setAuthHeader(response.data.data.token);

    setUserSession(response.data.data.token.split(" ")[1], response.data.data);  
    // return response.data;
  } catch (err) {
    dispatch(loginFailure(err));
    setUserSession(null, err);
  }
};
