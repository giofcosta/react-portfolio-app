import React, { Component } from "react";
import "./App.css";
import Routes from "./routes";
import Navbar from "./template/navbar";
import { Layout, Affix } from "antd";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout className="layout">
          <Affix offsetTop={0}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <Navbar />
            </Header>
          </Affix>
          <Content>
            <Routes />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Copyright © 2019. All Rights Reserved. 
          </Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
