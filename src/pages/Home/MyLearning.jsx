import { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import useAxios from "../../hooks/useAxios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import covimage from "../../assets/images/cover_image/elearning.jpg";
import styles from "./Home.module.css";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { isEmpty, isNil } from "lodash";
import SliderCarousel from "../../components/SliderCarousel";
import { useNavigate } from "react-router-dom";
import CarouselSkeleton from "../../components/skeleton/Carousel";
import MuiCardActions from "@mui/material/CardActions";
import Card from "../../components/cards";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Rating from "@mui/material/Rating";
import MenuDialog from "./menu/MenuDialog";

const MyLearning = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [mappedData, setMappedData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuContent, setMenuContent] = useState({});

  const [trailerId, setTrailerId] = useState(null);
  const handleNavigateUser = () => {
    navigate(`/course-overview/${trailerId}`);
  };
  const { axiosReq, response, loading } = useAxios();

  const { carouselContainer } = styles;

  const getData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/learningObjects",
        requestConfig: {
          params: {
            "filter.learnerState": "enrolled,completed,started",
            "filter.loTypes":"course,learningProgram,certification",
            "sort":"-date",
            "filter.ignoreEnhancedLP":"false"
          },

        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isEmpty(response?.data)) {
      const copy = response.data.map((val) => ({ ...val, isFav: false }));
      setMappedData([...copy]);
    }
  }, [response?.data]);


  const colorChange = async (index) => {
    const copy = [...mappedData];
    copy[index].isFav = !copy[index].isFav;
    setMappedData([...copy]);
  };
  const handleClick = (event, id, ind) => {
    if(id.includes('learningProgram')){
      navigate(`/learning-path/${id}`);
    }else{
      navigate(`/course-overview/${id}`);
    }
    
    setAnchorEl(event.currentTarget);
    setTrailerId(id);
    setMenuContent({ ...mappedData[ind] });
  };

  return (
    <>
      <SubTitle title="My Learning" to="/all-learnings" />
      {loading ? (
        <CarouselSkeleton />
      ) : (
        <div className={`abc ${carouselContainer}`}>
          {!isEmpty(response?.data) ? (
            <SliderCarousel>
              {mappedData.map((val, ind) => {
                return (
                  <Card key={ind} onClick={(e) => handleClick(e, val.id, ind)}>
                    <Card.Content
                      url={
                        isNil(val.attributes.imageUrl)
                          ? covimage
                          : val.attributes.imageUrl
                      }
                      title={val.attributes.localizedMetadata[0].name}
                      time={val?.attributes?.duration}
                      // price={val.attributes.price}
                      // type={val.attributes.loType}
                    >
                      {/* <MuiCardActions
                        sx={{
                          marginTop: "12px",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <FavoriteBorderOutlinedIcon
                          sx={{ cursor: "pointer" }}
                          fontSize="12px"
                        />
                        <Rating name="simple-controlled" size="small" />
                      </MuiCardActions> */}                     
                      
                    </Card.Content>
                  </Card>
                );
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

export default MyLearning;
