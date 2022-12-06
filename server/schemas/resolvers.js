const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // resolver query's go here
        me: async (parents, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('savedBooks')

                return userData
            }
            throw new AuthenticationError('Not logged in')
        }
    },
    Mutation: {
        /*login: {
            Accepts an email
            password as parameters;

            returns an Auth type. 
        }*/
        
        /*addUser: {
            accepts username
            email
            password

            returns auth
        } */

        /*saveBook: {
            accepts books =[]
            description
            title
            bookId
            image
            link
        } */

        /* */
    },
}

module.exports = resolvers;