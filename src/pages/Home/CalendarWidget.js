import Calendar from "react-calendar";
import { styled } from "@mui/system";
import "./style.css";
import "react-calendar/dist/Calendar.css";
import { Grid } from "@mui/material";
import { useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import 'react-calendar/dist/Calendar.css';

const Container = styled("div")({
    marginTop: "50px",
    marginLeft: "30px",
});

const CalendarWidget = ({ open, handleClose }) => {
    const [currentDate, setCurrentDate] = useState("");
    const [value, onChange] = useState(new Date());

    function abc(dateObj) {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        var month = monthNames[dateObj.getMonth()]; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        return month + " " + day + " " + year;
    }

    return (
        <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={7}>
                <div className="cal_w">
                    <Calendar onChange={onChange} value={value} />
                </div>
            </Grid>
            <Grid item xs={5}>
                <div className="calender_wrap">
                    <p className="cal_title">{abc(value)}</p>
                    <ul>
                        <li>
                            <div
                                className="img_wrap"
                                style={{ background: "#61c1db", borderRadius: "10px" }}
                            >
                                <img
                                    src="3.png"
                                    style={{ height: "40px" }}
                                    alt="Image of Classroom Bengaluru"
                                />
                            </div>
                        </li>
                        <li>
                            <p>
                                <span className="session_time">1:00 AM - 2:00 AM</span> |{" "}
                                <span
                                    className="primelxp-sub-text"
                                    title="Room 1, Bangalore, Bengaluru"
                                >
                                    Room 1, Bangalore, Bengaluru
                                </span>{" "}
                            </p>
                            <p className="session_type">Classtest</p>
                            <p className="session_type">
                                <a href="#" style={{ padding: 0 }}>
                                    Classroom Bengaluru
                                </a>
                            </p>
                            <p>
                                <label className="pill_session">
                                    CLASSROOM TRAINING{" "}
                                </label>{" "}
                            </p>
                        </li>
                    </ul>
                </div>
            </Grid>
            
        </Grid>
    );
};

export default CalendarWidget;
