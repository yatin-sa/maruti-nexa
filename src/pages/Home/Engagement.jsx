import Card from "../../components/cards";
import { styled } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import calendar from "../../assets/images/calendar.jpeg";
import badge from "../../assets/images/badge.jpeg";
import gamification from "../../assets/images/gamification.jpeg";
import GamificationDialog from "./TableDialog";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Badges from "./Badges";
import CalendarView from "./Calendar";
import { useNavigate } from "react-router-dom";
import { isEmpty, isNil } from "lodash";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAxios from "../../hooks/useAxios";
import { getCredentials } from "../../features/Auth/authSlice";
import { useSelector } from "react-redux";

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  marginBottom: "50px",
  background: "#FFF",
  padding: "20px",
  color: "#fff"
});

const Engagement = (props) => {
  const [open, setOpen] = useState(false);
  const [badgesOpen, setBadgesOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const navigate = useNavigate();

  const axiosPrivate = useAxiosPrivate();
  const [quizData, setQuizData] = useState([]);
  const [course, setCourse] = useState('');
  const { axiosReq, response, loading } = useAxios();
  const { axiosReq: userenrollmentReq, response: userenrollRes } = useAxios();
  const auth = useSelector(getCredentials);
  const { accessToken } = auth;

  const getQuizData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/learningObjects",
        requestConfig: {
          params: {
            "ids": "course:9286000",
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const enrollUser = async (id,instance_id) => {
    try {
      await userenrollmentReq({
        axiosInstance: axiosPrivate,
        method: "POST",
        endpoint: `/enrollments`,
        requestConfig: {
          params: {
            loId: id,
            loInstanceId:instance_id
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    if (!isEmpty(response) && response.data && response.data.length > 0) {
      setCourse(response?.data[0].id)
      enrollUser(response?.data[0].id,response?.data[0].relationships.instances.data[0].id)
      console.log('asasasa',response?.data[0].relationships.instances.data[0].id);
    }
  }, [response]);
  
  const handleQuizClick =  () => {
    console.log('asasasa');
    getQuizData();
  }



  useEffect(() => {
    console.log('enrolll ',userenrollRes)
    if(userenrollRes && userenrollRes.data && userenrollRes.data.id){
      let playerUrl = `${process.env.REACT_APP_ALM_URL}/app/player?lo_id=${course}&access_token=${accessToken}`;
      props.onSelectLanguage(playerUrl);
    }
  
  }, [userenrollRes]);


  return (
    <>
        <Container className="bg-dark">
          <Badges open={badgesOpen} handleClose={() => setBadgesOpen(false)} />
          <GamificationDialog open={open} handleClose={() => setOpen(false)} />
          <CalendarView
            open={calendarOpen}
            handleClose={() => setCalendarOpen(false)}
          />
          <ListItem className="shadow-lg border " onClick={() => setCalendarOpen(true)}>
            <ListItemAvatar
              sx={{ marginRight: "20px" }}
            // onClick={() => setCalendarOpen(true)}
            >
              <Avatar sx={{ width: 60, height: 60, background: "#000", fontSize: "30px" }}><i className="fa-solid fa-calendar-days"></i></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem className="shadow-lg border " onClick={() => setBadgesOpen(true)}>
            <ListItemAvatar
              sx={{ marginRight: "20px" }}
            // onClick={() => setBadgesOpen(true)}
            >
              <Avatar sx={{ width: 60, height: 60, background: "#000", fontSize: "30px" }}><i className="fa-solid fa-certificate"></i></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Badges" />
          </ListItem>
          <ListItem className="shadow-lg border " onClick={() => navigate("/Social") }>
            <ListItemAvatar
              sx={{ marginRight: "20px" }}
            // onClick={() => setBadgesOpen(true)}
            >
              <Avatar sx={{ width: 60, height: 60, background: "#000", fontSize: "30px" }}><i className="fa-solid fa-book"></i></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Maruti dealer community" />
          </ListItem>
          <ListItem className="shadow-lg border " onClick={() => handleQuizClick()}>
            <ListItemAvatar
              sx={{ marginRight: "20px" }}
            >
              <Avatar sx={{ width: 60, height: 60, background: "#000", fontSize: "30px" }}><i className="fa-solid fa-circle-question"></i></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Quiz of the Day" />
          </ListItem>
          <ListItem className="shadow-lg border " onClick={() => navigate("/knowledge")}>
            <ListItemAvatar
              sx={{ marginRight: "20px" }}
              onClick={() => setOpen(true)}
            >
              <Avatar sx={{ width: 60, height: 60, background: "#000", fontSize: "30px" }}><i className="fa-solid fa-info"></i></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Knowledge Hub" />
          </ListItem>
        </Container>
    </>
  );
};

export default Engagement;
