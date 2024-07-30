import Slider from "react-slick";
import one from "../../assets/img/carousel/one.PNG";
import two from "../../assets/img/carousel/two.PNG";
import three from "../../assets/img/carousel/three.PNG";
import four from "../../assets/img/carousel/four.PNG";
import five from "../../assets/img/carousel/five.PNG";
import { styled } from "@mui/system";

const Img = styled("img")({
  backgroundRepeat: "no-repeat",
  height: "400px",
  width: "600px",
});
const JumboCarousel = ({ children }) => {
  const arr = ["mmast1.png","mmast2.png"];
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow style={{ left: "5px" }} />,
  };
  return (
    <Slider {...settings}>
      {arr.map((val, ind) => (
        <Img src={val} key={ind} />
      ))}
    </Slider>
  );
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,

        display: "block",
      }}
      onClick={onClick}
    />
  );
}
export default JumboCarousel;
