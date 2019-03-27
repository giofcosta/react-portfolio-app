import React from "react";
import injectSheet from "react-jss";
import { Icon, Timeline, Collapse, Anchor } from "antd";
import { HashLink as Link } from "react-router-hash-link";
import images from "../resources/images";
import ScrollAnimation from "react-animate-on-scroll";
import MediaQuery from "react-responsive";
import { PageTitle } from "../template";
import { resume } from "../local-data";

const styles = theme => ({
  ...theme,
  anchorMenu: {
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
      right: 0,
      position: "absolute"
    }
  },
  itemContent: {
    "@media screen and (min-width: 1024px)": {
      width: "100%",
      float: "right",
      marginRight: "calc(-100% - 65px)",
      marginTop: -30,
      textAlign: "justify"
    }
  }
});

const ItemsBuilder = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      {props.items.map((item, key) => (
        <Timeline.Item
          key={key}
          className={props.classMode}
          dot={
            <Icon
              type={props.iconType}
              theme="filled"
              style={{ fontSize: "20px" }}
            />
          }
        >
          <h3>{item.title}</h3>
          {item.date}
          <div className={classes.itemContent}>
            <h4>{item.rule}</h4>
            {item.description}
          </div>
          <div style={{ clear: "both" }} />
        </Timeline.Item>
      ))}
    </React.Fragment>
  );
};

const TimeLineBuilder = props => {
  return (
    <React.Fragment>
      <MediaQuery query="(min-device-width: 1024px)">
        <Timeline mode="right" style={{ marginRight: "55%" }}>
          <ItemsBuilder {...props} classMode="ant-timeline-item-right" />
        </Timeline>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1024px)">
        <Timeline mode="left">
          <ItemsBuilder {...props} classMode="ant-timeline-item-left" />
        </Timeline>
      </MediaQuery>
    </React.Fragment>
  );
};

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { panel: "" };
  }

  handleClick = (id, e) => {
    this.setState({ panel: id });
  };

  render() {
    const { classes } = this.props;
    const scroll = el => {
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    const customPanelStyle = {
      background: "#f7f7f7",
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: "hidden"
    };

    return (
      <div id="resume" className={classes.containerWrapper}>
        <div className={classes.flexContainer} style={{ position: "relative" }}>
          <div className={classes.anchorMenu}>
            <Anchor style={{ paddingTop: 110 }}>
              <Anchor.Link
                href="#experience"
                title={
                  <Link
                    to="/#experience"
                    scroll={el => scroll(el)}
                    className="ant-anchor-link-title"
                    onClick={e => this.handleClick("1", e)}
                  >
                    Experience
                  </Link>
                }
              />
              <Anchor.Link
                href="#education"
                title={
                  <Link
                    to="/#education"
                    scroll={el => scroll(el)}
                    className="ant-anchor-link-title"
                  >
                    Education
                  </Link>
                }
              />
              <Anchor.Link
                href="#certifications"
                title={
                  <Link
                    to="/#certifications"
                    scroll={el => scroll(el)}
                    className="ant-anchor-link-title"
                  >
                    Certifications
                  </Link>
                }
              />
              <Anchor.Link
                href="#readings"
                title={
                  <Link
                    to="/#readings"
                    scroll={el => scroll(el)}
                    className="ant-anchor-link-title"
                  >
                    Readings
                  </Link>
                }
              />
            </Anchor>
          </div>

          <PageTitle name="RESUME" hash="#resume" />
          <div style={{ width: "100%", textAlign: "center", padding: 30 }}>
            <ScrollAnimation
              animateIn="bounceInUp"
              delay={300}
              offset={1000}
              animateOnce={true}
            >
              <img
                src={images.resume}
                alt="resume"
                style={{
                  objectFit: "contain",
                  opacity: 0.8,
                  width: "100%",
                  maxWidth: "600px"
                }}
              />
            </ScrollAnimation>
          </div>
          <Collapse
            bordered={false}
            style={{ width: 900 }}
            defaultActiveKey={[this.state.panel]}
          >
            <div id="experience" style={{ float: "left", marginTop: -93 }} />
            <Collapse.Panel
              header="Experience"
              key={1}
              style={customPanelStyle}
            >
              <TimeLineBuilder
                {...this.props}
                items={resume.experiences}
                iconType="calendar"
              />
            </Collapse.Panel>
            <div id="education" style={{ float: "left", marginTop: -93 }} />
            <Collapse.Panel header="Education" key={2} style={customPanelStyle}>
              <TimeLineBuilder
                {...this.props}
                items={resume.education}
                iconType="bank"
              />
            </Collapse.Panel>
            <div
              id="certifications"
              style={{ float: "left", marginTop: -93 }}
            />
            <Collapse.Panel
              header="Certifications"
              key={3}
              style={customPanelStyle}
            >
              <TimeLineBuilder
                {...this.props}
                items={resume.certifications}
                iconType="safety-certificate"
              />
            </Collapse.Panel>
            <div id="readings" style={{ float: "left", marginTop: -93 }} />
            <Collapse.Panel header="Readings" key={4} style={customPanelStyle}>
              <TimeLineBuilder
                {...this.props}
                items={resume.readings}
                iconType="read"
              />
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Resume);
