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

function Sidebar({ isMobileSidebarOpen, onSidebarClose }) {
  const theme = useTheme();
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
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
            ml: 4,
            mt: 4,
            mr: 2,
            overflow: "auto",
            borderRadius: 4,
            bgcolor: "white",
            py: 1,
            boxShadow: theme.custom.shadows[1],
          }}
        >
          <List>
            {DashboardLinks.map((item, index) => (
              <ListItem key={index}>
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

      {/* Mobile sidebar variant temporary starts here */}

      <Drawer
        anchor="left"
        variant="temporary"
        open={isMobileSidebarOpen}
        onClose={onSidebarClose}
        sx={{
          display: { lg: "none" },
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
            ml: 4,
            mt: 4,
            mr: 4,
            overflow: "auto",
            borderRadius: 4,
            bgcolor: "white",
            py: 1,
            boxShadow: theme.custom.shadows[1],
          }}
        >
          <List>
            {DashboardLinks.map((item, index) => (
              <ListItem key={index}>
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
    </>
  );
}

export default Sidebar;
