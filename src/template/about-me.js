import React from "react";
import injectSheet from "react-jss";
import { Avatar, Timeline, Button } from "antd";
import { ParallaxLayer } from "react-spring/addons";
import resources from "../resources/images";

const styles = {
  title: {
    // outline: "1px solid green",
    width: "100%",
    marginRight: "50px",
    marginBottom: "30px",
    borderBottom: "1px solid #eeeeee"
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    // outline: "1px solid red",
    // height: '100%',
    padding: "50px 0",
    paddingLeft: "100px"
  },
  flexBlock: {
    flex: "1 0 0",
    maxWidth: "50%",
    overflowY: "auto",
    // outline: "1px solid blue",
    marginRight: "50px",
    marginBottom: "30px"
  },
  content: {
    width: "100%",
    marginRight: "50px"
  }
};

class AboutMe extends React.Component {
  render() {
    const { classes, offset, parallax } = this.props;
    return (
      <React.Fragment>
        <ParallaxLayer
          offset={offset}
          speed={0}
          factor={1}
          style={{
            backgroundColor: "#ffffff",
          
          }}
        />

        <ParallaxLayer offset={offset} speed={0.5} factor={1}>
          <div className={classes.flexContainer}>
            <div className={classes.title}>
              <h2>ABOUT ME</h2>
            </div>
            <div className={classes.flexBlock}>
              {/* <img
                alt="About me"
                src={resources.presentationOne}
                width="100%"
              /> */}
              <video data-html5-video="" preload="metadata" src="blob:https://www.eventials.com/21b534da-c5b7-4c03-a346-87122f8b2a6e"></video>
              <br />
              
              <br />
              <h3>Get Social</h3>
              <div>
                <Avatar
                  size={64}
                  style={{ color: "#ffffff", backgroundColor: "#4267B2" }}
                >
                  Facebook
                </Avatar>
                <Avatar
                  size={64}
                  style={{ color: "#ffffff", backgroundColor: "#283E4A" }}
                >
                  LinkedIn
                </Avatar>
                <Avatar
                  size={64}
                  style={{ color: "#ffffff", backgroundColor: "#009999" }}
                >
                  Twitter
                </Avatar>
                <Avatar
                  size={64}
                  style={{ color: "#ffffff", backgroundColor: "#FF4500" }}
                >
                  Reedit
                </Avatar>
                <Avatar
                  size={64}
                  style={{ color: "#000000", backgroundColor: "#fcfcfc" }}
                >
                  Instagram
                </Avatar>
              </div>
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
            <div className={classes.content}>
              <Button
                type="primary"
                icon="download"
                size="large"
                onClick={() => parallax(2)}
              >
                Download My CV
              </Button>
            </div>
          </div>
        </ParallaxLayer>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(AboutMe);
