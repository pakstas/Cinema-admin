import React from "react";
import { Box, Toolbar, useTheme } from "@mui/material";

function Main({ children }) {
  const theme = useTheme();
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, py: 2, bgcolor: theme.palette.grey[50] }}
    >
      <Toolbar />
      {children}
    </Box>
  );
}

export default Main;
