import React from "react";
import Button from "@mui/material/Button";
import {
  Grid,
  Paper,
  useTheme,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ReactApexChart from "react-apexcharts";
// import bglogo from "../../assets/img/girl_with_tablet.png";
import bglogo from "../../assets/img/1200.jpg";
import ChartsData from "../../utils/ChartsData";

function Home() {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={0} columns={12}>
        {/* First Column */}
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Grid container spacing={0} columns={6}>
            <Grid item xs={6} sx={{ p: 2 }}>
              <Paper
                sx={{
                  p: 3,
                  boxShadow: theme.custom.shadows[0],
                  height: "200px",
                  boxSizing: "border-box",
                  borderRadius: 4,
                  background: "rgb(239,239,239)",
                  backgroundImage: "url(" + bglogo + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "auto 130%",
                  backgroundPosition: { sm: "100% 0%", xs: "200% -10%" },
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "space-between",
                }}
              >
                <Box variant="outlined" sx={{ width: "100%" }}>
                  <Typography variant="h3">Welcome Lui,</Typography>

                  <Typography variant="h3" mb={3}>
                    Download Latest Report
                  </Typography>
                </Box>

                <Button variant="contained" color="primary">
                  Download
                </Button>
              </Paper>
            </Grid>

            <Grid item md={3} sm={3} xs={6} sx={{ p: 2 }}>
              <Paper
                sx={{
                  p: 3,
                  boxShadow: theme.custom.shadows[0],
                  height: "200px",
                  boxSizing: "border-box",
                  borderRadius: 4,
                  bgcolor: theme.palette.secondary.main,
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "no-wrap",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography variant="h3" color="primary.contrastText">
                    Earnings
                  </Typography>
                  <IconButton
                    size="large"
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      "&:hover": { bgcolor: theme.palette.primary.dark },
                    }}
                  >
                    <EuroOutlinedIcon
                      sx={{ color: theme.palette.primary.contrastText }}
                    />
                  </IconButton>
                </Box>
                <Typography
                  variant="h1"
                  color="primary.contrastText"
                  mt={2}
                  sx={{ width: "100%" }}
                >
                  &euro; 92,458.88
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary.contrastText"
                  sx={{ opacity: 0.75 }}
                >
                  Monthly Revenue
                </Typography>
              </Paper>
            </Grid>

            <Grid item md={3} sm={3} xs={6} sx={{ p: 2 }}>
              <Paper
                sx={{
                  boxShadow: theme.custom.shadows[0],
                  height: "200px",
                  boxSizing: "border-box",
                  borderRadius: 4,
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    pl: 3,
                    pt: 3,
                    pr: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ opacity: 0.75 }}>
                      Monthly Sales
                    </Typography>
                    <Typography variant="h2">4,352</Typography>
                  </Box>
                  <Box>
                    <IconButton
                      size="large"
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        "&:hover": { bgcolor: theme.palette.secondary.dark },
                      }}
                    >
                      <ShoppingBagOutlinedIcon
                        sx={{ color: theme.palette.primary.contrastText }}
                      />
                    </IconButton>
                  </Box>
                </Box>
                <ReactApexChart
                  options={ChartsData.areachart.options}
                  series={ChartsData.areachart.series}
                  type="area"
                  height="50%"
                  style={{
                    padding: 0,
                    margin: 0,
                    borderRadius: "16px",
                    overflow: "hidden",
                    width: "100%",
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Column */}
        <Grid item lg={6} md={12} sm={12} xs={12} sx={{ p: 2 }}>
          <Paper
            sx={{
              p: 3,
              height: "432px",
              boxShadow: theme.custom.shadows[0],
              borderRadius: 4,
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              alignContent: "space-between",
            }}
          >
            <Typography variant="h3" sx={{ width: "100%" }}>
              Sales Overview
            </Typography>
            <ReactApexChart
              options={ChartsData.barchart.options}
              series={ChartsData.barchart.series}
              type="bar"
              height="350px"
              style={{
                width: "100%",
              }}
            />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={0} columns={12}>
        <Grid item lg={4} md={12} sm={12} xs={12} sx={{ p: 2 }}>
          <Paper
            sx={{
              p: 3,
              boxShadow: theme.custom.shadows[0],
              height: "400px",
              boxSizing: "border-box",
              borderRadius: 4,

              display: "flex",
              flexWrap: "wrap",
              alignContent: "space-between",
            }}
          >
            <ReactApexChart
              options={ChartsData.radialchart.options}
              series={ChartsData.radialchart.series}
              type="radialBar"
              height={350}
            />
          </Paper>
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12} sx={{ p: 2 }}>
          <Paper
            sx={{
              p: 3,
              boxShadow: theme.custom.shadows[0],
              height: "400px",
              boxSizing: "border-box",
              borderRadius: 4,

              display: "flex",
              flexWrap: "wrap",
              alignContent: "space-between",
            }}
          >
            <Button variant="contained" onClick={() => alert("hohoho")}>
              Check React Now
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
