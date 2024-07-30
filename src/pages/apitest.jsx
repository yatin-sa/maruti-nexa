import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { isEmpty } from "lodash";
import "./admin.css";
import apiRequest from "../api/apiRequest";
import adminConfig from "../config/admin";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/Auth/authSlice";

const Api = () => {
  const [abc, setAbc] = useState();
  const fetchUsers = () => {
    let config = {
      headers: {
        header1: "test",
      },
    };
    axios
      .get("https://viku.space/uipath_api/get_subcriptions.php", [], config)
      .then((response) => {
        console.log("anuugug ", response);
        console.log("Type ", JSON.parse(response.data));
        console.log("Emp ", isEmpty(response.data));
        setAbc(response.data[4]);
      });
  };
  //   const fetchUsers1 = async () => {
  //     const body_json = {
  //       data: {
  //         id: "17194614",
  //         type: "user",
  //         attributes: {
  //           email: "prahul@adobe.com",
  //           name: "Rahul P",
  //           fields: {
  //             Subscription: "Yes",
  //           },
  //           state: "ACTIVE",
  //           userType: "Internal",
  //         },
  //       },
  //     };

  //     var options = {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer 4c0094b012d5187629dc6679a99e482e",
  //       },
  //       body: JSON.stringify(body_json),
  //     };
  //     console.log(options);
  //     await fetch(
  //       `https://learningmanager.adobe.com/primeapi/v2/users/17194614`,
  //       options
  //     ).then((response) => {
  //       response.json().then((data) => {
  //         console.log("Success");
  //       });
  //     });
  //   };
  //   const fetchUsers = async () => {
  //     var options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer 82ea13a0ea1aa17fa97eeb83afe595a4",
  //       },
  //     };

  //     await fetch(
  //       `https://learningmanager.adobe.com/primeapi/v2/users/17194614/enrollments?loId=course:4763736&loInstanceId=course:4763736_5214631&allowMultiEnrollment=false`,
  //       options
  //     ).then((response) => {
  //       response.json().then((data) => {
  //         console.log("Success");
  //       });
  //     });
  //   };

  useEffect(async () => {
    fetchUsers();
  }, [abc]);
  //console.log(data);

  return <></>;
};

export default Api;
