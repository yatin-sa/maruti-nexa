import "./mcardstyle.css"
import { useNavigate } from "react-router-dom";
import { getTime } from "./Lib/helper";

const Mcard = ({
    loid,
    imageUrl,
    title,
    type,
    price,
    time,
    status = "Enrolled",
    progressBar = 0,
    children,
    isPratham=false
}) => {
  
    const navigate = useNavigate();

    function randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const handleClick = (event, id) => {
       if(isPratham || id=='learningProgram:132091'){
       
        if (id.includes('learningProgram')) {
            navigate(`/learning-path/${id}`);
        } else {
            navigate(`/course-overview/${id}`);
        }
    }
    };
    
    const img_path = (imageUrl) ? imageUrl : "/MarutiSuzuki_Assets/list_img_" + randomIntFromInterval(1, 8) + ".png";

    return (
        <>
            <div  className={(isPratham || loid=="learningProgram:132091") ? "card maruti_card" : "card maruti_card maruti_card1"}>
                <img src={img_path} className="maruti_card_img" />
                <div className="maruti_card_caption">
                    <div className="maruti_card_caption_left">

                        <h3>{title}</h3>
                        <h4><i className="fa-solid fa-clock"></i> {getTime(time)}</h4>
                        <h5>{progressBar}% completed</h5>
                        <div className="maruti_card_progress">
                            <div className="progress" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{ width: progressBar + "%" }}></div>
                            </div>
                            <img src="/MarutiSuzuki_Assets/list_car_icon.png" style={{ left: (progressBar > 0) ? (progressBar - 15) + "%" : progressBar + "%" }} />
                        </div>
                    </div>
                    <div className="maruti_card_caption_right">
                        <img src="/MarutiSuzuki_Assets/list_arrow_icon.png" onClick={(e) => handleClick(e, loid)}/>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Mcard;
