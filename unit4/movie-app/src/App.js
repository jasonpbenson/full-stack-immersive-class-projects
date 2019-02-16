import React, { Component } from 'react';
import './App.css';
import Poster from './Poster'
import NavBar from './navBar'

class App extends Component {
  constructor(){
    super();
    this.state = {
      // state must be an object
      movieList: []
    }
    this.movieSearch = this.movieSearch.bind(this);
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

  movieSearch(e){
    e.preventDefault();
    console.log("form submitted");
    const movieTitle = document.getElementById('searchTerm').value;
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+movieTitle;
		fetch(url)
		.then((response)=>{
		  return response.json();
		})
		.then((myJson)=>{
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
        <NavBar />
        <div className="row">
          <h1>Additional Movie App</h1>

          <form onSubmit={this.movieSearch}>
            <input id="searchTerm" type="text" placeholder="Movie Title" />
            <button type="submit" className="waves-effect waves-light btn-large">Search</button>
          </form>

          {posters}
        </div>
      </div>
    );
  }
}

export default App;
