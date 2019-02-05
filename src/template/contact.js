import React from "react";
import { Card, Icon } from "antd";
import { Parallax } from "react-parallax";
import injectCSS from "react-jss";
import images from "../resources/images";

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
    paddingLeft: "100px",
    minHeight: window.screen.height,
    alignContent: 'baseline'
  },
  flexBlock: {
    flex: "1 0 0",
    maxWidth: "50%",
    // outline: "1px solid blue",
    marginRight: "50px",
    marginBottom: "30px"
  },
  content: {
    width: "100%",
    marginRight: "50px"
  },
};

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Parallax
          bgImage={images.contactUs}
          strength={300}
          bgImageStyle={{ opacity: 0.03, backgroundColor: "#ffffff" }}
        >
          <div className={classes.flexContainer}>
            <div className={classes.title}>
              <h2>CONTACT</h2>
            </div>
            <div className={classes.flexBlock}>
              <Card bordered={false} style={{ width: 300, marginTop: 16, background: 'none' }}>
                <Card.Meta
                  avatar={
                    <Icon
                      type="environment"
                      theme="filled"
                      style={{ fontSize: 24 }}
                    />
                  }
                  title="Location"
                  description={
                    <a
                      href="https://www.google.com/maps/place/Florianópolis"
                      target="_blank"
                    >
                      Florianópolis, SC - Brazil
                    </a>
                  }
                />
              </Card>
              <Card bordered={false} style={{ width: 300, marginTop: 16, background: 'none' }}>
                <Card.Meta
                  avatar={
                    <Icon
                      type="phone"
                      theme="filled"
                      style={{ fontSize: 24 }}
                    />
                  }
                  title="Phone Number"
                  description={
                    <a href="tel:+5548991216434" target="_blank">
                      +55 (48) 991216434
                    </a>
                  }
                />
              </Card>
              <Card bordered={false} style={{ width: 300, marginTop: 16, background: 'none' }}>
                <Card.Meta
                  avatar={
                    <Icon type="mail" theme="filled" style={{ fontSize: 24 }} />
                  }
                  title="Mail"
                  description={
                    <a href="mailto:giofcosta@gmail.com" target="_blank">
                      giofcosta@gmail.com
                    </a>
                  }
                />
              </Card>
            </div>
            <div className={classes.flexBlock}>
              <div style={{ marginTop: 30 }}>
                <a
                  href="https://www.facebook.com/giovanni.fernandes.503"
                  target="_blank"
                  style={{ color: "#444444", marginRight: 30 }}
                >
                  <Icon
                    type="facebook"
                    theme="filled"
                    style={{ fontSize: 80 }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/giovanni-fernandes-da-costa-a0105324/"
                  target="_blank"
                  style={{ color: "#444444", marginRight: 30 }}
                >
                  <Icon
                    type="linkedin"
                    theme="filled"
                    style={{ fontSize: 80 }}
                  />
                </a>
                <a
                  href="https://twitter.com/_giofcosta"
                  target="_blank"
                  style={{ color: "#444444", marginRight: 30 }}
                >
                  <Icon type="twitter" style={{ fontSize: 80 }} />
                </a>
                <a
                  href="https://github.com/giofcosta"
                  target="_blank"
                  style={{ color: "#444444", marginRight: 30 }}
                >
                  <Icon type="github" theme="filled" style={{ fontSize: 80 }} />
                </a>
                <a
                  href="https://www.instagram.com/giofcosta/"
                  target="_blank"
                  style={{ color: "#444444", marginRight: 30 }}
                >
                  <Icon
                    type="instagram"
                    theme="filled"
                    style={{ fontSize: 80 }}
                  />
                </a>
                <a
                  href="https://www.behance.net/giofcosta"
                  target="_blank"
                  style={{ color: "#444444", marginRight: 30 }}
                >
                  <Icon type="behance-square" style={{ fontSize: 80 }} />
                </a>
                <a
                  href="https://connect.unity.com/u/giovanni-fernandes"
                  target="_blank"
                  style={{ color: "#444444", marginRight: 30 }}
                >
                  <Icon component={images.iconUnity} style={{ fontSize: 80 }} />
                </a>
                <a
                  href="https://medium.com/@giovannifernandes"
                  target="_blank"
                  style={{ color: "#444444", marginRight: 30 }}
                >
                  <Icon type="medium" style={{ fontSize: 80 }} />
                </a>
              </div>
            </div>
          </div>
        </Parallax>
      </React.Fragment>
    );
  }
}

export default injectCSS(styles)(Contact);
