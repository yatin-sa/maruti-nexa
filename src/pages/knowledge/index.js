import Grid from "@mui/material/Grid";
import "./knowledge.css";
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
import { Box, Tab, Tabs } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "300px",
}));

const TimeContainer = ({ time }) => {
  return (
    <>
      <Typography sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "12px" }}>
        {time}
      </Typography>
    </>
  );
};

const CourseOverview = () => {

  const [jobAids, setJobAids] = useState([]);
  const [loading, setLoading] = useState(true);

  const adminAccessToken = useSelector(getAdminAccessToken);
  const navigate = useNavigate();

  const getJobAids = async () => {
    var options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminAccessToken}`,
      },
    };
    setLoading(true);
    fetch(process.env.REACT_APP_ALM_URL + '/primeapi/v2/learningObjects?include=instances.loResources.resources&page[limit]=10&filter.loTypes=jobAid&sort=name&filter.ignoreEnhancedLP=true',
      options
    ).then((response1) => {
      response1.json().then((data) => {
        const jobaids = data.included.filter(
          (x) => (x.id.indexOf("jobAid:") > -1) && x.type=='resource'
        );

        setJobAids(jobaids);
        setLoading(false);
      });
    });
  };
  console.log("job aids things", jobAids);
  useEffect(async () => {
    getJobAids();
  }, [adminAccessToken]);



  if (loading) {
    return (
      <LinearProgress
        sx={{
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#2d3494", // Change this to the desired bar color
          },
        }}
      />
    );
  }

  return (
    <>
      <div className="knowldege_banner">
        <div className="container">
          <h1>KNOWLEDGE HUB</h1>
          <p>Use the filters on the left to refine your search.</p>
        </div>

      </div>
      <div>
        <div className="container" >
          <div className="row">
            {/* <div className="col-3">
              <div className="knowldge_filter_head">
                <h2><img src="MarutiSuzuki_Assets/knowledgehub_icon_filter.png" />Filters</h2>
              </div>
              <hr className="knowldge_filter_head_border" />
              <div className="knowldge_filter_body">
                <p className="knowldge_filter_body_label">Format</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" checked />
                  <label className="form-check-label">PDF</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <label className="form-check-label">PPT</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <label className="form-check-label">MS Word</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <label className="form-check-label">Video</label>
                </div>
              </div>
              <hr className="knowldge_filter_head_border" />
              <div className="knowldge_filter_body">
                <p className="knowldge_filter_body_label">Format</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" checked />
                  <label className="form-check-label">PDF</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <label className="form-check-label">PPT</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <label className="form-check-label">MS Word</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <label className="form-check-label">Video</label>
                </div>
              </div>
            </div> */}
            <div className="col-12">
              <div className="knowledge_content">
                <div className="row">
                  {
                    (jobAids && jobAids.length > 0) ? (
                      jobAids.map(function (item, key) {

                        return (<div className="col-6 col-md-4 col-xl-3">
                          <div className="card job_card shadow-lg ">
                            <div className="row">
                              <div className="col-3"><p><i className="fa-solid fa-file-pdf"></i></p></div>
                              <div className="col-9"><h2><a target="_blank" href={item.attributes.downloadUrl}>{item.attributes.name}</a></h2></div>
                            </div>


                          </div>
                        </div>)
                      })
                    ) : ''
                  }

                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-3">
              <div
                className="p-4 text-white jumbo-container"
                style={{ marginBottom: "50px" }}
              >

              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default CourseOverview;
