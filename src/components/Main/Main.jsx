import React from "react";
import { Box, Toolbar } from "@mui/material";

function Main({ children }) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {children}
    </Box>
  );
}

export default Main;
