/*########################### This code is written by Norhan El-Deeb @2019 #########################*/

import {combineReducers} from 'redux';

const moviesReducers = () =>{
    return[
        {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2019', rating: 7.4,},
        {title: 'Aquaman', releaseDate: '12-07-2019', rating: 7,},
        {title: 'Black Panther', releaseDate: '02-13-2019', rating: 7.7,},
        {title: 'Avengers: Infinity War', releaseDate: '05-25-2019', rating: 8.4,},
        {title: 'Guardians of the galaxy', releaseDate: '07-30-2019', rating: 6.4,},
    ]
}

const selectedMovieReducer = (state= null , action) =>{
    switch(action.type){
        case 'Movie_Selected':
            return action.payload
        default:
            return state

    }

}

export default combineReducers({
    movies: moviesReducers,
    selectedMovie : selectedMovieReducer
})

