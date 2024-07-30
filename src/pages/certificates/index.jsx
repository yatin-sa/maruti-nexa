import useAxios from "../../hooks/useAxios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { isEmpty, isNil } from "lodash";
import LinearProgress from "@mui/material/LinearProgress";

const Container = styled("div")({
  padding: 100,
  borderRadius: 4,
  margin: "0 auto",
});
const Title = styled("span")({
  marginRight: "50px",
});

const Certi = () => {
  const { axiosReq, response } = useAxios();

  const axiosPrivate = useAxiosPrivate();
  const [loading, setLoading] = useState(true);

  const getCertiDetails = async (date1, name1) => {
    const userData = await axiosPrivate.get("/user");
    const getUser = userData.data;
    const name = getUser?.data?.attributes?.name;

    const course_name = name1;

    const date = getDate(date1);

    const status = false;

    window.open(
      `http://viku.space/goddard/create.php?name=${name}&completion_date=${date}&status=${status}&course_name=${course_name}`,
      "_blank"
    );
  };

  const getDataAll = async () => {
    try {
      setLoading(true);
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: `/learningObjects`,
        requestConfig: {
          params: {
            "filter.loTypes": "course",
            "filter.learnerState": "completed",
          },
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getDate = (date1) => {
    const startdate = new Date(date1);
    const month_num = startdate.getMonth();
    let month = "";
    switch (month_num) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
    }

    const day = startdate.getDate();
    const year = startdate.getFullYear();

    return month + " " + day + ", " + year;
  };
  useEffect(() => {
    if (!isNil(response)) {
      getDataAll();
    }
  }, []);

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
      <Container>
        <Card sx={{ padding: "20px" }}>
          <div sx={{ display: "flex", justifyContent: "space-between" }}>
            <h1>My Certificates</h1>
            <Button
              onClick={(e) =>
                window.open(
                  `https://cpcontents.adobe.com/eu/public/newlearner/newlearner_ba5a1c9a.html#/newLearnerExperience`,
                  "_blank"
                )
              }
              variant="outlined"
              sx={{
                marginRight: "10px",
                float: "right",
                width: "135px",
                padding: "7px 10px",
              }}
            >
              GO TO ALM
            </Button>
          </div>
        </Card>
        <List>
          <ListItem>
            <Title
              sx={{
                marginRight: "10px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "royalblue",
                width: "235px",
                padding: "7px 10px",
              }}
            >
              Course Name
            </Title>
            <Title
              sx={{
                marginRight: "10px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "royalblue",
                width: "235px",
                padding: "7px 10px",
              }}
            >
              Completion Date
            </Title>
          </ListItem>
        </List>

        {!isEmpty(response.data) &&
          response.data.map((val, ind) => {
            return (
              <List>
                <ListItem>
                  <Title
                    sx={{
                      marginRight: "10px",
                      fontWeight: "bold",
                      width: "235px",
                      padding: "7px 10px",
                    }}
                  >
                    {val.attributes.localizedMetadata[0].name}
                  </Title>
                  <Title
                    sx={{
                      marginRight: "10px",
                      width: "235px",
                      padding: "7px 10px",
                    }}
                  >
                    {getDate(val.attributes.dateCreated)}
                  </Title>

                  <Button
                    onClick={(e) =>
                      getCertiDetails(
                        val.attributes.dateCreated,
                        val.attributes.localizedMetadata[0].name
                      )
                    }
                    variant="contained"
                    sx={{
                      marginRight: "10px",
                      width: "235px",
                      padding: "7px 10px",
                    }}
                  >
                    VIEW CERTIFICATE
                  </Button>
                </ListItem>
              </List>
            );
          })}
      </Container>
    </>
  );
};

export default Certi;
