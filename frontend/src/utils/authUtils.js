import Cookies from "js-cookie";

export const getUser = () => JSON.parse(Cookies.get("USER_DETAILS")) || "{}";
export const isLoggedIn = () => getUser() !== "{}";
