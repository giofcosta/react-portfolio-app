import React from "react";
import injectSheet from "react-jss";
import { Icon, Timeline } from "antd";
import { Parallax } from "react-parallax";
import images from "../resources/images";
import ScrollAnimation from "react-animate-on-scroll";

const styles = theme => ({
  ...theme
});

const items = [
  "Software engineer with 15+ years of experience as a developer.",
  "Developed several robust systems with high scalability.",
  "Worked on the project that changed the logistic for the largest e-commerce company in Latin America.",
  "Fast and creative thinker.",
  "Focused on solving the most difficult problems."
];

class AboutMe extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        id="about-me"
        className={classes.containerWrapper}
        // style={{ background: "#f4f4f4" }}
      >
        {/* <Parallax
          bgImage={images.tdc}
          strength={500}
          bgImageStyle={{ opacity: 0.05 }}
        > */}
        <div className={classes.flexContainer} style={{position: 'relative'}}>
          <div className={classes.title}>
            <h2>ABOUT ME</h2>
          </div>
          <ScrollAnimation
            animateIn="fadeIn"
            delay={300}
            offset={1000}
            animateOnce={true}
          >
            <div
              style={{
                position: "absolute",
                top: 130,
                left: 0,
                width: 1170,
                height: "30%"
              }}
            >
              <Parallax
                bgImage={images.presentationTwo}
                strength={300}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </ScrollAnimation>

          <div className={classes.flexBlock} style={{ paddingTop: 370 }}>
            <h3>An experient developer</h3>
            <br />
            <br />
            {items.map((item, key) => (
              <ScrollAnimation
                animateIn="fadeInLeft"
                delay={key * 300}
                offset={1000}
                animateOnce={true}
              >
                <Timeline>
                  <Timeline.Item
                    key={key}
                    dot={
                      <Icon
                        type="check"
                        style={{ fontSize: "24px", color: "green" }}
                      />
                    }
                  >
                    <div
                      style={{
                        fontSize: 20,
                        padding: "0 18px",
                        marginTop: -10
                      }}
                    >
                      {item}
                    </div>
                  </Timeline.Item>
                </Timeline>
              </ScrollAnimation>
            ))}
          </div>
          <div className={classes.flexBlock} style={{ paddingTop: 370 }}>
            <ScrollAnimation
              animateIn="jackInTheBox"
              delay={300}
              offset={1000}
              animateOnce={true}
            >
              <img
                alt="The Developers Conference 2017 - Florianópolis"
                src={images.tdc}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "90%",
                  background: "#000000"
                }}
              />
            </ScrollAnimation>
            <small>The Developers Conference 2017 - Florianópolis</small>
          </div>
        </div>
        {/* </Parallax> */}
      </div>
    );
  }
}

export default injectSheet(styles)(AboutMe);
