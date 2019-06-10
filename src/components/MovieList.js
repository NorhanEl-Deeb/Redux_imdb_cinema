/*########################### This code is written by Norhan El-Deeb @2019 #########################*/

import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/index';

const MovieList = ({ movies, selectMovie }) => {
        const listItems = movies.map((movie) => {
            return (
                <div key={movie.title}>
                <span className="d-inline-flex p-2 bd-highlight">{movie.title}</span>
                <button className="btn-success" onClick={() => selectMovie(movie)}>details</button>
                </div>
            )            
        }) 

        return (
            <div className="list-container card card-body my-3">
                <h2>Movies List <i class="fas fa-video"></i></h2>
                <ul>
                { listItems } 
                </ul>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = {
    selectMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)