import Cookies from "js-cookie";

export const getUser = () => {
  console.log(JSON.parse(Cookies.get("USER_DETAILS") || "{}"));
  return JSON.parse(Cookies.get("USER_DETAILS") || "{}");
};
export const isLoggedIn = () => Object.values(getUser()).length !== 0;
