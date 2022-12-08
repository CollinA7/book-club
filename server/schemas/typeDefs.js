const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }

    type Query {
        me: User
        user(username: String!): User
    }
`;
    
// type Book {user(username: String!): User
//     _id: ID
//     authors: [String]
//     description: String
//     title: String
//     image: String
//     link: String
// }

//     bookId (Not the _id, but the book's id value returned from Google's Book API.)
    
//     title

//     image

//     link

// Auth type:

//     token

//     user (References the User type.)

module.exports = typeDefs;