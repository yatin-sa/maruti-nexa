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
import Mcard from "../../../components/Mcard";
import InfiniteScroll from 'react-infinite-scroll-component';

const ViewAllLearnings = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const filter = useSelector(getFilter);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuContent, setMenuContent] = useState({});
  const [mainData, setMainData] = useState([]);
  const [pageCursor, setPageCursor] = useState('');
  const [hasMore, setHasMore] = useState(true);
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
  <div className="knowldege_banner">
        <div className="container">
          <h1>Content Library</h1>
          <p>Consume the most desirable content from the library.</p>
        </div>

      </div>
   {/* <Filter /> */}
  
     
          <div className="container">
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
                <div className="row">
            {!isEmpty(mainData) &&
              mainData.map((val, ind) => {
                return (
                  <div className="col-3" key={ind} item xs={4}>
                     <Mcard key={ind}  loid={val.id}  imageUrl={val.attributes?.imageUrl} title={val.attributes.localizedMetadata[0].name}  time={val?.attributes?.duration} price={val.attributes.price} type={val.attributes.loType} isPratham={true}></Mcard>
                    
                  </div>
                );
              })}
              </div>
              </InfiniteScroll>
         
          </div>
       
       
     
    </>
  );
};

export default ViewAllLearnings;
