import React from "react";
import resources from "../resources/images";
import Typist from "react-typist";
import { Button, Icon } from "antd";
import injectSheet from "react-jss";
import ScrollAnimation from "react-animate-on-scroll";
import { Parallax } from "react-parallax";
import { HashLink as Link } from "react-router-hash-link";

const styles = theme => ({
  ...theme,
  textOne: {
    position: "absolute",
    width: "50%",
    bottom: 100,
    left: 100,
    lineHeight: "80px",
    color: "#ffffff",
    fontSize: "4em",
    fontWeight: 800,
    willChange: "transform, opacity",
    textAlign: "left",
    textShadow: "1px 1px 5px #000000"
  },
  textTwo: {
    position: "absolute",
    width: "530px",
    top: 250,
    right: 100,
    color: "#ffffff",
    fontSize: "2.5em",
    textAlign: "justify",
    textShadow: "1px 1px 5px #000000",
    lineHeight: "40px"
  },
  button: {
    position: "absolute",
    bottom: 182,
    right: 100,
    fontSize: "50px",
    height: 68,
    textTransform: "uppercase",
    textShadow: "1px 1px 5px #000000",
    boxShadow: "1px 1px 5px #000000",
    lineHeight: "78px !important"
  }
});

class Presentation extends React.Component {
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
            objectFit: "scale-down",
            width: "150%",
            height: "150%",
            left: "960px"
          }}
        >
          <div className={classes.flexContainer} >
            <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce={true}>
              <p className={classes.textOne}>
                <span style={{ fontSize: 63 }}>WELCOME</span>
                <span style={{ fontSize: 38 }}> to my</span>
                <br />
                <span style={{ fontSize: 98 }}>WEBSITE</span>
              </p>
            </ScrollAnimation>

            <div className={classes.textTwo}>
              <Typist avgTypingDelay={40}>
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
                delay="3000"
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
                delay="4000"
                animateOnce={true}
              >
                <span style={{ float: "right" }}>I hope you enjoy.</span>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeIn" delay="2000" animateOnce={true}>
              <Button className={classes.button} ghost size={"large"}>
                <Link to="/#about-me" scroll={el => scroll(el)}>
                  More about me
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default injectSheet(styles)(Presentation);
