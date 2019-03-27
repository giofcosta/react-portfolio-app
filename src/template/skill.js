import React from "react";
import injectSheet from "react-jss";
import { Rate, List, Icon, Tag } from "antd";
import { Parallax } from "react-parallax";
import images from "../resources/images";
import ScrollAnimation from "react-animate-on-scroll";
import { PageTitle } from "../template";
import { skills } from "../local-data";

const styles = theme => ({
  ...theme,
  tags: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
    marginRight: "0"
  }
});

class Skill extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="skills" className={classes.containerWrapper}>
        <div className={classes.flexContainer} style={{ minHeight: "auto" }}>
          <PageTitle name="MY SKILLS" hash="#skills" />
          <br />
          <br />
          <div className={classes.flexBlock1}>
            <List
              itemLayout="horizontal"
              dataSource={skills.data}
              renderItem={item => (
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  delay={300}
                  offset={1000}
                  animateOnce={true}
                >
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Icon
                          type="check"
                          style={{ fontSize: 20, color: "green" }}
                        />
                      }
                      title={
                        <React.Fragment>
                          <span>{item.title}</span>
                          <Rate
                            count={10}
                            allowHalf
                            disabled
                            defaultValue={item.stars}
                            style={{ float: "right" }}
                          />
                        </React.Fragment>
                      }
                      description={item.description}
                    />
                  </List.Item>
                </ScrollAnimation>
              )}
            />
          </div>
          <div className={classes.flexBlock2}>
            <List
              itemLayout="horizontal"
              dataSource={skills.languages}
              renderItem={item => (
                <ScrollAnimation
                  animateIn="bounceInRight"
                  delay={300}
                  offset={1000}
                  animateOnce={true}
                >
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Icon
                          type="check"
                          style={{ fontSize: 20, color: "green" }}
                        />
                      }
                      title={
                        <div>
                          <span>{item.title}</span>
                          <span style={{ float: "right", color: "green" }}>
                            {item.description}
                          </span>
                        </div>
                      }
                    />
                  </List.Item>
                </ScrollAnimation>
              )}
            />

            <ScrollAnimation
              animateIn="jackInTheBox"
              delay={600}
              offset={1000}
              animateOnce={true}
            >
              <img
                src={images.technology}
                alt="technology"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  opacity: 0.9
                }}
              />
            </ScrollAnimation>
          </div>
        </div>
        <br />
        <br />
        <Parallax
          bgImage={images.presentationOne}
          strength={1000}
          bgImageStyle={{ opacity: 0.3 }}
        >
          <br />
          <div className={classes.tags}>
            {skills.tags.map((item, key) => (
              <ScrollAnimation
                animateIn="zoomIn"
                delay={600}
                offset={1000}
                animateOnce={true}
              >
                <Tag color="#2db7f5" key={key} style={{ margin: 5 }}>
                  {item}
                </Tag>
              </ScrollAnimation>
            ))}
          </div>
          <p style={{ float: "right" }} />
        </Parallax>
      </div>
    );
  }
}

export default injectSheet(styles)(Skill);
