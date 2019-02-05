import React from "react";
import injectSheet from "react-jss";
// import { Parallax, ParallaxLayer } from "react-spring/addons";
import { Presentation, AboutMe, Skill, Resume, Contact } from "../template";

const styles = {};

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Presentation
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
