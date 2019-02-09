import React from "react";
import injectSheet from "react-jss";
import { Presentation, AboutMe, Skill, Resume, Contact } from "../template";
import ScrollAnimation from "react-animate-on-scroll";

const styles = theme => ({
  ...theme
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <ScrollAnimation
          duration="0.1"
          animateIn="fadeIn"
          afterAnimatedIn={function afterAnimatedIn(v) {
            setTimeout(() => {
              document.getElementById("header").classList.remove("animate");
            }, 1);
          }}
          initiallyVisible={true}
        >
          <Presentation
            className={classes.flexBlock}
            parallax={idx => {
              this.parallax.scrollTo(idx);
            }}
            offset={0}
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          duration="0.1"
          afterAnimatedIn={function afterAnimatedIn(v) {
            setTimeout(() => {
              document.getElementById("header").classList.add("animate");
            }, 1);
          }}
          initiallyVisible={true}
        >
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
        </ScrollAnimation>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(Home);
