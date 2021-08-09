import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "../types/getUsersType";

const initialState = {
  data: {},
  isLoading: false,
  error: {},
};

export const getUsersReducer = (state = initialState, action) => {
  const { type, payload } = action;
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
        data: payload,
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
