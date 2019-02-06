import React, { Component } from 'react';
import LeftMenu from './left-menu'
import { HashLink as Link } from "react-router-hash-link";
import { Drawer, Button } from 'antd';

class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
		const scroll = (el) => {el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    return (
        <nav className="menuBar">
        	<div className="logo">
        		<Link to="/#presentation" scroll={el => scroll(el)}>Giovanni</Link>
        	</div>
        	<div className="menuCon">
        		
	        		<LeftMenu mode="horizontal"/>
						{/* <div className="leftMenu">
				    </div>
				    <div className="rightMenu">
	        			<RightMenu />
				    </div> */}
				    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
		          <span className="barsBtn"></span>
		        </Button>
				    <Drawer
		          title="Menu"
		          placement="right"
		          closable={false}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >
		          <LeftMenu mode="inline" />
		          {/* <RightMenu /> */}
		        </Drawer>

        	</div>
        </nav>
    );
  }
}

export default Navbar;