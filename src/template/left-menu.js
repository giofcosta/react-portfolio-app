import React, { Component } from "react";
import { Menu, Icon, Button } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
  render() {
    const { mode } = this.props;
    return (
      <Menu mode={mode}>
        <Menu.Item key="about-me">
          <a href="">
            <Icon type="user" />
            About Me
          </a>
        </Menu.Item>
        <Menu.Item key="skills">
          <a href="">
            <Icon type="code" theme="filled" />
            Skills
          </a>
        </Menu.Item>
        <Menu.Item key="resume">
          <a href="">
            <Icon type="bars" />
            Resume
          </a>
        </Menu.Item>
        <Menu.Item key="contact" >
          <a href="">
            <Icon type="mail" theme="filled" />
            Contact
          </a>
        </Menu.Item>

        <Button type="primary" icon="download" size="large" style={{float: 'right', margin: '13px 0px'}}>
          Download My CV
        </Button>
      </Menu>
    );
  }
}

export default LeftMenu;
