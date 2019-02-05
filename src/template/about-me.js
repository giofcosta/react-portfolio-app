import React from "react";
import injectSheet from "react-jss";
import { Avatar, Timeline, Button } from "antd";
import { Parallax } from "react-parallax";
import images from "../resources/images";

const styles = theme => ({
  ...theme
});

class AboutMe extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="about-me" className={classes.containerWrapper}>
        <Parallax
          bgImage={images.tdc}
          strength={100}
          bgImageStyle={{ opacity: 0.05 }}
        >
          <div className={classes.flexContainer}>
            <div className={classes.title}>
              <h2>ABOUT ME</h2>
            </div>
            <div className={classes.flexBlock}>
              <h3>An experient developer</h3>
              <br />
              <Timeline>
                <Timeline.Item color="green">
                  Software engineer with 15+ years of experience as a developer
                </Timeline.Item>
                <Timeline.Item color="green">
                  Developed several robust systems with high scalability.
                </Timeline.Item>
                <Timeline.Item color="green">
                  Worked on the project that changed the logistic for the
                  largest e-commerce company in Latin America
                </Timeline.Item>
                <Timeline.Item color="green">
                  Fast and creative thinker
                </Timeline.Item>
                <Timeline.Item color="green">
                  focused on solving the most difficult problems
                </Timeline.Item>
                <Timeline.Item color="green">
                  Software engineer with 15+ years of experience as a developer
                </Timeline.Item>
                <Timeline.Item color="green">
                  Developed several robust systems with high scalability.
                </Timeline.Item>
                <Timeline.Item color="green">
                  Worked on the project that changed the logistic for the
                  largest e-commerce company in Latin America
                </Timeline.Item>
                <Timeline.Item color="green">
                  Fast and creative thinker
                </Timeline.Item>
                <Timeline.Item color="green">
                  focused on solving the most difficult problems
                </Timeline.Item>
              </Timeline>
            </div>
            <div className={classes.flexBlock}>
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
              <small>The Developers Conference 2017 - Florianópolis</small>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default injectSheet(styles)(AboutMe);
