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

const Container = styled("div")({
  padding: 100,
  borderRadius: 4,
  margin: "0 auto",
});
const Title = styled("span")({
  marginRight: "50px",
});

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [access_token, setAccessToken] = useState("");
  const fetchUsers = () => {
    axios.get("http://localhost:3500/users").then((response) => {
      setData(response.data);
    });
  };

  const updateEmail = async (id, email, name) => {
    const result =
      email
        .substring(0, email.indexOf("@"))
        .replace(/(\d*)$/, (_, t) =>
          (+t + 1).toString().padStart(t.length, 0)
        ) + "@adobe.com";

    const up_result1 = {
      email: result,
    };

    axios
      .patch(`http://localhost:3500/users/${id}`, up_result1)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          fetchUsers();
          toast.success(`Email successfully updated for ${name}`);
        }
      });
    const data = await axios.post(
      `${process.env.REACT_APP_ALM_URL}/primeapi/v2/users`,
      {
        data: {
          type: "user",
          attributes: {
            email: result,
            name: "Anonymous User",
            userType: "INTERNAL",
          },
        },
      },
      {
        headers: {
          Authorization: `oauth ${access_token}`,
        },
      }
    );
  };
  const loginUser = async (email) => {
    // console.log(email);
    const objData = {
      client_id: "5501355e-0184-40d5-b353-5f5a056b027f",
      client_secret: "aedb9c40-5164-4cc1-a182-7654aab5ba72",
      refresh_token: "e21a2b58d112aa0772f2ab37153ad810",
    };
    const body = JSON.stringify(objData);

    const res = await axios.post(
      `${process.env.REACT_APP_ALM_URL}/oauth/o/learnerToken?learner_email=${email}&force=false`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    if (res.status === 200) {
      dispatch(setCredentials({ accessToken: res.data.access_token }));
      //navigate("/courses", "_blank");
      window.open(`${process.env.REACT_APP_URL}/courses`, "_blank");
    }
  };
  const getAdminToken = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_ALM_URL}/oauth/token/refresh?client_id=fe1b6c1b-d6c0-4fe6-a86b-6f9ae2b2fc92&client_secret=719eeeb0-5624-4383-95e3-c7c9e27f0353&refresh_token=fa80dc2c4a144d46ee1b6c736f932f86`,
      {},
      {
        "content-type": "application/x-www-form-urlencoded",
      }
    );
    setAccessToken(res.data.access_token);
  };

  useEffect(async () => {
    fetchUsers();
    await getAdminToken();
  }, []);
  //console.log(data);

  return (
    <>
      <Container>
        <Card sx={{ padding: "20px" }}>
          <div>
            <h1>Anonymous user list</h1>
          </div>
        </Card>

        {!isEmpty(data) &&
          data.map((val, ind) => {
            return (
              <List>
                <ListItem>
                  <Title>{val.name}</Title>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      marginRight: "10px",
                      width: "135px",
                      padding: "7px 10px",
                    }}
                    onClick={(e) => updateEmail(val.id, val.email, val.name)}
                  >
                    Reset User
                  </Button>
                  <Button
                    onClick={(e) => loginUser(val.email)}
                    variant="contained"
                  >
                    Login
                  </Button>
                </ListItem>
              </List>
            );
          })}
      </Container>
    </>
  );
};

export default Admin;
