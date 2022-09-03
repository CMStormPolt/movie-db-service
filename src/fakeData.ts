export const userList: Array<userType> = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [],
        // favouriteMovies: []
    },
    {
        id: 2,
        name: "Pedro",
        username: "salamanca",
        age: 43,
        nationality: "SPAIN",
        friends: [],
        // favouriteMovies: []
    },
    {
        id: 3,
        name: "Helga",
        username: "helga223",
        age: 54,
        nationality: "GERMANY",
        friends: [{
            id: 4,
            name: "Kuan",
            username: "kuan",
            age: 24,
            nationality: "JAPAN",
            friends: [],
            // favouriteMovies: []
        }],
        // favouriteMovies: []
    },
    {
        id: 4,
        name: "Kuan",
        username: "kuan",
        age: 24,
        nationality: "JAPAN",
        friends: [],
        // favouriteMovies: []
    }
]

interface userType {
    id: number,
    name: string,
    username: string,
    age: number,
    nationality: string,
    friends: Array<userType>
    // favouriteMovies: Array<movieInt>
}

export const movies:  Array<movieInt> = [
    {
        id: 1,
        name: "Avengers Endgame",
        year: 2017,
        isInTheaters: false,
    },
    {
        id: 2,
        name: "Interstellar",
        year: 2014,
        isInTheaters: false
    }
]

interface movieInt {
    id: number,
    name: string,
    year: number,
    isInTheaters: boolean
}