const ticketsSalesData = [
  {
    name: "The Godfather",
    genre: "Crime",
    year: 1972,
    duration: 175,
    watched: 452,
  },
  {
    name: "The Dark Knight",
    genre: "Action",
    year: 2008,
    duration: 152,
    watched: 378,
  },
  {
    name: "Joker",
    genre: "Drama",
    year: 2019,
    duration: 122,
    watched: 318,
  },
  {
    name: "avengers: infinity war",
    genre: "action",
    year: 2018,
    duration: 149,
    watched: 269,
  },
  {
    name: "gladiator",
    genre: "drama",
    year: 2000,
    duration: 155,
    watched: 257,
  },
];

const moviesTableColumns = [
  { id: "id", numeric: true, disablePadding: true, label: "ID" },
  { id: "title", label: "Title", numeric: false, disablePadding: false },
  {
    id: "cover_img",
    label: "Cover Image",
    numeric: false,
    disablePadding: false,
  },
  {
    id: "poster_img",
    label: "Poster Image",
    numeric: false,
    disablePadding: false,
  },
  {
    id: "director",
    label: "Director",
    numeric: false,
    disablePadding: false,
  },

  {
    id: "genre",
    label: "Genre",
    numeric: false,
    disablePadding: false,
  },
  {
    id: "movie_length",
    label: "Length",
    numeric: true,
    disablePadding: false,
  },
  {
    id: "year",
    label: "Year",
    type: "number",
    numeric: true,
    disablePadding: false,
  },
  {
    id: "description",
    label: "Description",
    numeric: false,
    disablePadding: false,
  },
];

const TablesData = {
  rows: {
    ticketSalesData: ticketsSalesData,
  },
  columns: {
    moviesTable: moviesTableColumns,
  },
};

export default TablesData;
