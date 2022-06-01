import React from "react";
import { useLocation, Link } from "react-router-dom";
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

const drawerWidth = "300px";

function Sidebar({ isMobileSidebarOpen, onSidebarClose }) {
  const theme = useTheme();
  const location = useLocation();
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
            bgcolor: theme.palette.grey[100],
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
            bgcolor: theme.palette.background.default,
            py: 1,
            boxShadow: theme.custom.shadows[1],
          }}
        >
          <List>
            {DashboardLinks.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  py: 0.5,
                }}
              >
                <ListItemButton
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path ? true : false}
                  sx={{
                    ...(location.pathname === item.path && {
                      color: "white",
                      bgcolor: theme.palette.primary.main + "!important",
                    }),
                    borderRadius: 2,
                    // "&:hover": {
                    //   bgcolor: theme.palette.primary.light,
                    // },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "40px",
                      color:
                        location.pathname === item.path ? "white" : "black",
                    }}
                  >
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
          width: "240px",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: "240px",
            boxSizing: "border-box",
            borderRight: 0,
            bgcolor: theme.palette.grey[100],
          },
        }}
      >
        <Toolbar />

        <List>
          {DashboardLinks.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path ? true : false}
                sx={{
                  ...(location.pathname === item.path && {
                    color: "white",
                    bgcolor: theme.palette.primary.main + "!important",
                  }),
                  borderRadius: 2,
                  // "&:hover": {
                  //   bgcolor: theme.palette.primary.light,
                  // },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "40px",
                    color: location.pathname === item.path ? "white" : "",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
