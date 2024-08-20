import React from "react";
import styles from "./layout.module.css";
import Button from "../button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import MuiTooltip from "../tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCredentials, logOut } from "../../features/Auth/authSlice";
import Avatar from "@mui/material/Avatar";
import useAxios from "../../hooks/useAxios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { isEmpty, isNil } from "lodash";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Telefonica-New-1.svg";
import headerImg from "../../assets/img/header.PNG";
import { type } from "jquery";
import SearchBar from "../../components/Search";
import "./header.css"

const HeaderLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { accessToken } = useSelector(getCredentials);
  const { axiosReq, response, loading } = useAxios();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [adminrole, setAdminRole] = useState(false);
  const [headerClass, setHeaderClass] = useState('fixed-top');

  console.log(location.pathname);
  const handleLogout = () => {
    dispatch(logOut());
    handleClose();
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setHeaderClass('fixed-top header_new')
      }else{
        setHeaderClass('fixed-top')
      }
    });
  }, []);


  const logoStyle = {
    width: "200px",
    height: "100px",
    // boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
  };
  const getUser = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/user",
      });
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(
  //   "adminroletest",
  //   response?.data?.attributes?.roles.includes("Admin"),
  //   typeof response?.data?.attributes?.roles.includes("Admin"),
  //   adminrole
  // );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setAdminRole(response?.data?.attributes?.roles.includes("Admin"));
  }, [response]);

  useEffect(() => {
    if (!isNil(accessToken)) getUser();
  }, [accessToken]);

  if (isNil(accessToken)) return <></>;

  return (
    <div>
      <header>
        <nav className={"navbar navbar-expand-lg "+headerClass}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/courses">
              <img src="/maruti-suzuki-nexa.png"  />
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
              <span className="navbar-toggler-icon fas fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
              <div className="collapse-wrapper">
              <div className="mx-auto">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 header_center_nav">
                  <li className="nav-item">
                    <a title="Homepage" className={(location.pathname.includes('courses')) ? "nav-link  active" : "nav-link "} href="/courses">
                      <img src={(location.pathname.includes('courses')) ? "/MarutiSuzuki_Assets/dashboard_icon_focus.png" : "/MarutiSuzuki_Assets/dashboard_icon.png"} />
                    <span className="menuTitle">Homepage</span></a>
                  </li>
                  <li className="nav-item">
                    <a title="Prarambh Learning Path" className={(location.pathname.includes('/learning-path/learningProgram:124089')) ? "nav-link  active" : "nav-link "} href="/learning-path/learningProgram:124089">
                      <img src={(location.pathname.includes('/learning-path/learningProgram:124089')) ? "/MarutiSuzuki_Assets/learningpath_icon_focus.png" : "/MarutiSuzuki_Assets/learningpath_icon.png"} />
                    <span className="menuTitle">Prarambh Learning Path</span>
                     </a>
                  </li>
                  <li className="nav-item">
                    <a title="Leaderboard" className={(location.pathname.includes('leaderboard')) ? "nav-link  active" : "nav-link "} href="/leaderboard">
                      <img src={(location.pathname.includes('leaderboard')) ? "/MarutiSuzuki_Assets/leaderboard_icon_focus.png" : "/MarutiSuzuki_Assets/leaderboard_icon.png"} />
                    <span className="menuTitle">Leaderboard</span>
                    </a>
                    
                  </li>
                  <li className="nav-item">
                    <a title="Knowledge Hub" className={(location.pathname.includes('knowledge')) ? "nav-link  active" : "nav-link "} href="/knowledge">
                      <img src={(location.pathname.includes('knowledge')) ? "/MarutiSuzuki_Assets/knowledgehub_icon_focus.png" : "/MarutiSuzuki_Assets/knowledgehub_icon.png"} />
                     <span className="menuTitle">Knowledge Hub</span>
                    </a>
                   
                  </li>
                  <li className="nav-item">
                    <a title="Social Learning" className="nav-link " href="/Social">
                      <img src="/MarutiSuzuki_Assets/quize_icon.png" />
                    <span className="menuTitle">Social Learning</span>
                    </a>
                    
                  </li>
                </ul>
              </div>

              <ul className="navbar-nav mb-2 mb-lg-0 header_right_nav">

                <li className="nav-item">
                  <a title="Chat" className="nav-link" href="#">
                    <img src="/MarutiSuzuki_Assets/chat_icon.png" />
                    <span className="menuTitle">Chat</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a title="Notification" className="nav-link" href="#">
                    <img src="/MarutiSuzuki_Assets/notification_icon.png" />
                    <span className="menuTitle">Notification</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a title="User" className="nav-link dropdown-toggle header_right_nav_avtar_a" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="header_right_nav_avtar" src={(response?.data?.attributes?.avatarUrl) ? response?.data?.attributes?.avatarUrl : "MarutiSuzuki_Assets/default_user_avatar.svg"} />
                  <span className="menuTitle">User</span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                      <a className="dropdown-item" href="#">{response?.data?.attributes?.name}</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Social">Social Learning</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="http://54.152.80.48:3000/signup">Admin</a>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={handleLogout}>Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* <nav className={`navbar navbar-expand-lg  ${styles.headerContainer}`}>
          {location.pathname !== "/terms" && (
            <Link to="/courses">
              {/* <HomeIcon fontSize="large" style={{ color: "#000000" }} /> 
              <img src={logo} alt="Icon" style={logoStyle} />
            </Link>
          )}
          <div className={`${styles.content}`}>
            <img src={headerImg} width={830} />
          </div>
          <div className={`${styles.content}`}>
            <div className={styles.text}></div>

            <IconButton onClick={handleClick}>
              <Avatar
                src={
                  !isEmpty(response)
                    ? response?.data?.attributes?.avatarUrl
                    : ""
                }
              />
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
              <MenuItem>{response?.data?.attributes?.name}</MenuItem>
            </Menu>
          </div>
        </nav> */}
      </header>
    </div>
  );
};

export default HeaderLayout;
