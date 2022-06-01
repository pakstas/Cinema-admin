import React from "react";
import Button from "@mui/material/Button";
import {
  Grid,
  Paper,
  useTheme,
  Typography,
  Box,
  IconButton,
  Chip,
  Divider,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ReactApexChart from "react-apexcharts";
import bglogo from "../../assets/img/1200.jpg";
import ChartsData from "../../utils/ChartsData";
import ticketsalesdata from "../../utils/TablesData";

function Home() {
  const theme = useTheme();

  return (
    <>
      {/*  */}
      {/* TOP ROW */}
      {/*  */}
      <Grid container spacing={0} columns={12}>
        {/* Top Left Block */}
        <Grid item lg={6} md={12} sm={12} xs={12}>
          {/* Inner Block */}
          <Grid container spacing={0} columns={6}>
            {/* Inner Block Top */}
            <Grid item xs={6} sx={{ p: 2 }}>
              <Paper
                sx={{
                  p: 3,
                  boxShadow: theme.custom.shadows[0],
                  height: "200px",
                  boxSizing: "border-box",
                  borderRadius: 4,
                  background: "#efefef",
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
            {/* Inner Block Bottom Left */}
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
                  transition: "transform 0.15s ease-in-out",
                  "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
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
            {/* Inner Block Bottom Right */}
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

                  transition: "transform 0.15s ease-in-out",
                  "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
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
                      Weekly Sales
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

        {/* Top Right Block */}
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

              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
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

      {/* */}
      {/* BOTTOM ROW */}
      {/*  */}
      <Grid container spacing={0} columns={12}>
        {/* Bottom Left Item */}
        <Grid item lg={4} md={6} sm={12} xs={12} sx={{ p: 2 }}>
          <Paper
            sx={{
              p: 3,
              boxShadow: theme.custom.shadows[0],
              height: "432px",
              boxSizing: "border-box",
              borderRadius: 4,
              display: "flex",
              flexWrap: "wrap",
              alignContent: "space-between",
            }}
          >
            <Typography variant="h3" sx={{ width: "100%" }}>
              Total Sales
            </Typography>

            <ReactApexChart
              options={ChartsData.radialchart.options}
              series={ChartsData.radialchart.series}
              type="radialBar"
              height="280px"
              style={{ width: "100%" }}
            />

            <Divider sx={{ width: "100%" }} />

            <Typography variant="subtitle2" sx={{ width: "100%" }}>
              Percentage tickets bought to movies
            </Typography>
          </Paper>
        </Grid>
        {/* Bottom Right Item */}
        <Grid item lg={8} md={6} sm={12} xs={12} sx={{ p: 2 }}>
          <Paper
            sx={{
              p: 3,
              boxShadow: theme.custom.shadows[0],
              height: "432px",
              boxSizing: "border-box",
              borderRadius: 4,
            }}
          >
            <Typography variant="h3" sx={{ width: "100%" }}>
              Movies Top Sales
            </Typography>

            <TableContainer sx={{ pt: 3, boxSizing: "border-box" }}>
              <Table sx={{ minWidth: 500 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Movie Title</TableCell>

                    <TableCell align="center">Year</TableCell>

                    <TableCell align="center">Genre</TableCell>

                    <TableCell align="center">Duration</TableCell>

                    <TableCell align="center">Tickets</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {ticketsalesdata.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ textTransform: "capitalize" }}
                      >
                        {row.name}
                      </TableCell>

                      <TableCell align="center">{row.year}</TableCell>
                      <TableCell
                        align="center"
                        style={{ textTransform: "capitalize" }}
                      >
                        {row.genre}
                      </TableCell>

                      <TableCell align="center">
                        {row.duration + "min"}
                      </TableCell>

                      <TableCell align="center" sx={{ p: 1 }}>
                        <Chip
                          label={row.watched}
                          color={
                            row.watched > 400
                              ? "success"
                              : row.watched > 300
                              ? "secondary"
                              : "warning"
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
