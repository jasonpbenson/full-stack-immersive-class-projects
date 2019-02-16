import React, { Component } from 'react';
import './App.css';
import PokerTable from "./components/PokerTable";
import PokerHand from "./components/PokerHand";

class App extends Component {
  render() {
    return (
      <div className="container">
        <PokerTable />
      </div>
    );
  }
}

export default App;
