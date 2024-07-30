import { useEffect, useState } from "react";
import SubTitle from "../../../components/SubTitle";
import useAxios from "../../../hooks/useAxios";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import covimage from "../../../assets/images/cover_image/elearning.jpg";
import styles from "../Home.module.css";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { isEmpty, isNil } from "lodash";
import SliderCarousel from "../../../components/SliderCarousel";
import { useNavigate } from "react-router-dom";
import CarouselSkeleton from "../../../components/skeleton/Carousel";
// import Card from "../../../components/cards";
import MuiCardActions from "@mui/material/CardActions";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Grid } from "@mui/material";
import { getFilter } from "../../../features/Auth/authSlice";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./style.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import ViewAllCatalogs from "./ViewAll";

const Catalogue = (props) => {
  const axiosPrivate = useAxiosPrivate();
const home = props.home
  const navigate = useNavigate();
  const { axiosReq, response, loading } = useAxios();
  const { carouselContainer } = styles;
  const handleNavigateUser = (id) => {
    navigate(`/all-catalogs/${id}`);
  };
  const getData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/catalogs",
        // requestConfig: {
        //   params: {
        //     "filter.learnerState": "notenrolled",
        //   },
        // },
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [expanded, setExpanded] = useState(0);

  const handleExpandClick = (index) => {
    setExpanded(!expanded);
    if (expanded === index) {
      setExpanded("");
    } else {
      setExpanded(index);
    }
  };

  return (
    <>
      <SubTitle title="Catalog" />
      {loading ? (
        <CarouselSkeleton />
      ) : (
        <div className={carouselContainer}>
          {!isEmpty(response?.data) ? (
            <Grid container>
              {response?.data.map((val, ind) => {
                return (
                  <Grid item xs={12}>
                    <Card className="cata_card" key={val.id}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 16 }}
                          color="text.primary"
                          gutterBottom
                        >
                          {val.attributes.name === "Default Catalog"
                            ? "Onboarding Catalog"
                            : val.attributes.name}
                            <span className="icon_link">
                          {ind === expanded ? (
                            <KeyboardArrowUpIcon
                              onClick={() => handleExpandClick(ind)}
                            />
                          ) : (
                            <KeyboardArrowDownIcon
                              onClick={() => handleExpandClick(ind)}
                            />
                          )}
                        </span>
                        </Typography>

                        <Collapse
                          in={ind === expanded}
                          timeout="auto"
                          unmountOnExit
                        >
                          <CardContent>
                            <p>
                              <ViewAllCatalogs home={home} id={val.id} />
                            </p>
                          </CardContent>
                        </Collapse>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Catalogue;
