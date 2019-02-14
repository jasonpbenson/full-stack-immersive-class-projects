import React, { Component } from 'react';
import './App.css';
import Poster from './Poster'

class App extends Component {
  constructor(){
    super();
    this.state = {
      // state must be an object
      movieList: []
    }
  }

  componentDidMount(){
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
    fetch(url)
    .then((response)=> {
      return response.json();
    })
    .then((myJson)=> {
        const results = myJson.results;
        console.log(results)
        this.setState({
            movieList: results
        });
    });
  }

  render() {
      const posters = this.state.movieList.map((movie, i)=> {
        return(<Poster key={i} movie={movie} />)
      })
    return (
      <div className="container">
        <div className="row">
          <h1>Additional Movie App</h1>
          {posters}
        </div>
      </div>
    );
  }
}

export default App;
