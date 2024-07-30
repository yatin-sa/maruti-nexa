import MuiCardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./style.css"
import MuiCardActions from "@mui/material/CardActions";

const enrollStyles = {
  color: "#c57509",
  border: "1px solid #e3a627",
  background: "rgb(238 144 42 / 54%)",
};
const enrolledStyles = {
  color: "#178267",
  border: "1px solid #229c7e",
  background: "rgb(153 216 175 / 54%)",
};
const buyStyles = {
  color: "#d30f0f",
  border: "1px solid #d42d2d",
  background: "rgb(243 0 0 / 54%)",
};

const CourseStatus = styled("span")(({ type }) => ({
  fontSize: "12px",
  padding: "2px 20px",
  textTransform: "uppercase",
  "&.enroll": enrollStyles,
  "&.enrolled": enrolledStyles,
  "&.buy": buyStyles,
}));

styled("span")({
  fontSize: "12px",
  color: "#178267",
  border: "1px solid #229c7e",
  background: "rgb(153 216 175 / 54%)",
  padding: "2px 20px",
});
const Status = styled("span")({
  fontSize: "12px",
});
const StatusBarContainer = styled("div")({
  marginTop: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const CardContent = ({
  url,
  title,
  type,
  price,
  time,
  status = "Enrolled",
  progressBar = true,
  children,
}) => {
  const getClassName = (status) => {
    switch (status) {
      case "Enroll":
        return "enroll";
      case "Enrolled":
        return "enrolled";
      case "Buy":
        return "buy";
    }
  };


  const getTime = (secs) => {
    if (secs >= 60) {
      const mins = Math.floor(secs / 60);
      const seconds = secs % 60;
      if (seconds !== 0) {
        return mins + " mins " + seconds + " seconds";
      } else return mins + " mins ";
    } else return secs + " seconds";
  };

  return (
    <>
      <div className="img-container">
        {/* <div className="card_arrow_wrap"><span className="card_arrow"><ArrowRightAltIcon /></span></div> */}
        <CardMedia
          className="cardmedia"
          component="img"
          height="140"
          image={url}
          alt="green iguana"
        />
      </div>
      <MuiCardContent className="mui_card_content">
        <Typography
          variant="h6"
          sx={{ fontSize: "18px" }}
          component="div"
          className="title_elipse"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
        {/* <CourseStatus className={getClassName(status)} type="Enroll">
          {status}
        </CourseStatus> */}
        {/* {progressBar && (
          <StatusBarContainer>
            <LinearProgress
              sx={{ width: "40%" }}
              variant="determinate"
              value={0}
            />
            <Status>0%</Status>
          </StatusBarContainer>
        )} */}
        {children}


      </MuiCardContent>
      <MuiCardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {
          (time || price) ? (<div style={{ width: "100%" }}>
            {
              (time) ? <span className="float-start" style={{ color: "#414244" }}><i className="fa-solid fa-stopwatch"></i> {getTime(time)}</span> : ''
            }

            {
              (price) ? <span className="float-end" style={{ fontWeight: "bolder", fontSize: "large" }}>${price}</span> : ""
            }

          </div>) : ''
        }

      </MuiCardActions>
    </>
  );
};

export default CardContent;
