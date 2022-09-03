import { connect } from 'mongoose';
import { MovieModel } from './movie'
import { movieGenres } from '../types/movies'

export function connectToMongo(){
    const {mongoUrl} = process.env
    // connect(`mongodb://${mongohost}/${mongodbName}`, (error => {
    connect(mongoUrl, (error => {
        if(error) { console.log(error) }
        else { 
            console.log('successfully connected to mongoDB')
            // const newMovie = new MovieModel({
            //     name: 'ugabuga',
            //     year: 2014,
            //     isInTheaters: true,
            //     genres: [movieGenres.FANTASY],
            //     stars: []
            // })
            // newMovie.save((error)=>{
            //     if(error) { console.log(error) }
            // })
        }
    }));
}