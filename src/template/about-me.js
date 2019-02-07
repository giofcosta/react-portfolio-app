import React from "react";
import injectSheet from "react-jss";
import { Icon, Card } from "antd";
import { Parallax } from "react-parallax";
import images from "../resources/images";
import ScrollAnimation from "react-animate-on-scroll";
import { Social } from "../template";

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
        style={{ background: "#f4f4f4" }}
      >
      <div className={classes.flexContainer} style={{ minHeight: "auto" }}>
          <div className={classes.title}>
            <h2>ABOUT ME</h2>
          </div>
        </div>
        
        <div class={classes.flexContainer} style={{ minHeight: "auto" }}>
          <div className={classes.flexBlock1}>
            <ScrollAnimation
              animateIn="jackInTheBox"
              delay={300}
              offset={1000}
              animateOnce={true}
            >
              <Card bordered={false} style={{ width: "100%" }}>
                {items.map((item, key) => (
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    delay={(key + 2) * 300}
                    offset={1000}
                    animateOnce={true}
                  >
                    <div>
                      <Icon
                        type="check"
                        style={{
                          fontSize: "18px",
                          color: "green",
                          float: "left"
                        }}
                      />{" "}
                      <div
                        style={{
                          fontSize: 17,
                          paddingLeft: 30
                        }}
                      >
                        {item}
                      </div>
                      <br />
                    </div>
                  </ScrollAnimation>
                ))}
              </Card>
            </ScrollAnimation>
          </div>
          <div className={classes.flexBlock2}>
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
        <Social
          style={{
            margin: "30px 0",
            width: "100%",
            textAlign: "center",
            fontSize: 40
          }}
        />
        <div
          style={{
            width: "100%",
            height: "280px"
          }}
        >
          <Parallax
            bgImage={images.presentationTwo}
            strength={300}
            style={{ width: "100%", height: "100%", opacity: 0.95 }}
          />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(AboutMe);
