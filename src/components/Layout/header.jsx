import React, { useRef } from "react";
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
import { getCredentials, logOut ,setPrathamLO} from "../../features/Auth/authSlice";
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
  const [searchExpanded, setSearchExpanded] = useState(false);
  const { axiosReq: loReq, response: loRes } = useAxios();
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

  function activateSearch() {
    setSearchExpanded((oldValue) => !oldValue);
  }
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
    if (!isNil(accessToken)) {
      getUser();
      getDataParamb()
    }
  }, [accessToken]);

  const wrapperRef = useRef(null);

  useEffect(() => {
   
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSearchExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getDataParamb = async () => {
    try {
      await loReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/learningObjects/learningProgram%3A132091?include=enrollment"
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (loRes && loRes.included) {
      const enrollStaus = loRes.included.filter(
        (x) => x.type === "learningObjectInstanceEnrollment"
      );
      if(enrollStaus && enrollStaus.length>0){
        var enrollPratham = enrollStaus[0]?.attributes?.progressPercent
        console.log('gygyggygygygygygygygygyggyg ',enrollStaus[0])
        if(enrollPratham==100){
          dispatch(setPrathamLO({ pratham: true }));
        }
      }
    }
  }, [loRes]);


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
                    <a title="Content Catalog" className={(location.pathname.includes('/all-learnings')) ? "nav-link  active" : "nav-link "} href="/all-learnings">
                      <img src={(location.pathname.includes('/learning-path/learningProgram:132091')) ? "/MarutiSuzuki_Assets/learningpath_icon_focus.png" : "/MarutiSuzuki_Assets/learningpath_icon.png"} />
                    <span className="menuTitle">Content Catalog</span>
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

              <li className="nav-item" ref={wrapperRef}>
                    {!searchExpanded && (
                      <a
                        title="Search"
                        className="nav-link"
                        role="button"
                        onClick={(e) => {
                          e.preventDefault();
                          activateSearch();
                        }}
                      >
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 32 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon / feathericons / search">
                            <path
                              id="Vector"
                              d="M14.6667 25.7719C20.5577 25.7719 25.3333 20.9963 25.3333 15.1053C25.3333 9.21423 20.5577 4.4386 14.6667 4.4386C8.77563 4.4386 4 9.21423 4 15.1053C4 20.9963 8.77563 25.7719 14.6667 25.7719Z"
                              stroke="#fff"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              id="Vector_2"
                              d="M28.0002 28.4386L22.2002 22.6386"
                              stroke="#fff"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </svg>

                        <span className="menuTitle hidden-def">Search</span>
                      </a>
                    )}
                    {searchExpanded && <SearchBar></SearchBar>}
                  </li>
                  {!searchExpanded && (
                    <>
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
                  <a title={response?.data?.attributes?.name} className="nav-link dropdown-toggle header_right_nav_avtar_a" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    {/* <li>
                      <a className="dropdown-item" href="http://54.152.80.48:3000/signup">Admin</a>
                    </li> */}
                    <li>
                      <a className="dropdown-item" onClick={handleLogout}>Logout</a>
                    </li>
                  </ul>
                </li>
                    </>
                  )}



                
               
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
