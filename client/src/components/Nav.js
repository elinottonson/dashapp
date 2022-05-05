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
import '../styles/custom.scss';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {

    cursor: "pointer",
  },
  nav:{
    height: "100vh",
    float: "left",
    background: "#773585",

  },
  link: {
  },
  navitems:{
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    padding: "10px",
  }
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ProSidebar styles = {{background: "#773585"}} className={classes.nav}>
      <SidebarHeader style={{"font-size":"25px", "padding":"10px"}}>
      DASH App
      </SidebarHeader>
    <Menu className={classes.navitems} iconShape="square">
      <MenuItem >Home <Link to="/"   className={classes.link}/></MenuItem>
      <SubMenu title="Learn It">
        <MenuItem >Foundation<Link to="/learn" className={classes.link}/></MenuItem>
        <MenuItem >Bag of Words<Link to="/bow" className={classes.link}/></MenuItem>
      </SubMenu>
      <SubMenu title="Use It" >
        <MenuItem >CoreNLP<Link to="/pos" className={classes.link}/></MenuItem>
        <MenuItem ><a href="https://nlpcloud.io/home/playground/">NLP Cloud</a></MenuItem>
      </SubMenu>
    </Menu>
  </ProSidebar>
  );
}
export default Navbar;