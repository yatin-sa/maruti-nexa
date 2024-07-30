import axios from "axios";
const API_URI = `${process.env.REACT_APP_ALM_URL}/oauth`;
const PRIVATE_API_URI = `${process.env.REACT_APP_ALM_URL}/primeapi/v2`;
const AuthClient = axios.create({
  baseURL: API_URI,
  withCredentials: true,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    //  "Access-Control-Allow-Credentials": "true",
  },
});
export const AuthClientPrivate = axios.create({
  baseURL: PRIVATE_API_URI,
  headers: {
    "Content-type": "application/json",
  },
  // withCredentials: true,
});

export default AuthClient;
