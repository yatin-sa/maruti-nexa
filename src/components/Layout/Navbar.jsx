import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";

const pages = [
  { title: "My Learning", path: "/courses" },
  { title: "Resources", path: "/resources" },
  { title: "Badges", path: "/badges" },
  //{ title: "Certificates", path: "/certificates" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
let link = {
  color: "#fff",
  textDecoration: "none",
  margin: "20px",
  fontSize: "20px",
  fontWeight: 600,
};
let active = {
  ...link,
  color: "black",
};
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      //  sx={{ backgroundColor: "rgba(82,78,183)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", mx: "auto" }}>
            {pages.map((page, ind) => (
              <NavLink
                key={ind}
                to={page.path}
                style={({ isActive }) => (isActive ? active : link)}
              >
                {page.title}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
