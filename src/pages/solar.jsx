import Grid from "@mui/material/Grid";
import Catalogue from "./Home/catalog/Catalogue";

const Solar = ({ val }) => {
  return (
    <>
      <Grid container sx={{ backgroundColor: "white", width: "100%" }}>
        <img src="solar.png" style={{ height: "100%", width: "100%" }} />
      </Grid>
      <Catalogue />
    </>
  );
};

export default Solar;
