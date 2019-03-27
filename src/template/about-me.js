import React from "react";
import injectSheet from "react-jss";
import { Icon, Card, List } from "antd";
import { Parallax } from "react-parallax";
import images from "../resources/images";
import ScrollAnimation from "react-animate-on-scroll";
import { Social, PageTitle } from "../template";
import { aboutme } from "../local-data";

const styles = theme => ({
  ...theme
});

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
          <PageTitle name="ABOUT ME" hash="#about-me" />
        </div>

        <div class={classes.flexContainer} style={{ minHeight: "auto" }}>
          <div className={classes.flexBlock1}>
            <Card bordered={false} style={{ width: "100%" }}>
              <List
                itemLayout="horizontal"
                dataSource={aboutme.items}
                renderItem={item => (
                  <ScrollAnimation
                    animateIn="bounceInLeft"
                    delay={300}
                    offset={1000}
                    animateOnce={true}
                  >
                    <List.Item style={{ padding: "7px 0" }}>
                      <List.Item.Meta
                        avatar={
                          <Icon
                            type="check"
                            style={{ fontSize: 20, color: "green" }}
                          />
                        }
                        title={
                          <React.Fragment>
                            <span>{item}</span>
                          </React.Fragment>
                        }
                        description={item.description}
                      />
                    </List.Item>
                  </ScrollAnimation>
                )}
              />
            </Card>
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
            width: "100%"
          }}
        >
          <Parallax
            bgImage={images.certifiedBackground}
            strength={520}
            style={{
              width: "100%",
              opacity: 0.7,
              textAlign: "center"
            }}
          >
            <div>
              <ScrollAnimation
                animateIn="bounceIn"
                duration="1"
                animateOnce={true}
                delay="600"
                style={{ width: "100%", height: "320px" }}
              >
                <img
                  alt="Microsoft Certified"
                  src={images.certified}
                  style={{
                    objectFit: "contain",
                    width: "80%",
                    height: "80%",
                    marginTop: 30
                  }}
                />
              </ScrollAnimation>
            </div>
          </Parallax>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(AboutMe);
