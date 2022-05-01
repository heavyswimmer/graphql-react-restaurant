const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		restaurants: [Restaurant]
		restaurant(id: ID!): Restaurant
	}
`;

module.exports = typeDefs;
