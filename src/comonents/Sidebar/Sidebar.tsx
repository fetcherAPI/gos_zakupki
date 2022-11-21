import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { CloseBtnIcon, GerbKg } from "../../assets/img/export";
import { Icon, icons } from "./icons";
import { Drawer, DrawerHeader } from "./Sidebar.styled";
import { MenuUnfoldOutlined } from "@ant-design/icons";
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
            <div className={classes.header}>
              <GerbKg />
              <h1>ГосЗакупок</h1>
            </div>

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
            <MenuUnfoldOutlined
              style={{ fontSize: "24px", color: "#aebfd7", cursor: "pointer" }}
            />
          </IconButton>
        )}

        <Divider />
        <List>
          {icons.map((icon: Icon) => (
            <ListItem key={icon.text} disablePadding sx={{ display: "block" }}>
              <NavLink
                to={icon.path}
                className={(navData) =>
                  navData.isActive ? classes.activeTab : classes.inactiveTab
                }
              >
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
              </NavLink>
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
