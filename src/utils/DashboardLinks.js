import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const DashboardLinks = [
  {
    text: "Home",
    path: "/",
    icon: <DashboardOutlinedIcon fontSize="small" />,
  },
  {
    text: "Movies",
    path: "/movies",
    icon: <MovieOutlinedIcon fontSize="small" />,
  },
  {
    text: "Cinema",
    path: "/cinema",
    icon: <WeekendOutlinedIcon fontSize="small" />,
  },
  {
    text: "Tickets",
    path: "/tickets",
    icon: <ConfirmationNumberOutlinedIcon fontSize="small" />,
  },
  {
    text: "Users",
    path: "/users",
    icon: <GroupOutlinedIcon fontSize="small" />,
  },
  {
    text: "Showtimes",
    path: "/showtimes",
    icon: <CalendarMonthOutlinedIcon fontSize="small" />,
  },
];

export default DashboardLinks;
