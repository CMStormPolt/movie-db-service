import { gql } from "apollo-server-express";

export const typeDefs = gql`

    type User {
        id: ID!,
        name: String!
        username: String!
        age: Int!
        nationality: Nationality
        friends: [User]!,
        favouriteMovies: [Movie]!
    }

    type Movie {
        _id: ID!,
        name: String!,
        year: Int!,
        genres: [String]!,
        stars: [ID]!,
        isInTheaters: Boolean!
    }

    type Query {
        users: [User]!,
        user(id: ID): User,
        movies: [Movie]!,
        movie(name: String!): Movie
    }  

    type Mutation {
        createUser(input: createUserInput): User
    }

    input createUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = CANADA
    }

    enum Nationality {
        CANADA,
        GERMANY,
        SPAIN,
        JAPAN
    }
`

