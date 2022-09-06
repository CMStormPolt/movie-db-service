import { Schema } from 'mongoose';
import { MovieModel } from '../../../mongo/movie'
import { MovieGenres } from '../../../types/movies'

//Mutations

async function movieCreate(par, args) {
    const mongoData = await mongoMovieCreate(args.input)
    return mongoData
}

async function mongoMovieCreate(input: createMovieInput) {

    const newMovie = new MovieModel(input)
    try {
        const result = await newMovie.save()
        return result
    } catch(error){
        console.log(error)
        return null
    }
    
}

interface createMovieInput {
    name: string,
    year: number,
    isInTheaters: boolean,
    genres: Array<MovieGenres>,
    stars: Array<Schema.Types.ObjectId>,
    posterUrl: string,
}


export const movieMutations = {
    createMovie: movieCreate
}