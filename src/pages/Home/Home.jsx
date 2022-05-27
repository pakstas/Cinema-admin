import React from "react";
import Button from "@mui/material/Button";
import { Grid, Paper, useTheme, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

function Home() {
  const theme = useTheme();
  const series = [
    {
      name: "Room #1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Room #2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    grid: {
      show: false,
    },
    chart: {
      sparkline: {
        enabled: true,
      },
      stacked: false,
      toolbar: {
        show: false,
      },
      height: 350,
      width: "100%",
      type: "area",
    },
    dataLabels: {
      enabled: false,
      background: {
        padding: 0,
      },
      offsetX: 0,
      offsetY: 0,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: { show: false },
      axisBorder: { show: false },
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <>
      <Grid container spacing={0} columns={12} sx={{ m: 0 }}>
        <Grid item lg={6} md={12} sm={12} xs={12} sx={{ p: 1 }}>
          <Grid container spacing={0} columns={6} sx={{ m: 0 }}>
            <Grid item xs={6} sx={{ p: 1, pb: 2 }}>
              <Paper
                sx={{
                  m: 0,
                  p: 4,
                  boxShadow: theme.custom.shadows[0],
                  height: "200px",
                  boxSizing: "border-box",
                  borderRadius: 4,
                  background:
                    "url(" +
                    "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/stylish/static/media/welcome-bg2-2x-svg.97ed12dc.svg" +
                    ") no-repeat scroll 100% 0% / 45%",
                }}
              >
                <Typography variant="h5" component="h4">
                  Welcome Lui,
                </Typography>

                <Typography variant="h5" component="h4" mb={3}>
                  Download Latest Report
                </Typography>

                <Button variant="contained">Contained</Button>
              </Paper>
            </Grid>
            <Grid item md={3} sm={3} xs={6} sx={{ p: 1, pr: 2, pt: 2 }}>
              <Paper
                sx={{
                  m: 0,
                  p: 4,
                  boxShadow: theme.custom.shadows[0],
                  height: "200px",
                  boxSizing: "border-box",
                }}
              >
                xs-3
              </Paper>
            </Grid>
            <Grid item md={3} sm={3} xs={6} sx={{ p: 1, pl: 2, pt: 2 }}>
              <Paper
                sx={{
                  m: 0,
                  p: 0,
                  boxShadow: theme.custom.shadows[0],
                  height: "200px",
                  boxSizing: "border-box",
                }}
              >
                xs-3
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6} md={12} sm={12} xs={12} sx={{ p: 2 }}>
          <Paper
            sx={{
              height: "432px",
              m: 0,
              p: 0,
              boxShadow: theme.custom.shadows[0],
              borderRadius: 4,
              display: "flex",
              flexWrap: "wrap",
              alignContent: "space-between",
            }}
          >
            {/* <div
              style={{
                height: "60px",
                width: "100%",
                padding: "32px",
                boxSizing: "border-box",
              }}
            >
              Labas
            </div> */}
            <Typography variant="h5" component="h4" pt={4} pl={4}>
              Sales Chart
            </Typography>
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              width="100%"
              height="350px"
              style={{
                padding: 0,
                margin: 0,
                borderRadius: "16px",
                overflow: "hidden",
              }}
            />
          </Paper>
        </Grid>
      </Grid>

      <div>
        Welcome to your React boilerplate. We hope that this will bring you up
        to speed with your development.
      </div>
      <div></div>
      <section>
        <Button variant="contained" onClick={() => alert("hohoho")}>
          Check React Now
        </Button>
      </section>
    </>
  );
}

export default Home;
