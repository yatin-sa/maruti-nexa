import Grid from "@mui/material/Grid";
import "./styles.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Divider from "@mui/material/Divider";
import useAxios from "../../hooks/useAxios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import loadingg from "../../assets/img/loading.png";
import credly from "../../assets/img/credly.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { isEmpty, isNil } from "lodash";
import { useNavigate } from "react-router-dom";
import { getCredentials } from "../../features/Auth/authSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Classroom from "../classroom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Virtual from "../Virtual";
import LinearProgress from "@mui/material/LinearProgress";
import loadScript from "../../components/Lib/helper.js";
import Rating from "@mui/material/Rating";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { getAdminAccessToken } from "../../features/Auth/authSlice";
import axios from "axios";

const ShareCart = () => {
  const [badgeimage, setBadgeimage] = useState("");
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const auth = useSelector(getCredentials);
  const adminAccessToken = useSelector(getAdminAccessToken);
  const navigate = useNavigate();
  const { accessToken } = auth;
  const { axiosReq, response } = useAxios();
  const { axiosReq: enrollmentReq, response: enrollRes } = useAxios();
  const { axiosReq: userenrollmentReq, response: userenrollRes } = useAxios();
  const { axiosReq: userdataReq, response: userdataRes } = useAxios();
  const { axiosReq: catalogDataReq, response: catalogDataRes } = useAxios();

  const axiosPrivate = useAxiosPrivate();
  const getDataById = async (id) => {
    try {
      await userdataReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/user",
      });
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");

  const assignCart = (user_id) => {
    var cart_id = atob(id);
    console.log("uuuu ", cart_id);
    let config = {
      headers: {
        header1: "test",
      },
    };
    var formdata = new FormData();
    formdata.append("cart_id", cart_id);
    formdata.append("assign", 1);
    formdata.append("user_id", user_id);
    axios
      .post(process.env.REACT_APP_API_URL + "assigncart.php", formdata, config)
      .then((response) => {
        if (response.data && response.data.success == true) {
          localStorage.setItem("cart_id", cart_id);
          navigate("/payment");
        } else {
          navigate("/courses");
        }
      });
  };

  useEffect(() => {
    if (!isNil(id)) {
      getDataById(id);
    }
  }, [id]);

  useEffect(() => {
    if (userdataRes?.data?.id) {
      assignCart(userdataRes?.data?.id);
    }
  }, [userdataRes]);

  return (
    <LinearProgress
      sx={{
        "& .MuiLinearProgress-bar": {
          backgroundColor: "#2d3494", // Change this to the desired bar color
        },
      }}
    />
  );
};

export default ShareCart;
