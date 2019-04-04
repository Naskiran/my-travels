import React, { Component } from 'react';
import './App.css';
import Lamp from './Lamp';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Lamp on />
      </div>
    );
  }
}

export default App;
