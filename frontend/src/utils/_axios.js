import Axios from "axios";

const API_URL = "http://localhost:5000";

const _axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default _axios;
