import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>How much did your meeting cost?</h2>

          <p className="App-intro">
            Select the meeting length and number of participants to get started.
          </p>
        </div>
        <p className="App-intro">
          Select the meeting length and number of participants to get started. 
        </p>
      </div>
    );
  }
}

export default App;
