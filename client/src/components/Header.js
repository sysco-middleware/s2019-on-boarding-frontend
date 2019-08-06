import React, { Component } from 'react'
import { Link, withRouter, matchPath } from 'react-router-dom'

import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DashboardIcon from "@material-ui/icons/Dashboard"
import UpdateIcon from "@material-ui/icons/Update"
import styles from '../css/styles'

class Header extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    
    if (matchPath(this.props.location.pathname, { path: '/email/:processDefinitionId/:taskId' }) || matchPath(this.props.location.pathname, { path: '/formSubmitted' })) {
    return null
    }    
    return (
      <div className={classes.rootHead}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Sysco Onboard
            </Typography>
          </Toolbar>
        </AppBar>
        <ClickAwayListener onClickAway={this.handleDrawerClose}>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button component={Link} {...{ to: "/" }}>
                <ListItemIcon>
                  <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText primary="Hjem" />
              </ListItem>
              <ListItem button component={Link} {...{ to: "/startProcess/list" }}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Start en ny prosess" />
              </ListItem>
              <ListItem button component={Link} {...{ to: "/tasklist" }}>
                <ListItemIcon>
                  <UpdateIcon />
                </ListItemIcon>
                <ListItemText primary="Oppgaveliste" />
              </ListItem>
              <ListItem button component={Link} {...{ to: "/employeTable" }}>
                <ListItemIcon>
                  <UpdateIcon />
                </ListItemIcon>
                <ListItemText primary="Tidligere kjørte prosesser" />
              </ListItem>
            </List>
          </Drawer>
        </ClickAwayListener>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(withRouter(Header)); 
