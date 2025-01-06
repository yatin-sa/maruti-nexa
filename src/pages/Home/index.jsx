import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import useAxios from "../../hooks/useAxios";
import { getCredentials } from "../../features/Auth/authSlice";
import styles from "./Home.module.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { isEmpty, isNil } from "lodash";
import { useNavigate } from "react-router-dom";
import covimage from "../../assets/images/cover_image/elearning.jpg";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import RecommendedTraining from "./recommendedTraining/RecommendedTraining";
import jumStyles from "../../components/Layout/layout.module.css";
import MyLearning from "./MyLearning";
import Subscriptions from "./Subscriptions";
import Catalogue from "./catalog/Catalogue";
import CalendarView from "./Calendar";
import GamificationView from "./Gamification";
import Engagement from "./Engagement";
import JumboCarousel from "./JumboCarousel";
import GamificationDialog from "./TableDialog";
import Footer from "../../components/Layout/footer";
import headerImg from "../../assets/img/header.PNG";
import Grid from "@mui/material/Grid";
import "./home.css";
import five from "../../assets/img/carousel/two.PNG";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import NotificationMessages from "./NotificationMessages";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { getAdminAccessToken,getPratham } from "../../features/Auth/authSlice";
import CouponList from "../../components/Coupon";
import QuizDayLO from "../../components/QuizBar";
import Announcements from "../../components/Announcements";
import RecommendedMaruti from "./recommendedTraining/RecommendedMaruti";
import MyLearningMaruti from "./MyLearningMaruti";
import LeaderPage from "../LeaderPage";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReactTimeAgo from 'react-time-ago'
import CalendarWidget from "./CalendarWidget";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const Home = () => {
  const { axiosReq, response, loading } = useAxios();
  const { axiosReq:quizReq, response:quizRes } = useAxios();
  const { jumboImg } = jumStyles;
  TimeAgo.addDefaultLocale(en)
  const auth = useSelector(getCredentials);
  const { accessToken } = auth;
  const axiosPrivate = useAxiosPrivate();
  const [open, setOpen] = useState(false);
  const [next, setNext] = useState(null);
  const [data, setData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseID, setSelectedCourseID] = useState("");
  const [selectedCourseInstance, setSelectedCourseInstance] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [enrollUserID, setEnrollUserID] = useState("");
  const [enrollUserEmail, setEnrollUserEmail] = useState("");
  const { axiosReq: userenrollmentReq, response: userenrollRes } = useAxios();
  const [course, setCourse] = useState('');
  const [couponData, setCouponData] = useState([]);
  const { axiosReq: userdataReq, response: userdataRes } = useAxios();
  const { axiosReq: accountdataReq, response: accountdataRes } = useAxios();
  const { axiosReq: socialReq, response: socialRes } = useAxios();
  const { axiosReq: loReq, response: loRes } = useAxios();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const adminAccessToken = useSelector(getAdminAccessToken);
  const [userGamification, setUserGamification] = useState('');
  const [LoSrc, setLoSrc] = useState("");
  const pratham = useSelector(getPratham);
  
  
  let params = new URLSearchParams(response?.links?.next);
  let next1 = params.get("page[cursor]");

  const handleChangePagination = () => {
    if (!isNil(response?.links?.next)) setNext(next1);
    else setNext(null);
  };
  const lastPostRef = useInfiniteScroll(
    loading,
    response?.links?.next,
    handleChangePagination
  );

  const getData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/learningObjects",
        requestConfig: {
          params: {
            "filter.learnerState": "enrolled,completed,started,notenrolled",
            "page[cursor]": isNil(next) ? "" : next,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  
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

  const getSocialData = async () => {
    try {
      await socialReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/boards/1846/posts?include=createdBy&page[offset]=0&page[limit]=10&sort=-dateCreated"
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getDataById = async (id) => {
    try {
      await userdataReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/user",
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getAccountData = async () => {
    try {
      await accountdataReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/account",
      });
    } catch (e) {
      console.log(e);
    }
  };

  function openEnrollModal(coupon_id, course_name, course_id, instance_id) {
    setOpenModal(true);
    setSelectedCourse(course_name);
    setSelectedCourseInstance(instance_id);
    setSelectedCourseID(course_id);
    setSelectedCoupon(coupon_id);
  }

  const fetchCoupons = (id) => {
    let config = {
      headers: {
        header1: "test",
      },
    };
    axios
      .get(
        "https://viku.space/informatica/getCoupon.php?user_id=" + id,
        [],
        config
      )
      .then((response) => {
        setCouponData(response.data);
      });
  };

  const findUserID = () => {
    var options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminAccessToken}`,
      },
    };
    const email = "email:" + enrollUserEmail;
    fetch(
      process.env.REACT_APP_ALM_URL +
      "/primeapi/v2/users?page[offset]=0&page[limit]=10&sort=id&ids=" +
      email,
      options
    ).then((response) => {
      response.json().then((data) => {
        console.log("ssss ", data?.data[0]?.id);
        if (data?.data[0]?.id) {
          setEnrollUserID(data?.data[0]?.id);
        } else {
          toast.error(`User account not found`);
        }
      });
    });
  };

  const enrollUserLO = () => {
    let config = {
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    };

    axios
      .post(
        process.env.REACT_APP_ALM_URL +
        "/primeapi/v2/users/" +
        enrollUserID +
        "/enrollments?loId=" +
        selectedCourseID +
        "&loInstanceId=" +
        selectedCourseInstance +
        "&allowMultiEnrollment=false",
        [],
        config
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);
        if (response?.data?.data?.attributes?.state == "ENROLLED") {
          const TUCouponId = axios.get(
            `https://viku.space/informatica/updateCouponData.php?id=${selectedCoupon}`,
            [],
            config
          );
          toast.success(`User enrolled successfully`);
          setOpenModal(false);
          setSelectedCourse("");
          setSelectedCourseInstance("");
          setSelectedCourseID("");
          setSelectedCoupon("");
          fetchCoupons(userdataRes.data.id);
        } else {
          toast.error(`Something went wrong`);
        }
      });
  };

  useEffect(() => {
    enrollUserLO();
  }, [enrollUserID, adminAccessToken]);
  useEffect(() => {
    getData();
  }, [next]);
  useEffect(() => {
    if (!isEmpty(response.data)) {
      setData([...data, ...response.data]);
    }
  }, [response]);



  useEffect(async () => {
    getDataById();
    getAccountData()
    getSocialData();
    getDataParamb()
  }, []);

  useEffect(async () => {
    // console.log("user id ", userdataRes.data.id);
    // fetchCoupons(userdataRes.data.id);
  }, [userdataRes]);

  useEffect(() => {
    // if (loRes && loRes.included) {
    //   const enrollStaus = loRes.included.filter(
    //     (x) => x.type === "learningObjectInstanceEnrollment"
    //   );
    //   if(enrollStaus && enrollStaus.length>0){
    //     var enrollPratham = enrollStaus[0]?.attributes?.progressPercent
    //     console.log('gygyggygygygygygygygygyggyg ',enrollStaus[0])
    //     if(enrollPratham==100){
    //       dispatch(setPrathamLO({ pratham: true }));
    //       setPratham(true)
    //     }else{
    //       setPratham(false)
    //     }
    //   }
    
    // }

    // For development. remove once development completed
    // setPratham(true);
  }, [loRes]);

  

  useEffect(async () => {
    var userGame = '';
    // var currentPoints = userdataRes?.data?.attributes?.pointsEarned;
    var currentPoints = 5020
    var gamificationLevels = accountdataRes?.data?.attributes.gamificationLevels;
    for (let i = 0; i < gamificationLevels.length; i++) {
      console.log('dssd')
      if (gamificationLevels[i].points >= currentPoints) {

        userGame = gamificationLevels[i].name;
        break;
      }
    }
    // accountdataRes?.data?.attributes.gamificationLevels.map(function(item,i){
    //   if(currentPoints <= item.points){
    //     console.log('dssd')
    //     userGame = item.name;
    //     return userGame;
    //   }
    //   console.log('kokok ',accountdataRes?.data?.attributes.gamificationLevels[i+1])
    //   // if(currentPoints >= item.points && userdataRes?.data?.attributes?.pointsEarned<accountdataRes?.data?.attributes.gamificationLevels[i+1].points){
    //   //   userGame = item.name;
    //   // }
    // })

    // const userGame = accountdataRes?.data?.attributes.gamificationLevels.filter(
    //   (x) =>  userdataRes?.data?.attributes?.pointsEarned >= x.points
    // );
    console.log(userGame, userdataRes?.data?.attributes?.pointsEarned, accountdataRes?.data?.attributes.gamificationLevels)
    // setUserGamification()
    // console.log("user id ", userdataRes.data.id);
    // fetchCoupons(userdataRes.data.id);
  }, [accountdataRes]);

  const handleLanguage = (src) => {
    console.log('parent ', src)
    setLoSrc(src)
  }

  window.addEventListener("message", async function closePlayer(event) {
    if (event.data === "status:close") {
      setLoSrc("");
    }
  });
  const handleQuizClick =  () => {
    getQuizData();
  }

  const getQuizData = async () => {
    try {
      await quizReq({
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

  useEffect(() => {
    if (!isEmpty(quizRes) && quizRes.data && quizRes.data.length > 0) {
      setCourse(quizRes?.data[0].id)
      enrollUser(quizRes?.data[0].id,quizRes?.data[0].relationships.instances.data[0].id)
     
    }
  }, [quizRes]);

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
    console.log('enrolll ',userenrollRes)
    if(userenrollRes && userenrollRes.data && userenrollRes.data.id){
      let playerUrl = `${process.env.REACT_APP_ALM_URL}/app/player?lo_id=${course}&access_token=${accessToken}`;
      setLoSrc(playerUrl)
    }
  
  }, [userenrollRes]);
  return (
    <>
      {LoSrc === "" ? (<>
        <GamificationDialog open={open} handleClose={() => setOpen(false)} />
        <Announcements />
       
        <div className="home_banner">
        {/* <div className="search_bar"><SearchBar /></div> */}
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-xs-9">
                <h2>Train your self like a rock star</h2>
                <p>
                Welcome to Maruti Learning Academy, where knowledge meets inspiration. Discover a nurturing environment that fosters growth and excellence. Empower your future with our expert-led educational programs. Join us on a journey towards academic success and personal development.
                </p>
                {/* <button>Get Started</button> */}
              </div>
              <div className="col-md-5 col-xs-3"></div>
            </div>
          </div>

        </div>
        {/* <div className="main_home_banner1">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="mmast1.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="mmast2.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
        {/* <Engagement onSelectLanguage={handleLanguage} /> */}


        {/* <QuizDayLO /> */}


        <LeaderPage home={true} />

        {/* <Grid container>
          <Grid item xs={9}>
            <MyLearning />

          </Grid>
          <Grid item xs={3}>
            <div className="home_right_card">
              <h1>Learning Points</h1>
              <div className="home_right_card_content card p-4 mt-4 shadow-lg text-center  bg-dark">
                <div className="circle_wrap">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    onClick={() => setOpen(true)}
                  >
                    <CircularProgress
                      variant="determinate"
                      color="warning"
                      value={userdataRes?.data?.attributes?.pointsEarned}
                      size="98px"
                      thickness={4}
                    />
                    <Typography position="absolute" sx={{ color: "#fff" }}>
                      <span>
                        <b>{userdataRes?.data?.attributes?.pointsEarned}</b>
                      </span>
                      <hr style={{ margin: "0" }} />
                      <span>BRONZE</span>
                    </Typography>
                  </Box>
                </div>
                <p className="text-white">Need 200 points for next level</p>
              </div>
            </div>

           
          </Grid>
        </Grid> */}
        {/* <RecommendedTraining />
      <RecommendedTraining type="multi_skill_interest"/> */}
        {/* <MyLearning /> */}
        <div className="mylearning">
          <div className="container">
            <MyLearningMaruti type="peer_group" pratham={pratham}/>
          </div>
        </div>
        <div className="ms_social_posts">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-7">
              <h2>DEALER COMMUNITY <a href="/Social" className="float-end">View All <img src="MarutiSuzuki_Assets/arrow_right_blue.png" /></a></h2>
              {
              (socialRes && socialRes?.data && socialRes?.data.length > 0) ? <div className="row">
                {
                  socialRes?.data.map(function (item, key) {

                    if (key > 3) {
                      return ''
                    } else {
                      var userid = item?.relationships?.createdBy?.data?.id
                      var userList = socialRes.included.filter(
                        (x) => x.id === userid
                      );
                      var userDetails = (userList && userList[0]) ? userList[0] : []
                      return (
                        <div className="col-6">
                          <div className="ms_social_post_item">
                            <div className="row">
                              <div className="col-2">
                              <img src={userDetails?.attributes?.avatarUrl} />
                              </div>
                              <div className="col-10">
                              <h4>{userDetails?.attributes?.name}<span className="float-end"><ReactTimeAgo date={item?.attributes?.dateCreated} locale="en-US" /></span></h4>
                            <p>{item?.attributes.text}</p>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      )
                    }

                  })
                }
              </div> : ''
            }
              </div>
              <div className="col-12 col-xl-5">
              <h2>CALENDAR</h2>
              <CalendarWidget />
              </div>
            </div>
            
          </div>
        </div>
        <div className="ms-recomm-role">
          <div className="container">
           <RecommendedMaruti type="skill_interest" heading="RECOMMENDATION BASED ON ROLE" pratham={pratham} /> 
          </div>
        </div>
        <div className="ms_recomm">
          <div className="container">
            <RecommendedMaruti type="peer_group" pratham={pratham} />
          </div>
        </div>

        <div className="ms_quizday">
          <div className="container">
            <h2>QUIZ OF THE DAY<a onClick={() => handleQuizClick()} className="float-end">Know More <img src="MarutiSuzuki_Assets/arrow_right_blue.png" /></a></h2>
            <p>A section from where dealers can answer a new question each day and win prizes.</p>
            <div className="ms_quiz_design">
              <div>
                <img src="MarutiSuzuki_Assets/quizicons.svg" className="ms_quiz_icon" />
              </div>
              <div><p>Quickly access documents like ppt, pdf, videos</p></div>
              <div>
                <a className="ms_quiz_btn" href="/knowledge" >Knowledge Hub</a>
              </div>
            </div>
          </div>  
        </div>
       
        {/* <Catalogue home={1} /> */}

        <div className="container-fluid d-flex flex-wrap justify-content-center">
          {!isEmpty(data) &&
            data.map((val, ind) => {
              if (data.length === ind + 1)
                return (
                  <Card
                    sx={{ maxWidth: 385 }}
                    key={ind}
                    ref={lastPostRef}
                    ind={ind}
                    val={val}
                  //handleNavigateUser={handleNavigateUser}
                  />
                );
              return (
                <Card
                  sx={{ maxWidth: 385 }}
                  key={ind}
                  ind={ind}
                  val={val}
                //handleNavigateUser={handleNavigateUser}
                />
              );
            })}
        </div>
      </>
      ) : (
        <div style={{position:"fixed",width:"100%",zIndex:"99999"}}>
          <div style={{ height: "100vh", width: "100%" }}>
        <iframe src={LoSrc} height="100%" width="100%"></iframe>
      </div></div>
        
      )}
    </>
  );
};
const Card = React.forwardRef(({ val, ind, handleNavigateUser }, ref) => {
  const [flag, setFlag] = React.useState(true);
  const colorChange = () => {
    setFlag(!flag);
  };
  const body = (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Course">
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={val.attributes.localizedMetadata[0].name}
        subheader="September 14, 2016"
        handleNavigateUser={handleNavigateUser}
      />
      <CardMedia
        component="img"
        height="194"
        style={{
          margin: "5px",
          width: "98%",
        }}
        image={
          isNil(val.attributes.imageUrl) ? covimage : val.attributes.imageUrl
        }
        alt="Course Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {val.attributes.localizedMetadata[0].description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={colorChange}
          color={flag ? "default" : "error"}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" color="primary">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </>
  );
  const content = ref ? (
    <div
      className="card"
      ref={ref}
      onClick={(e) => handleNavigateUser(val.id)}
      style={{
        width: "28rem",
        margin: "15px",
        // backgroundImage: `url('${val.attributes.imageUrl}')`,
      }}
    >
      {body}
    </div>
  ) : (
    <div
      className="card"
      onClick={(e) => handleNavigateUser(val.id)}
      style={{
        width: "28rem",
        margin: "15px",
        // backgroundImage: `url('${val.attributes.imageUrl}')`,
      }}
    >
      {body}
    </div>
  );
  return null;
});
export default Home;
