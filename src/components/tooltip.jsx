import Tooltip from "@mui/material/Tooltip";
const MuiTooltip = ({ children, title }) => {
  return <Tooltip title={title}>{children}</Tooltip>;
};

export default MuiTooltip;
