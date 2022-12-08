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
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('friends')
              .populate('thoughts');
        },
    },
    Mutation: {
        login: async ( parent, { email, password }) => {
            // Accepts an email
            const user = await User.findOne({ email });
            // password as parameters;
            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user }
        },
        
        addUser: async (parents, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },


        // saveBook: async (parent, {}) {
        //     // accepts books =[]
        //     // description
        //     // title
        //     // bookId
        //     // image
        //     // link
        // }
    },
}

module.exports = resolvers;