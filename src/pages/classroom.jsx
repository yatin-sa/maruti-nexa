import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChairIcon from "@mui/icons-material/Chair";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PersonIcon from "@mui/icons-material/Person";
const Header = styled("div")({
  display: "flex",
});
const HeadingContainer = styled("div")({
  marginLeft: "10px",
});

const Classroom = ({ val }) => {
  const getTime = (secs) => {
    if (secs >= 60) {
      const mins = Math.floor(secs / 60);
      const seconds = secs % 60;
      if (seconds !== 0) {
        return mins + " mins " + seconds + " seconds";
      } else return mins + " mins ";
    } else return secs + " seconds";
  };

  const getDate = (dateStart, dateEnd) => {
    const startdate = new Date(dateStart);
    const enddate = new Date(dateEnd);
    const month_num = startdate.getMonth();
    let month = "";
    switch (month_num) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
    }

    const day = startdate.getDate();
    const year = startdate.getFullYear();

    let shours = startdate.getHours();
    const sminutes =
      startdate.getMinutes() == 0 ? "00" : startdate.getMinutes();

    const ehours = enddate.getHours();
    const eminutes = enddate.getMinutes() == 0 ? "00" : enddate.getMinutes();

    return (
      month +
      " " +
      day +
      "," +
      year +
      " (" +
      shours +
      ":" +
      sminutes +
      "-" +
      ehours +
      ":" +
      eminutes +
      " )"
    );
  };

  return (
    <Grid container sx={{ backgroundColor: "white", width: "100%" }}>
      <Grid
        container
        justifyContent="space-between"
        sx={{ padding: "20px 40px" }}
      >
        <Header style={{ display: "flex" }}>
          <Avatar sx={{ width: 50, height: 50 }}>H</Avatar>
          <HeadingContainer style={{ marginLeft: "10px" }}>
            <Typography sx={{ fontSize: "16px" }}>
              {val.attributes.name}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              {val.attributes.contentType}
            </Typography>
          </HeadingContainer>
        </Header>
      </Grid>
      <Grid container sx={{ backgroundColor: "#f1f1f1" }}>
        <List sx={{ width: "100%", maxWidth: 560, padding: "0px 20px" }}>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <CalendarMonthIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              secondary={getDate(
                val.attributes.dateStart,
                val.attributes.completionDeadline
              )}
            />
          </ListItem>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <ChairIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <>
                  {val.attributes.seatLimit}
                  {" Seat Limit"}
                </>
              }
            />
          </ListItem>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <LocationOnIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText secondary={<>{val.attributes.location}</>} />
          </ListItem>
        </List>
        <List sx={{ width: "100%", maxWidth: 360 }}>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <QueryBuilderIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText secondary={getTime(val.attributes.desiredDuration)} />
          </ListItem>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <PersonIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              secondary={<>{val.attributes.instructorNames[0]}</>}
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Classroom;
