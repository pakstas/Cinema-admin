import React from "react";
import { Box, Toolbar } from "@mui/material";

function Main({ children }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { lg: "1400px", xs: "100%" },
        py: 2,
        pr: { lg: 2 },
      }}
    >
      <Toolbar sx={{ minHeight: 64 }} />
      {children}
    </Box>
  );
}

export default Main;
