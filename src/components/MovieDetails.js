/*########################### This code is written by Norhan El-Deeb @2019 #########################*/

import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = ({ selectedMovie }) => {
    if(!selectedMovie) {
        return (
            <div className="card card-body my-3" >
                <h2 className="mb-4">Movie Details <i class="fas fa-film"></i></h2>
            </div>
            
        )       
    }
    else{
        return (
        
            <div className="details-container card card-body my-3" >
                <h2 className="mb-4">Movie Details :</h2>
                <div className="properties">
                    <ul>
                    <p>Title: {selectedMovie.title}</p>
                    <p>Release Date: {selectedMovie.releaseDate}</p>
                    <p>Rating: {selectedMovie.rating}</p>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails);