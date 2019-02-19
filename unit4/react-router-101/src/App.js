import React, { Component } from 'react';
import './App.css';
// add react router module
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import MovieList from './MovieList';
import Movie from './Movie'

class App extends Component {
  render() {
    // Router wraps everything
    return (
      <Router>
        <div className="App">
          <ul>
            {/* no <a> in react router */}
            {/* Link component is the new <a> */}
            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/movies">Movies</Link>
          </ul>
          {/* Route component sets up a path match */}
          {/* if the path matches the browser path it will render... */}
          {/* whatever is given as component prop */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movies" component={MovieList} />
          <Route path="/movies/:movieId" component={Movie} />
        </div>
      </Router>
    );
  }
}

export default App;
