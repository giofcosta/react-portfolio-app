import React, { Component } from "react";
import "./App.css";
import Routes from "./routes";
import Menu from "./template/app-menu";
import { Layout, Affix } from "antd";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout className="layout">
          {/* <Affix offsetTop={0}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <Menu />
            </Header>
          </Affix> */}
          <Content>
            <Routes />
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>
          </Footer> */}
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
