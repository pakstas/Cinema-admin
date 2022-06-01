function createData(name, genre, year, duration, watched) {
  return { name, genre, year, duration, watched };
}

const ticketsalesdata = [
  createData("The Godfather", "Crime", 1972, 175, 452),
  createData("The Dark Knight", "Action", 2008, 152, 378),
  createData("Joker", "Drama", 2019, 122, 318),
  createData("avengers: infinity war", "action", 2018, 149, 269),
  createData("gladiator", "drama", 2000, 155, 257),
];

export default ticketsalesdata;
