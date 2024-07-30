import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import covimage from "../../../assets/images/cover_image/elearning.jpg";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { isEmpty, isNil } from "lodash";
import styles from "../Home.module.css";
import { useNavigate } from "react-router-dom";
import SliderCarousel from "../../../components/SliderCarousel";
import CarouselSkeleton from "../../../components/skeleton/Carousel";
import Card from "../../../components/cards";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Rating from "@mui/material/Rating";
import MuiCardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Menu from "../../../components/Menu";
import { red } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const MainCarousel = (props) => {
  const { axiosReq, response, loading } = useAxios();
  const [anchorEl, setAnchorEl] = useState(null);
  const [trailerId, setTrailerId] = useState(null);
  const [menuContent, setMenuContent] = useState({});
  const navigate = useNavigate();
  const { carouselContainer } = styles;
  const axiosPrivate = useAxiosPrivate();
  const rec_type = (props && props.type) ? props.type : 'skill_interest'

  const handleNavigateUser = (id) => {
    navigate(`/course-overview/${trailerId}`);
  };
  const getData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/recommendations",
        requestConfig: {
          params: {
            include: "learningObject",
            "filter.recType": rec_type,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  const handleClick = (event, id, ind) => {
    navigate(`/course-overview/${id}`);
    // navigate(`/course-overview/${id}`);
    // setAnchorEl(event.currentTarget);
    // setTrailerId(id);
    // setMenuContent({ ...response.included[ind] });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <CarouselSkeleton />
      ) : (
        <div>
          {!isEmpty(response?.included) ? (
            <div className={`abc ${carouselContainer}`}>
            {!isEmpty(response?.data) ? (
              <SliderCarousel>
                {response?.included.map((val, ind) => {
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
                        price={val.attributes.price}
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
            <span
            />
          </div>
          ) : (
            <></>
          )}

          <Menu anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  C
                </Avatar>
              }
              title={menuContent?.attributes?.localizedMetadata[0].name}
              subheader="with P Rahul"
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {menuContent?.attributes?.localizedMetadata[0].overview}
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                  <AccessTimeIcon fontSize="12px" sx={{ marginRight: "5px" }} />
                  6 hours
                </Grid>
                <Grid item xs={8}>
                  <Button
                    sx={{
                      backgroundColor: "#181616",
                      "&:hover": {
                        backgroundColor: "#2d3494",
                      },
                    }}
                    variant="contained"
                    fullWidth
                    onClick={handleNavigateUser}
                  >
                    Visit Course
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Menu>
        </div>
      )}
    </>
  );
};

export default MainCarousel;
