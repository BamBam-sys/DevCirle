import axios from "axios";
import { config } from "../config";

const { BASEURL } = config;

export default axios.create({ baseURL: `${BASEURL}api/v1` });
