import Axios from "axios";

const API_URL = import.meta.env.PROD
  ? "https://api-instaclone-2022.herokuapp.com/"
  : "http://localhost:5000";

const _axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const fetcher = (key) => _axios.get(key).then((res) => res.data);

export default _axios;
