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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Mcard from "../../components/Mcard";

const MyLearningMaruti = (props) => {

    const isPratham = (props && props.pratham) ? props.pratham : false
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
                        "filter.loTypes": "course,learningProgram,certification",
                        "sort": "-date",
                        "filter.ignoreEnhancedLP": "false",
                        "include": "enrollment"
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
        console.log('sxsxsxsxsxsxssx')
        if (id.includes('learningProgram')) {
            navigate(`/learning-path/${id}`);
        } else {
            navigate(`/course-overview/${id}`);
        }

        setAnchorEl(event.currentTarget);
        setTrailerId(id);
        setMenuContent({ ...mappedData[ind] });
    };


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
            <div className="carousel-button-group ">
                <button onClick={() => previous()}><img src="MarutiSuzuki_Assets/arrow_left_white.png" /></button>
                <button onClick={() => next()}><img src="MarutiSuzuki_Assets/arrow_right_white.png" /></button>
            </div>
        );
    };

    return (
        <>
            {loading ? (
                <CarouselSkeleton />
            ) : (
                <div>
                    <h2>MY LEARNING LIST</h2>
                    {!isEmpty(response?.data) ? ((response?.data.length < 2) ? (
                        <div className="container ms_recomcarousel">
                            <div className="row">
                                {mappedData.map((val, ind) => {
                                    var enrollmentData = response.included.filter(
                                        (x) => x.id === val?.relationships?.enrollment?.data?.id
                                    );
                                    var enrollProgress = (enrollmentData && enrollmentData[0]) ? enrollmentData[0]?.attributes?.progressPercent : 0
                                    if (ind > 3) {
                                        return ''
                                    }
                                    if (val.id == 'course:9286000') {
                                        return ''
                                    }
                                    return (
                                        <div className="col-3"><Mcard key={ind} loid={val.id} imageUrl={val.attributes?.imageUrl} title={val.attributes.localizedMetadata[0].name} progressBar={enrollProgress} time={val?.attributes?.duration} price={val.attributes.price} type={val.attributes.loType} isPratham={isPratham} ></Mcard></div>
                                    );
                                })}
                            </div>

                        </div>
                    ) : (<div className={`ms_recomcarousel`}>
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
                                {mappedData.map((val, ind) => {
                                    var enrollmentData = response.included.filter(
                                        (x) => x.id === val?.relationships?.enrollment?.data?.id
                                    );
                                    var enrollProgress = (enrollmentData && enrollmentData[0]) ? enrollmentData[0]?.attributes?.progressPercent : 0
                                    if (val.id == 'course:9286000') {
                                        return false
                                    }
                                    return (
                                        <Mcard key={ind} loid={val.id} imageUrl={val.attributes?.imageUrl} title={val.attributes.localizedMetadata[0].name} progressBar={enrollProgress} time={val?.attributes?.duration} price={val.attributes.price} type={val.attributes.loType} isPratham={isPratham} ></Mcard>
                                    );
                                })}
                            </Carousel>
                        ) : (
                            <></>
                        )}
                        <span
                        />
                    </div>)) : ''}

                </div>
            )}
        </>
    );
};

export default MyLearningMaruti;
