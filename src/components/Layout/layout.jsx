import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Footer from "./footer";
import HeaderLayout from "./header";
import Navbar from "./Navbar";
import styles from "./layout.module.css";
import { useSelector } from "react-redux";
import { getCredentials } from "../../features/Auth/authSlice";
import { isNil } from "lodash";
import Carousel from "../../pages/Home/recommendedTraining/Carousel";

const Layout = () => {
  const { jumboImg, jumboChild, jumboImg2 } = styles;
  const [check, setCheck] = useState(true);
  const location = useLocation();
  const { accessToken } = useSelector(getCredentials);
  const path = ["/courses", "/resources", "/badges", "/certificates"];
  useEffect(() => {
    if (path.includes(location.pathname)) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [location.pathname]);
  return (
    <>
      {<HeaderLayout />}
      <div style={{ height: "100%" }}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
