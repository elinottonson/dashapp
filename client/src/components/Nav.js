import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  nav:{
    height: "100vh",
    float: "left",
  },
  link: {

  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ProSidebar className={classes.nav}>
      <SidebarHeader>
      DASH App
      </SidebarHeader>
    <Menu iconShape="square">
      <MenuItem >Home <Link to="/" className={classes.link}/></MenuItem>
      <MenuItem >Bag of Words <Link to="/bow" className={classes.link}/></MenuItem>
      <MenuItem >Parts of SpeechLink <Link to="/pos" className={classes.link}/></MenuItem>
    </Menu>
  </ProSidebar>
  );
}
export default Navbar;