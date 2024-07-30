import * as React from "react";
import { isEmpty } from "lodash";
import "./admin.css";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Api = () => {
  const [tableData, setTableData] = useState([]);
  const [units, setUnits] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isEditID, setIsEditID] = useState("");
  const [code, setCode] = useState("");
  const [actualPrice, setActualPrice] = useState("");

  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchUsers = () => {
    let config = {
      headers: {
        header1: "test",
      },
    };
    axios
      .get("https://viku.space/informatica/getCoupon.php", [], config)
      .then((response) => {
        setTableData(response.data);
      });
  };

  useEffect(async () => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="main_admin_table">
        <div className="container">
          <div className="card p-4">
            <h2>Coupon Data</h2>
            <table className="table table-hover">
              <thead className="table-dark">
                <tr>
                  <th>User</th>
                  <th>Code</th>
                  <th>Quantity</th>
                  <th>Used Quantity</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(function (item) {
                  return (
                    <tr key={item.coupon_id}>
                      <td>{item.user_id}</td>
                      <td>{item.code}</td>
                      <td>{item.qty}</td>
                      <td>{item.used_qty}</td>
                      <td>{item.created_at}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Api;
