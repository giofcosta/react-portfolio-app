import React from "react";
import injectSheet from "react-jss";
import { Presentation, AboutMe, Skill, Resume, Contact } from "../template";

const styles = theme => ({
  ...theme
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Presentation
          className={classes.flexBlock}
          parallax={idx => {
            this.parallax.scrollTo(idx);
          }}
          offset={0}
        />

        <AboutMe
          parallax={idx => {
            this.parallax.scrollTo(idx);
          }}
          offset={1}
        />

        <Skill
          parallax={idx => {
            this.parallax.scrollTo(idx);
          }}
          offset={2}
        />

        <Resume
          parallax={idx => {
            this.parallax.scrollTo(idx);
          }}
          offset={3}
        />

        <Contact
          parallax={idx => {
            this.parallax.scrollTo(idx);
          }}
          offset={4}
        />
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(Home);
