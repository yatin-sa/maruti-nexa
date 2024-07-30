import MuiCard from "@mui/material/Card";
import CardContent from "./components/CardContent";
import CardActions from "./components/CardActions";

const Card = ({ onClick, sx = {}, children }) => {
  return (
    <MuiCard
      sx={{
        minWidth: "auto !important",
        height: "225px",
        // maxHeight: "200px",
        maxWidth:"256px !important",
        // width:"220px",
        // border: "1px solid #e0dbdb",
        background: "#ffffff",
        // boxShadow: "0 0.2rem 1rem rgba(0,0,0,.175)",
        borderRadius: "0",
        marginBottom: "40px",
        paddingBottom: "5px",
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </MuiCard>
  );
};
Card.Content = CardContent;

export default Card;
