import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import TodayIcon from '@mui/icons-material/Today';
import logo from "./../assets/imgs/logo.jpg";
import { Link } from "react-router-dom";
import { languageChange } from "../Helper/TranslateMethod.Helper";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
const drawerWidth = 240;
const translationPath = "";
const openedMixin = (theme, currentlanguage) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  // Adjust the positioning for RTL layout
  left: currentlanguage === "ar" ? "auto" : 0,
  right: currentlanguage === "ar" ? 0 : "auto",
});

const closedMixin = (theme, currentlanguage) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  // Adjust the positioning for RTL layout
  left: currentlanguage === "ar" ? "auto" : 0,
  right: currentlanguage === "ar" ? 0 : "auto",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, currentlanguage }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: currentlanguage === "ar" ? 0 : drawerWidth,
    marginRight: currentlanguage === "ar" ? drawerWidth : 0,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, currentlanguage }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  // Adjust the positioning for RTL layout
  marginLeft: currentlanguage === "ar" ? "auto" : 0,
  marginRight: currentlanguage === "ar" ? 0 : "auto",
  ...(open && {
    ...openedMixin(theme, currentlanguage),
    "& .MuiDrawer-paper": openedMixin(theme, currentlanguage),
  }),
  ...(!open && {
    ...closedMixin(theme, currentlanguage),
    "& .MuiDrawer-paper": closedMixin(theme, currentlanguage),
  }),
}));

const MainLayout = ({ children }) => {
  const { t } = useTranslation("MainLayout");
  const { currentLanguage } = JSON.parse(localStorage.getItem("localization"));

  const [language, setLanguage] = useState(currentLanguage);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const mainCategories = [
    {
      title: t(`${translationPath}Current Data`),
      to: "/",
      icon: <TodayIcon />,
    },
    {
      title: t(`${translationPath}Historical Data`),
      to: "/historical-data",
      icon: <HistoryToggleOffIcon />,
    },
    {
      title: t(`${translationPath}Covid Data`),
      to: "/covid-data",
      icon: <DonutLargeIcon />,
    },
  
   
  ];

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en"; // Toggle between 'en' and 'ar'
    setLanguage(newLanguage);
    languageChange(newLanguage);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          sx={{
            backgroundColor: "#113a59", 
          }}
          position="fixed"
          open={open}
          currentlanguage={language}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginLeft: (theme) =>
                  language === "ar" && open ? theme.spacing(1) : 0,
                marginRight: (theme) =>
                  language === "ar" && !open ? theme.spacing(1) : 0,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                onClick={toggleLanguage}
              >
                {t(`${translationPath}lang`)}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} currentlanguage={language}>
          <DrawerHeader>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              className="logo"
            >
              {" "}
              <img alt="logo" src={logo} width={"100%"} height={"100%"} />
            </Box>

            <IconButton onClick={handleDrawerClose}>
              {language === "ar" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>

          <List>
            {mainCategories.map((category, index) => (
              <ListItem
                component={Link}
                to={category.to}
                key={index}
                disablePadding
                sx={{ display: "block" }}
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
                    {category.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={category.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <main id="main-container">{children}</main>
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
