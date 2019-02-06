import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Menu, Icon, Button } from "antd";

class LeftMenu extends Component {
  render() {
    const scroll = (el) => {el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    const { mode } = this.props;
    return (
      <Menu mode={mode}>
        <Menu.Item key="about-me">
          <Link to="/#about-me" scroll={el => scroll(el)}>
            <Icon type="user" />
            About Me
          </Link>
        </Menu.Item>
        <Menu.Item key="skills">
          <Link to="/#skills" scroll={el => scroll(el)}>
            <Icon type="code" theme="filled" />
            Skills
          </Link>
        </Menu.Item>
        <Menu.Item key="resume">
          <Link to="/#resume" scroll={el => scroll(el)}>
            <Icon type="bars" />
            Resume
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/#contact" scroll={el => scroll(el)}>
            <Icon type="mail" theme="filled" />
            Contact
          </Link>
        </Menu.Item>

        <Button
          type="primary"
          icon="download"
          size="large"
          style={{ float: "right", margin: "13px 0px" }}
        >
          Download My CV
        </Button>
      </Menu>
    );
  }
}

export default LeftMenu;
