import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import Dialog from "@mui/material/Dialog";
import useAxios from "../hooks/useAxios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const emails = ["username@gmail.com", "user02@gmail.com"];

function Announcements(props) {
  const [open, setOpen] = useState(true);

  const [data, setData] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const { axiosReq, response, loading } = useAxios();
  const { axiosReq: userReq, response: userRes } = useAxios();

  const handleClose = () => {
    sessionStorage.setItem('announcements', 1)
    setOpen(false)
  };
  // https://learningmanager.adobe.com/primeapi/v2/users/20556959/userNotifications?page[limit]=10&announcementsOnly=fal
  const getData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "users/" + userRes?.data?.id + "/userNotifications?page[limit]=10&announcementsOnly=false"
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getUser = async () => {
    try {
      await userReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/user",
      });
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    if (sessionStorage.getItem('announcements')) {
      setOpen(false)
    } else {
      getUser();
    }
  }, []);

  useEffect(() => {
    getData();
    
  }, [userRes]);


  useEffect(() => {
    if (response && response.data && response.data.length > 0) {
      const allresponse = response.data.filter(
        (x) => x.attributes?.announcement?.description != ""
      );
      if(allresponse && allresponse.length>0){
        setData(allresponse[0])
      }
      
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [response]);

console.log('anno ',data)
  return (
    <Dialog onClose={handleClose} open={open}>
      {/* <DialogTitle>Leader</DialogTitle> */}
      <DialogContent sx={{ width: "600px", height: "100%", padding: "56px 56px" }}>
        <div className="ms_annoucment"
          dangerouslySetInnerHTML={{
            __html:
              data?.attributes?.announcement?.description
          }}
        />

      </DialogContent>
    </Dialog>
  );
}
export default Announcements;