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
  const [openSub, setOpenSub] = useState(false);
  const [tunits, setTunits] = useState("");
  const [remunits, setRemunits] = useState(null);
  const [qty, setQty] = useState("1");
  const [coupon, setCoupon] = useState("");
  const [discountCoupon, setDiscountCoupon] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [courseTU, setCourseTu] = useState("");
  const [clabel, setClabel] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { axiosReq, response } = useAxios();
  const { axiosReq: userenrollmentReq, response: userenrollRes } = useAxios();
  const { axiosReq: userdataReq, response: userdataRes } = useAxios();
  const axiosPrivate = useAxiosPrivate();
  const [page, setPage] = useState("");
  const [wallet, setWallet] = useState(0);
  const adminAccessToken = useSelector(getAdminAccessToken);
  const config = {
    headers: {
      header1: "test",
    },
  };

  const getDataById = async () => {
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

  const handleContinue = () => {
    navigate(`/courses`);
  };

  const handleBuy = async () => {
    var cart_id = localStorage.getItem("cart_id");
    let config = {
      headers: {
        header1: "test",
      },
    };
    if (isEmpty(paymentMethod)) {
      toast.error("Please select a payment option.");
    } else {
      var formdata = new FormData();
      formdata.append("cart_id", cart_id);
      formdata.append("code", pcode);
      formdata.append("user_id", userdataRes?.data?.id);
      formdata.append("token", accessToken);
      formdata.append("payment", paymentMethod);
      formdata.append(
        "url",
        process.env.REACT_APP_ALM_URL + "/primeapi/v2/enrollments"
      );

      axios
        .post(
          process.env.REACT_APP_API_URL + "createorder.php",
          formdata,
          config
        )
        .then((response) => {
          if (response.data && response.data.success == true) {
            toast.success("Order placed successfully");
            localStorage.setItem("cart_id", "");
            console.log(response.data);
            if (cart.cart_type == "subscription") {
              handleSubscription();
            }
            if (paymentMethod == "wallet") {
              updateUserWallet(userdataRes?.data?.id, cart["total"]);
            } else {
              navigate(`/orders`);
            }
            // toast.error("Please enter a valid coupon");
            // await userenrollmentReq({
            //   axiosInstance: axiosPrivate,
            //   method: "POST",
            //   endpoint: `/enrollments`,
            //   requestConfig: {
            //     params: {
            //       loId: id,
            //       loInstanceId:
            //         response?.data?.relationships?.instances?.data[0]?.id,
            //     },
            //   },
            // });
          }
        });
    }
  };

  const handleSubscription = () => {
    var subfield = {};
    subfield[cart.subscription] = "Yes";
    var mainBody = {
      data: {
        id: userdataRes?.data?.id,
        type: "user",
        attributes: {
          email: userdataRes?.data?.attributes?.email,
          name: userdataRes?.data?.attributes?.name,
          fields: subfield,
        },
      },
    };

    var options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: JSON.stringify(mainBody),
    };

    fetch(
      process.env.REACT_APP_ALM_URL +
      "/primeapi/v2/users/" +
      userdataRes?.data?.id,
      options
    ).then((response) => {
      response.json().then((data) => {
        console.log("ssss aaAaAAaaA", data);
      });
    });
  };

  const updateItem = (itemid, ops = "") => {
    if (cart.cart_type == "individual" || cart.cart_type == "subscription") {
      return "";
    }
    var cart_id = localStorage.getItem("cart_id");
    let config = {
      headers: {
        header1: "test",
      },
    };
    var formdata = new FormData();
    formdata.append("cart_id", cart_id);
    formdata.append("course_id", itemid);
    formdata.append("ops", ops);

    axios
      .post(process.env.REACT_APP_API_URL + "updatecart.php", formdata, config)
      .then((response) => {
        if (response.data && response.data.success == true) {
          getCart();
        }
      });
  };

  const deleteCart = () => {
    var cart_id = localStorage.getItem("cart_id");
    let config = {
      headers: {
        header1: "test",
      },
    };
    var formdata = new FormData();
    formdata.append("cart_id", cart_id);
    formdata.append("deleted", 1);
    axios
      .post(process.env.REACT_APP_API_URL + "getcart.php", formdata, config)
      .then((response) => {
        if (response.data && response.data.success == true) {
          setCartItems([]);
          setCart([]);
          setQty(0);
          setPage("");
          setDiscountApplied(false);
          setDiscountCoupon("");
          localStorage.setItem("cart_id", "");
        } else {
          setCartItems([]);
          setCart([]);
          setQty(0);
          setPage("");
          setDiscountApplied(false);
          setDiscountCoupon("");
        }
      });
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
          if (response.data.cart.user_id) {
            localStorage.setItem("cart_id", "");
          }
          setCartItems(response.data.items);
          setCart(response.data.cart);
          setQty(response.data.qty);
          setPage(response.data.cart.cart_type);
          setDiscountApplied(response.data.cart.discount_code ? true : false);
          setDiscountCoupon(
            response.data.cart.discount_code
              ? response.data.cart.discount_code
              : ""
          );
        } else {
          setCartItems([]);
          setCart([]);
          setQty(0);
          setPage("");
          setDiscountApplied(false);
          setDiscountCoupon("");
        }
      });
  };

  const handleCloseModal = () => {
    setOpen(false);
    navigate("/courses");
  };
  const handleCoupon = () => {
    var cart_id = localStorage.getItem("cart_id");
    var formdata = new FormData();
    formdata.append("cart_id", cart_id);
    formdata.append("code", pcode);
    const res = axios
      .post(process.env.REACT_APP_API_URL + `getCoupon.php`, formdata, config)
      .then((response) => {
        if (response.data && response.data.success) {
          toast.success("Valid Coupon. Click on Buy Now to proceed");
        } else {
          toast.error("Please enter a valid coupon");
        }
      });
  };
  const handleWalletReedem = () => {
    if (parseInt(wallet) >= parseInt(cart["total"])) {
      var newtotal = wallet - cart["total"];
      setWallet(newtotal);
      toast.success("Amount redeemed");
      setPaymentMethod("wallet");
    }
  };

  const getUserWallet = (user_id) => {
    var formdata1 = new FormData();
    const res1 = axios
      .get(
        process.env.REACT_APP_API_URL + `get_amountbal.php?userid=` + user_id,
        formdata1,
        config
      )
      .then((response) => {
        if (response.data && response.data.amountbal) {
          setWallet(response.data.amountbal);
        }
      });
  };

  const updateUserWallet = (user_id, usedamount) => {
    var formdata1 = new FormData();
    formdata1.append("userid", user_id);
    formdata1.append("usedamount", usedamount);
    const res1 = axios
      .post(
        process.env.REACT_APP_API_URL + `reduce_amount.php`,
        formdata1,
        config
      )
      .then((response) => {
        if (response.data && response.data.success) {
          var newtotal = wallet - usedamount;
          setWallet(newtotal);
          navigate(`/orders`);
        }
      });
  };
  const removeDiscount = () => {
    var cart_id = localStorage.getItem("cart_id");
    var formdata1 = new FormData();
    formdata1.append("cart_id", cart_id);
    formdata1.append("remove", 1);
    const res1 = axios
      .post(process.env.REACT_APP_API_URL + `discount.php`, formdata1, config)
      .then((response) => {
        console.log(response.data.valid);
        if (response.data && response.data.success) {
          getCart();
          toast.success("Coupon Removed");
        } else {
          toast.error("Please enter a valid coupon");
        }
      });
  };

  const handleDiscountCoupon = () => {
    var formdata = new FormData();
    formdata.append("code", discountCoupon);
    const res = axios
      .post(
        process.env.REACT_APP_API_URL +
        `checkcoupon.php?action=check_coupon&coupon_code=` +
        discountCoupon,
        formdata,
        config
      )
      .then((response) => {
        console.log(response.data.valid);
        if (response.data && response.data.valid) {
          var cart_id = localStorage.getItem("cart_id");
          var formdata1 = new FormData();
          formdata1.append("code", discountCoupon);
          formdata1.append("code_type", response.data.type);
          formdata1.append("code_value", response.data.value);
          formdata1.append("cart_id", cart_id);
          const res1 = axios
            .post(
              process.env.REACT_APP_API_URL + `discount.php`,
              formdata1,
              config
            )
            .then((response) => {
              console.log(response.data.valid);
              if (response.data && response.data.success) {
                getCart();
                toast.success("Coupon Applied");
              } else {
                toast.error("Please enter a valid coupon");
              }
            });

          // toast.success("Valid Coupon. Click on Buy Now to proceed");
        } else {
          toast.error("Please enter a valid coupon");
        }
      });
  };

  const createLink = () => {
    var cart_id = localStorage.getItem("cart_id");
    var mainLink = process.env.REACT_APP_URL + "/share-cart/" + btoa(cart_id);
    toast.success("Link is copied to clipboard");
    navigator.clipboard.writeText(mainLink);
  };

  useEffect(() => {
    if (!isEmpty(userenrollRes?.data)) {
      toast.success("Congratulations! Course purchase is successfull");
      navigate(`/course-overview/${id}`);
    }
    getCart();
  }, [userenrollRes]);
  useEffect(() => {
    getDataById();
  }, []);

  useEffect(() => {
    if (userdataRes && userdataRes.data && userdataRes.data.id) {
      getUserWallet(userdataRes.data.id);
    }
  }, [userdataRes]);

  const goback = () => {
    navigate(-1);
  };

  return (
    <>
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogContent>
          <Typography>
            Congratulations! The bulk purchase has been successful. Coupon code
            is
          </Typography>
          <Typography align="center" variant="h5">
            {" "}
            {coupon}
          </Typography>
        </DialogContent>
      </Dialog>

      <Dialog open={openSub} onClose={handleCloseModal}>
        <DialogContent>
          <Typography>
            Congratulations! The subscription purchase has been successful. You
            have access to the catalog.
          </Typography>
        </DialogContent>
      </Dialog>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="center-wrapper">
              <div className="content">
                <div className="payment_container">
                  <div className="heading">
                    <div className="first_half">
                      <a onClick={() => goback()} style={{ cursor: "pointer" }}>
                        <i
                          style={{
                            fontSize: "25px",
                            color: "#1c1137",
                          }}
                          className="fa-solid fa-chevron-left"
                        ></i>
                      </a>

                      <div className="heading_title">CART</div>
                    </div>
                    <div className="float-end">
                      <a
                        onClick={() => deleteCart()}
                        style={{
                          color: "#2d3494",
                          fontSize: "18px",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </a>
                      <a
                        onClick={() => createLink()}
                        style={{
                          color: "#2d3494",
                          fontSize: "20px",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        <i className="fa-solid fa-share-nodes"></i>
                      </a>
                      <Badge badgeContent={qty} color="error">
                        <ShoppingCartIcon sx={{ color: "#2d3494" }} />
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="p-1">
                  <div className="container p-2">
                    <table className="table">
                      <thead
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        <tr>
                          <th scope="col">Item</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Item Price</th>
                          <th scope="col">Subtotal</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems && cartItems.length > 0
                          ? cartItems.map(function (item) {
                            return (
                              <>
                                <tr key={item.zimvie_cart_item_id}>
                                  <td style={{ minWidth: "220px" }}>
                                    <p
                                      style={{
                                        marginBottom: "1px",
                                        fontWeight: "bold",
                                        color: "#1c1137",
                                      }}
                                    >
                                      {item.name}
                                    </p>
                                    SKU: {item.course_id}
                                  </td>
                                  <td style={{ width: "150px" }}>
                                    <div className="input-group">
                                      <span className="input-group-btn">
                                        <button
                                          style={{ width: "35px" }}
                                          type="button"
                                          onClick={() =>
                                            updateItem(
                                              item.course_id,
                                              "minus"
                                            )
                                          }
                                          disabled={
                                            item && item.qty <= 1
                                              ? true
                                              : false
                                          }
                                          className="btn btn-default btn-number"
                                          data-type="minus"
                                        >
                                          <span className="fa-solid fa-minus"></span>
                                        </button>
                                      </span>
                                      <input
                                        type="text"
                                        name="quant[1]"
                                        readOnly={true}
                                        className="form-control input-number"
                                        value={item.qty}
                                        min="1"
                                        max="10"
                                      />
                                      <span className="input-group-btn">
                                        <button
                                          style={{ width: "35px" }}
                                          type="button"
                                          onClick={() =>
                                            updateItem(item.course_id, "plus")
                                          }
                                          className="btn btn-default btn-number"
                                          data-type="plus"
                                        >
                                          <span className="fa-solid fa-plus"></span>
                                        </button>
                                      </span>
                                    </div>
                                  </td>
                                  <td
                                    style={{
                                      minWidth: "130px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    ${item.price}
                                  </td>
                                  <td>
                                    <b>${item.price * item.qty}</b>
                                  </td>
                                  <td style={{ minWidth: "130px" }}>
                                    <button
                                      style={{
                                        padding: "5px 10px",
                                        height: "auto",
                                        width: "auto",
                                        fontSize: "8px",
                                      }}
                                      onClick={() =>
                                        updateItem(item.course_id)
                                      }
                                      className="btn btn-danger btn-sm"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                                {/* <tr key={item.zimvie_cart_item_id + "_1"}>
                                    <td></td>
                                    <td></td>
                                    <td>
                                      <b>Subtotal:</b>
                                    </td>
                                    <td>
                                      <b>${item.price * item.qty}</b>
                                    </td>
                                  </tr> */}
                              </>
                            );
                          })
                          : "No items in cart"}
                      </tbody>
                    </table>
                  </div>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <div className="header-container">
                        <h4 className="header paymentradiobtn_head">
                          Payment Methods
                        </h4>
                        <img src="/ccard.PNG" />
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="container p-2">
                        <div>
                          <label>
                            <input
                              type="radio"
                              value="creditcard"
                              checked={paymentMethod == "creditcard"}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            />{" "}
                            <b>Credit Card</b>
                          </label>
                          <div className="p-4">
                            <div className="mb-4">
                              Safe money transfer using your bank account. Visa,
                              Maestro, Discover, American Express.
                            </div>

                            <div className="row">
                              <div className="col-12">
                                <label className="form-label">
                                  Card Number
                                </label>
                                <div className="input-group mb-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                  />
                                  <span
                                    className="input-group-text"
                                    id="basic-addon2"
                                  >
                                    <CreditCardIcon />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <label className="form-label">
                                  Name on Card
                                </label>
                                <div className="input-group mb-2">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-3">
                                <label className="form-label">
                                  Expire Date
                                </label>
                                <div className="input-group mb-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <label className="form-label">CVV Code</label>
                                <div className="input-group mb-2">
                                  <input
                                    type="password"
                                    className="form-control"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                  />
                                  <span
                                    className="input-group-text"
                                    id="basic-addon2"
                                  >
                                    <HelpOutlineIcon />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label>
                            <input
                              type="radio"
                              value="promocode"
                              checked={paymentMethod == "promocode"}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            />{" "}
                            <b>Coupon Code</b>
                          </label>
                          <div className="p-4">
                            <div className="promo-code">
                              <input
                                type="text"
                                name="promo-checkbox"
                                placeholder="Enter your Purchase Coupon code here"
                                value={pcode}
                                onChange={(e) => setPcode(e.target.value)}
                                checked
                              />
                              <button
                                className="apply btn btn-primary"
                                style={{
                                  background: "#2d3494",
                                  borderColor: "#2d3494",
                                }}
                                onClick={handleCoupon}
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label>
                            <input
                              disabled={
                                parseInt(wallet) < parseInt(cart["total"])
                                  ? true
                                  : false
                              }
                              type="radio"
                              value="wallet"
                              checked={paymentMethod == "wallet"}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            />{" "}
                            <b>Wallet</b>
                          </label>
                          <div className="p-4">
                            <p>
                              Wallet Balance: <b>{wallet}</b>
                            </p>

                            <div className="promo-code">
                              <button
                                className={
                                  parseInt(wallet) < parseInt(cart["total"])
                                    ? "disabled apply btn btn-primary "
                                    : "apply btn btn-primary "
                                }
                                style={{
                                  background: "#2d3494",
                                  borderColor: "#2d3494",
                                }}
                                onClick={handleWalletReedem}
                              >
                                Redeem
                              </button>
                            </div>
                            {/* {(parseInt(wallet)<parseInt(cart["total"])) ? <span className="text-muted">Insufficent Balance</span> : ''} */}
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  {/* <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <div className="header-container">
                        <h4 className="header paymentradiobtn_head">Credit Card</h4>
                        <img src="/ccard.PNG" />
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="container p-2">
                        <div className="mb-4">
                          Safe money transfer using your bank account. Visa, Maestro,
                          Discover, American Express.
                        </div>

                        <div className="row">
                          <div className="col-12">
                            <label className="form-label">Card Number</label>
                            <div className="input-group mb-2">
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <span className="input-group-text" id="basic-addon2">
                                <CreditCardIcon />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <label className="form-label">Name on Card</label>
                            <div className="input-group mb-2">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-3">
                            <label className="form-label">Expire Date</label>
                            <div className="input-group mb-2">
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                            </div>
                          </div>
                          <div className="col-3">
                            <label className="form-label">CVV Code</label>
                            <div className="input-group mb-2">
                              <input
                                type="password"
                                className="form-control"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <span className="input-group-text" id="basic-addon2">
                                <HelpOutlineIcon />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion> */}
                  {/* <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      <div className="header-container">
                        <h4 className="header paymentradiobtn_head">
                          Purchase code
                        </h4>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      {page === "individual" && (
                        <>
                          <div className="promo-code">
                            <input
                              type="text"
                              name="promo-checkbox"
                              placeholder="Enter your Purchase Coupon code here"
                              value={pcode}
                              onChange={(e) => setPcode(e.target.value)}
                              checked
                            />
                            <button
                              className="apply btn btn-primary"
                              style={{ background: "#2d3494" }}
                              onClick={handleCoupon}
                            >
                              Apply
                            </button>
                          </div>
                        </>
                      )}
                    </AccordionDetails>
                  </Accordion> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="bg-white p-2" style={{ marginTop: "0.5rem" }}>
              <div className="payment_container">
                <h2>Checkout</h2>
              </div>
              <div className="promo-code">
                <p>Discount Code</p>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    name="promo-checkbox"
                    placeholder="Discount Code"
                    className="form-control"
                    value={discountCoupon}
                    onChange={(e) => setDiscountCoupon(e.target.value)}
                    checked
                  />
                  {discountApplied ? (
                    <button
                      className="btn btn-primary"
                      style={{
                        background: "#2d3494",
                        width: "auto",
                        fontSize: "10px",
                        padding: "5px 10px",
                        height: "auto",
                        borderColor: "#2d3494",
                      }}
                      onClick={removeDiscount}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      style={{
                        background: "#2d3494",
                        width: "auto",
                        fontSize: "10px",
                        padding: "5px 10px",
                        height: "auto",
                        border: "none",
                      }}
                      onClick={handleDiscountCoupon}
                    >
                      Apply
                    </button>
                  )}
                </div>
              </div>
              <div className="total">
                <h3>
                  <b>Total:</b>
                </h3>
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    marginLeft: "20px",
                    fontWeight: "bold",
                  }}
                >
                  ${cart["total"]}
                </h3>
              </div>
              <button
                className="btn-go-checkout"
                style={{ background: "#2d3494" }}
                onClick={handleBuy}
              >
                <i className="fa fa-shopping-cart"></i>
                <span> Buy Now</span>
              </button>
              <button
                className="btn-go-checkout"
                style={{ background: "#2d3494" }}
                onClick={handleContinue}
              >
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
