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
    icon: <DashboardOutlinedIcon />,
  },
  {
    text: "Movies",
    path: "/movies",
    icon: <MovieOutlinedIcon />,
  },
  {
    text: "Cinema",
    path: "/cinema",
    icon: <WeekendOutlinedIcon />,
  },
  {
    text: "Tickets",
    path: "/tickets",
    icon: <ConfirmationNumberOutlinedIcon />,
  },
  {
    text: "Users",
    path: "/users",
    icon: <GroupOutlinedIcon />,
  },
  {
    text: "Showtimes",
    path: "/showtimes",
    icon: <CalendarMonthOutlinedIcon />,
  },
];

export default DashboardLinks;
