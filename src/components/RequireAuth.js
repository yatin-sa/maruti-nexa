import { isNil } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getCredentials, setCredentials } from "../features/Auth/authSlice";

const RequireAuth = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  if (!isNil(token)) {
    dispatch(setCredentials({ accessToken: token }));
  }
  return <>{!isNil(token) ? <Outlet /> : <Navigate to="/" />}</>;
};

export default RequireAuth;
