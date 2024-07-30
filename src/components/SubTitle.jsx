import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { isNil } from "lodash";

const Container = styled("div")({
  padding: "0 25px",
  display: "flex",
  justifyContent: "space-between",
  "& h1": {
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase",
    // margin: "auto",
    whiteSpace: "nowrap",
    paddingBottom: "13px",
  },
  "& h1:after": {
    backgroundColor: "#2d3494",
    content: '""',
    display: "block",
    height: "3px",
    width: "100px",
    marginBottom: "5px",
  },
});

const SubTitle = ({ title = "Default Header", to }) => {
  return (
    <>
      <Container>
        <h1>{title}</h1>
        {!isNil(to) && (
          <Grid container justifyContent="end">
            {
              (to) ? <Link className="btn btn-dark btn-sm" style={{height:"fit-content"}} to={to ? to : "/"}>View All</Link> : ''
            }
            
          </Grid>
        )}
      </Container>
    </>
  );
};

export default SubTitle;
