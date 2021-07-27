import {
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from "../types/changePasswordType";

const initialState = {
  data: {},
  isLoading: false,
  error: {},
};

export const changePasswordReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_PASSWORD_START:
      return {
        ...state,
        isLoading: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
