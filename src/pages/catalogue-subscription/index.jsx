import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAxios from "../../hooks/useAxios";
import Grid from "@mui/material/Grid";
import Card from "../../components/cards";
import MenuDialog from "../Home/menu/MenuDialog";
import { useEffect, useState } from "react";
import { isEmpty, isNil, isUndefined } from "lodash";
import covimage from "../../assets/images/cover_image/elearning.jpg";
import "./styles.css";
import axios from "axios";
import toast from "react-hot-toast";
import SubTitle from "../../components/SubTitle";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { getAdminAccessToken } from "../../features/Auth/authSlice";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CatalogueSubscription = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { id } = useParams();
  // const { axiosReq, response, loading } = useAxios();
  const { axiosReq: userdataReq, response: userdataRes } = useAxios();
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const [show, setShow] = useState(true);
  const [subData, setSubData] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const adminAccessToken = useSelector(getAdminAccessToken);

  const getData = async () => {
    
    try {
      var options = {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminAccessToken}`,
        },
      };

      fetch(
        `https://learningmanager.adobe.com/primeapi/v2/learningObjects?page[limit]=10&filter.loTypes=course&filter.catalogIds=${id}&sort=name&filter.ignoreEnhancedLP=true`,
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
      //     endpoint: "/learningObjects",
      //     requestConfig: {
      //       params: {
      //         "filter.catalogIds": id,
      //       },
      //     },
      //   });
      await userdataReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/user",
      });
    } catch (e) {
      console.log(e);
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
          if (
            response.data &&
            response.data.cart &&
            response.data.cart.cart_type != "subscription"
          ) {
            setShow(false);
          }
          const checkItems = response.data.items.filter(
            (x) => x.course_id == subData?.subid
          );
          if (checkItems && checkItems.length > 0) {
            setShow(false);
          }
        }
      });
  };

  const getSubscriptions = async () => {
    try {
      let config = {
        headers: {
          header1: "test",
        },
      };
      axios
        .get(
          "https://viku.space/uipath_api/get_subcriptions.php?catalogid=" + id,
          [],
          config
        )
        .then((response) => {
          var subData = response?.data?.subscriptions
          console.log('subsss ',response?.data?.subscriptions)
          setSubData(subData);

          // const index = response.data.subscriptions.findIndex(
          //   (val) => val.catalogid === id
          // );
          //console.log(response.data, "susb");

          //setName(response?.data?.subscriptions.name);
          //setSubData(response.data.subscriptions[index]);
        });
    } catch (e) {
      console.log(e);
    }
  };

  //   console.log("yay", subData);
  //   console.log("ryay", name);
  const handleClick = (subId) => {
    console.log(subId);
    navigate(`/subscription/${id}/${subId}`);
  };

  const addToCart = () => {
    var cart_id = localStorage.getItem("cart_id");

    let config = {
      headers: {
        header1: "test",
      },
    };
    //   var instance_id =
    //     Loinstance && Loinstance[0] && Loinstance[0].id ? Loinstance[0].id : "";
    var formdata = new FormData();
    formdata.append("course_id", subData?.subid);
    formdata.append("price", subData?.price);
    formdata.append("user_id", userdataRes?.data?.id);
    formdata.append("cart_id", cart_id);
    formdata.append("name", subData?.name);
    formdata.append("cart_type", "subscription");
    formdata.append("Loinstance", "");
    formdata.append("subscription", subData?.name);

    axios
      .post(process.env.REACT_APP_API_URL + "cart.php", formdata, config)
      .then((response) => {
        if (response.data && response.data.success == true) {
          toast.success("Subscription has been added to the cart");
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
      getData();
    }
    
  }, [adminAccessToken]);
  useEffect(() => {
    console.log(userdataRes);
    if (
      !isEmpty(userdataRes.data) &&
      !isEmpty(userdataRes?.data?.attributes?.fields)
    ) {
      const flag = userdataRes?.data?.attributes?.fields[subData.name];
      console.log("flag", flag);
      if (isUndefined(flag)) {
        // setShow("No");
      } else {
        // setShow(flag);
      }
    } else {
      // setShow("No");
    }
  }, [userdataRes]);
  useEffect(() => {    
    getSubscriptions(id);
  }, []);

  useEffect(() => {    
    getCart();
  }, [subData]);

  return (
    <>
      <div className="container-fluid" style={{ background: "#F6F7FA" }}>
        <div className="row">
          <div className="col-8">
            <div className="p-4 text-white jumbo-container">
              <p className="sub-heading">
                <span className="c_badge">SUBSCRIPTIONS</span>
              </p>
              <h1 className="heading">{subData?.name}</h1>
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
              {/* <img
                    src={response?.data?.attributes?.imageUrl}
                    className="img-fluid"
                  /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid container>
              {!isEmpty(response) &&
                response?.data?.map((val, ind) => {
                  return (
                    <Grid key={ind} item xs={4}>
                      <Card onClick={(e) => handleClick(val.id)}>
                        <Card.Content
                          url={
                            isNil(val?.attributes?.imageUrl)
                              ? covimage
                              : val?.attributes?.imageUrl
                          }
                          title={val.attributes.localizedMetadata[0].name}
                          status="Buy"
                        ></Card.Content>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <div className="card">
              <div
                className="shop_card bg-white"
                style={{ marginTop: "-70px" }}
              >
                <CardContent>
                  <p
                    style={{
                      fontWeight: "bold",
                      borderBottom: "1px solid #ddd",
                      color: "#000",
                      paddingBottom: "15px",
                    }}
                  >
                    {/* {subData?.name} */}
                  </p>
                  {show ? (
                    <Button
                      sx={{
                        backgroundColor: "#2d3494",
                        "&:hover": {
                          backgroundColor: "#2d3494",
                        },
                      }}
                      //disabled={cartid && cartid != "" ? true : false}
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={addToCart}
                    >
                      Buy Subscription | ${subData?.price}
                    </Button>
                  ) : (
                    <>
                      <Button
                        sx={{
                          backgroundColor: "#2d3494",
                          "&:hover": {
                            backgroundColor: "#2d3494",
                          },
                        }}
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled
                      >
                        Buy Subscription | ${subData?.price}
                      </Button>
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
                    </>
                  )}
                </CardContent>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CatalogueSubscription;
