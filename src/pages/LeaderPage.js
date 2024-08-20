import * as React from "react";
import { isEmpty } from "lodash";
import "./leaderpage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAxios from "../hooks/useAxios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const LeaderPage = (props) => {

  const isHome = (props && props.home) ? true : false
  const axiosPrivate = useAxiosPrivate();
  const { axiosReq, response, loading } = useAxios();
  const { axiosReq: userReq, response: userRes } = useAxios();
  const { axiosReq: accountReq, response: accountRes } = useAxios();
  const [gamificationLevels, setGamificationLevels] = useState([])
  const [userLevel, setUserLevel] = useState([])
  const [userCarLevel, setUserCarLevel] = useState(0)

  const getData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/users",
        requestConfig: {
          params: {
            filter: "gamificationAll",
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getAccountData = async () => {
    try {
      await accountReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/account"
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    getAccountData();
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      await userReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/user"
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {

    var userPoints = userRes?.data?.attributes?.pointsEarned
    var gamSize = gamificationLevels.length
    for (let i = 0; i < gamSize; i++) {
      if (userPoints <= gamificationLevels[i].points) {
        setUserLevel(gamificationLevels[i])
        break;
      }
    }
    if (gamSize && gamificationLevels[gamSize - 1] && gamificationLevels[gamSize - 1].points) {
      var carLevel = (userPoints / gamificationLevels[gamSize - 1].points) * 100
      carLevel = Math.round(carLevel);
      // carLevel = carLevel - 20
      console.log('car level  ', carLevel, gamSize - 1)
      setUserCarLevel(carLevel - 10)
    }

  }, [gamificationLevels, userRes]);

  useEffect(() => {

    if (accountRes && accountRes.data && accountRes.data.attributes && accountRes.data.attributes.gamificationLevels) {
      setGamificationLevels(accountRes.data.attributes.gamificationLevels)
    }
  }, [accountRes]);


  var tickangle = 0;
  var tickangleamount = 290 / gamificationLevels.length;

  return (
    <>
      {
        (!isHome) ? (<div className="leaderboard_banner">
          <div className="container">
            <h2>LEADERBOARD</h2>
            <p>See where you rank amongst your peers. Consume more learning to gain more points and advance on the Leaderboard.</p>
          </div>
        </div>) : ''
      }


      <div className="leaderboard_postbanner">
        <div className="container">
          <div className="leaderboard_banner_speedometer">
            <div className="leaderboard_banner_speedometer_left">
              <h4>Current Level</h4>
              <h5>{userLevel.name}</h5>
            </div>
            <div className="leaderboard_banner_speedometer_center">

              <div className='speed_wrap'>
                <div className='speed__wheel'>

                  <div className='subtick'>
                    {
                      [...Array(36)].map((elementInArray, index) => (
                        <div className='sub_ticks' style={{ transform: "rotate(" + (10 * index) + "deg)" }} key={index}></div>
                      ))
                    }
                    {
                      (gamificationLevels && gamificationLevels.length > 0) ? <div>
                        {
                          [...Array(10)].map((elementInArray, index) => (
                             <div className='sub_ticks1' style={{ transform: "rotate(" + (30 * index) + "deg)" }} key={index}><span>{index*500}</span></div>
                          ))

                          // gamificationLevels.map(function (item, index) {
                          //   return <div className='sub_ticks1' style={{ transform: "rotate(" + ((index == 0) ? "-30" : tickangleamount * index) + "deg)" }} key={index}><span>{item.points}</span></div>
                          // })
                        }
                      </div> : ''
                    }

                  </div>
                  <div className='pointer'></div>
                  <div className='endpoint'></div>
                </div>
              </div>

            </div>
            <div className="leaderboard_banner_speedometer_right">
              <h4>Points</h4>
              <h5>{userRes?.data?.attributes?.pointsEarned}</h5>
            </div>
          </div>

          <div className="leaderboard_progressbar_wrap">
            <img src="MarutiSuzuki_Assets/swift_car_edited.png" style={{ left: userCarLevel + "%" }} alt="..." className="leaderboard_progressbar_car" />
            <p className="leaderboard_progressbar_wrap_text">{userLevel.points - userRes?.data?.attributes?.pointsEarned} POINTS AWAY<br /> FROM {userLevel.name}</p>
            <img src="MarutiSuzuki_Assets/Group 11441.svg" alt="..." className="leaderboard_progressbar_rect" />
            <div className="leaderboard_progressbar"></div>
          </div>

          {
            (gamificationLevels && gamificationLevels.length > 0) ? <div className="leaderboard_levels">
              {
                gamificationLevels.map(function (item, key) {

                  return <div className="leaderboard_levels_item"><h4>{item.name}  {item.points}</h4></div>
                })
              }
            </div> : ''
          }


          <div className="leaderboard_scorelist">
            <div className="leaderboard_scorelist_left">
              <img src="MarutiSuzuki_Assets/leaderboard_cup_icon.png" />
            </div>
            <div>
              {!isEmpty(response?.data) ? <div className="row">
                {
                  response?.data.map(function (item, key) {
                    if (isHome && key > 2) {
                      return '';
                    } else {
                      if (key > 8) {
                        return ''
                      } else {
                        return (<div className="col-xs-6 col-md-4">
                          <div className="leaderboard_scorelist_item">
                            <div className="leaderboard_scorelist_item_circle">{key + 1}</div>
                            <div className="leaderboard_scorelist_item_text" style={{ flex: "1" }}>
                              <h4>{item?.attributes?.name}</h4>
                              <p>ID#{item?.id}</p>
                            </div>
                            <div><span className="float-end">{item?.attributes?.pointsEarned} POINTS</span></div>
                          </div>
                        </div>)
                      } 
                    }

                  })
                }
              </div> : ''}
            </div>
          </div>
          {
            (!isHome) ? (
              <div className="leaderboard_info">
                <div className="row">
                  <div className="col-4">
                    <div className="leaderboard_info_item">
                      <h2 className="leaderboard-heading2">EARN POINTS</h2>
                      <div className="leaderboard-heading3">
                        Operator Basics - Level 1 <br /> Every time you learn or achieve a <br /> Skill, you earn gamification <br />
                        points. See below for the number <br /> of points
                        you earn for each <br /> achievement.
                      </div>
                    </div>
                    <div className="leaderboard_info_item">
                      <h2 className="leaderboard-heading2">EARLY COMPLETION</h2>
                      <div className="leaderboard-heading3">
                        You can earn points for being <br /> among the first few Learners to <br /> complete a Course
                      </div>
                    </div>
                    <div className="leaderboard_info_item">
                      <h2 className="leaderboard-heading2">REFERENCE</h2>
                      <div className="leaderboard-heading3">
                        100 points for referring to a <br /> bookmarked Course
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="leaderboard_info_item">
                      <h2 className="leaderboard-heading2">SELF DRIVEN</h2>
                      <div className="leaderboard-heading3">
                        Upon completing a set of self-<br />enrolled <br /> Courses <br /> 50 for 1 Course <br /> 150 for 2 Courses
                      </div>
                    </div>
                    <div className="leaderboard_info_item">
                      <h2 className="leaderboard-heading2">UP SKILL</h2>
                      <div className="leaderboard-heading3">
                        Upon completing a specific <br /> number of Skills <br /> 50 for 1 Skill <br /> 100 for 2 Skills <br /> 150 for
                        3 Skills <br /> 300 for 4 Skills <br /><br /> Upon completing a specific Skill <br /> level <br /> 50 for 1 Skill
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="leaderboard_info_item">
                      <h2 className="leaderboard-heading2">FAST LEARNER</h2>
                      <div className="leaderboard-heading3">
                        Upon completing a specific <br /> number of Courses <br /> <br /> 50 for 1 Course <br /> 100 for 2 Courses <br />
                        400 for 5 Courses <br /> 1000
                        for 10 Courses <br /><br /> Upon registering for and <br /> completing Courses other than <br /> your assigned
                        Courses <br /> <br /> 20 for 1
                        Course <br /> 40 for 2 Courses <br /> 80 for 3 Courses <br /> 100 for 4 Courses
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : ''
          }

        </div>
      </div>
    </>
  );
};

export default LeaderPage;
