import Menu from "../../../components/Menu";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Grid from "@mui/material/Grid";

const MenuDialog = ({
  menuContent,
  anchorEl,
  setAnchorEl,
  handleNavigateUser,
}) => {
  return (
    <Menu anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        title={menuContent?.attributes?.localizedMetadata[0].name}
        subheader="with P Rahul"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {menuContent?.attributes?.localizedMetadata[0].overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <AccessTimeIcon fontSize="12px" sx={{ marginRight: "5px" }} />6
            hours
          </Grid>
          <Grid item xs={8}>
            <Button
              sx={{
                backgroundColor: "#181616",
                "&:hover": {
                  backgroundColor: "#2d3494",
                },
              }}
              variant="contained"
              fullWidth
              onClick={handleNavigateUser}
            >
              Visit Course
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Menu>
  );
};

export default MenuDialog;
