const { gql } = require('apollo-server');
const dbWorks = require('../dbWorks.js');

const typeDefs = gql`
	type Restaurant {
		id: ID!
		name: String
		bgImag: String
		address: String
		owner: String
		category: String
	}
`;

const resolvers = {
	Query: {
		restaurants: (parent, args) => dbWorks.getRestaurants(args),
		restaurant: (parent, args) => dbWorks.getRestaurants(args)[0],
	},
};

module.exports = {
	typeDefs: typeDefs,
	resolvers: resolvers,
};
