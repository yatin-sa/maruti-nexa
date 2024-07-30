import AuthClient from "../api";
import { Endpoints } from "../api/endpointConstants";
import { useDispatch } from "react-redux/es/exports";
import {
  setCredentials,
  setAdminAccessToken,
} from "../features/Auth/authSlice";
import axios from "axios";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const { REFRESH } = Endpoints;
  const refresh = async () => {
    const response = await axios.post(process.env.REACT_APP_ALM_URL+
      "/oauth/token/refresh",
      {},
      {
        params: {
          client_id: process.env.REACT_APP_API_CLIENT_ID,
          client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
          refresh_token: process.env.REACT_APP_API_REFRESHTOKEN,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
    dispatch(setAdminAccessToken(response.data.access_token));
  };
  return refresh;
};

export default useRefreshToken;
