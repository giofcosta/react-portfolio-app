import React, { Component } from 'react';
import LeftMenu from './left-menu'
import RightMenu from './right-menu'
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
    return (
        <nav className="menuBar">
        	<div className="logo">
        		<a href="">Giovanni</a>
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