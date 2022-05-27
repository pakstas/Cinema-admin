import React from "react";
import ReactDOM from "react-dom/client";
import RouteLinks from "./Routes";
import "normalize.css";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./styles/theme";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        <RouteLinks />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
