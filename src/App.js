import React, { Component } from "react";
import "./App.css";
import "animate.css/animate.min.css";
import Routes from "./routes";
import Navbar from "./template/navbar";
import { Layout, Affix, BackTop, Icon } from "antd";
import { ThemeProvider } from "react-jss";
import ScrollAnimation from "react-animate-on-scroll";

const { Header, Content, Footer } = Layout;

console.clear();
console.log(`window.screen.availHeight: ${window.screen.availHeight}`);
console.log(
  `document.documentElement.clientHeight	: ${
    document.documentElement.clientHeight
  }`
);

const theme = {
  title: {
    width: "100%",
    marginBottom: "0",
    borderBottom: "1px solid #e8e8e8",
    boxShadow: "0px 1px 5px -5px rgba(0,0,0,0.75)",
    marginTop: "24px",
    "@media screen and (min-width: 1024px)": {
      width: "100%",
      marginBottom: "30px",
      borderBottom: "1px solid #e8e8e8",
      boxShadow: "0px 1px 5px -5px rgba(0,0,0,0.75)",
      marginTop: "60px"
    }
  },
  containerWrapper: {
    backgroundColor: "#ffffff",
    borderTop: "solid 1px #e8e8e8",
    boxShadow: "0 0 30px #f3f1f1",
    position: "relative",
    paddingTop: 50,
    overflow: "hidden"
  },
  flexContainer: {
    margin: "0 auto",
    width: "auto",
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
    minHeight: document.documentElement.clientHeight,
    alignContent: "baseline",
    "@media screen and (min-width: 1024px)": {
      margin: "0 auto",
      width: "1020px",
      padding: 0,
      display: "flex",
      flexWrap: "wrap",
      minHeight: document.documentElement.clientHeight,
      alignContent: "baseline"
    }
  },
  flexBlock1: {
    flex: "none",
    maxWidth: "100%",
    marginRight: "0",
    "@media screen and (min-width: 1024px)": {
      flex: "1 0 0",
      maxWidth: "50%",
      marginRight: "25px"
    }
  },
  flexBlock2: {
    flex: "none",
    maxWidth: "100%",
    marginRight: "0",
    "@media screen and (min-width: 1024px)": {
      flex: "1 0 0",
      maxWidth: "50%",
      marginRight: "25px"
    }
  },
  content: {
    width: "100%",
    marginRight: "50px"
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ScrollAnimation animateIn="fadeIn" delay={200} animateOnce={true}>
          <Layout className="layout">
            <Affix offsetTop={0}>
              <Header
                id="header"
                style={{ position: "fixed", zIndex: 1, width: "100%" }}
              >
                <Navbar />
              </Header>
            </Affix>
            <Content>
              <Routes />
            </Content>
            <Footer>Copyright © 2019. All Rights Reserved.</Footer>
            <BackTop>
              <div className="ant-back-top-inner">
                <Icon type="up" />
              </div>
            </BackTop>
          </Layout>
        </ScrollAnimation>
      </ThemeProvider>
    );
  }
}

export default App;
