import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthClient from "../../api";
import { useDispatch } from "react-redux/es/exports";
import { setCredentials } from "../../features/Auth/authSlice";
import useAxios from "../../hooks/useAxios";

const defaultUserValues = {
  email: "",
  password: "",
};
const SignInLogic = () => {
  const navigate = useNavigate();
  const { loading, axiosReq } = useAxios();
  const [user, setUser] = useState(defaultUserValues);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axiosReq({
      axiosInstance: AuthClient,
      method: "GET",
      endpoint: "",
      requestConfig: {
        params: {
          client_id: process.env.REACT_APP_API_CLIENT_ID,
          redirect_uri: process.env.REACT_APP_URL,
          state: "active",
          scope: "learner:read,learner:write",
          response_type: "CODE",
        },
      },
    });
    dispatch(setCredentials(res.data));
    navigate("/dashboard");
  };

  return {
    handleInputChange,
    handleSubmit,
  };
};

export default SignInLogic;
