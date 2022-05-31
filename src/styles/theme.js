import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#776bcd",
      light: "#AB9AFF",
      dark: "#3F3B96",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffb400",
      light: "#ffd980",
      dark: "#b37d00",
      contrastText: "#ffffff",
    },
    success: {
      main: "#00C89B",
      light: "#C7FCEC",
      dark: "#00876D",
      contrastText: "#ffffff",
    },
    danger: {
      main: "#8F131E",
      light: "#DA3F41",
    },
    info: {
      main: "#00A5FA",
      light: "#00D5F5",
    },
    error: {
      main: "#CC4F4A",
      dark: "#CC4F4A",
    },
    warning: {
      main: "#B6476C",
      dark: "#8F4C80",
      contrastText: "#ffffff",
    },
    text: {
      secondary: "#777e89",
      danger: "#CC4F4A",
    },

    action: {
      hoverOpacity: 0.02,
      hover: "rgba(0, 0, 0, 0.03)",
    },
    background: {
      default: "#fafbfb",
    },
  },
  custom: {
    shadows: [
      "rgba(90, 114, 123, 0.11) 0px 7px 15px 0px;",
      "rgba(90, 114, 123, 0.11) 0px 7px 15px 0px;",
    ],
    gradients: ["linear-gradient(to right, #776bcd, #ffb400)"],
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
  typography: {
    body1: {
      fontWeight: 400,
    },
    h1: {
      fontWeight: 400,
      fontSize: "1.875rem",
      lineHeight: "1.5",
    },
    h2: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: "1.5",
    },
    h3: {
      fontWeight: 400,
      fontSize: "1.3125rem",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: 400,
      fontSize: "1.125rem",
      lineHeight: "1.5",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    h6: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    button: {
      textTransform: "none",
      fontWeight: "400",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "300",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: "300",
    },
  },
});

// Theme According Cinema Colors Backup
// export const Theme = createTheme({
//   palette: {
//     primary: {
//       main: "#E21243",
//       light: "#f9d0d9",
//       dark: "#880b28",
//       contrastText: "#ffffff",
//     },
//     secondary: {
//       main: "#2d3752",
//       light: "#e8e9ec",
//       dark: "#16213f",
//       contrastText: "#ffffff",
//     },
//     success: {
//       main: "#00c292",

//       dark: "#00964b",
//       contrastText: "#ffffff",
//     },
//     danger: {
//       main: "#6e22ba",
//       light: "#d4bdea",
//     },
//     info: {
//       main: "#0bb2fb",
//       light: "#a7e3f4",
//     },
//     error: {
//       main: "#6e22ba",

//       dark: "#37115d",
//     },
//     warning: {
//       main: "#fec90f",

//       dark: "#dcb014",
//       contrastText: "#ffffff",
//     },
//     text: {
//       secondary: "#777e89",
//       danger: "#fc4b6c",
//     },

//     action: {
//       hoverOpacity: 0.02,
//       hover: "rgba(0, 0, 0, 0.03)",
//     },
//     background: {
//       default: "#fafbfb",
//     },
//   },
//   custom: {
//     shadows: [
//       "rgba(90, 114, 123, 0.11) 0px 7px 15px 0px;",
//       "rgba(90, 114, 123, 0.11) 0px 7px 15px 0px;",
//     ],
//   },
// });

export default Theme;
