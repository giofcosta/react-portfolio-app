import React from "react";
import injectSheet from "react-jss";
import { Presentation, AboutMe, Skill, Resume, Contact } from "../template";
import LazyLoad from "react-lazyload";

const styles = theme => ({
  ...theme
});

class Home extends React.Component {
  changeHash(myhash, animateHeader) {
    if (window.history.pushState) {
      window.history.pushState(null, null, myhash);
    } else {
      window.location.hash = myhash;
    }

    window.dispatchEvent(new HashChangeEvent("hashchange"));

    if (animateHeader) {
      document.getElementById("header").classList.add("animate");
    } else {
      document.getElementById("header").classList.remove("animate");
    }
  }

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

        <LazyLoad>
          <AboutMe
            parallax={idx => {
              this.parallax.scrollTo(idx);
            }}
            offset={1}
          />
        </LazyLoad>

        <LazyLoad>
          <Skill
            parallax={idx => {
              this.parallax.scrollTo(idx);
            }}
            offset={2}
          />
        </LazyLoad>

        <LazyLoad>
          <Resume
            parallax={idx => {
              this.parallax.scrollTo(idx);
            }}
            offset={3}
          />
        </LazyLoad>

        <LazyLoad>
          <Contact
            parallax={idx => {
              this.parallax.scrollTo(idx);
            }}
            offset={4}
          />
        </LazyLoad>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(Home);
