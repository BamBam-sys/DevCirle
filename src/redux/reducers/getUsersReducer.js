import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "../types/getUsersType";

const initialState = {
  data: [], //Changed this to fix issue with redux
  isLoading: false,
  error: {},
};

export const getUsersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("payload", payload);
  switch (type) {
    case GET_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...payload],  //Changed this to fix issue with redux
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
