import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Register} />
          {/* <Route exact path="/users" component={Users} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
