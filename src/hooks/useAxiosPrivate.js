import { useEffect } from "react";
import { AuthClientPrivate } from "../api";
import { getCredentials } from "../features/Auth/authSlice";
import useRefreshToken from "./useRefreshToken";
import { useSelector } from "react-redux";
import { isNil } from "lodash";
const useAxiosPrivate = () => {
  const auth = useSelector(getCredentials);

  const { accessToken } = auth;
  useEffect(() => {
    console.log(accessToken, "mainnnnnn accessToken");
    const requestIntercept = AuthClientPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `oauth ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      AuthClientPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth]);
  return AuthClientPrivate;
};

export default useAxiosPrivate;
