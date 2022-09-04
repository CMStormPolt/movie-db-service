import { MovieModel } from '../../mongo/movie'

export async function moviesGet() {
    const mongoData = await mongoMovies()
    return mongoData
}

async function mongoMovies() {
    const movieList = await MovieModel.find().populate('genres').exec()
    return movieList
}