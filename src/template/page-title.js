import React from "react";
import injectSheet from "react-jss";
import { Waypoint } from "react-waypoint";
import {changeHash} from '../utils'

const styles = theme => ({
  title: {
    width: "100%",
    marginBottom: "0",
    borderBottom: "1px solid #e8e8e8",
    boxShadow: "0px 1px 5px -5px rgba(0,0,0,0.75)",
    marginTop: "24px",
    "@media screen and (min-width: 1024px)": {
      width: "100%",
      marginBottom: "30px",
      borderBottom: "1px solid #e8e8e8",
      boxShadow: "0px 1px 5px -5px rgba(0,0,0,0.75)",
      marginTop: "60px"
    }
  }
});

class PageTitle extends React.Component {
  render() {
    const { classes, name, hash } = this.props;

    return (
      <div className={classes.title}>
        <h2>{name}</h2>
        <Waypoint onEnter={() => changeHash(hash, true)} />
      </div>
    );
  }
}

export default injectSheet(styles)(PageTitle);
