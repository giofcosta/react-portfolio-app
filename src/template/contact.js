import React from "react";
import { Icon } from "antd";
import injectCSS from "react-jss";
import images from "../resources/images";
import ScrollAnimation from "react-animate-on-scroll";
import { Social, PageTitle } from "../template";

const styles = theme => ({
  ...theme,
  infoList: {
    listStyle: 'none',
    margin: '30px 0',
    padding: '0'
  },
  infoItem: {
    margin: '10px 0',
    width: '100%',
    textAlign: 'center',
    "@media screen and (min-width: 1024px)": {
      width: 'auto',
      display:'inline-block',
      margin: '30px',
    }
  }
});

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        id="contact"
        className={classes.containerWrapper}
        style={{ zIndex: 11, overflow: "hidden" }}
      >
        <div className={classes.flexContainer} style={{ minHeight: "auto" }}>
          <PageTitle name="CONTACT" hash="#contact" />
          <ScrollAnimation
            animateIn="bounce"
            delay={500}
            offset={1000}
            animateOnce={true}
            initiallyVisible={true}
            style={{ textAlign: "center" }}
          >
            <br />

            <img
              src={images.contactUs}
              alt="resume"
              style={{
                objectFit: "contain",
                opacity: 0.7,
                width: "80%"
              }}
            />

            <br />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            delay={1000}
            offset={1000}
            animateOnce={true}
            style={{ margin: "0 auto" }}
          >
            <ul className={classes.infoList}>
              <li className={classes.infoItem}>
                {" "}
                <Icon
                  type="environment"
                  theme="filled"
                  style={{ fontSize: 18 }}
                />
                <big>
                  <b> Location: </b>
                </big>{" "}
                <a
                  href="https://www.google.com/maps/place/Florianópolis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Florianópolis, SC - Brazil
                </a>
              </li>
              <li className={classes.infoItem}>
                {" "}
                <Icon
                  type="environment"
                  theme="filled"
                  style={{ fontSize: 18 }}
                />
                <big>
                  <b> Location: </b>
                </big>{" "}
                <a
                  href="tel:+5548991216434"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +55 (48) 991216434
                </a>
              </li>
              <li className={classes.infoItem}>
                {" "}
                <Icon type="mail" theme="filled" style={{ fontSize: 18 }} />
                <big>
                  <b> Mail: </b>
                </big>{" "}
                <a
                  href="mailto:giofcosta@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  giofcosta@gmail.com
                </a>
              </li>
            </ul>
            <br />
            <br />
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="slideInUp"
            delay={1000}
            offset={1000}
            animateOnce={true}
            style={{ margin: "0 auto" }}
          >
            <Social
              style={{
                width: "100%",
                textAlign: "center",
                fontSize: 40,
                opacity: 0.8,
                marginBottom: 100
              }}
            />
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default injectCSS(styles)(Contact);
