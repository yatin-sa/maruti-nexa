import Grid from "@mui/material/Grid";
import "./style.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const License = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleContinueClick = (page) => {
    navigate(`/payment/${id}?page=${page}`);
  };
  console.log("ijjijij");
  return (
    <div className="main_price">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275, textAlign: "center" }}>
            <CardContent>
              <div className="icon_wrap">
                <PersonIcon color="error" />
              </div>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold", mb: 1.5 }}
              >
                Individual
              </Typography>
              <Typography
                sx={{ mb: 1.5, fontSize: "14px", height: 50 }}
                color="text.secondary"
              >
                Access to over 1.000 high quality courses. For individuals.
              </Typography>
            </CardContent>
            <CardActions
              textAlign="center"
              sx={{ borderTop: 1, borderColor: "#eee", padding: 2 }}
            >
              <Box sx={{ margin: "0 auto" }}>
                <Button
                  sx={{
                    backgroundColor: "#181616",
                    width: "180px",
                    "&:hover": {
                      backgroundColor: "#2d3494",
                    },
                  }}
                  onClick={(e) => handleContinueClick("individual")}
                  variant="contained"
                  color="primary"
                >
                  Purchase Now
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275, textAlign: "center" }}>
            <CardContent>
              <div className="icon_wrap">
                <GroupIcon color="error" />
              </div>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold", mb: 1.5 }}
              >
                Team
              </Typography>
              <Typography
                sx={{ mb: 1.5, fontSize: "14px", height: 50 }}
                color="text.secondary"
              >
                Starts with 3 accounts with more seats available.
              </Typography>
            </CardContent>
            <CardActions
              textAlign="center"
              sx={{ borderTop: 1, borderColor: "#eee", padding: 2 }}
            >
              <Box sx={{ margin: "0 auto" }}>
                <Button
                  onClick={(e) => handleContinueClick("team")}
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#181616",
                    width: "180px",
                    "&:hover": {
                      backgroundColor: "#2d3494",
                    },
                  }}
                >
                  Purchase Now
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275, textAlign: "center" }}>
            <CardContent>
              <div className="icon_wrap">
                <BusinessCenterIcon color="error" />
              </div>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold", mb: 1.5 }}
              >
                Subscription
              </Typography>
              <Typography
                sx={{ mb: 1.5, fontSize: "14px", height: 50 }}
                color="text.secondary"
              >
                Build customized learning paths with content that aligns to your
                internal learning goals.
              </Typography>
            </CardContent>
            <CardActions
              textAlign="center"
              sx={{ borderTop: 1, borderColor: "#eee", padding: 2 }}
            >
              <Box sx={{ margin: "0 auto" }}>
                <Button
                  onClick={(e) => handleContinueClick("subscription")}
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{
                    backgroundColor: "#181616",
                    width: "180px",
                    "&:hover": {
                      backgroundColor: "#2d3494",
                    },
                  }}
                >
                  Purchase Now
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default License;
