import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, Menu, MenuItem, Tooltip, Avatar } from "@mui/material";
import AvatarImg from "../../assets/img/avatar1.png";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = ({ toggleMobileSidebar }) => {
  const theme = useTheme();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        backgroundImage: theme.custom.gradients[0],
        width: "100%",
        boxShadow: theme.custom.shadows[0],
        px: { lg: 2 },
        [`.MuiToolbar-root`]: { px: 2 },
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { lg: "none" } }}
          onClick={toggleMobileSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Avatar" src={AvatarImg} sx={{ bgcolor: "white" }} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "56px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
