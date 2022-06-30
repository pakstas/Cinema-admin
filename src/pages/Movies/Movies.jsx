import React, { useState, useEffect } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { ImageModal, MoviesTable } from "../../components";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import TablesData from "../../utils/TablesData";

const fetchURL = "http://localhost:8080/api/movies";

async function getMovies({ setMoviesData }) {
  try {
    let response = await fetch(fetchURL);
    if (!response.ok) {
      console.log(`HTTP error: ${response.status}`);
    }
    let data = await response.json();
    setMoviesData(data);
  } catch (error) {
    console.log(`Could not get showtimes: ${error}`);
  }
}

function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies({ setMoviesData });
  }, []);

  return (
    <>
      <Container disableGutters={true} sx={{ p: 2 }}>
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Link
              underline="none"
              color="inherit"
              component={RouterLink}
              to="/"
              sx={{ fontWeight: 400, fontSize: 14 }}
            >
              Home
            </Link>
            <Typography
              color="text.primary"
              sx={{ fontWeight: 400, fontSize: 14 }}
            >
              {location &&
                location.pathname.slice(1, 2).toUpperCase() +
                  location.pathname.slice(2)}
            </Typography>
          </Breadcrumbs>
        </div>

        <Typography variant="h2" color="text.primary" sx={{ mb: 3 }}>
          {location &&
            location.pathname.slice(1, 2).toUpperCase() +
              location.pathname.slice(2)}
        </Typography>

        <Box>
          <ImageModal bgImage="" alt="" />
          <MoviesTable
            rows={moviesData}
            headCells={TablesData.columns.moviesTable}
          />
        </Box>
      </Container>
    </>
  );
}

export default Movies;
