import movies from './movies'

export const resolvers = {
    Query: {
        ...movies.queries

        // users: async () => {
        //     // make mongo call
        //     return userList
        // },
        // user: (par, args) => {
        //     const { id } = args
        //     return userList.find((user) => {
        //         return user.id == id
        //     })
        // },
        // movies: async () => {
        //     return movies
        // },
        // movie: (par, args) => {
        //     const { name } = args
        //     return movies.find((movie) => {
        //         return movie.name == name
        //     })
        // },
    }
    // Mutation: {
    //     createUser: (par, args) => {
    //         const { input } = args
    //         input.friends = []
    //         input.id = userList.length + 1
    //         userList.push(input)
    //         return input
    //     }
    // },
    // User: {
    //     favouriteMovies: (par, args) => {
    //         return movies
    //     }
    // }
}