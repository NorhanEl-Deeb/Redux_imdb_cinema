/*########################### This code is written by Norhan El-Deeb @2019 #########################*/

export const selectMovie = (movie) =>{
    return{
        type:'Movie_Selected',
        payload: movie
    }
}

