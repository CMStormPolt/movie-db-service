import { connect } from 'mongoose';
import { MovieModel } from './movie'
import { movieGenres } from '../types/movies'

export function connectToMongo(){
    const {mongoUrl} = process.env
    connect(mongoUrl, (error => {
        if(error) { console.log(error) }
        else { 
            // console.log('successfully connected to mongoDB')
            // const newMovie = new MovieModel({
            //     name: 'Interstellar',
            //     year: 2014,
            //     isInTheaters: false,
            //     genres: [movieGenres.FANTASY, movieGenres.DRAMA],
            //     stars: []
            // })
            // newMovie.save((error)=>{
            //     if(error) { console.log(error) }
            // })
        }
    }));
}