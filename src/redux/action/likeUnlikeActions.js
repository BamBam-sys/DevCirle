// import { config } from "../../config";
// import axios from "axios";
// import { LIKED, UNLIKED } from "../types/likeUnlikeTypes";

// const { BASEURL } = config;

// export const liked = () => ({ type: LIKED });
// export const unliked = () => ({ type: UNLIKED });

// export const likeAsync = (data) => async (dispatch) => {
//   try {
//     // const response = await axios.post(`/users/${loggedInUserId}`, toUserId);

//     dispatch(liked());

//     // setUserSession(response.data.data.token.split(" ")[1], response.data.data);
//   } catch (err) {}
// };

// export const UnlikeAsync = (data) => async (dispatch) => {
//   try {
//     const response = await axios.post(`/users/${loggedInUserId}`, toUserId);

//     dispatch(liked());

//     // setUserSession(response.data.data.token.split(" ")[1], response.data.data);
//   } catch (err) {}
// };
