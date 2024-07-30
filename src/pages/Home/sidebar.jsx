import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const drawerWidth = 240;

const Sidebar = () => {
  const drawer = (
    <div>
      <Toolbar />

      <Divider />

      <List>
        <ListItem disablePadding>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />

            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Disabled"
            />
          </FormGroup>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />

            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Disabled"
            />
          </FormGroup>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          top: 103,
        },
      }}
      open
    >
      {drawer}
    </Drawer>
  );
};

export default Sidebar;
