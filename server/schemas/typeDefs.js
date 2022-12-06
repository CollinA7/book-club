const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: {}
        savedBooks: [Books]
    }
`;

//       Book type:

    //     bookId (Not the _id, but the book's id value returned from Google's Book API.)

    //     authors (An array of strings, as there may be more than one author.)

    //     description

    //     title

    //     image

    //     link

    // Auth type:

    //     token

    //     user (References the User type.)
