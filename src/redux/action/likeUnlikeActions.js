import { config } from "../../config";
import axios from "axios";
import { LIKED, UNLIKED } from "../types/likeUnlikeTypes";

const { BASEURL } = config;

export const liked = () => ({ type: LIKED });
export const unliked = () => ({ type: UNLIKED });
