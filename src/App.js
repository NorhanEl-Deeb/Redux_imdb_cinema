/*########################### This code is written by Norhan El-Deeb @2019 #########################*/

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList'
import './App.css';
import MovieDetails from './components/MovieDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className=" mb-4 mt-4 text-center">IMDB Cinema</h1>
        <div className="container">
          <MovieList />
          <MovieDetails />
        </div>
      </div>
    );
  }
}

export default App;