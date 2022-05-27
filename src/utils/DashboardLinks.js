import DashboardIcon from "@mui/icons-material/Dashboard";
import MovieIcon from "@mui/icons-material/Movie";
import WeekendIcon from "@mui/icons-material/Weekend";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const DashboardLinks = [
  {
    text: "Home",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    text: "Movies",
    path: "/movies",
    icon: <MovieIcon />,
  },
  {
    text: "Cinema",
    path: "/cinema",
    icon: <WeekendIcon />,
  },
  {
    text: "Tickets",
    path: "/tickets",
    icon: <ConfirmationNumberIcon />,
  },
  {
    text: "Users",
    path: "/users",
    icon: <GroupIcon />,
  },
  {
    text: "Showtimes",
    path: "/showtimes",
    icon: <CalendarMonthIcon />,
  },
];

export default DashboardLinks;
