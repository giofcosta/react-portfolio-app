import React from "react";
import { Toolbar, AppBar, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { EventAvailable } from "@material-ui/icons";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1,
    textAlign: 'left'
  },
  iconCalendar: {
    marginRight: '10px'
  }
});

class Menu extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar color="default">
          <Toolbar>
            <EventAvailable className={classes.iconCalendar} fontSize="large" />
            <Typography
              variant="h4"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              React Todo App
            </Typography>
            <Button color="inherit" href="#/">
              Home
            </Button>
            <Button color="inherit" href="#/about">
              About
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Menu);
