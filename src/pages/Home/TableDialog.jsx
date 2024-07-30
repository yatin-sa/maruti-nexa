import * as React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import Dialog from "@mui/material/Dialog";
import GamificationView from "./Gamification";

const emails = ["username@gmail.com", "user02@gmail.com"];

function GamificationDialog(props) {
  const { handleClose, open } = props;

  return (
    <Dialog onClose={handleClose} open={open}>
      {/* <DialogTitle>Leader</DialogTitle> */}
      <DialogContent sx={{ width: "600px" }}>
        <GamificationView />
      </DialogContent>
    </Dialog>
  );
}
export default GamificationDialog;

GamificationDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
