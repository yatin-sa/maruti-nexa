import Slider from "react-slick";
import "./slider.css";

const SliderCarousel = ({ children }) => {
  
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    // variableWidth: true
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
  };
  return <div className="slider-container"><Slider {...settings}>{children}</Slider></div>;
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
    >
      <img src="arrow_right_white.png" />
    </div>
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

export default SliderCarousel;
