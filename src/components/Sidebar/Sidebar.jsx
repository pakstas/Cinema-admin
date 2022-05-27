import React from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardLinks from "../../utils/DashboardLinks";

const drawerWidth = "320px";

function Sidebar() {
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "none", md: "block", lg: "block" },
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: 0,
          bgcolor: theme.palette.grey[50],
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          overflow: "auto",
          borderRadius: 4,
          ml: 4,
          mt: 4,
          mb: 2,
          mr: 2,
          bgcolor: "white",
          py: 1,
          boxShadow: theme.custom.shadows[0],
        }}
      >
        <List>
          {DashboardLinks.map((item, index) => (
            <ListItem key={index} sx={{ py: 0, px: 2 }}>
              <ListItemButton href={item.path} sx={{ borderRadius: 2 }}>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
