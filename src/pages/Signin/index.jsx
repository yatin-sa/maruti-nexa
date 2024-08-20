import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import SignInLogic from "./SignInLogic";
import { isEmpty, isNil } from "lodash";
import useAxios from "../../hooks/useAxios";
import AuthClient from "../../api";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/Auth/authSlice";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import "./main.css";
import "./util.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { axiosReq, response, loading } = useAxios();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleInputChange, handleSubmit } = SignInLogic();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const code = params.get("code");

  useEffect(() => {
    if (!isNil(code)) {
      axiosReq({
        axiosInstance: AuthClient,
        endpoint: "/token",
        method: "POST",
        requestConfig: {
          params: {
            client_id: process.env.REACT_APP_API_CLIENT_ID,
            client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
            code,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      });
    }
  }, [code]);
  useEffect(() => {
    if (!isEmpty(response)) {
      navigate("courses");
      dispatch(setCredentials({ accessToken: response.access_token }));
    }
  }, [response]);

  if (loading)
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#2d3494", // Change this to the desired bar color
            },
          }}
        />
        ;
      </Box>
    );
  return (
    <>
    <div className="ms_sign_page">
      <header>
        <nav className={"navbar navbar-expand-lg ms_sign_header"}>
          <div className="container">
            <a className="navbar-brand" href="/courses">
              <img src="/MarutiSuzuki_Assets/maruti-suzuki-arena-vector-logo.png" />
            </a>
            {/* <SearchBar /> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
              <div className="mx-auto">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 header_center_nav">
                  <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">CORPORATE</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">SALES</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">SERVICE</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">MORE FROM US</a></li>
                </ul>
              </div>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 header_right_nav">
                <li className="nav-item"><a className="nav-link" href="#"><img src="/MarutiSuzuki_Assets/Group 10913.png" /></a></li>
                <li className="nav-item"><a className="nav-link" href="#"><img src="/MarutiSuzuki_Assets/Group 10911.png" /></a></li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
      <dic className="ms_sign_content">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-2 col-lg-1"></div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div className="ms_sign_card">
                <div className="ms_sign_card_left">
                  <img src="/MarutiSuzuki_Assets/Group 10915.png" />
                  <h3>We promise you <span>100% secure</span> data protection</h3>
                </div>
                <div className="ms_sign_card_right">
                  <h2>LOGIN</h2>
                  <a
                    href={`${process.env.REACT_APP_ALM_URL}/oauth/o/authorize?client_id=${process.env.REACT_APP_API_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_URL}&state=active&scope=learner:read,learner:write&response_type=CODE`}>
                    Sign In
                  </a>
                </div>


              </div>
            </div>
            <div className="col-xxl-3 col-xl-2 col-lg-1"></div>
          </div>
        </div>
      </dic>
      <div className="container">
        <div className="ms_sign_footer">
          <p>© All rights reserved by Adobe Systems</p>
        </div>
      </div>

    </div>
    </>
  );
};

export default SignIn;
