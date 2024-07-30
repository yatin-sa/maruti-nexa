import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Filter from "./Filter";
import Grid from "@mui/material/Grid";
import covimage from "../../../assets/images/cover_image/elearning.jpg";
import Card from "../../../components/cards";
import { isEmpty, isNil } from "lodash";
import MuiCardActions from "@mui/material/CardActions";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Rating from "@mui/material/Rating";
import { useNavigate, useParams } from "react-router-dom";
import { getFilter } from "../../../features/Auth/authSlice";
import { useSelector } from "react-redux";
import MenuDialog from "../menu/MenuDialog";
import CarouselSkeleton from "../../../components/skeleton/Carousel";

const ViewAllLearnings = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const filter = useSelector(getFilter);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuContent, setMenuContent] = useState({});

  const [trailerId, setTrailerId] = useState(null);
  const { axiosReq, response, loading } = useAxios();
  const handleClick = (event, id, ind) => {
    setAnchorEl(event.currentTarget);
    setTrailerId(id);
    setMenuContent({ ...response?.data[ind] });
  };
  const handleNavigateUser = () => {
    navigate(`/course-overview/${trailerId}`);
  };

  const getData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/learningObjects",
        requestConfig: {
          params: {
            "filter.learnerState": "enrolled,completed,started",
            "filter.tagName": filter,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [filter]);

  return (
    <Grid container>
      <Grid item xs={3}>
        {/* <Filter /> */}
      </Grid>
      <Grid item xs={9} sx={{ display: "flex" }}>
        {loading ? (
          <CarouselSkeleton />
        ) : (
          <Grid container>
            {!isEmpty(response) &&
              response?.data.map((val, ind) => {
                return (
                  <Grid key={ind} item xs={4}>
                    <Card onClick={(e) => handleClick(e, val.id, ind)}>
                      <Card.Content
                        url={
                          isNil(val.attributes.imageUrl)
                            ? covimage
                            : val.attributes.imageUrl
                        }
                        title={val.attributes.localizedMetadata[0].name}
                        // type={val.attributes.loType}
                      >
                        {/* <MuiCardActions
                          sx={{
                            marginTop: "12px",
                            display: "flex",
                            justifyContent: "space-between",
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
                  </Grid>
                );
              })}
          </Grid>
        )}
        <MenuDialog
          menuContent={menuContent}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handleNavigateUser={handleNavigateUser}
        />
      </Grid>
    </Grid>
  );
};

export default ViewAllLearnings;
