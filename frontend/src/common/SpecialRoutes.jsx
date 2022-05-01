import { isLoggedIn } from "../utils/authUtils";

// const LOGIN_URL = import.meta.env.PROD
//   ? "https://socialmediaapp-cel.pages.dev/login"
//   : "http://localhost:3000/login";

const LOGIN_URL = "http://localhost:5000/login";

/* eslint-disable react/prop-types*/
export const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    window.location.href = LOGIN_URL;
    return;
  }
  return children;
};
