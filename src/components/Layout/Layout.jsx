import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar, Main } from "../index";
import { Box, useTheme } from "@mui/material";

function Layout() {
  const theme = useTheme();
  const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minWidth: "100%",
          minHeight: "100vh",
          bgcolor: theme.palette.grey[100],
        }}
      >
        <Header
          toggleMobileSidebar={() =>
            isMobileSidebarOpen
              ? setMobileSidebarOpen(false)
              : setMobileSidebarOpen(true)
          }
        />
        <Sidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        <Main>
          <Outlet />
        </Main>
      </Box>
    </>
  );
}

export default Layout;
