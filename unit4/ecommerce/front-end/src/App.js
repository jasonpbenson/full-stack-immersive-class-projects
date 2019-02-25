import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="container center">
        <h1>dobby's house of pagan antiquities</h1>
        <Home />
      </div>
    );
  }
}

export default App;
