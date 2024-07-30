import * as React from "react";

import MuiMenu from "@mui/material/Menu";

const Menu = ({ anchorEl, setAnchorEl, children }) => {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MuiMenu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,

        sx: {
          overflow: "visible",
          maxWidth: "350px",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "right" }}
      anchorOrigin={{ horizontal: "left", vertical: "left" }}
    >
      {children}
    </MuiMenu>
  );
};

export default Menu;
