import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Menu, Icon, Button } from "antd";
import { withRouter } from 'react-router-dom';

class LeftMenu extends Component {
  render() {
    const scroll = (el) => {el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    const { mode, location } = this.props;
    console.log(location)
    return (
      <Menu mode={mode}  selectedKeys={[location.hash.replace('#', '')]}>
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
          href={process.env.PUBLIC_URL + "/GiovanniFernandesResume2019.pdf"} target="_blank"
          style={{ float: "right", margin: "13px 0px 0px 30px" }}
        >
          Download Resume
        </Button>
      </Menu>
    );
  }
}

export default withRouter(LeftMenu);
