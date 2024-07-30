import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ListSubheader from "@mui/material/ListSubheader";
import { styled } from "@mui/system";

const NavContainer = styled("nav")({
  backgroundColor: "#fcf8f8",
  flexFlow: "column nowrap",
  justifyContent: "start",
  alignItems: "start",
});
const FormLabel = styled(FormControlLabel)({
  color: "#00000099",

  fontSize: "0.875rem !important",
});

export default function BasicList() {
  return (
    <Box sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}>
      <NavContainer>
        <List
          subheader={
            <ListSubheader
              sx={{ backgroundColor: "#fcf8f8" }}
              component="div"
              id="nested-list-subheader"
            >
              Language
            </ListSubheader>
          }
        >
          <FormGroup>
            <FormLabel
              control={<Checkbox size="small" />}
              label="Deutsch"
              sx={{ fontSize: "0.875rem" }}
            />
            <FormLabel control={<Checkbox size="small" />} label="French" />
            <FormLabel control={<Checkbox size="small" />} label="Japanese" />
            <FormLabel control={<Checkbox size="small" />} label="Italian" />
          </FormGroup>
        </List>
      </NavContainer>
      <Divider sx={{ color: "#2f4f4f", height: "6px" }} />
      <NavContainer>
        <List
          subheader={
            <ListSubheader
              sx={{ backgroundColor: "#fcf8f8" }}
              component="div"
              id="nested-list-subheader"
            >
              Format
            </ListSubheader>
          }
        >
          <FormGroup>
            <FormLabel control={<Checkbox size="small" />} label="Activity" />
            <FormLabel control={<Checkbox size="small" />} label="Blended" />
            <FormLabel control={<Checkbox size="small" />} label="Classroom" />
          </FormGroup>
        </List>
      </NavContainer>
      <Divider sx={{ color: "#2f4f4f", height: "6px" }} />
      <NavContainer>
        <List
          subheader={
            <ListSubheader
              sx={{ backgroundColor: "#fcf8f8" }}
              component="div"
              id="nested-list-subheader"
            >
              Price
            </ListSubheader>
          }
        >
          <FormGroup>
            <FormLabel control={<Checkbox size="small" />} label="Free" />
            <FormLabel control={<Checkbox size="small" />} label="Paid" />
          </FormGroup>
        </List>
      </NavContainer>
      <Divider sx={{ color: "#2f4f4f", height: "6px" }} />
    </Box>
  );
}
