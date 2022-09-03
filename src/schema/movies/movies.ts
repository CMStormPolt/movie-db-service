import { MovieModel } from '../../mongo/movie'
import { movieGenres } from '../../types/movies'

export async function moviesGet() {
    const mongoData = await mongoMovies()
    const genreEnums = MovieModel.schema.path('genres').options.enum

    // console.log(mongoData, 'mongoData')
    return mongoData
}

async function mongoMovies() {
    const movieList = await MovieModel.find().populate('genres').exec()
    return movieList
}