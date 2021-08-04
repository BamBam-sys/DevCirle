import { LIKED, UNLIKED } from "../types/likeUnlikeTypes";

const initialState = {
  liked: false,
  count: 0,
};

const likeUnlikeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIKED:
      return { ...state, liked: true, count: state.count + 1 };
    case UNLIKED:
      return { ...state, liked: false, count: state.count - 1 };
    default:
      return state;
  }
};

export default likeUnlikeReducer;
