import React, { Component } from 'react';
import Swapi from '../Swapi/Swapi';

import MoviesList from '../MoviesList/MoviesList';

class AppMovies extends Component {
  swapi = new Swapi();

  state = {
    moviesList: [],
  };

  constructor() {
    super();
    this.getMovies();
  }

  getMovies() {
    this.swapi
      .getResource(
        'https://api.themoviedb.org/3/search/movie?api_key=6a1dd28e4c4724aa0ef6fcf4bb1d3815&query=return',
      )
      .then((res) => {
        console.log(res.results);
        this.setState({ moviesList: res.results });
      });
  }

  render() {
    return (
      <div className="main">
        <MoviesList movies={this.state.moviesList} />
      </div>
    );
  }
}

export default AppMovies;
