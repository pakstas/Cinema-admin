import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar, Main } from "../index";
import { Box } from "@mui/material";

function Layout() {
  return (
    <>
      <Box sx={{ display: "flex", background: "red" }}>
        <Header />
        <Sidebar />
        <Main sx={{ background: "red" }}>
          <Outlet />
        </Main>
      </Box>
    </>
  );
}

export default Layout;
