import React, { Component } from "react";
import LeftMenu from "./left-menu";
import { HashLink as Link } from "react-router-hash-link";
import { Drawer, Button, Avatar } from "antd";
import images from "../resources/images";

let appVersion = "Version 0.0.1";

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const scroll = el => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
      <nav className="menuBar">
        <div className="logo">
          <Link to="/#presentation" scroll={el => scroll(el)}>
            <Avatar src={images.character} size={48} shape="square" />
            <big>GIOVANNI FERNANDES</big>
            <small>Web, Mobile and Game Developer</small>
          </Link>
        </div>
        <div className="menuCon">
          {/* <LeftMenu mode="horizontal" /> */}
          <div className="leftMenu" />
          <div className="rightMenu">
            <LeftMenu mode="horizontal" />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn" />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu mode="inline" current={this.props.current} />
            {/* <RightMenu /> */}
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
