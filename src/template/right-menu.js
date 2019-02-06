import React, { Component } from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="">
            <Icon type="mail" theme="filled" />
            Contact
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
