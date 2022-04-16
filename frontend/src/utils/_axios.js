import Axios from "axios";

const API_URL = "http://localhost:5000";

const _axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const fetcher = (key) => _axios.get(key).then((res) => res.data);

export default _axios;
