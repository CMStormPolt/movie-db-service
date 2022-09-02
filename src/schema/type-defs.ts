import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        id: ID!,
        name: String!
        username: String!
        age: Int!
        nationality: String!
    }

    type Query {
        users: [User]!
    }  
`

