import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Filter from "../view-all/Filter";
import Grid from "@mui/material/Grid";
import covimage from "../../../assets/images/cover_image/elearning.jpg";
import Card from "../../../components/cards";
import { isEmpty, isNil } from "lodash";
import MuiCardActions from "@mui/material/CardActions";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Rating from "@mui/material/Rating";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilter, setFilter } from "../../../features/Auth/authSlice";
import MenuDialog from "../menu/MenuDialog";
import InfiniteScroll from 'react-infinite-scroll-component';

const ViewAllCatalogs = (props) => {
  const parentID = props && props.id ? props.id : "";
  const home = props.home
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuContent, setMenuContent] = useState({});
  const navigate = useNavigate();
  const [trailerId, setTrailerId] = useState(null);
  const [mainData, setMainData] = useState([]);
  const [pageCursor, setPageCursor] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const handleNavigateUser = () => {
    navigate(`/course-overview/${trailerId}`);
  };
  const handleClick = (event, id, ind) => {
    navigate(`/course-overview/${id}`);
    // setAnchorEl(event.currentTarget);
    // setTrailerId(id);
    // setMenuContent({ ...response.data[ind] });
  };

  const filter = useSelector(getFilter);
  const { axiosReq, response, loading } = useAxios();
  const { id: paramID } = useParams();
  const id = parentID ? parentID : paramID;
  console.log('juhhuhu ',id)
  const getData = async () => {
    try {
      await axiosReq({
        axiosInstance: axiosPrivate,
        method: "GET",
        endpoint: "/learningObjects",
        requestConfig: {
          params: {
            "filter.catalogIds": id,
            "filter.tagName": (filter.tagName) ? filter.tagName: null,
            "filter.loTypes": (filter.loTypes) ? filter.loTypes: null,
            "filter.price": (filter.price) ? filter.price: null,
            "page[cursor]": pageCursor
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
    if(!isEmpty(filter)){
      getData();
    }
  }, [filter]);

  useEffect(() => {

    if (response?.data && response?.data && response?.data.length>0 ) {
      const urlParams = new URLSearchParams(response?.links?.next);
      const myParam = urlParams.get('page[cursor]');
      setPageCursor(myParam)
      if (!myParam) {
        setHasMore(false)
      }else{
        setHasMore(true)
      }
      var oldData = []
      if(isEmpty(filter)){
        
        oldData = [...mainData, ...response?.data]
      }else{
        
        oldData = response?.data
      }      
      setMainData(oldData)
      
    }else{
      setMainData([])
      setHasMore(false)
    }
  }, [response]);

  return (<>
    {
      (home) ? '' : <div>
        <a href="/courses" style={{ fontSize: "14px", color: "#000" }}><i className="fa fa-angle-left" aria-hidden="true"></i>Back</a>
      </div>
    }
    <Grid container>
      <Grid item xs={4}>
        <Filter />
      </Grid>
      <Grid item xs={8} >
        <div className="p-4">
          {
            (home) ? <><Grid container>
              {!isEmpty(mainData) &&
                mainData.map((val, ind) => {
                  if (ind > 8) {
                    return ''
                  }
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
                          status="Buy"
                          time={val?.attributes?.duration}
                          price={val.attributes.price}
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
              <p className="text-center">{(mainData && mainData.length > 9) ? <a href={"all-catalogs/" + id}>View More</a> : ''}</p>
            </> : (<>
              <InfiniteScroll
                dataLength={(mainData && mainData.length > 0) ? mainData.length : 0} //This is important field to render the next data
                next={getData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              // below props only if you need pull down functionality
              // refreshFunction={this.refresh}
              // pullDownToRefresh
              // pullDownToRefreshThreshold={50}
              // pullDownToRefreshContent={
              //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
              // }
              // releaseToRefreshContent={
              //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
              // }
              >
                <Grid container>
                  {!isEmpty(mainData) &&
                    mainData.map((val, ind) => {
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
                              status="Buy"
                              time={val?.attributes?.duration}
                              price={val.attributes.price}
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
              </InfiniteScroll></>)
          }



        </div>
        {/* <MenuDialog
          menuContent={menuContent}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handleNavigateUser={handleNavigateUser}
        /> */}
      </Grid>
    </Grid>
  </>
  );
};

export default ViewAllCatalogs;
