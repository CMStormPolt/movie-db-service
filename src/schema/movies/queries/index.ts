import { MovieModel } from '../../../mongo/movie'

//Queries

async function moviesGet(par, args) {
    const mongoData = await mongoMovies(args.input)
    return mongoData
}

async function mongoMovies(input) {
    const mongoFilter: searchFilterInterface = {}
    const mongoFilterOptions: searchFilterOptions = {}

    if(input.name){
        mongoFilter.$and = [{$text: {$search: input.name, $caseSensitive: false}}]
    }
    if(input.year){
        mongoFilter.$and.push({year: input.year})
    }

    if(input.sortByDate){
        mongoFilterOptions.sort = {createDate: input.sortByDate == 'asc' ? 1 : -1}
    }
    if(input.limit){
        mongoFilterOptions.limit = input.limit
    }

    const movieList = await MovieModel.find(mongoFilter, null, mongoFilterOptions).exec()
    return movieList
}


export const movieQueries = {
    movies: moviesGet
}

interface searchFilterInterface {
    $and?: Array<{year: number} | {$text: {$search: string, $caseSensitive: boolean}}>
}

interface searchFilterOptions {
    sort?: { createDate: number },
    limit?: number
}