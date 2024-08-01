import Grid from "@mui/material/Grid";
import "./lpstyles.css";
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
import Rating from "@mui/material/Rating";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { getAdminAccessToken } from "../../features/Auth/authSlice";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import RecommendedMaruti from "../Home/recommendedTraining/RecommendedMaruti.jsx";
import { Box, Tab, Tabs } from "@mui/material";
import { getTime, loadScript } from "../../components/Lib/helper.js"

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "300px",
}));

const LearningOverview = () => {
  const [expanded, setExpanded] = useState("");
  const [courseJobs, setCourseJobs] = useState([]);
  const [fileClass, setFileClass] = useState("");
  const [responseLP, setResponseLP] = useState([]);
  const [courseSurvey, setcourseSurvey] = useState([]);

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
  const handleExpandClick = (index) => {
    setExpanded(!expanded);
    if (expanded === index) {
      setExpanded("");
    } else {
      setExpanded(index);
    }
  };

  const [badgeimage, setBadgeimage] = useState("");
  const { id } = useParams();
  const [surveyRes, setSurveyRes] = useState([]);
  const [surveyCourse, setSurveyCourse] = useState("");
  const [clabel, setClabel] = useState();
  const [Loinstance, setLoInstance] = useState([]);
  const [Loresource, setLoResource] = useState();
  const [loading, setLoading] = useState(true);
  const [CatalogCourse, setCatalogCourse] = useState([]);
  const [ExistSubs, setExistSubs] = useState(false);
  const [teamType, setTeamType] = useState("team");
  const [cartTeamType, setCartTeamType] = useState("");
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false);
  const [selectedOption, setSelectedOption] = useState("team");
  const [enrollmentLPList, setEnrollmentLPList] = useState([]);
  const [disablePage, setDisablePage] = useState(false);
  const [qty, setQty] = useState("1");

  const [userData, setUserData] = useState({
    recipient_email: "",
    issuer_earner_id: "",
    issued_to_first_name: "",
    issued_to_last_name: "",
  });

  const [src, setSrc] = useState("");
  const auth = useSelector(getCredentials);
  const adminAccessToken = useSelector(getAdminAccessToken);
  const navigate = useNavigate();
  const { accessToken } = auth;
  const { axiosReq, response } = useAxios();
  const { axiosReq: jobReq, response: jobRes } = useAxios();
  const { axiosReq: enrollmentReq, response: enrollRes } = useAxios();
  const { axiosReq: surveyCourseReq, response: surveyCourseRes } = useAxios();
  const { axiosReq: userenrollmentReq, response: userenrollRes } = useAxios();
  const { axiosReq: userdataReq, response: userdataRes } = useAxios();
  const { axiosReq: catalogDataReq, response: catalogDataRes } = useAxios();
  const { axiosReq: enrollmentLPReq, response: enrollmentLPRes } = useAxios();

  //const { axiosReq: surveyReq, response: surveyRes } = useAxios();
  console.log(enrollRes, "blahh");
  const axiosPrivate = useAxiosPrivate();

  const getSurveyCourse = async (id) => {
    var options = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminAccessToken}`,
      },
    };

    fetch(
      `https://learningmanager.adobe.com/primeapi/v2/learningObjects?page[limit]=10&filter.loTypes=course&filter.catalogIds=169326&sort=name&filter.ignoreEnhancedLP=true`,
      options
    ).then((response) => {
      // console.log(response);
      response.json().then((data) => {
        setSurveyRes(data);
      });
    });
    // try {
    //   setLoading(true);
    //   await surveyReq({
    //     axiosInstance: axiosPrivate,
    //     method: "GET",
    //     endpoint: `/learningObjects`,
    //     requestConfig: {
    //       params: {
    //         "filter.loTypes": "course",
    //         "filter.catalogIds": "168864",
    //       },
    //     },
    //   });
    // } catch (e) {
    //   console.log(e);
    // } finally {
    //   setLoading(false);
    // }
  };

  const getLPEnrollmentData = async (id) => {
    try {
      setLoading(true);
      await enrollmentLPReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: `/enrollments/${id}`,
        requestConfig: {
          params: {
            include: "learningObject.subLOs.enrollment",
          },
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const getDataById = async (id) => {
    try {
      setLoading(true);
      await userdataReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/user",
      });
      console.log("tttttttttttttttttttttttttttt");
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: `/learningObjects/${id}`,
        requestConfig: {
          params: {
            include: "subLOs.instances.loResources.resources",
          },
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getJobDataById = async (id) => {
    try {
      setLoading(true);
      await jobReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: `/learningObjects/${id}`,
        requestConfig: {
          params: {
            include: "instances.loResources.resources",
          },
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // console.log("idcheck", userdataRes?.data?.id);


  const handlerOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setTeamType(event.target.value);
  };
  const getLoResourceId = (name) => {
    let findId = Loresource.findIndex(
      (val) => val.attributes.localizedMetadata[0].name === name
    );
    return Loresource[findId].id;
  };

  //console.log("subs", userdataRes?.data?.attributes?.fields?.Subscription);
  const checkCourse = () => {
    const catalogCourseArray = catalogDataRes?.data
      ?.filter((obj) => !isEmpty(obj.id))
      .map((obj) => obj.id);
    setCatalogCourse(catalogCourseArray);
  };
  // console.log("courselist", CatalogCourse);
  // !isEmpty(CatalogCourse) &&
  //   console.log("includes", CatalogCourse.includes(id));

  const handleContinueClick = async (
    moduleId,
    courseid,
    enroll = false,
    price
  ) => {
    console.log("teeee", courseid);
    console.log("player ", id, moduleId);
    if (
      enroll === false &&
      price &&
      (userdataRes?.data?.attributes?.fields?.Subscription !== "Yes" ||
        !CatalogCourse.includes(id))
    ) {
      navigate(`/license/${id}`);
    } else if (enroll === false) {
      console.log("new enroll");
      await userenrollmentReq({
        axiosInstance: axiosPrivate,
        method: "POST",
        endpoint: `/enrollments`,
        requestConfig: {
          params: {
            loId: id,
            loInstanceId:
              enrollRes?.data?.relationships?.instances?.data[0]?.id,
          },
        },
      });
      enrollmentReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: `/learningObjects/${id}`,
        requestConfig: {
          params: {
            include: "enrollment",
          },
        },
      });
    } else {
      let playerUrl = "";
      if (courseSurvey.includes(courseid)) {
        await surveyCourseReq({
          axiosInstance: axiosPrivate,
          method: "GET",
          endpoint: `/learningObjects/${courseid}`,
          requestConfig: {
            params: {
              include: "instances.loResources.resources",
            },
          },
        });
        //window.open("https://www.adobe.com", "_blank");
      } else {
        if (moduleId === "")
          playerUrl = `${process.env.REACT_APP_ALM_URL}/app/player?lo_id=${courseid}&access_token=${accessToken}`;
        else
          playerUrl = `${process.env.REACT_APP_ALM_URL}/app/player?lo_id=${courseid}&access_token=${accessToken}&module_id=${moduleId}`;
      }

      setSrc(playerUrl);
    }
  };

  const getCart = () => {
    var cart_id = localStorage.getItem("cart_id");
    let config = {
      headers: {
        header1: "test",
      },
    };
    var formdata = new FormData();
    formdata.append("cart_id", cart_id);
    axios
      .post(process.env.REACT_APP_API_URL + "getcart.php", formdata, config)
      .then((response) => {
        if (response.data && response.data.success == true) {
          setCartItems(response.data.items);
          setCart(response.data.cart);
          setQty(response.data.qty);
          setCartTeamType(response.data.cart.cart_type);
          setSelectedOption(response.data.cart.cart_type);
        }
      });
  };

  const checkLOAttendance = () => {
    var cart_id = localStorage.getItem("cart_id");
    let config = {
      headers: {
        header1: "test",
      },
    };
    var instance_id =
    Loinstance && Loinstance[0] && Loinstance[0].id ? Loinstance[0].id : "";
    var formdata = new FormData();
    formdata.append("lo_id", id);
    formdata.append("instance_id", instance_id);
    formdata.append("email", userdataRes?.data?.attributes?.email);
    axios
      .post("https://viku.space/maruti/getinstructorattendance.php", formdata, config)
      .then((response) => {
        console.log('viku  ',response)
        if (response.data && response.data.success == true) {
          setDisablePage(true)
        }
      });
  };
  const addToCart = () => {
    var cart_id = localStorage.getItem("cart_id");
    let config = {
      headers: {
        header1: "test",
      },
    };
    var instance_id =
      Loinstance && Loinstance[0] && Loinstance[0].id ? Loinstance[0].id : "";
    var formdata = new FormData();
    formdata.append("course_id", response?.data?.id);
    formdata.append("price", response?.data?.attributes.price);
    formdata.append("user_id", userdataRes?.data?.id);
    formdata.append("cart_id", cart_id);
    formdata.append(
      "name",
      response?.data?.attributes?.localizedMetadata[0]?.name
    );
    formdata.append("cart_type", teamType);
    formdata.append("Loinstance", instance_id);

    axios
      .post(process.env.REACT_APP_API_URL + "cart.php", formdata, config)
      .then((response) => {
        if (response.data && response.data.success == true) {
          toast.success("Course has been added to the cart");
          if (!cart_id) {
            localStorage.setItem("cart_id", response.data.id);
          }
          navigate(`/payment`);
        } else {
          if (response.data.indv) {
            toast.error("Cant add more");
          } else {
            toast.error("Something went wrong!!");
          }
        }
      });
  };


  console.log("uhuhuuh ", Loinstance);
  useEffect(async () => {
    checkCourse();
    //console.log("includes", CatalogCourse.includes(id));
  }, [catalogDataRes]);

  const getPrice = (enrollRes, clabel, userdataRes) => {

    console.log('tttttttttttttttttt', enrollRes, clabel, userdataRes)
    if (clabel && clabel.length > 0) {
      const tuc_value = clabel.filter((val) => {
        return val.name === "Training Units_C";
      });
      const tup_value = clabel.filter((val) => {
        return val.name === "Training Units_P";
      });
      const emerging_price = clabel.filter((val) => {
        return val.name === "Emerging Market Price";
      });

      if (userdataRes?.data?.attributes?.fields?.Market === "Developed") {
        if (userdataRes?.data?.attributes?.fields?.UserType === "Customer") {
          return (
            enrollRes?.data?.attributes?.price +
            "$ | " +
            tuc_value[0].values[0] +
            " Training Units"
          );
        } else {
          return (
            enrollRes?.data?.attributes?.price +
            "$ | " +
            tup_value[0].values[0] +
            " Training Units"
          );
        }
      } else {
        if (userdataRes?.data?.attributes?.fields?.UserType === "Customer") {
          return (
            emerging_price[0].values[0] +
            "$ | " +
            tuc_value[0].values[0] +
            " Training Units"
          );
        } else {
          return (
            emerging_price[0].values[0] +
            "$ | " +
            tup_value[0].values[0] +
            " Training Units"
          );
        }
      }
    }
  };

  const getLabel = (inp) => {

    if (!isEmpty(inp?.included)) {
      switch (inp?.included[0]?.attributes?.state) {
        case "ENROLLED":
          return "START";
        case "STARTED":
          return "CONTINUE";
        case "COMPLETED":
          return "REVISIT";
      }
    } else if (
      isEmpty(inp?.included) &&
      inp?.data?.attributes?.price &&
      (userdataRes?.data?.attributes?.fields?.Subscription !== "Yes" ||
        !CatalogCourse.includes(id))
    ) {
      return "Buy now";
    } else {
      return "Start";
    }
  };

  window.addEventListener("message", async function closePlayer(event) {
    if (event.data === "status:close") {
      await enrollmentReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: `/learningObjects/${id}`,
        requestConfig: {
          params: {
            include: "enrollment",
          },
        },
      });
      setSrc("");
    }
  });

  const getTime = (secs) => {
    if (secs >= 60) {
      const mins = Math.floor(secs / 60);
      const seconds = secs % 60;
      if (seconds !== 0) {
        return mins + " mins " + seconds + " seconds";
      } else return mins + " mins ";
    } else return secs + " seconds";
  };

  const IsRequiredComp = (attributes) => {
    const isReq = attributes.attributes?.sections[0]?.mandatory ? true : false;
    return (
      <>
        {/* <span style={{ fontSize: "9px", marginRight: "10px" }}>
          {getTime(attributes.attributes?.duration)}
        </span> */}
        {isReq ? (
          <span
            style={{
              color: "#fff",
              borderRadius: "10px",
              fontSize: "8px",
              backgroundColor: "#2D3394",
              padding: "2px 10px",
              textTransform: "uppercase",
              cursor: "text",
              margin: "0 5px",
            }}
          >
            Required
          </span>
        ) : (
          ""
        )}
      </>
    );
  };

  useEffect(() => {
    if (!isEmpty(response)) {
      if (
        response &&
        response.data &&
        response.data.id &&
        response.data.id.includes("jobAid")
      ) {
        const jobAidarray = response.included.filter(
          (x) => x.type == "resource"
        );
        if (jobAidarray && jobAidarray.length > 0) {
          const jobAidarraycheck = courseJobs.filter(
            (x) => x.id == jobAidarray[0].id
          );
          if (jobAidarraycheck && jobAidarraycheck.length > 0) {
          } else {
            var newcourseJobs = courseJobs;
            newcourseJobs.push(jobAidarray[0]);
            setCourseJobs(newcourseJobs);
          }
        }
      } else {
        setResponseLP(response);
      }
      const LoInsarray = response.included.filter(
        (x) => x.id.indexOf("learningProgram") > -1
      );
      // if (!LoInsarray || LoInsarray.length < 1) {
      //   console.log("test");
      // }
      var newLoinstance = [];
      if (!isEmpty(LoInsarray)) {
        LoInsarray.map(function (item) {
          var courses = [];
          var resources = [];
          var relations = item?.relationships?.subLOs?.data;
          //var relations = item.sections;
          if (relations && relations.length > 0) {
            relations.map(function (child) {
              var newChildId = child.id;
              // relations.loIds.map(function (child) {
              // var newChildId = child;
              const courseItem = response.included.filter(
                (x) => x.id === newChildId
              );
              console.log("child id 123 ", newChildId);
              const courseItemInstance = response.included.filter(
                (x) =>
                  x.attributes.isDefault &&
                  x.type == "learningObjectInstance" &&
                  x.id.includes(child.id + "_")
              );

              console.log("child instance  ", courseItemInstance);

              if (courseItem && courseItem.length > 0) {
                var courseNew = courseItem[0];
                if (courseItemInstance && courseItemInstance.length > 0) {
                  courseNew.instance = courseItemInstance[0];
                  console.log("in jobaid c", courseNew);
                  if (
                    courseNew.relationships &&
                    courseNew.relationships.supplementaryLOs &&
                    courseNew.relationships.supplementaryLOs.data &&
                    courseNew.relationships.supplementaryLOs.data.length > 0
                  ) {
                    console.log("in jobaid");
                    getJobDataById(
                      courseNew.relationships.supplementaryLOs.data[0].id
                    );
                  }
                  if (
                    courseItemInstance[0].relationships.loResources.data.length >
                    0
                  ) {
                    var courseItemResources = [];
                    courseItemInstance[0].relationships.loResources.data.map(
                      function (lores, loresid) {
                        const courseInstanceResourcesLO =
                          response.included.filter((x) => x.id == lores.id);

                        if (
                          courseInstanceResourcesLO[0].relationships.resources
                            .data.length > 0
                        ) {
                          courseInstanceResourcesLO[0].relationships.resources.data.map(
                            function (lores1, loresid1) {
                              const courseInstanceResourcesLOMain =
                                response.included.filter(
                                  (x) => x.id == lores1.id
                                );
                              courseItemResources.push(
                                courseInstanceResourcesLOMain[0]
                              );
                            }
                          );
                        }

                        console.log("lo instance resourse ", courseItemResources);

                        console.log(
                          "lo instance resourse ",
                          courseInstanceResourcesLO
                        );
                      }
                    );
                  }
                  const courseItemResourcesInstance = response.included.filter(
                    (x) =>
                      x.relationships &&
                      x.relationships.loInstance &&
                      x.relationships.loInstance.data &&
                      x.relationships.loInstance.data.id == courseNew.instance.id
                  );
                  if (
                    courseItemResourcesInstance &&
                    courseItemResourcesInstance.length > 0
                  ) {
                    console.log("resssss ", courseItemResources);

                    courseNew.resource = courseItemResources;

                    courseNew.resourceInstance = courseItemResourcesInstance;
                  }
                }
                courses.push(courseNew);
              }
              //});
            });
          }


          item.courses = courses;
          item.resources = resources;
          newLoinstance.push(item);
        });
        setLoInstance(newLoinstance);
      }

      if (
        (!LoInsarray || LoInsarray.length < 1) &&
        response?.data &&
        response?.data?.relationships &&
        response?.data?.relationships.subLOs &&
        response?.data?.relationships.subLOs.data
      ) {
        var item = response?.data;
        var courses = [];
        var resources = [];
        //var relations = response?.data?.relationships.subLOs.data;
        var relations = item.attributes?.sections;

        relations.map(function (sectionChild) {
          //console.log("child id ", relations);
          //var newChildId = child.id;

          sectionChild.loIds.map(function (child) {
            var newChildId = child;
            const courseItem = response.included.filter(
              (x) => x.id === newChildId
            );
            //console.log("child id 12345 ", courseItem);
            const courseItemInstance = response.included.filter(
              (x) =>
                x.attributes.isDefault &&
                x.type == "learningObjectInstance" &&
                x.id.includes(child + "_")
            );
            if (courseItem && courseItem.length > 0) {
              var courseNew = courseItem[0];
              if (courseItemInstance && courseItemInstance.length > 0) {
                courseNew.instance = courseItemInstance[0];
                console.log("in jobaid c", courseNew);
                if (
                  courseNew.relationships &&
                  courseNew.relationships.supplementaryLOs &&
                  courseNew.relationships.supplementaryLOs.data &&
                  courseNew.relationships.supplementaryLOs.data.length > 0
                ) {
                  console.log("in jobaid");
                  getJobDataById(
                    courseNew.relationships.supplementaryLOs.data[0].id
                  );
                }
                if (
                  courseItemInstance[0].relationships.loResources.data.length >
                  0
                ) {
                  var courseItemResources = [];
                  courseItemInstance[0].relationships.loResources.data.map(
                    function (lores, loresid) {
                      const courseInstanceResourcesLO =
                        response.included.filter((x) => x.id == lores.id);

                      if (
                        courseInstanceResourcesLO[0].relationships.resources
                          .data.length > 0
                      ) {
                        courseInstanceResourcesLO[0].relationships.resources.data.map(
                          function (lores1, loresid1) {
                            const courseInstanceResourcesLOMain =
                              response.included.filter(
                                (x) => x.id == lores1.id
                              );
                            courseItemResources.push(
                              courseInstanceResourcesLOMain[0]
                            );
                          }
                        );
                      }

                      console.log("lo instance resourse ", courseItemResources);

                      console.log(
                        "lo instance resourse ",
                        courseInstanceResourcesLO
                      );
                    }
                  );
                }
                const courseItemResourcesInstance = response.included.filter(
                  (x) =>
                    x.relationships &&
                    x.relationships.loInstance &&
                    x.relationships.loInstance.data &&
                    x.relationships.loInstance.data.id == courseNew.instance.id
                );
                if (
                  courseItemResourcesInstance &&
                  courseItemResourcesInstance.length > 0
                ) {
                  courseNew.resource = courseItemResources;
                  courseNew.resourceInstance = courseItemResourcesInstance;
                }
              }
              courses.push(courseNew);
            }
          });
        });
        item.courses = courses;
        item.resources = resources;
        setLoInstance([item]);
      }
    }
  }, [response]);

  useEffect(() => {
    if (!isEmpty(userenrollRes?.data)) {
      toast.success("You have been successfully enrolled");
      getDataById(id);
    }
  }, [userenrollRes]);

  useEffect(() => {
    if (!isEmpty(surveyCourseRes?.data)) {
      const index = surveyCourseRes.included.findIndex(
        (val) => val.type === "resource"
      );
      //console.log("12234", surveyCourseRes.included[index].attributes.location);
      if (!isEmpty(surveyCourseRes.included[index].attributes.location)) {
        window.open(
          surveyCourseRes.included[index].attributes.location,
          "_blank"
        );
      }
    }
  }, [surveyCourseRes]);

  const TimeContainer = ({ time }) => {
    return (
      <>
        <Typography sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "12px" }}>
          {time}
        </Typography>
      </>
    );
  };
  const filechangeHandler = (event) => {
    var selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("File", selectedFile);
    document.getElementsByClassName("mainfileup").value = null;
    fetch("https://viku.space/abg/uploadfiles.php", {
      method: "POST",
      headers: {
        Authorization: "Bearer abcg",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setFileClass("file_success_bg");
          toast.success(`File uploaded successfully`);
        } else {
          setFileClass("file_success_error");
          toast.error("Something went wrong");
        }
      })
      .catch((error) => {
        setFileClass("file_success_error");
        toast.error("Error:", error);
      });
  };

  const courseLogo = (id) => {
    console.log("test123", courseSurvey, id);
    if (id === "course:8348099") {
      return (
        <div
          className="read_right text-center"
          style={{
            width: "100px",
          }}
        >
          {/* <ChecklistIcon /> */}
          <img
            src="/surveyicon.png"
            style={{
              height: "40px",
              width: "35px",
            }}
          />
        </div>
      );
    } else {
      return (
        <div
          className="read_right"
        >
          <i className="fa fa-info-circle" aria-hidden="true"></i>
        </div>
      );
    }
  };

  const moduletile = (val, ind, course, jobAidLink) => {
    if (val.id.includes("en-US") || val.id.includes("_resource")) {
      const instanceID = course?.instance?.id;
      var isFormLink = val.attributes.name.includes("Submission")
        ? true
        : false;
      console.log("form link ", isFormLink);
      var jobAidLink = "";
      if (
        course.relationships &&
        course.relationships.supplementaryLOs &&
        course.relationships.supplementaryLOs.data &&
        course.relationships.supplementaryLOs.data.length > 0
      ) {
        const mainJobAid = courseJobs.filter((x) =>
          x.id.includes(course.relationships.supplementaryLOs.data[0].id)
        );
        if (mainJobAid && mainJobAid.length > 0) {
          jobAidLink = mainJobAid[0].attributes.downloadUrl;
        }
      }

      console.log("job link ", jobAidLink);
      if (val.attributes.contentType === "Classroom") {
        return (
          <>
            <Classroom val={val} />
          </>
        );
      } else if (val.attributes.contentType === "Virtual Classroom") {
        return (
          <>
            <Virtual val={val} />
          </>
        );
      } else {
        return (
          <Demo key={ind}>
            {isFormLink ? (
              <p className="module_item" style={{ display: "flex" }}>
                <span style={{ marginRight: "10px" }}>
                  <Avatar>
                    <PlayCircleOutlineIcon />
                  </Avatar>
                </span>
                <span>
                  <b>{val.attributes.name}</b>
                  <br />
                  <small>{val.attributes.contentType}</small>
                </span>

                <span style={{ marginLeft: "auto" }}>
                  <input
                    className={"mainfileup " + fileClass}
                    type="file"
                    placeholder="uplo"
                    name="file"
                    onChange={filechangeHandler}
                  />
                  <a href={jobAidLink} className="btn btn-danger btn-sm">
                    Download
                  </a>
                </span>
              </p>
            ) : (
              <p className="module_item" style={{ display: "flex" }}>
                <span style={{ marginRight: "10px" }}>
                  <Avatar>
                    <PlayCircleOutlineIcon />
                  </Avatar>
                </span>
                <span style={{ marginRight: "auto" }}>
                  <b>{val.attributes.name}</b>
                  <br />
                  <small>{val.attributes.contentType}</small>
                </span>

                <span>
                  {val.attributes.authorDesiredDuration
                    ? getTime(val.attributes.authorDesiredDuration)
                    : ""}
                </span>
              </p>
            )}

            {/* {resource.length <= ind ? <Divider /> : ""} */}
            {/* <Divider /> */}
          </Demo>
        );
      }
    }
  };

  useEffect(() => {
    getCart();
    if (!isNil(id)) {
      getDataById(id);
      // getDataEnrollmentUser(id)
      // getCatLabels(id);
    }
  }, [id, adminAccessToken]);

  useEffect(() => {
    getCart();
    if (!isNil(response?.data?.relationships?.enrollment?.data?.id)) {
      getLPEnrollmentData(response?.data?.relationships?.enrollment?.data?.id)
    }
  }, [response]);

  

  useEffect(() => {
    if(enrollmentLPRes && enrollmentLPRes.included && enrollmentLPRes.included.length>0){
      const enrollList = enrollmentLPRes.included.filter(
        (x) =>  x.type == 'learningObjectInstanceEnrollment');
        if(enrollList && enrollList.length>0){
          setEnrollmentLPList(enrollList)
        }
      
    }
   console.log('enrolmnt lppppppppp ',enrollmentLPList)
  }, [enrollmentLPRes]);

  useEffect(() => {

    enrollmentReq({
      axiosInstance: axiosPrivate,
      method: "GET",
      endpoint: `/learningObjects/${id}`,
      requestConfig: {
        params: {
          include: "enrollment",
        },
      },
    });
    if (adminAccessToken) {
      getSurveyCourse();
    }
  }, [adminAccessToken]);


  useEffect(() => {
    if (response && Loinstance && Loinstance.length > 0) {
      
      checkLOAttendance()
    }

  }, [Loinstance]);
  useEffect(() => {
    if (!isEmpty(surveyRes)) {
      console.log("survey", surveyRes);
      const surveyCourse = surveyRes.data.map((ele) => {
        return ele.id;
      });
      setcourseSurvey(surveyCourse);
    }
  }, [surveyRes]);

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

  const bgpic = (responseLP?.data?.attributes?.bannerUrl) ? responseLP?.data?.attributes?.bannerUrl : 'mmast2.png'
  // console.log("jj ", responseLP?.data?.attributes);
  return (
    <>
      {src === "" ? (
        <div className={(disablePage) ? 'lodisablePage' : ''}>
          <div className="ms_lo_banner">
            <div className="container">
              <div className="row">
                <div className="col-10">
                  <h2>{response?.data?.attributes?.localizedMetadata[0]?.name}</h2>
                  <ul>
                    <li><i className="fa-solid fa-graduation-cap"></i> {response?.data?.attributes?.loType}</li>
                    <li><i className="fa-solid fa-chalkboard-user"></i> {response?.data?.attributes?.loFormat}</li>
                    <li><i className="fa-solid fa-clock"></i> {getTime(response?.data?.attributes?.duration)}</li>
                  </ul>
                </div>
                <div className="col-2">
                
                </div>
              </div>
            </div>
          </div>
          <div className="ms_over_wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-xs-12">
                  <div className="ms_overview_data">
                  <div className="row">
                    {/* <div className="col-4">
                      <img
                        src={response?.data?.attributes?.imageUrl}
                        className="img-fluid"
                      />
                    </div> */}
                    <div className="col-12">
                      <h3>Overview</h3>
                      <p>{response?.data?.attributes?.localizedMetadata[0]?.overview}</p>
                    </div>
                  </div>
                  </div>
                  {/* <button className="lo_sec_btn"><i className="fa-solid fa-envelope"></i> Email</button> */}
                  <button className="lo_sec_btn"><i className="fa-regular fa-bookmark"></i> Save</button>
                  {loading ? (
                    <Skeleton variant="rectangular" height={50} />
                  ) : (
                    <>
                      {isNil(enrollRes?.included) &&
                        enrollRes?.data?.attributes?.price &&
                        !ExistSubs ? (
                        <div className="radio-buttons-container">
                          <p className="para-radio">Buy For :</p>
                          <label className="radio-button-label">
                            <input
                              type="radio"
                              value="team"
                              disabled={
                                cartTeamType && cartTeamType != ""
                                  ? true
                                  : false
                              }
                              checked={selectedOption === "team"}
                              onChange={handlerOptionChange}
                            />

                            <span className="radio-button-text">Team</span>
                          </label>

                          <label className="radio-button-label">
                            <input
                              disabled={
                                cartTeamType && cartTeamType != ""
                                  ? true
                                  : false
                              }
                              type="radio"
                              value="individual"
                              checked={selectedOption === "individual"}
                              onChange={handlerOptionChange}
                            />

                            <span className="radio-button-text">
                              Individual
                            </span>
                          </label>
                        </div>
                      ) : (
                        ""
                      )}
                      {cart &&
                        cart.cart_type == "subscription" &&
                        isEmpty(enrollRes?.included) &&
                        enrollRes?.data?.attributes?.price && !ExistSubs ? (
                        <button type="button" disabled className="ms_maincta">{getLabel(enrollRes)}</button>
                      ) : (
                        <button type="button" onClick={(e) => handleContinueClick("", isEmpty(enrollRes?.included), enrollRes?.data?.attributes?.price)} disabled={disableBtn} className="ms_maincta">{getLabel(enrollRes)}</button>
                      )}
                      {enrollRes &&
                        enrollRes.included &&
                        enrollRes.included[0] &&
                        enrollRes.included[0]?.attributes &&
                        enrollRes.included[0]?.attributes?.state ? (
                        ""
                      ) : cart && cart.zimvie_cart_id ? (
                        <a href="/payment">
                          <div className="shop_head">
                            <span
                              style={{
                                border: "1px solid #2d3494",
                                padding: "10px",
                                borderRadius: "100%",
                              }}
                            >
                              <ShoppingCartIcon color="primary" />
                            </span>
                          </div>
                        </a>
                      ) : (
                        ""
                      )}
                    </>
                  )}


                </div>
                <div className="col-lg-8 col-md-12 col-xs-12 mt-mob ">
                  <div className="ms_module_wrap">
                  <h3>Learning Plan</h3>



                  <Box sx={{ marginTop: "20px" }}>
                    {Loinstance && Loinstance.length > 0
                      ? Loinstance.map(function (val, ind) {
                        return (
                          <div
                            style={{
                              background: "#fafafa",
                              border: "1px solid #ddd",
                            }}
                          >
                            <AccordionDetails>
                              {val && val.courses && val.courses.length > 0
                                ? val.courses.map(function (
                                  course,
                                  courseid
                                ) {
                                  var classStartDate = "";
                                  var isDateExpired = false;
                                  var isFormQuiztag =
                                    course?.attributes?.tags;
                                  var isFormQuiz =
                                    isFormQuiztag &&
                                      isFormQuiztag.length > 0 &&
                                      isFormQuiztag.includes("form")
                                      ? true
                                      : false;
                                  if (
                                    isFormQuiz &&
                                    val.courses[courseid + 1].resource &&
                                    val.courses[courseid + 1].resource
                                      .length > 0
                                  ) {
                                    const formClassroom = val.courses[
                                      courseid + 1
                                    ].resource.filter(
                                      (x) =>
                                        x.attributes.contentType ==
                                        "Classroom" ||
                                        x.attributes.contentType ==
                                        "Virtual Classroom"
                                    );
                                    if (
                                      formClassroom &&
                                      formClassroom.length > 0
                                    ) {
                                      classStartDate =
                                        formClassroom[0].attributes
                                          .dateStart;
                                    }
                                    console.log(
                                      "in formtag ",
                                      course.id,
                                      formClassroom
                                    );
                                  }
                                  if (classStartDate) {
                                    var CurrentDate = new Date();
                                    var mydate = new Date(classStartDate);
                                    mydate.setDate(mydate.getDate() - 10);
                                    if (CurrentDate > mydate) {
                                      isDateExpired = true;
                                    }
                                  }
                                  var surveyData = [];
                                  if (courseSurvey.includes(course.id)) {
                                    surveyData =
                                      course &&
                                        course.resource &&
                                        course.resource[0]
                                        ? course.resource[0]
                                        : [];
                                    console.log("ihhhihihih ", surveyData);
                                  }

                                  const instanceID = course?.instance?.id;
                                  var lpcourseclass = 'lp_course_lock'
                                  const checkEnrollList = enrollmentLPList.filter(
                                    (x) =>  x.id.includes(course.id));
                                    if(checkEnrollList && checkEnrollList.length>0){
                                      var enrollstatus = checkEnrollList[0].attributes.progressPercent
                                      if(enrollstatus==100 || checkEnrollList[0].attributes.state =="STARTED"){
                                         lpcourseclass = 'lp_course_unlock'
                                      }else{
                                        lpcourseclass = 'lp_course_lock'
                                      }
                                    }
                                    if(courseid==0){
                                      lpcourseclass = 'lp_course_unlock'
                                    }



                                  return courseSurvey.includes(
                                    course.id
                                  ) ? (
                                    <div
                                      key={courseid}
                                      className="acc_main"
                                    >
                                      <AccordionSummary
                                        className={"acc_main "+lpcourseclass}
                                        sx={{
                                          minHeight: "auto",
                                          "& .MuiAccordionSummary-content":
                                          {
                                            alignItems: "center",
                                          },
                                        }}
                                        disabled={(lpcourseclass == 'lp_course_lock') ? true:false}
                                      >
                                        {courseLogo(course.id)}
                                        <p className="accordian_title">
                                          {
                                            course.attributes
                                              ?.localizedMetadata[0]?.name 
                                          }
                                          <IsRequiredComp
                                            attributes={val.attributes}
                                          />

                                          {mydate ? (
                                            <span>
                                              <br />
                                              <span className="accordian_title_span">
                                                Due date:{" "}
                                                {mydate.toDateString()}
                                              </span>
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                          {surveyData.attributes.name ? (
                                            <span
                                              style={{
                                                marginRight: "auto",
                                              }}
                                            >
                                              <br />
                                              <small
                                                style={{
                                                  marginRight: "20px",
                                                }}
                                              >
                                                <i class="fa-regular fa-clipboard"></i>{" "}
                                                {surveyData.attributes.name}
                                              </small>
                                              <small>
                                                <i class="fas fa-tasks"></i>{" "}
                                                {
                                                  surveyData.attributes
                                                    .contentType
                                                }
                                              </small>
                                            </span>
                                          ) : (
                                            ""
                                          )}

                                          <span>
                                            {surveyData.attributes
                                              .authorDesiredDuration
                                              ? getTime(
                                                surveyData.attributes
                                                  .authorDesiredDuration
                                              )
                                              : ""}
                                          </span>
                                        </p>
                                        <div
                                          className="float-end"
                                          style={{ marginLeft: "auto" }}
                                        >
                                          <button
                                            className="btn btn-outline-secondary lp_act_btn"
                                            onClick={(e) =>
                                              handleContinueClick(
                                                "",
                                                course.id,
                                                true
                                              )
                                            }
                                          >
                                            Start Learning Now
                                          </button>
                                        </div>
                                      </AccordionSummary>
                                    </div>
                                  ) : (
                                    <Accordion
                                      key={courseid}
                                      className={"acc_main "+lpcourseclass}
                                      disabled={(lpcourseclass == 'lp_course_lock') ? true:false}
                                    >
                                      <AccordionSummary
                                        className="acc_main"
                                        sx={{
                                          minHeight: "auto",
                                          "& .MuiAccordionSummary-content":
                                          {
                                            alignItems: "center",
                                          },
                                        }}
                                      >
                                        {courseLogo(course.id)}
                                        <p className="accordian_title">
                                          <a
                                            href={
                                              "/course-overview/" +
                                              course.id
                                            }
                                          >
                                            {
                                              course.attributes
                                                ?.localizedMetadata[0]?.name
                                            }
                                            <IsRequiredComp
                                              attributes={val.attributes}
                                            />
                                          </a>

                                          {mydate ? (
                                            <span>
                                              <br />
                                              <span className="accordian_title_span">
                                                Due date:{" "}
                                                {mydate.toDateString()}
                                              </span>
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </p>
                                        <div
                                          className="float-end"
                                          style={{ marginLeft: "auto" }}
                                        >
                                          <button
                                            className="btn btn-outline-secondary lp_act_btn"
                                            onClick={(e) =>
                                              handleContinueClick(
                                                "",
                                                course.id,
                                                true
                                              )
                                            }
                                          >
                                            Start Learning Now
                                          </button>
                                        </div>
                                      </AccordionSummary>
                                      {isDateExpired == false ? (
                                        <AccordionDetails
                                          sx={{ padding: "5px 16px" }}
                                        >
                                          <div className="accordian_detail_content">
                                            <h2>List of Modules</h2>

                                            {!isNil(course.resource) &&
                                              course.resource.map(
                                                (val1, ind1) =>
                                                  moduletile(
                                                    val1,
                                                    ind1,
                                                    course,
                                                    classStartDate
                                                  )
                                              )}
                                          </div>
                                        </AccordionDetails>
                                      ) : (
                                        ""
                                      )}
                                    </Accordion>
                                  );
                                })
                                : ""}
                            </AccordionDetails>
                          </div>
                        );
                      })
                      : ""}
                  </Box>
                  
                  </div>
                {/* <Box>
                  
                    <Card className="overview">
                      <CardContent>
                        {!isNil(resource) &&
                          resource.map((val, ind) => moduletile(val, ind))}
                      </CardContent>
                    </Card>
                  </Box> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container-fluid" style={{ background: "url(" + bgpic + ") no-repeat", minHeight: "220px", backgroundSize: "cover" }}>
            <div className="row">
              <div className="col-8">
                <div className="p-4 text-white jumbo-container">
                  <p className="sub-heading">
                    <span className="c_badge">
                      {responseLP?.data?.attributes?.loFormat}
                    </span>
                  </p>
                  <h1 className="heading">
                    {responseLP?.data?.attributes?.localizedMetadata[0]?.name}
                  </h1>
                  <div style={{ float: "left" }}>
                    <br />
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
          <div style={{ background: "#ffff" }} className="p-4"> */}
            {/* <div className="instructor_grid">
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <div style={{ float: "left" }}>
                  <Rating name="read-only" value={4} readOnly />
                </div>
              </Grid>
            </Grid>
          </div> */}

            {/* <Grid container spacing={4}>
              <Grid item xs={8}>
                <Tabs
                  sx={{ borderBottom: "1px solid #ccc" }}
                  value={currentTabIndex}
                  onChange={handleTabChange}
                >
                  <Tab label="OVERVIEW" />
                  <Tab label="LEARNING PLAN" />
                </Tabs>
                {currentTabIndex === 0 && (
                  <Box sx={{ marginTop: "20px" }}>
                    <Card className="overview" sx={{ mb: 3 }}>
                      <CardContent>
                        <div className="paragraph p-1">
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                responseLP?.data?.attributes
                                  ?.localizedMetadata[0]?.richTextOverview,
                            }}
                          />
                          {/* {
                            responseLP?.data?.attributes?.localizedMetadata[0]
                              ?.richTextOverview
                          } 
                        </div>
                      </CardContent>
                    </Card>
                  </Box>
                )} */}
                {/* {currentTabIndex === 1 && (
                  <Box sx={{ marginTop: "20px" }}>
                    {Loinstance && Loinstance.length > 0
                      ? Loinstance.map(function (val, ind) {
                        return (
                          <div
                            style={{
                              background: "#fafafa",
                              border: "1px solid #ddd",
                            }}
                          >
                            <>
                              <Typography
                                sx={{
                                  fontWeight: "bold",
                                  color: "#000",
                                  fontSize: "18px",
                                  padding: "8px 16px 16px",
                                  borderBottom: "1px solid #ddd;",
                                }}
                              >
                                {val.attributes?.localizedMetadata[0]?.name}
                              </Typography>
                              <Typography sx={{ marginLeft: "auto" }}>
                              </Typography>
                            </> */}

                            {/* <AccordionDetails>
                              {val && val.courses && val.courses.length > 0
                                ? val.courses.map(function (
                                  course,
                                  courseid
                                ) {
                                  var classStartDate = "";
                                  var isDateExpired = false;
                                  var isFormQuiztag =
                                    course?.attributes?.tags;
                                  var isFormQuiz =
                                    isFormQuiztag &&
                                      isFormQuiztag.length > 0 &&
                                      isFormQuiztag.includes("form")
                                      ? true
                                      : false;
                                  if (
                                    isFormQuiz &&
                                    val.courses[courseid + 1].resource &&
                                    val.courses[courseid + 1].resource
                                      .length > 0
                                  ) {
                                    const formClassroom = val.courses[
                                      courseid + 1
                                    ].resource.filter(
                                      (x) =>
                                        x.attributes.contentType ==
                                        "Classroom" ||
                                        x.attributes.contentType ==
                                        "Virtual Classroom"
                                    );
                                    if (
                                      formClassroom &&
                                      formClassroom.length > 0
                                    ) {
                                      classStartDate =
                                        formClassroom[0].attributes
                                          .dateStart;
                                    }
                                    console.log(
                                      "in formtag ",
                                      course.id,
                                      formClassroom
                                    );
                                  }
                                  if (classStartDate) {
                                    var CurrentDate = new Date();
                                    var mydate = new Date(classStartDate);
                                    mydate.setDate(mydate.getDate() - 10);
                                    if (CurrentDate > mydate) {
                                      isDateExpired = true;
                                    }
                                  }
                                  var surveyData = [];
                                  if (courseSurvey.includes(course.id)) {
                                    surveyData =
                                      course &&
                                        course.resource &&
                                        course.resource[0]
                                        ? course.resource[0]
                                        : [];
                                    console.log("ihhhihihih ", surveyData);
                                  }

                                  const instanceID = course?.instance?.id;
                                  return courseSurvey.includes(
                                    course.id
                                  ) ? (
                                    <div
                                      key={courseid}
                                      className="acc_main"
                                    >
                                      <AccordionSummary
                                        className="acc_main"
                                        sx={{
                                          minHeight: "auto",
                                          "& .MuiAccordionSummary-content":
                                          {
                                            alignItems: "center",
                                          },
                                        }}
                                      >
                                        {courseLogo(course.id)}
                                        <p className="accordian_title">
                                          {
                                            course.attributes
                                              ?.localizedMetadata[0]?.name
                                          }
                                          <IsRequiredComp
                                            attributes={val.attributes}
                                          />

                                          {mydate ? (
                                            <span>
                                              <br />
                                              <span className="accordian_title_span">
                                                Due date:{" "}
                                                {mydate.toDateString()}
                                              </span>
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                          {surveyData.attributes.name ? (
                                            <span
                                              style={{
                                                marginRight: "auto",
                                              }}
                                            >
                                              <br />
                                              <small
                                                style={{
                                                  marginRight: "20px",
                                                }}
                                              >
                                                <i class="fa-regular fa-clipboard"></i>{" "}
                                                {surveyData.attributes.name}
                                              </small>
                                              <small>
                                                <i class="fas fa-tasks"></i>{" "}
                                                {
                                                  surveyData.attributes
                                                    .contentType
                                                }
                                              </small>
                                            </span>
                                          ) : (
                                            ""
                                          )}

                                          <span>
                                            {surveyData.attributes
                                              .authorDesiredDuration
                                              ? getTime(
                                                surveyData.attributes
                                                  .authorDesiredDuration
                                              )
                                              : ""}
                                          </span>
                                        </p>
                                        <div
                                          className="float-end"
                                          style={{ marginLeft: "auto" }}
                                        >
                                          <button
                                            className="btn btn-outline-secondary lp_act_btn"
                                            onClick={(e) =>
                                              handleContinueClick(
                                                "",
                                                course.id,
                                                true
                                              )
                                            }
                                          >
                                            Start Learning Now
                                          </button>
                                        </div>
                                      </AccordionSummary>
                                    </div>
                                  ) : (
                                    <Accordion
                                      key={courseid}
                                      className="acc_main"
                                    >
                                      <AccordionSummary
                                        className="acc_main"
                                        sx={{
                                          minHeight: "auto",
                                          "& .MuiAccordionSummary-content":
                                          {
                                            alignItems: "center",
                                          },
                                        }}
                                      >
                                        {courseLogo(course.id)}
                                        <p className="accordian_title">
                                          <a
                                            href={
                                              "/course-overview/" +
                                              course.id
                                            }
                                          >
                                            {
                                              course.attributes
                                                ?.localizedMetadata[0]?.name
                                            }
                                            <IsRequiredComp
                                              attributes={val.attributes}
                                            />
                                          </a>

                                          {mydate ? (
                                            <span>
                                              <br />
                                              <span className="accordian_title_span">
                                                Due date:{" "}
                                                {mydate.toDateString()}
                                              </span>
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </p>
                                        <div
                                          className="float-end"
                                          style={{ marginLeft: "auto" }}
                                        >
                                          <button
                                            className="btn btn-outline-secondary lp_act_btn"
                                            onClick={(e) =>
                                              handleContinueClick(
                                                "",
                                                course.id,
                                                true
                                              )
                                            }
                                          >
                                            Start Learning Now
                                          </button>
                                        </div>
                                      </AccordionSummary>
                                      {isDateExpired == false ? (
                                        <AccordionDetails
                                          sx={{ padding: "5px 16px" }}
                                        >
                                          <div className="accordian_detail_content">
                                            <h2>List of Modules</h2>

                                            {!isNil(course.resource) &&
                                              course.resource.map(
                                                (val1, ind1) =>
                                                  moduletile(
                                                    val1,
                                                    ind1,
                                                    course,
                                                    classStartDate
                                                  )
                                              )}
                                          </div>
                                        </AccordionDetails>
                                      ) : (
                                        ""
                                      )}
                                    </Accordion>
                                  );
                                })
                                : ""}
                            </AccordionDetails>
                          </div>
                        );
                      })
                      : ""}
                  </Box>
                )}
              </Grid>

              <Grid item xs={4}> */}
                {/* <Card className="shop_card" >
                  <CardContent>
                    <p
                      style={{
                        fontWeight: "bold",
                        borderBottom: "1px solid #ddd",
                        color: "#000",
                        paddingBottom: "15px",
                      }}
                    >
                      {responseLP?.data?.attributes?.localizedMetadata[0]?.name}
                    </p>
                    {loading ? (
                      <Skeleton variant="rectangular" height={50} />
                    ) : (
                      <>
                        {isNil(enrollRes?.included) &&
                          enrollRes?.data?.attributes?.price &&
                          !ExistSubs ? (
                          <div className="radio-buttons-container">
                            <p className="para-radio">Buy For :</p>
                            <label className="radio-button-label">
                              <input
                                type="radio"
                                value="team"
                                disabled={
                                  cartTeamType && cartTeamType != ""
                                    ? true
                                    : false
                                }
                                checked={selectedOption === "team"}
                                onChange={handlerOptionChange}
                              />

                              <span className="radio-button-text">Team</span>
                            </label>

                            <label className="radio-button-label">
                              <input
                                disabled={
                                  cartTeamType && cartTeamType != ""
                                    ? true
                                    : false
                                }
                                type="radio"
                                value="individual"
                                checked={selectedOption === "individual"}
                                onChange={handlerOptionChange}
                              />

                              <span className="radio-button-text">
                                Individual
                              </span>
                            </label>
                          </div>
                        ) : (
                          ""
                        )}
                        {cart &&
                          cart.cart_type == "subscription" &&
                          isEmpty(enrollRes?.included) &&
                          enrollRes?.data?.attributes?.price && !ExistSubs ? (
                          <Button
                            sx={{
                              backgroundColor: "#2d3494",
                              "&:hover": {
                                backgroundColor: "#2d3494",
                              },
                            }}
                            disabled
                            fullWidth
                            variant="contained"
                            color="primary"
                          >
                            {getLabel(enrollRes)}
                          </Button>
                        ) : (
                          <Button
                            sx={{
                              backgroundColor: "#2d3494",
                              "&:hover": {
                                backgroundColor: "#2d3494",
                              },
                            }}
                            onClick={(e) =>
                              handleContinueClick(
                                "",
                                isEmpty(enrollRes?.included),
                                enrollRes?.data?.attributes?.price
                              )
                            }
                            disabled={disableBtn}
                            fullWidth
                            variant="contained"
                            color="primary"
                          >
                            {getLabel(enrollRes)}
                          </Button>
                        )}
                        {enrollRes &&
                          enrollRes.included &&
                          enrollRes.included[0] &&
                          enrollRes.included[0]?.attributes &&
                          enrollRes.included[0]?.attributes?.state ? (
                          ""
                        ) : cart && cart.zimvie_cart_id ? (
                          <a href="/payment">
                            <div className="shop_head">
                              <span
                                style={{
                                  border: "1px solid #2d3494",
                                  padding: "10px",
                                  borderRadius: "100%",
                                }}
                              >
                                <ShoppingCartIcon color="primary" />
                              </span>
                            </div>
                          </a>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                    <p className="text-center" style={{ fontWeight: "600" }}>
                      {isEmpty(enrollRes?.included) &&
                        (userdataRes?.data?.attributes?.fields?.Subscription !==
                          "Yes" ||
                          !CatalogCourse.includes(id)) &&
                        enrollRes?.data?.attributes?.price &&
                        getPrice(enrollRes, clabel, userdataRes)}
                    </p>

                  </CardContent>
                </Card> */}
              {/* </Grid>
            </Grid>
          </div> */}
          <div className="ms_recomm ms-recom-custom">
            <div className="container">
              <RecommendedMaruti lo={true} type="peer_group" />
            </div>
          </div>
          {badgeimage !== "" && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "450px",
              }}
            >
              <img src={badgeimage} height={100} width={100} />
            </div>
          )}
          {badgeimage == credly && (
            <form
              action="http://viku.space/credly/credlapi.php"
              method="POST"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "450px",
              }}
            >
              <input
                type="hidden"
                name="firstname"
                value={userData.issued_to_first_name}
              />
              <input
                type="hidden"
                name="lastname"
                value={userData.issued_to_last_name}
              />
              <input
                type="hidden"
                name="email"
                value={userData.recipient_email}
              />
              <input
                type="hidden"
                name="userid"
                value={userData.issuer_earner_id}
              />
              <input type="hidden" name="date" value={new Date()} />

              <input
                type="submit"
                value="POST to Credly"
                className="form-control-button"
              />
            </form>
          )}
          {/* {badgeimage == "" &&
            !isEmpty(enrollRes?.included) &&
            enrollRes?.included[0]?.attributes?.state === "COMPLETED" && (
              <ButtonContainer>
                <Button onClick={(e) => getCerti()}>
                  DOWNLOAD CERTIFICATE
                </Button>
              </ButtonContainer>
            )} */}
        </div>
      ) : (
        <div style={{ height: "100vh", width: "100%" }}>
          <iframe src={src} height="100%" width="100%"></iframe>
        </div>
      )}
    </>
  );
};

export default LearningOverview;
