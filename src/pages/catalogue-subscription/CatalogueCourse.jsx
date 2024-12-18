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
import { isEmpty, isNil, isUndefined } from "lodash";
import { useNavigate } from "react-router-dom";
import { getCredentials } from "../../features/Auth/authSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Classroom from "../classroom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Virtual from "../Virtual";
import LinearProgress from "@mui/material/LinearProgress";
import {loadScript} from "../../components/Lib/helper.js";
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

const CatalogueCourse = () => {
  const [expanded, setExpanded] = useState("");

  const handleExpandClick = (index) => {
    setExpanded(!expanded);
    if (expanded === index) {
      setExpanded("");
    } else {
      setExpanded(index);
    }
  };

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };
  const [badgeimage, setBadgeimage] = useState("");
  const { id, courseId } = useParams();
  const [resource, setResource] = useState();
  const [Loinstance, setLoInstance] = useState();
  const [Loresource, setLoResource] = useState();
  const [loading, setLoading] = useState(true);
  const [CatalogCourse, setCatalogCourse] = useState([]);
  const [teamType, setTeamType] = useState("team");
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState("team");

  const [qty, setQty] = useState("1");
  const [userData, setUserData] = useState({
    recipient_email: "",
    issuer_earner_id: "",
    issued_to_first_name: "",
    issued_to_last_name: "",
  });

  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState("No");
  const [response, setResponse] = useState("");
  const auth = useSelector(getCredentials);
  const adminAccessToken = useSelector(getAdminAccessToken);
  const navigate = useNavigate();
  const { accessToken } = auth;
  //const { axiosReq, response } = useAxios();
  const { axiosReq: enrollmentReq, response: enrollRes } = useAxios();
  const { axiosReq: userenrollmentReq, response: userenrollRes } = useAxios();
  const { axiosReq: userdataReq, response: userdataRes } = useAxios();
  const { axiosReq: catalogDataReq, response: catalogDataRes } = useAxios();

  const axiosPrivate = useAxiosPrivate();
  const getDataById = async (id) => {
    try {
      setLoading(true);
      await enrollmentReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: `/learningObjects/${courseId}`,
        requestConfig: {
          params: {
            include: "enrollment",
          },
        },
      });
      var options = {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminAccessToken}`,
        },
      };

      fetch(
        `https://learningmanager.adobe.com/primeapi/v2/learningObjects/${courseId}?include=instances.loResources.resources&page[limit]=10&filter.loTypes=course&sort=name&filter.ignoreEnhancedLP=true`,
        options
      ).then((response) => {
        // console.log(response);
        response.json().then((data) => {
          setResponse(data);
        });
      });

      //   await axiosReq({
      //     axiosInstance: axiosPrivate,
      //     method: "GET",
      //     endpoint: `/learningObjects/${courseId}`,
      //     requestConfig: {
      //       params: {
      //         include: "instances.loResources.resources",
      //       },
      //     },
      //   });
      await userdataReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/user",
      });
      await catalogDataReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/learningObjects",
        requestConfig: {
          params: {
            "filter.catalogIds": id,
          },
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getSubscriptions = async () => {
    try {
      let config = {
        headers: {
          header1: "test",
        },
      };
      axios
        .get("https://viku.space/uipath_api/get_subcriptions.php", [], config)
        .then((response) => {
          const index = response.data.subscriptions.findIndex(
            (val) => val.catalogid === id
          );
          setName(response.data.subscriptions[index].name);
          //   setMappedData([...copy]);
          //setSubData(response.data.subscriptions);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handlerOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setTeamType(event.target.value);
  };

  // console.log("idcheck", userdataRes?.data?.id);

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

  const handleContinueClick = async (moduleId, enroll = false, price) => {
    if (
      enroll === true &&
      price &&
      (show !== "Yes" || !CatalogCourse?.includes(courseId))
    ) {
      addToCart();
      // navigate(`/license/${id}`);
    } else if (enroll === true) {
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
    } else {
      let playerUrl = "";
      if (moduleId === "")
        playerUrl = `${process.env.REACT_APP_ALM_URL}/app/player?lo_id=${id}&access_token=${accessToken}`;
      else
        playerUrl = `${process.env.REACT_APP_ALM_URL}/app/player?lo_id=${id}&access_token=${accessToken}&module_id=${moduleId}`;
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
          setTeamType(response.data.cart.cart_type);
          setSelectedOption(response.data.cart.cart_type);
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
  useEffect(() => {
    if (!isNil(adminAccessToken)) {
      getDataById();
    }
    getSubscriptions();
  }, [adminAccessToken]);
  useEffect(async () => {
    checkCourse();
    console.log("includes", CatalogCourse?.includes(courseId));
  }, [catalogDataRes]);

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
      (show !== "Yes" || !CatalogCourse?.includes(courseId))
    ) {
      return "Buy now | $" + response?.data?.attributes?.price;
    } else {
      return "Enroll";
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
  const goback = () => {
    navigate(-1);
  };

  const getBadgeimage = async () => {
    if (
      !isEmpty(enrollRes?.data?.attributes?.tags) &&
      enrollRes?.data?.attributes?.tags.includes("credly")
    ) {
      if (
        !isEmpty(enrollRes?.included) &&
        enrollRes?.included[0]?.attributes?.state === "COMPLETED"
      ) {
        setBadgeimage(credly);
        loadScript("/medallia.js", true);
      } else {
        setBadgeimage(loadingg);
      }
    } else {
      setBadgeimage("");
    }
  };
  const getTime = (secs) => {
    if (secs >= 60) {
      const mins = Math.floor(secs / 60);
      const seconds = secs % 60;
      if (seconds !== 0) {
        return mins + " mins " + seconds + " seconds";
      } else return mins + " mins ";
    } else return secs + " seconds";
  };

  const moduletile = (val, ind) => {
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
          <List sx={{ backgroundColor: "#fff" }}>
            <ListItem onClick={() => handleExpandClick(ind)}>
              <ListItemText
                primary={val.attributes.name}
                sx={{
                  "& .MuiListItemText-secondary": {
                    textTransform: "uppercase",
                  },
                }}
              />

              {/* {ind === expanded ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )} */}
            </ListItem>
          </List>

          {/* <Collapse in={ind === expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <p>
                <ListItem
                  onClick={(e) =>
                    handleContinueClick(getLoResourceId(val.attributes.name))
                  }
                  secondaryAction={
                    <TimeContainer
                      time={getTime(val.attributes.authorDesiredDuration)}
                    />
                  }
                >
                  <ListItemAvatar>
                    <IconButton>
                      <Avatar>
                        <PlayCircleOutlineIcon />
                      </Avatar>
                    </IconButton>
                  </ListItemAvatar>

                  <ListItemText
                    primary={val.attributes.name}
                    secondary={val.attributes.contentType}
                    sx={{
                      "& .MuiListItemText-secondary": {
                        textTransform: "uppercase",
                      },
                    }}
                  />
                </ListItem>
              </p>
            </CardContent>
          </Collapse> */}
          {resource.length <= ind ? <Divider /> : ""}
          <Divider />
        </Demo>
      );
    }
  };
  useEffect(() => {
    console.log(userdataRes);
    if (
      !isEmpty(userdataRes.data) &&
      !isEmpty(userdataRes?.data?.attributes?.fields)
    ) {
      const flag = userdataRes?.data?.attributes?.fields[name];
      console.log("flag", flag);
      if (isUndefined(flag)) {
        setShow("No");
      } else {
        setShow(flag);
      }
    } else {
      setShow("No");
    }
  }, [userdataRes]);

  useEffect(() => {
    if (!isEmpty(userenrollRes?.data)) {
      toast.success("You have been successfully enrolled");
      getDataById(id);
    }
  }, [userenrollRes]);
  useEffect(() => {
    if (!isEmpty(response)) {
      const LoInsarray = response.included.filter(
        (x) => x.type === "learningObjectInstance" && x.attributes.isDefault
      );
      //catching default instance

      setLoInstance(LoInsarray);

      const copy1 = response.included.filter(
        (x) => x.type === "learningObjectResource"
      );

      const copy = copy1.filter((x) => {
        return LoInsarray[0].relationships.loResources.data.some((f) => {
          return f.id === x.id;
        });
      });
      //catching id's of modules under default instance

      setLoResource(copy);

      const resid = LoInsarray[0].relationships.loResources.data.map(
        (el) => el.id + "_resource"
      );
      //adding _res to id in learningObjectInstance of default instance

      const rescopy1 = response.included.filter((x) => x.type === "resource");
      const rescopy = rescopy1.filter((x) => {
        return (
          (x.attributes.contentType !== "Classroom" &&
            x.attributes.contentType !== "Virtual Classroom") ||
          resid.includes(x.id)
        );
      });

      setResource(rescopy);
    }
  }, [response]);

  useEffect(() => {
    getCart();
    if (!isNil(id)) {
      getDataById(id);
    }
  }, [id]);

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
      {src === "" ? (
        <div>
          <div className="container-fluid" style={{ background: "#F6F7FA" }}>
            <div className="row">
              <div className="col-8">
                <div className="p-4 text-white jumbo-container">
                  <p className="sub-heading">
                    <span className="c_badge">
                      {response?.data?.attributes?.loFormat}
                    </span>
                  </p>
                  <h1 className="heading">
                    {response?.data?.attributes?.localizedMetadata[0]?.name}
                  </h1>
                  <div style={{ float: "left" }}>
                    {/* <Rating name="read-only" value={4} readOnly /> */}
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
                  <img
                    src={response?.data?.attributes?.imageUrl}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: "#ffff" }} className="p-4">
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Tabs
                  sx={{ borderBottom: "1px solid #ccc" }}
                  value={currentTabIndex}
                  onChange={handleTabChange}
                >
                  <Tab label="OVERVIEW" />
                  <Tab label="Modules" />
                </Tabs>
                {currentTabIndex === 0 && (
                  <Box sx={{ marginTop: "20px" }}>
                    <Card className="overview" sx={{ mb: 3 }}>
                      <CardContent>
                        <div className="paragraph p-1">
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                response?.data?.attributes?.localizedMetadata[0]
                                  ?.richTextOverview,
                            }}
                          />
                          {/* {
                            responseLP?.data?.attributes?.localizedMetadata[0]
                              ?.richTextOverview
                          } */}
                        </div>
                      </CardContent>
                    </Card>
                  </Box>
                )}
                {currentTabIndex === 1 && (
                  <Box sx={{ marginTop: "20px" }}>
                    <Card className="overview">
                      <CardContent>
                        {!isNil(resource) &&
                          resource.map((val, ind) => moduletile(val, ind))}
                      </CardContent>
                    </Card>
                  </Box>
                )}
              </Grid>
              <Grid item xs={4}>
                <Card className="shop_card" style={{ marginTop: "-70px" }}>
                  <CardContent>
                    <p
                      style={{
                        fontWeight: "bold",
                        borderBottom: "1px solid #ddd",
                        color: "#000",
                        paddingBottom: "15px",
                      }}
                    >
                      {/* {response?.data?.attributes?.localizedMetadata[0]?.name} */}
                    </p>

                    <Button
                      sx={{
                        backgroundColor: "#2d3494",
                        "&:hover": {
                          backgroundColor: "#2d3494",
                        },
                      }}
                      onClick={(e) => goback()}
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      BACK TO SUBSCRIPTION
                    </Button>

                    {enrollRes &&
                    enrollRes.included &&
                    enrollRes.included[0] &&
                    enrollRes.included[0]?.attributes &&
                    enrollRes.included[0]?.attributes?.state ? (
                      ""
                    ) : cart && cart.zimvie_cart_id ? (
                      <a href="/payment">
                        {/* <div className="shop_head">
                          <span
                            style={{
                              border: "1px solid #2d3494",
                              padding: "10px",
                              borderRadius: "100%",
                            }}
                          >
                            <ShoppingCartIcon color="primary" />
                          </span>
                        </div> */}
                      </a>
                    ) : (
                      ""
                    )}
                  </CardContent>
                </Card>

                {/* <Card className="readmore">
                <CardContent>
                  <div className="readmore_head">
                    <h3>Most Popular</h3>
                  </div>
                  <div className="readmore_content">
                    <ol className="readmore_list">
                      <li className="readmore_item">
                        <a
                          href="https://www.informatica.com/in/about-us/customers/customer-success-stories/freddie-mac.html"
                          target="_blank"
                        >
                          <div className="read_left">
                            <p>
                              Freddie Mac Boosts Home Lending Efficiency as
                              Demand for Mortgages Grows
                            </p>
                          </div>
                          <div className="read_right">
                            <img src="https://www.informatica.com/content/dam/informatica-com/en/image/cc02/cc02-freddie-mac.png" />
                          </div>
                        </a>
                        <hr />
                      </li>
                      <li className="readmore_item">
                        <a
                          href="https://www.informatica.com/campaigns/nyc-health-hospitals-customer-story/index.html"
                          target="_blank"
                        >
                          <div className="read_left">
                            <p>
                              Learn how data governance, cloud modernization,
                              and self-service analytics improve patient
                              outcomes for the largest public healthcare system
                              in the United States.
                            </p>
                          </div>
                          <div className="read_right">
                            <img src="https://www.informatica.com/content/dam/informatica-com/en/image/cc02/cc02-nyc-health-4187.jpg" />
                          </div>
                        </a>
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card> */}
              </Grid>
            </Grid>
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
        <div class="external-course" style={{ height: "100vh", width: "100%" }}>
          <iframe src={src} height="100%" width="100%"></iframe>
        </div>
      )}
    </>
  );
};

export default CatalogueCourse;
