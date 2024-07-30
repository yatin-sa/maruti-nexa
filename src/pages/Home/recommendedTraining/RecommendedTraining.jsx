import Carousel from "./Carousel";
import Typography from "@mui/material/Typography";
import styles from "../Home.module.css";
import SubTitle from "../../../components/SubTitle";

const RecommendedTraining = (props) => {
  var rec_title = '';
  if(props && props.type == 'multi_skill_interest'){
    rec_title = 'Recommendations based on your skills'
  }else if(props && props.type == 'peer_group'){
    rec_title = 'Trending in your network'
  }else{
    rec_title = 'Recommended Trainings'
  }
  return (
    <>
      <SubTitle title={rec_title} to="/all-recommended-trainings" />
      <Carousel type={props.type} />
      {/* <Navbar /> */}
    </>
  );
};

export default RecommendedTraining;
