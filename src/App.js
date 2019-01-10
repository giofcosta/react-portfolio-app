import React, { Component } from 'react';
import './App.css';
import Routes from './routes'
import Menu from './template/menu'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
