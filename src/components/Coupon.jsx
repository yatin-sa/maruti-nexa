
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { isEmpty, isNil, isNull } from "lodash";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useAxios from "../hooks/useAxios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { getAdminAccessToken } from "../features/Auth/authSlice";

const CouponList = (props) => {
  const adminAccessToken = useSelector(getAdminAccessToken);
  const isHome = (props && props.home) ? true : false;
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
  const [openEnroll, setOpenEnroll] = useState(false);
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

  const config = {
    headers: {
      header1: "test",
    },
  };

  const enrollUser = () => {
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
          enrollUsertoItems(data?.data[0]?.id, couponItem);
        } else {
          toast.error(`User account not found`);
        }
      });
    });
  };

  const enrollUsertoItems = (user_id, coupon_id) => {
    // var user_id = userdataRes?.data?.id
    let config = {
      headers: {
        header1: "test",
      },
    };

    var formdata = new FormData();
    formdata.append("user_id", user_id);
    formdata.append("coupon_id", coupon_id);
    formdata.append("enroll", 1);
    formdata.append("token", adminAccessToken);
    formdata.append(
      "url",
      process.env.REACT_APP_ALM_URL + "/primeapi/v2/users/"+user_id+"/enrollments"
    );
    axios
      .post(
        process.env.REACT_APP_API_URL + "transfercoupon.php",
        formdata,
        config
      )
      .then((response) => {
        if (response.data && response.data.success == true) {
          getOrders(userdataRes?.data?.id);
          setOpenEnroll(false);
          toast.success(`Enrolled successfully`);
        }else{
          toast.error(`Something went wrong`);
        }
      });
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

  const handleCloseEnrollModal = () => {
    setOpenEnroll(false);
  };

  const handleCloseStatusModal = () => {
    setOpenStatusSub(false);
  };
  const handleModalOn = (id) => {
    setCouponItem(id);
    setOpenSub(true);
  };

  const handleEnrollModalOn = (id) => {
    setCouponItem(id);
    setOpenEnroll(true);
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

  return (
    <>

      <div className="bg-white p-2 shadow-lg" style={{ marginTop: "0.5rem" }}>
        <div className="content1">
          <div className="payment_container">
            <h2 className="logo text-center">Coupon History</h2>
          </div>
          <div className="p-1">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Coupon</th>
                  <th scope="col">Action</th>
                  <th scope="col">Status</th>
                  {/* <th scope="col">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {couponData && couponData.length > 0
                  ? couponData.map(function (item) {
                    console.log(item.coupon);
                    return (
                      <tr>
                        <td>{item.coupon}</td>
                        <td>
                          {
                            (isHome) ? <button
                              className="btn btn-primary"
                              style={{
                                background: "#2d3494",
                                width: "auto",
                                fontSize: "10px",
                                padding: "5px 10px",
                                height: "auto",
                                borderColor: "#2d3494"
                              }}
                              onClick={() =>
                                handleEnrollModalOn(item.zimvie_coupon_list_id)
                              }
                            >
                              Enroll
                            </button> : <button
                              className="btn btn-primary"
                              style={{
                                background: "#2d3494",
                                width: "auto",
                                fontSize: "10px",
                                padding: "5px 10px",
                                height: "auto",
                                borderColor: "#2d3494"
                              }}
                              onClick={() =>
                                handleModalOn(item.zimvie_coupon_list_id)
                              }
                            >
                              Transfer
                            </button>
                          }

                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            style={{
                              background: "#2d3494",
                              width: "auto",
                              fontSize: "10px",
                              padding: "5px 10px",
                              height: "auto",
                              borderColor: "#2d3494"
                            }}
                            onClick={() =>
                              handleStatusModalOn(
                                item.zimvie_coupon_list_id
                              )
                            }
                          >
                            Check Status
                          </button>
                        </td>
                      </tr>
                    );
                  })
                  : "No coupons found"}
              </tbody>
            </table>
          </div>
        </div>
      </div>


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
      <Dialog open={openEnroll} onClose={handleCloseEnrollModal}>
        {/* <button className="float-end" style={{marginLeft:"auto"}} onClick={()=>handleCloseModal}><i className="fa fa-window-close" aria-hidden="true"></i></button> */}
        <DialogContent>
          <div className="container p-2">
            <p>Enroll coupon</p>
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
                onClick={enrollUser}
              >
                Enroll
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
    </>
  );
};

export default CouponList;
