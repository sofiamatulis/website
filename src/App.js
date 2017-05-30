import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sofia</h2>
        </div>
        <p className="App-intro">
          My foodie adventures
        </p>
      </div>
    );
  }
}

export default App;
