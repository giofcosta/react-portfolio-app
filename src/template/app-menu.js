import { Menu, Icon } from "antd";
import React from "react";

class AppMenu extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="dark"
        ghost
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="mail">
          <Icon type="mail" />
          Navigation One
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppMenu;
