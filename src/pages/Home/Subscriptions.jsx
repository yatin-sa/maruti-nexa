import { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import useAxios from "../../hooks/useAxios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import covimage from "../../assets/images/cover_image/elearning.jpg";
import notavailable from "../../assets/images/cover_image/not-availabl.jpg";
import styles from "./Home.module.css";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { isEmpty, isNil, isUndefined } from "lodash";
import SliderCarousel from "../../components/SliderCarousel";
import { useNavigate } from "react-router-dom";
import CarouselSkeleton from "../../components/skeleton/Carousel";
import MuiCardActions from "@mui/material/CardActions";
import Card from "../../components/cards";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Rating from "@mui/material/Rating";
import MenuDialog from "./menu/MenuDialog";
import axios from "axios";

const Subscriptions = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [mappedData, setMappedData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuContent, setMenuContent] = useState({});
  const { axiosReq: userdataReq, response: userdataRes } = useAxios();
  const [name, setName] = useState("");
  const [show, setShow] = useState("No");
  const [catologueId, setCatologueId] = useState(null);
  var counter = 0;
  const handleNavigateUser = () => {
    navigate(`/subscription/${catologueId}`);
  };
  const { axiosReq, response, loading } = useAxios();

  const { carouselContainer } = styles;
  //const [subData, setSubData] = useState();

  const getData = async () => {
    try {
      await userdataReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/user",
      });
      //   await axiosReq({
      //     axiosInstance: axiosPrivate,
      //     method: "GET",
      //     endpoint: "/learningObjects",
      //     requestConfig: {
      //       params: {
      //         "filter.learnerState": "enrolled,completed,started",
      //       },
      //     },
      //   });
      let config = {
        headers: {
          header1: "test",
        },
      };
      axios
        .get("https://viku.space/uipath_api/get_subcriptions.php", [], config)
        .then((response) => {
          //   console.log("anuugug ", response);
          //   console.log("Type ", JSON.parse(response.data));
          //   console.log("Emp ", isEmpty(response.data));
          const copy = response.data.subscriptions.map((val) => ({
            ...val,
            isFav: false,
          }));
          setMappedData([...copy]);
          //setSubData(response.data.subscriptions);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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

  const shouldShow = (name) => {
    if (
      isEmpty(userdataRes.data) ||
      isEmpty(userdataRes?.data?.attributes?.fields)
    ) {
      return true;
    } else {
      const flag = userdataRes?.data?.attributes?.fields[name];
      if (flag === "Yes") {
        return false;
      } else {
        return true;
      }
    }
  };
  //   useEffect(() => {
  //     if (!isEmpty(response?.data)) {
  //       const copy = response.data.map((val) => ({ ...val, isFav: false }));
  //       setMappedData([...copy]);
  //     }
  //   }, [response?.data]);

  //console.log("subres", subData);

  const colorChange = async (index) => {
    const copy = [...mappedData];
    copy[index].isFav = !copy[index].isFav;
    setMappedData([...copy]);
  };
  const handleClick = (event, id, ind) => {
    navigate(`/subscription/${id}`);
    // setAnchorEl(event.currentTarget);
    // setCatologueId(id);
    // setMenuContent({ ...mappedData[ind] });
  };

  return (
    <>
      <SubTitle title="Subscriptions" />
      {loading ? (
        <CarouselSkeleton />
      ) : (
        <div className={`abc ${carouselContainer}`}>
          {!isEmpty(mappedData) ? (
            <SliderCarousel>
              {mappedData.map((val, ind) => {
                //console.log(val, "blahh");
                if (shouldShow(val.name)) {
                  counter++;
                  return (
                    <Card
                      key={ind}
                      onClick={(e) => handleClick(e, val.catalogid, ind)}
                    >
                      <Card.Content
                        url={covimage}
                        title={val.name}
                        price={val.price}
                      ></Card.Content>
                    </Card>
                  );
                }
                if (ind === mappedData.length - 1 && counter === 0) {
                  return (
                    <Card key={ind}>
                      <Card.Content
                        url={notavailable}
                        title="No Subscriptions Available"
                      ></Card.Content>
                    </Card>
                  );
                }
                console.log("counter", ind);
              })}
            </SliderCarousel>
          ) : (
            <></>
          )}
          <MenuDialog
            menuContent={menuContent}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            handleNavigateUser={handleNavigateUser}
          />
        </div>
      )}
    </>
  );
};

export default Subscriptions;
