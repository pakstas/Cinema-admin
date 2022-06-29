import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

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
      <Box>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ width: "100%", opacity: 0.5, p: 2, boxSizing: "border-box" }}
        >
          © 2022 All rights reserved by pakstas.com
        </Typography>
      </Box>
    </Box>
  );
}

export default Main;
