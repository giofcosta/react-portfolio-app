import React, { Component } from "react";
import "./App.css";
import "animate.css/animate.min.css";
import Routes from "./routes";
import Navbar from "./template/navbar";
import { Layout, Affix } from "antd";
import { ThemeProvider } from "react-jss";

const { Header, Content, Footer } = Layout;

const theme = {
  title: {
    // outline: "1px solid green",
    width: "100%",
    marginBottom: "30px",
    borderBottom: "1px solid #e8e8e8",
    boxShadow: '0px 1px 5px -5px rgba(0,0,0,0.75)',
    marginTop: '60px'

  },
  containerWrapper: {
    backgroundColor: '#ffffff',
    borderTop: 'solid 1px #e8e8e8',
    overflow: 'auto',
    boxShadow: '0 0 30px #f3f1f1',
  },
  flexContainer: {
    margin: '0 auto',
    width: '1170px',
    display: "flex",
    flexWrap: "wrap",
    // outline: "1px solid red",
    // height: '100%',
    padding: "50px 0",
    paddingLeft: "100px",
    minHeight: window.screen.availHeight,
    alignContent: "baseline"
    
  },
  flexBlock: {
    flex: "1 0 0",
    maxWidth: "50%",
    marginRight: "50px",
    marginBottom: "30px"
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
        <Layout className="layout">
          <Affix offsetTop={0}>
            <Header id="header" style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <Navbar />
            </Header>
          </Affix>
          <Content>
            <Routes />
          </Content>
          <Footer>
            Copyright © 2019. All Rights Reserved.
          </Footer>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
