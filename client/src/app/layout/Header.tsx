import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

import { NavLink } from "react-router-dom";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  { title: "catlog", path: "/catlog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
  textDecoration: "none",
};

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "Space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="centre">
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            Re-Store
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange}></Switch>
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem sx={navStyles} component={NavLink} to={path} key={path}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="centre">
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent={4} color="secondary">
              {/* <ShoppingCart></ShoppingCart> */}
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem sx={navStyles} component={NavLink} to={path} key={path}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
