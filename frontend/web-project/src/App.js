import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import {Routing} from './Routing';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/products">Продукты</Link></li>
            <li><Link to="/about">О сайте</Link></li>
          </ul>
        </div>
        <Routing />
      </div>
      </Router>
    );
  }
}

export default App;
