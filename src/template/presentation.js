import React from "react";
import resources from "../resources/images";
import Typist from "react-typist";
import { Button } from "antd";
import injectSheet from "react-jss";
import ScrollAnimation from "react-animate-on-scroll";
import { Parallax } from "react-parallax";
import { HashLink as Link } from "react-router-hash-link";

const styles = theme => ({
  ...theme,
  textOne: {
    width: 300,
    position: "absolute",
    top: 100,
    right: 0,
    left: 0,
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: '32px',
    color: "#ffffff",
    fontSize: 42,
    fontWeight: 600,
    willChange: "transform, opacity",
    textAlign: "center",
    textShadow: "1px 1px 5px #000000",
    "@media screen and (min-width: 1024px)": {
      position: "absolute",
      width: "50%",
      top: 'auto',
      bottom: 0,
      left: 100,
      right: 'auto',
      lineHeight: "80px",
      color: "#ffffff",
      fontSize: 98,
      fontWeight: 600,
      willChange: "transform, opacity",
      textAlign: "left",
      textShadow: "1px 1px 5px #000000"
    }
  },
  spanOne: {
    fontSize: 26,
    "@media screen and (min-width: 800px)": {
      fontSize: 63
    }
  },
  spanTwo: {
    fontSize: 18,
    "@media screen and (min-width: 800px)": {
      fontSize: 38
    }
  },
  textTwo: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    height: 360,
    padding: 24,
    color: "#ffffff",
    fontSize: 20,
    textAlign: "left",
    textShadow: "1px 1px 5px #000000",
    "@media screen and (min-width: 1024px)": {
      position: "absolute",
      width: "530px",
      top: "20%",
      right: 100,
      color: "#ffffff",
      fontSize: "2.5em",
      textAlign: "justify",
      textShadow: "1px 1px 5px #000000",
      lineHeight: "40px"
    }
  },

  button: {
    width: 200,
    position: "absolute",
    bottom: 40,
    right: 0,
    left: 0,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 30,
    height: 40,
    textTransform: "uppercase",
    textShadow: "1px 1px 5px #000000",
    boxShadow: "1px 1px 5px #000000",
    lineHeight: 0,
    "@media screen and (min-width: 1024px)": {
      width: 'auto',
      position: "absolute",
      bottom: 80,
      left: 'auto',
      right: 100,
      fontSize: "50px",
      height: 68,
      textTransform: "uppercase",
      textShadow: "1px 1px 5px #000000",
      boxShadow: "1px 1px 5px #000000",
      lineHeight: 0
    }
  }
});

class Presentation extends React.Component {
  updateDimensions = () => {
    this.setState({ windowHeight: window.innerHeight });
  };

  componentWillMount = () => {
    this.updateDimensions();
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  render() {
    const { classes } = this.props;
    const scroll = el => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
      <div id="presentation" className={classes.contentWrapper}>
        <Parallax
          bgImage={resources.presentation}
          strength={500}
          bgImageStyle={{
            objectFit: "none"
          }}
        >
          <div
            className={classes.flexContainer}
            style={{ height: this.state.windowHeight }}
          >
            {/* <ScrollAnimation
              animateIn="fadeIn"
              delay="800"
              offset={1000}
              animateOnce={true}
            > */}
              <p className={classes.textOne}>
                <span className={classes.spanOne}>WELCOME</span>
                <span className={classes.spanTwo}> to my</span>
                <br />
                <span>WEBSITE</span>
              </p>
            {/* </ScrollAnimation> */}

            <div className={classes.textTwo}>
              <Typist avgTypingDelay={25}>
                <small>
                  <Typist.Delay ms={400} />
                  <b> WEB FULL-STACK,</b>
                  <Typist.Delay ms={400} />
                  <b> MOBILE</b>
                  <Typist.Delay ms={400} /> and <b>GAME DEVELOPER</b>. <br />
                </small>
              </Typist>

              <ScrollAnimation
                animateIn="fadeIn"
                delay="2500"
                offset={1000}
                animateOnce={true}
              >
                <small>
                  In this website, you can see everything about my career,
                  portfolio and my work.
                </small>
              </ScrollAnimation>
              <br />
              <br />
              <ScrollAnimation
                animateIn="fadeIn"
                delay="3000"
                offset={1000}
                animateOnce={true}
              >
                <span style={{ float: "right" }}>I hope you enjoy.</span>
              </ScrollAnimation>
            </div>
            {/* <ScrollAnimation
              animateIn="fadeIn"
              delay="1200"
              offset={1000}
              animateOnce={true}
            > */}
            <Button className={classes.button} ghost size={"large"}>
              <Link to="/#about-me" scroll={el => scroll(el)}>
                about me
              </Link>
            </Button>
            {/* </ScrollAnimation> */}
          </div>
        </Parallax>
      </div>
    );
  }
}

export default injectSheet(styles)(Presentation);
