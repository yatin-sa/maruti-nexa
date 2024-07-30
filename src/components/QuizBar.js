import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { isEmpty, isNil } from "lodash";
import useAxios from "../hooks/useAxios";
import AuthClient from "../api";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/Auth/authSlice";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import "./QuizBar.css";
// import "./util.css";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";

const QuizDayLO = () => {
  const axiosPrivate = useAxiosPrivate();

  const [quizData, setQuizData] = useState([]);
  const { axiosReq, response, loading } = useAxios();

  const getQuizData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/learningObjects",
        requestConfig: {
          params: {
            "filter.tagName": "quiz",
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getQuizData()
  }, []);

  useEffect(() => {
    if (!isEmpty(response) && response.data && response.data.length>0) {
      setQuizData(response.data[0]);
    }
  }, [response]);

 

  return (
    <>
      <div className="bg-white p-2 shadow-lg text-center mb-4 quiz_day_card">
        <p><i className="fa-solid fa-circle-question"></i> Quiz of the Day: {quizData?.attributes?.localizedMetadata[0].name}<a href="" className="btn btn-dark btn-sm">Attempt quiz</a></p>
        
      </div>
    </>
  );
};

export default QuizDayLO;
