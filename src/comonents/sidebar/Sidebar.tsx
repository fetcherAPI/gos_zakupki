import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { CloseBtnIcon } from "../../assets/img/export";
import { Icon, icons } from "./icons";
import { Drawer } from "./Sidebar.styled";
import { DrawerHeader } from "./Sidebar.styled";
import classes from "./Sidebar.module.scss";
import Switcher from "../../UIComponents/switch";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant='permanent' open={open}>
        {open ? (
          <DrawerHeader>
            <Typography variant='h5' noWrap>
              Портал госЗакупок
            </Typography>
            <IconButton onClick={handleDrawer}>
              <CloseBtnIcon />
            </IconButton>
          </DrawerHeader>
        ) : (
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawer}
            edge='start'
            sx={{
              marginRight: -0.5,
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Divider />
        <List>
          {icons.map((icon: Icon) => (
            <ListItem key={icon.text} disablePadding sx={{ display: "block" }}>
              <Link to={icon.path}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon.element}
                  </ListItemIcon>
                  <ListItemText
                    primary={icon.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        {open && (
          <label className={classes.label_switch}>
            <Switcher from={"Рус"} to={"Кыр"} />
          </label>
        )}
        <Divider />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
