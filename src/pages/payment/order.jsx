import "./styles.scss";
import "./styles.css";
import cart from "../../assets/img/carts.png";
import { useNavigate } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { isEmpty, isNil, isNull } from "lodash";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import card from "../../assets/img/Creditcard.PNG";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import { Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TextField from "@mui/material/TextField";
import { height } from "@mui/system";
import {
  getAdminAccessToken,
  getCredentials,
} from "../../features/Auth/authSlice";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CouponList from "../../components/Coupon";

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const auth = useSelector(getCredentials);

  const { accessToken } = auth;
  const valid_coupons = ["abc", "efg"];
  const invalid_coupons = ["FLASH20", "FLASH30"];
  const [expanded, setExpanded] = useState("pane20");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const [pcode, setPcode] = useState("");
  const [open, setOpen] = useState(false);
  const [couponItem, setCouponItem] = useState("");
  const [couponResponse, setCouponResponse] = useState("");
  const [openSub, setOpenSub] = useState(false);
  const [openStatusSub, setOpenStatusSub] = useState(false);
  const [tunits, setTunits] = useState("");
  const [remunits, setRemunits] = useState(null);
  const [qty, setQty] = useState("1");
  const [coupon, setCoupon] = useState("");
  const [courseTU, setCourseTu] = useState("");
  const [clabel, setClabel] = useState([]);
  const [cart, setCart] = useState([]);
  const [couponData, setCouponData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const { axiosReq, response } = useAxios();
  const { axiosReq: userenrollmentReq, response: userenrollRes } = useAxios();
  const { axiosReq: userdataReq, response: userdataRes } = useAxios();
  const axiosPrivate = useAxiosPrivate();
  const [page, setPage] = useState("");
  const adminAccessToken = useSelector(getAdminAccessToken);
  const config = {
    headers: {
      header1: "test",
    },
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

  const transfer = () => {
    var options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminAccessToken}`,
      },
    };
    const email = "email:" + inputValue;
    fetch(
      process.env.REACT_APP_ALM_URL +
        "/primeapi/v2/users?page[offset]=0&page[limit]=10&sort=id&ids=" +
        email,
      options
    ).then((response) => {
      response.json().then((data) => {
        console.log("ssss ", data?.data[0]?.id);
        if (data?.data[0]?.id) {
          toast.success(`Coupon transferred successfully`);
          transferCoupon(data?.data[0]?.id, couponItem);
        } else {
          toast.error(`User account not found`);
        }
      });
    });
  };
  //
  const transferCoupon = (user_id, coupon_id) => {
    // var user_id = userdataRes?.data?.id
    let config = {
      headers: {
        header1: "test",
      },
    };

    var formdata = new FormData();
    formdata.append("user_id", user_id);
    formdata.append("coupon_id", coupon_id);
    axios
      .post(
        process.env.REACT_APP_API_URL + "transfercoupon.php",
        formdata,
        config
      )
      .then((response) => {
        if (response.data && response.data.success == true) {
          getOrders(userdataRes?.data?.id);
          setOpenSub(false);
        }
      });
  };

  const handleCloseModal = () => {
    setOpenSub(false);
  };

  const handleCloseStatusModal = () => {
    setOpenStatusSub(false);
  };
  const handleModalOn = (id) => {
    setCouponItem(id);
    setOpenSub(true);
  };

  const handleStatusModalOn = (id) => {
    let config = {
      headers: {
        header1: "test",
      },
    };
    var formdata = new FormData();
    formdata.append("coupon_id", id);
    axios
      .post(process.env.REACT_APP_API_URL + "coupondata.php", formdata, config)
      .then((response) => {
        setCouponResponse(response.data.coupon);
        setOpenStatusSub(true);
      });
  };

  const getOrders = (user_id) => {
    // var user_id = userdataRes?.data?.id
    let config = {
      headers: {
        header1: "test",
      },
    };

    var formdata = new FormData();
    formdata.append("user_id", user_id);
    axios
      .post(process.env.REACT_APP_API_URL + "orders.php", formdata, config)
      .then((response) => {
        if (response.data && response.data.success == true) {
          setCartItems(response.data.items);
          setCart(response.data.cart);
          setQty(response.data.qty);
          setPage(response.data.cart.cart_type);
          setCouponData(response.data.coupon);
        }
      });
  };

  useEffect(() => {
    console.log("sssee", userdataRes);
    if (userdataRes?.data?.id) {
      getOrders(userdataRes?.data?.id);
    }
  }, [userdataRes]);

  useEffect(() => {
    getDataById();
  }, []);

  console.log("tr1", couponData);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="center-wrapper1">
              <div className="bg-white p-2" style={{ marginTop: "0.5rem" }}>
                <div className="payment_container">
                  <h2 className="logo text-center">Order History</h2>
                </div>
                <div className="p-1" style={{ minWidth: "500px" }}>
                  {cart && cart.length > 0
                    ? cart.map(function (item) {
                      var isSubscription = (item.subscription && item.subscription!='') ? true : false 
                      console.log(item.subscription)
                        var cartItems =
                          item && item["items"] ? item["items"] : [];
                        return (
                          
                          <Accordion
                            expanded={
                              expanded === "pane20" + item["zimvie_cart_id"]
                            }
                            onChange={handleChange(
                              "pane20" + item["zimvie_cart_id"]
                            )}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="pane20bh-content"
                              id="pane20bh-header"
                            >
                              <div className="header-container">
                                <h4 className="header paymentradiobtn_head">
                                  Order #{item["zimvie_cart_id"]}
                                </h4>
                              </div>
                            </AccordionSummary>
                            <AccordionDetails>
                              <div className="container p-2">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">Item</th>
                                      <th scope="col">
                                        Item Price(qty x price)
                                      </th>
                                      {/* <th scope="col">Action</th> */}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {cartItems && cartItems.length > 0
                                      ? cartItems.map(function (item) {
                                        
                                          return (
                                            <tr key={item.zimvie_cart_item_id}>
                                              <td>
                                                <p
                                                  style={{
                                                    marginBottom: "1px",
                                                  }}
                                                >
                                                  <a
                                                    style={{ paddingLeft: "0" }}
                                                    href={(isSubscription) ? "/courses" : 
                                                      "/course-overview/" +
                                                      item.course_id
                                                    }
                                                  >
                                                    {item.name}
                                                  </a>
                                                </p>
                                                <b>{item.course_id}</b>
                                              </td>
                                              <td>
                                                ${item.price}x{item.qty}= $
                                                {item.price * item.qty}
                                              </td>
                                              {/* <td><a href={"/course-overview/"+item.course_id}>View</a></td> */}
                                              {/* <td><button style={{ padding: "5px 10px", height: "auto", width: "auto", fontSize: "8px" }} className="btn btn-danger btn-sm">Delete</button></td> */}
                                            </tr>
                                          );
                                        })
                                      : ""}
                                  </tbody>
                                </table>
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        );
                      })
                    : "No orders found"}
                  <Dialog open={openSub} onClose={handleCloseModal}>
                    {/* <button className="float-end" style={{marginLeft:"auto"}} onClick={()=>handleCloseModal}><i className="fa fa-window-close" aria-hidden="true"></i></button> */}
                    <DialogContent>
                      <div className="container p-2">
                        <p>Transfer coupon</p>
                        <div className="input-group mb-4">
                          <input
                            type="text"
                            name="promo-checkbox"
                            placeholder="User Email"
                            className="form-control"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                          />
                          <button
                            className="btn btn-primary"
                            style={{
                              background: "#2d3494",
                              width: "auto",
                              fontSize: "10px",
                              padding: "5px 10px",
                              height: "auto",
                            }}
                            onClick={transfer}
                          >
                            Transfer
                          </button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog open={openStatusSub} onClose={handleCloseStatusModal}>
                    <DialogContent sx={{ width: "500px", height: "200px" }}>
                      <h4>
                        Coupon Code: <b>{couponResponse?.coupon}</b>
                      </h4>
                      <hr />
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Course</th>
                            <th scope="col">Used/Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!isEmpty(couponResponse?.items) &&
                            couponResponse?.items.map((item) => {
                              console.log("music", couponResponse?.items);
                              return (
                                <tr>
                                  <td>{item.name}</td>
                                  <td>
                                    {item.used_qty}/{item.qty}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <CouponList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
