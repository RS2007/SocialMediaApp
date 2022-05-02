import Cookies from "js-cookie";

export const getUser = () => {
  return JSON.parse(Cookies.get("USER_DETAILS") || "{}");
};
export const isLoggedIn = () => {
  return Object.values(getUser()).length !== 0;
};
