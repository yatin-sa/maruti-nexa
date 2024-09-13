import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import covimage from "../../../assets/images/cover_image/elearning.jpg";
import { isEmpty, isNil } from "lodash";
import styles from "../Home.module.css";
import { useNavigate } from "react-router-dom";
import CarouselSkeleton from "../../../components/skeleton/Carousel";
import Card from "../../../components/cards";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Mcard from "../../../components/Mcard";

const RecommendedMaruti = (props) => {
    console.log('recom ',props)
    const isTitle = (props && props.heading) ? props.heading : ''
    const isPratham = (props && props.pratham) ? props.pratham : false
    const isLoPage = (props && props.lo) ? true : false
    const { axiosReq, response, loading } = useAxios();
    const [anchorEl, setAnchorEl] = useState(null);
    const [trailerId, setTrailerId] = useState(null);
    const [menuContent, setMenuContent] = useState({});
    const navigate = useNavigate();
    const { carouselContainer } = styles;
    const axiosPrivate = useAxiosPrivate();
    const rec_type = 'peer_group'

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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };


    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <>
            {(isLoPage) ? <div className="carousel-button-group ">
                <button onClick={() => previous()}><img src="/MarutiSuzuki_Assets/arrow_left_grey.png" /></button>
                <button onClick={() => next()}><img src="/MarutiSuzuki_Assets/arrow_right_blue.png" /></button>
            </div> : <div className="carousel-button-group ">
                <button onClick={() => previous()}><img src="/MarutiSuzuki_Assets/arrow_left_white.png" /></button>
                <button onClick={() => next()}><img src="/MarutiSuzuki_Assets/arrow_right_white.png" /></button>
            </div>}
            </>
            
        );
    };


    return (
        <>
            {loading ? (
                <CarouselSkeleton />
            ) : (
                <div>
                    <h2>{(isTitle) ? isTitle : (isLoPage) ? 'YOU MAY ALSO LIKE' : 'RECOMMENDATION FROM PEERS'}</h2>
                    {!isEmpty(response?.included) ? (
                        <div className={`ms_recomcarousel`}>
                            {!isEmpty(response?.data) ? (
                                <Carousel
                                arrows={false}
                                    swipeable={false}
                                    draggable={false}
                                    showDots={false}
                                    responsive={responsive}
                                    infinite={true}
                                    autoPlay={false}
                                    autoPlaySpeed={1000}
                                    keyBoardControl={true}
                                    customTransition="all .5"
                                    transitionDuration={500}
                                    containerClass="carousel-container1"
                                    dotListClass="custom-dot-list-style"
                                    itemClass="carousel-item-padding-40-px"
                                    renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
                                >
                                    {response?.included.map((val, ind) => {
                                        return (
                                            <Mcard key={ind}  loid={val.id}  imageUrl={val.attributes?.imageUrl} title={val.attributes.localizedMetadata[0].name}  time={val?.attributes?.duration} price={val.attributes.price} type={val.attributes.loType} isPratham={isPratham}></Mcard>
                                        );
                                    })}
                                </Carousel>
                            ) : (
                                <></>
                            )}
                            <span
                            />
                        </div>
                    ) : (
                        <></>
                    )}


                </div>
            )}
        </>
    );
};

export default RecommendedMaruti;
